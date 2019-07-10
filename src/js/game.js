import Player, { controllerResets } from "./player";
import Camera from "./camera";
import { levels, parseLevel } from "./level-loader";
import { bindKeyHandlers } from "./controller";
import { globals, randomColor } from "./util";
import {
  characterWalkingLeft,
  characterWalkingRight
} from "./img-loader";

export const GAME_STATES = {
  MENU: "MENU",
  GAME_PLAYING: "GAME_PLAYING",
  GAME_PAUSED: "GAME_PAUSED"
};

export let timeSinceLastFrame;
export let previousTime;

let posBuffer = { x: 0, y: 0 };
let bWouldHitGround;

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = globals.screenWidth;
    this.canvas.height = globals.screenHeight;
    this.canvasCtx = canvas.getContext("2d");

    this.reset();
    bindKeyHandlers();

    timeSinceLastFrame = 0;
    previousTime = Date.now();
    this.step = this.step.bind(this);
    this.step();
  }

  reset() {
    this.gameState = GAME_STATES.GAME_PLAYING;
    this.gameObjects = {
      noCollision: [],
      blockers: [],
      player: [],
      killVolumes: []
    };

    this.loadLevel();

    this.player = new Player(this.canvas);

    this.gameObjects.player.push(this.player);
    this.camera = new Camera(this.player, this.gameObjects, this.canvasCtx);
  }

  step() {
    posBuffer.x = this.player.pos.x;
    posBuffer.y = this.player.pos.y;

    let currentTime = Date.now();
    timeSinceLastFrame = currentTime - previousTime;
    previousTime = currentTime;
    if (timeSinceLastFrame > 20) timeSinceLastFrame = 20;
    this.update(timeSinceLastFrame);

    this.camera.update();

    if (this.gameState === GAME_STATES.GAME_PLAYING) {
      requestAnimationFrame(this.step);
    }
  }

  loadLevel() {
    let level = parseLevel(levels[1]);

    //TODO perform merge to handle different chars in level txt files
    this.gameObjects.blockers = this.gameObjects.blockers.concat(level.tiles);
    this.gameObjects.killVolumes = this.gameObjects.killVolumes.concat(level.killVolumes);
  }

  update(deltaT) {
    if (this.gameState === GAME_STATES.GAME_PLAYING) this.player.input();

    if (!bWouldHitGround) this.player.applyVelocity(deltaT);
    bWouldHitGround = false;

    const blockers = this.gameObjects.blockers;
    for (let i = 0; i < blockers.length; i++) {
      if (this.player.bCollided(blockers[i])) {
        this.player.pos.x = posBuffer.x;
        this.player.pos.y = posBuffer.y;

        bWouldHitGround = true;
        this.player.resetVelocity();
        controllerResets.jump = true;
      }
    }

    const killVolumes = this.gameObjects.killVolumes;
    for (let i = 0; i < killVolumes.length; i++) {
      if (this.player.bCollided(killVolumes[i])) {
        this.reset();
      }
    }
  }
}

export default Game;
