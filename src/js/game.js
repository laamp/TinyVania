import Player, { controllerResets } from "./player";

import { levels, parseLevel } from "./level-loader";
import { userController, bindKeyHandlers } from "./controller";
import { globals, randomColor } from "./util";
import { characterImgs, bgImgs } from "./img-loader";

export const GAME_STATES = {
  MENU: "MENU",
  GAME_PLAYING: "GAME_PLAYING",
  GAME_PAUSED: "GAME_PAUSED"
};

export let timeSinceLastFrame;
export let previousTime;

//for camera tracking
let camOffsetX, camOffsetY;
let oldPosY;

class Game {
  constructor(canvas) {

    //for camera tracking
    camOffsetX = 0;
    camOffsetY = 0;

    canvas.width = globals.screenWidth;
    canvas.height = globals.screenHeight;
    this.canvasCtx = canvas.getContext("2d");

    this.gameState = GAME_STATES.GAME_PLAYING;
    this.gameObjects = {
      noCollision: [],
      blockers: [],
      player: []
    };

    this.loadLevel();

    this.player = new Player({
      size: { w: 30, h: 55 },
      pos: { x: canvas.width / 2, y: canvas.height / 2 },
      vel: { x: 0, y: 0 },
      color: randomColor(),
      sprites: characterImgs,
      spriteOffset: { x: -56, y: -10, w: 115, h: 66 }
    });
    this.gameObjects.player.push(this.player);

    oldPosY = this.player.pos.y; //for camera tracking

    bindKeyHandlers();

    timeSinceLastFrame = 0;
    previousTime = Date.now();
    this.step = this.step.bind(this);
    this.step();
  }

  step() {
    let currentTime = Date.now();
    timeSinceLastFrame = currentTime - previousTime;
    previousTime = currentTime;
    if (timeSinceLastFrame > 20) timeSinceLastFrame = 20;
    this.update(timeSinceLastFrame);

    //stuff for camera tracking
    if (userController.left &&
      (this.player.pos.x < (globals.screenWidth * 0.4 - camOffsetX))) {
      camOffsetX += this.player.moveAmt;
    }

    if (userController.right &&
      (this.player.pos.x > (globals.screenWidth * 0.55 - camOffsetX))) {
      camOffsetX -= this.player.moveAmt;
    }

    if ((this.player.pos.y < (globals.screenHeight * 0.2 - camOffsetY))) {
      camOffsetY -= this.player.pos.y - oldPosY;
    }

    if ((this.player.pos.y + this.player.size.h) > (globals.screenHeight * 0.9 - camOffsetY)) {
      camOffsetY -= this.player.pos.y - oldPosY;
    }
    oldPosY = this.player.pos.y;
    //end of camera tracking

    this.canvasCtx.save();
    this.canvasCtx.translate(camOffsetX, camOffsetY);
    this.render();
    this.canvasCtx.restore();

    if (this.gameState === GAME_STATES.GAME_PLAYING) {
      requestAnimationFrame(this.step);
    }
  }

  loadLevel() {
    let level = parseLevel(levels[1]);

    //TODO perform merge to handle different chars in level txt files
    this.gameObjects.blockers = this.gameObjects.blockers.concat(level);
  }

  update(deltaT) {
    if (this.gameState === GAME_STATES.GAME_PLAYING) this.player.input();

    this.player.applyVelocity(deltaT);

    const blockers = this.gameObjects.blockers;
    for (let i = 0; i < blockers.length; i++) {
      if (this.player.bCollided(blockers[i])) {
        this.player.resetVertVelocity();
        controllerResets.jump = true;
      }
    }
  }

  render() {
    this.canvasCtx.clearRect(
      -camOffsetX, -camOffsetY,
      globals.screenWidth,
      globals.screenHeight
    );

    this.canvasCtx.drawImage(bgImgs[1], -camOffsetX, -camOffsetY, globals.screenWidth, globals.screenHeight);

    let layerNames = Object.keys(this.gameObjects);
    layerNames.forEach(name => {
      const renderObjs = this.gameObjects[name];
      for (let i = 0; i < renderObjs.length; i++) {
        renderObjs[i].render(this.canvasCtx);
      }
    });

    this.player.render(this.canvasCtx);
  }
}

export default Game;
