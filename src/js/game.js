import Player from "./player";
import Camera from "./camera";
import Zombie from "./zombie";
import { levels, parseLevel } from "./level-loader";
import { bindKeyHandlers } from "./controller";
import { globals, boxCollision } from "./util";

const GAME_STATES = {
  MENU: "MENU",
  GAME_PLAYING: "GAME_PLAYING",
  GAME_PAUSED: "GAME_PAUSED",
  GAME_WON: "GAME_WON"
};

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = globals.screenWidth;
    this.canvas.height = globals.screenHeight;
    this.canvasCtx = canvas.getContext("2d");
    this.init();
    bindKeyHandlers();

    this.timeSinceLastFrame = 0;
    this.previousTime = Date.now();

    this.step = this.step.bind(this);
    this.step();

    this.timeSinceLastTick = 0;
    this.previousTickTime = Date.now();

    this.tick = this.tick.bind(this);
    setInterval(this.tick);

    //misc game variables
    this.spawnZombies = false;
    this.zombieSpawnIntervalId = null;
    this.zombieSpawnSpeed = 1300;
    this.zombieSpawning = this.zombieSpawning.bind(this);
    this.needsReset = false;
  }

  init() {
    this.needsReset = false;
    this.gameState = GAME_STATES.GAME_PLAYING;
    this.gameObjects = {
      noCollision: [],
      blockers: [],
      zombieVolumes: [],
      player: [],
      playerAttack: [],
      killVolumes: [],
      enemies: [],
      victoryTiles: []
    };
    this.loadLevel();
    this.player = new Player({
      spawnPos: this.gameObjects.playerSpawn
    });
    this.gameObjects.player.push(this.player);
    this.camera = new Camera(this.player, this.gameObjects, this.canvasCtx);

    this.gameObjects.enemies.forEach(enemy => enemy.playerLoc = this.player.pos);
  }

  // every frame
  step() {
    let currentTime = Date.now();
    this.timeSinceLastFrame = currentTime - this.previousTime;
    this.previousTime = currentTime;

    this.update();
    this.player.applyVelocity(this.timeSinceLastFrame);

    const { enemies } = this.gameObjects;
    for (let i = 0; i < enemies.length; i++) {
      if (enemies[i] !== null) {
        enemies[i].applyVelocity(this.timeSinceLastFrame);
        enemies[i].ai();
      }
    }

    this.zombieGenerator();

    this.camera.update();

    if (this.gameState === GAME_STATES.GAME_PLAYING) {
      requestAnimationFrame(this.step);
    }
  }

  // every tick
  tick() {
    let currentTick = Date.now();
    this.timeSinceLastTick = currentTick - this.previousTickTime;
    this.previousTickTime = currentTick;

    // restart game if player died
    if (this.player.dead || this.needsReset) this.init();
    this.player.update();

    // loop through game objects to detect collision
    const { blockers, enemies, victoryTiles } = this.gameObjects;
    for (let i = 0; i < blockers.length; i++) {
      // detecting player collision against environment
      this.player.calcBoundsCollision(blockers[i]);
      // detecting enemy collision against environment
      for (let j = 0; j < enemies.length; j++) {
        if (enemies[j] !== null) {
          enemies[j].calculateBounds();
          enemies[j].calcBoundsCollision(blockers[i]);
        }
      }
    }

    // loop through enemies for player attacking
    // and enemy => player body collision
    for (let i = 0; i < enemies.length; i++) {
      if (enemies[i] !== null) {

        // when player is attacking, see if they hit an enemy
        if (this.player.attackVolume !== null) {
          let result = boxCollision(this.player.attackVolume, enemies[i]);
          if (result) enemies[i].takeDamage(this.player.attackPower);
        }

        // if player touches enemy, deal damage
        if (enemies[i].health > 0) {
          if (boxCollision(this.player, enemies[i]) && !this.player.dead) {
            this.player.takeDamage(enemies[i].collisionDamage);
          }
        }

        enemies[i].update();

        // reassign enemy to null if dead
        if (enemies[i].dead) enemies[i] = null;
      }
    }

    // check if player won
    for (let i = 0; i < victoryTiles.length; i++) {
      if (boxCollision(this.player, victoryTiles[i])) {
        this.camera.victoryScreen = true;
        setTimeout(() => {
          this.needsReset = true;
        }, 2000);
      }
    }
  }

  update() {
    // if the game is running, the player will receive input
    if (this.gameState === GAME_STATES.GAME_PLAYING) {
      this.player.input();
    }

    // this checks to see if player died in a pit
    const killVolumes = this.gameObjects.killVolumes;
    for (let i = 0; i < killVolumes.length; i++) {
      if (boxCollision(this.player, killVolumes[i])) {
        this.player.dead = true;
      }
    }
  }

  loadLevel() {
    let level = parseLevel(levels[1]);

    this.gameObjects.playerSpawn = level.playerSpawn;
    this.gameObjects.blockers = this.gameObjects.blockers.concat(level.tiles);
    this.gameObjects.killVolumes = this.gameObjects.killVolumes.concat(level.killVolumes);
    this.gameObjects.enemies = this.gameObjects.enemies.concat(level.enemies);
    this.gameObjects.zombieVolumes = this.gameObjects.zombieVolumes.concat(level.zombieVolumes);
    this.gameObjects.victoryTiles = this.gameObjects.victoryTiles.concat(level.victoryTiles);
  }

  zombieGenerator() {
    this.spawnZombies = false;
    const { zombieVolumes } = this.gameObjects;
    zombieVolumes.forEach(volume => {
      if (boxCollision(this.player, volume)) {
        this.spawnZombies = true;
      }
    });
    if (this.zombieSpawnIntervalId === null && this.spawnZombies) {
      this.zombieSpawnIntervalId = setInterval(this.zombieSpawning, this.zombieSpawnSpeed);
    }
    if (this.zombieSpawnIntervalId !== null && !this.spawnZombies) {
      clearInterval(this.zombieSpawnIntervalId);
      this.zombieSpawnIntervalId = null;
    }
  }

  zombieSpawning() {
    let moveLeft, startPos;
    const num = Math.random();
    if (num < 0.5) {
      moveLeft = false;
      startPos = {
        x: -this.camera.offsetX - 100,
        y: this.player.pos.y
      };
    } else {
      moveLeft = true;
      startPos = {
        x: -this.camera.offsetX + globals.screenWidth + 50,
        y: this.player.pos.y
      };
    }

    this.gameObjects.enemies.push(new Zombie({
      pos: startPos,
      movingLeft: moveLeft
    }));
  }
}

export default Game;
