import Player from "./player";

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

class Game {
  constructor(canvas) {
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
      size: { w: 40, h: 80 },
      pos: { x: canvas.width / 2, y: canvas.height / 2 },
      vel: { x: 0, y: 0 },
      color: randomColor()
    });
    this.gameObjects.player.push(this.player);

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
    this.render();
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
      }
    }
  }

  render() {
    this.canvasCtx.clearRect(
      0, 0,
      globals.screenWidth,
      globals.screenHeight
    );

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
