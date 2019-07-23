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
  }

  init() {
    this.gameState = GAME_STATES.GAME_PLAYING;
    this.gameObjects = {
      noCollision: [],
      blockers: [],
      player: [],
      playerAttack: [],
      killVolumes: [],
      enemies: []
    };
    this.loadLevel();
    this.player = new Player(this.canvas);
    this.gameObjects.player.push(this.player);
    this.camera = new Camera(this.player, this.gameObjects, this.canvasCtx);
  }

  step() {
    let currentTime = Date.now();
    this.timeSinceLastFrame = currentTime - this.previousTime;
    this.previousTime = currentTime;

    this.update();
    this.player.applyVelocity(this.timeSinceLastFrame);

    const { enemies } = this.gameObjects;
    enemies.forEach(enemy => {
      if (enemy.dead) console.log('this enemy is ded');

      enemy.vel.y = 0;
      enemy.applyVelocity(this.timeSinceLastFrame);
    });

    this.camera.update();

    if (this.gameState === GAME_STATES.GAME_PLAYING) {
      requestAnimationFrame(this.step);
    }
  }

  tick() {
    let currentTick = Date.now();
    this.timeSinceLastTick = currentTick - this.previousTickTime;
    this.previousTickTime = currentTick;

    if (this.player.boundaryCollision.bottom && this.player.vel.y > 0) {
      this.player.vel.y = 0;
    }
    if (this.player.boundaryCollision.top && this.player.vel.y < 0) {
      this.player.vel.y = 0;
    }

    this.player.calculateBounds();
    this.player.update();
    Object.keys(this.player.boundaryCollision).forEach(k => {
      this.player.boundaryCollision[k] = false;
    });

    // loop through game objects to detect collision
    const blockers = this.gameObjects.blockers;
    for (let i = 0; i < blockers.length; i++) {
      this.player.calcBoundsCollision(blockers[i]);
    }

    // loop through enemies for player attacking
    // and enemy => player body collision
    const { enemies } = this.gameObjects;
    enemies.forEach(enemy => {
      if (this.player.attackVolume !== null) {
        let result = boxCollision(this.player.attackVolume, enemy);
        if (result) enemy.takeDamage(this.player.attackPower);
      }

      if (boxCollision(this.player, enemy)) {
        this.player.takeDamage(enemy.collisionDamage);
      }
    });
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
        this.init();
      }
    }
  }

  loadLevel() {
    let level = parseLevel(levels[1]);

    this.gameObjects.blockers = this.gameObjects.blockers.concat(level.tiles);
    this.gameObjects.killVolumes = this.gameObjects.killVolumes.concat(level.killVolumes);
    this.gameObjects.enemies = this.gameObjects.killVolumes.concat(level.enemies);
  }
}

export default Game;
