import Player from "./player";

import { levels, parseLevel } from "./level-loader";
import { bindKeyHandlers } from "./controller";
import { renderResolution, randomColor } from "./util";

export const GAME_STATES = {
  MENU: "MENU",
  GAME_PLAYING: "GAME_PLAYING",
  GAME_PAUSED: "GAME_PAUSED"
};

class Game {
  constructor(canvas) {
    canvas.width = renderResolution.width;
    canvas.height = renderResolution.height;
    this.canvasCtx = canvas.getContext("2d");

    this.gameState = GAME_STATES.GAME_PLAYING;
    this.gameObjects = {
      noCollision: [],
      blockers: [],
      player: []
    };

    this.loadLevel();

    this.player = new Player({
      size: { w: 25, h: 40 },
      pos: { x: canvas.width / 2, y: canvas.height / 2 },
      vel: { x: 0, y: 3 },
      color: randomColor()
    });
    this.gameObjects.player.push(this.player);
    this.bApplyGravity = true;

    bindKeyHandlers();

    this.step = this.step.bind(this);
    this.step();
  }

  step() {
    this.physics();
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

  physics() {
    if (this.gameState === GAME_STATES.GAME_PLAYING) this.player.input();

    const blockers = this.gameObjects.blockers;

    for (let i = 0; i < blockers.length; i++) {
      if (this.player.bCollided(blockers[i])) {
        this.bApplyGravity = false;
      }
    }
    if (this.bApplyGravity) this.player.applyVelocity();
    this.bApplyGravity = true;
  }

  render() {
    this.canvasCtx.clearRect(
      0, 0,
      renderResolution.width,
      renderResolution.height
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
