import Player from "./player";
import Camera from "./camera";
import Enemy from "./enemy";
import { levels, parseLevel } from "./level-loader";
import { bindKeyHandlers } from "./controller";
import { globals, boxCollision } from "./util";

export const GAME_STATES = {
  MENU: "MENU",
  GAME_PLAYING: "GAME_PLAYING",
  GAME_PAUSED: "GAME_PAUSED"
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
    this.zombieSpawnSpeed = 2000;
    this.zombieSpawning = this.zombieSpawning.bind(this);
  }

  init() {
    this.gameState = GAME_STATES.GAME_PLAYING;
    this.gameObjects = {
      noCollision: [],
      blockers: [],
      player: [],
      playerAttack: [],
      killVolumes: [],
      enemies: [],
      zombieVolumes: []
    };
    this.loadLevel();
    this.player = new Player({
      spawnPos: this.gameObjects.playerSpawn
    });
    this.gameObjects.player.push(this.player);
    this.camera = new Camera(this.player, this.gameObjects, this.canvasCtx);

    this.nullEnemy = new Enemy({ isNull: true });
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
      enemies[i].applyVelocity(this.timeSinceLastFrame);
      enemies[i].ai();
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
    if (this.player.dead) this.init();
    this.player.update();

    // loop through game objects to detect collision
    const { blockers, enemies } = this.gameObjects;
    for (let i = 0; i < blockers.length; i++) {
      // detecting player collision against environment
      this.player.calcBoundsCollision(blockers[i]);
      // detecting enemy collision against environment
      for (let j = 0; j < enemies.length; j++) {
        if (!enemies[j].isNull) {
          enemies[j].calculateBounds();
          enemies[j].calcBoundsCollision(blockers[i]);
        }
      }
    }

    // loop through enemies for player attacking
    // and enemy => player body collision
    for (let i = 0; i < enemies.length; i++) {
      // reassign enemy to null if dead
      if (enemies[i].dead) enemies[i] = this.nullEnemy;

      // when player is attacking, see if they hit an enemy
      if (this.player.attackVolume !== null) {
        let result = boxCollision(this.player.attackVolume, enemies[i]);
        if (result) enemies[i].takeDamage(this.player.attackPower);
      }

      // if player touches enemy, deal damage
      if (boxCollision(this.player, enemies[i]) && !this.player.dead) {
        this.player.takeDamage(enemies[i].collisionDamage);
      }

      // stop enemy when they hit the ground
      if (enemies[i].boundaryCollision.bottom && enemies[i].vel.y > 0) {
        enemies[i].vel.y = 0;
      }
      enemies[i].boundaryCollision.bottom = false;
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
    let moveLeft, startPos = undefined;
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
    console.log(moveLeft, startPos);

    this.gameObjects.enemies.push(new Enemy({
      size: { w: 50, h: 50 },
      pos: startPos,
      color: "red",
      movingLeft: moveLeft
    }));
  }
}

export default Game;
