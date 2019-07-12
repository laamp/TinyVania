import Player, { controllerResets } from "./player";
import Camera from "./camera";
import { levels, parseLevel } from "./level-loader";
import { bindKeyHandlers } from "./controller";
import { globals, randomColor } from "./util";

export const GAME_STATES = {
  MENU: "MENU",
  GAME_PLAYING: "GAME_PLAYING",
  GAME_PAUSED: "GAME_PAUSED"
};

export let timeSinceLastFrame;
export let previousTime;

let posBuffer = { x: 0, y: 0 };
let bOnTheGround;

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

    this.gameObjects.blockers = this.gameObjects.blockers.concat(level.tiles);
    this.gameObjects.killVolumes = this.gameObjects.killVolumes.concat(level.killVolumes);
  }

  update(deltaT) {
    // if the game is running, the player will receive input
    if (this.gameState === GAME_STATES.GAME_PLAYING) {
      this.player.input();
    }

    this.player.update(); // this is just handling sprites right now

    posBuffer.x = this.player.pos.x; // this is storing the player's previous position
    posBuffer.y = this.player.pos.y;

    // if the player is not on the ground, apply gravity
    this.player.applyVelocity(deltaT);

    // loop through game objects to detect collision
    const blockers = this.gameObjects.blockers;
    for (let i = 0; i < blockers.length; i++) {
      this.player.calcBoundsCollision(blockers[i]);
      if (this.player.bCollided(blockers[i])) {
        bOnTheGround = true;
        // this.player.pos.x = posBuffer.x;
        // this.player.pos.y = posBuffer.y;
        controllerResets.jump = true;
        this.player.resetVelocity();
      }
    }

    // this checks to see if player died in a pit
    const killVolumes = this.gameObjects.killVolumes;
    for (let i = 0; i < killVolumes.length; i++) {
      if (this.player.bCollided(killVolumes[i])) {
        this.reset();
      }
    }
  }

  /*
    * start in the air
    * applying gravity to player
    * apply velocity to player
    * if player touches ground, stop applying gravity
    * pressing jump makes the player jump, but also restarts gravity for player
  */

}

export default Game;
