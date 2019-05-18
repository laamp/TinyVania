import Player from "./player";

import { levels, parseLevel } from "./level-loader";
import { bindKeyHandlers } from "./controller";
import { renderResolution, randomColor } from "./util";

//game state
export const GAME_STATES = {
  MENU: "MENU",
  GAME_PLAYING: "GAME_PLAYING",
  GAME_PAUSED: "GAME_PAUSED"
};

export let gameState = GAME_STATES.GAME_PLAYING;
console.log(gameState); //for testing

class Game {
  constructor(canvas) {
    canvas.width = renderResolution.width;
    canvas.height = renderResolution.height;
    this.canvasCtx = canvas.getContext("2d");

    //object to contain all objects currently in the game
    this.gameObjects = {
      noCollision: [],
      blockers: [],
      player: []
    };

    this.player = new Player({
      size: { w: 20, h: 20 },
      pos: { x: canvas.width / 2, y: canvas.height / 2 },
      vel: { x: 0, y: 3 },
      color: randomColor()
    });
    this.bCanPlayerMove = true;
    window.canMove = b => { //for testing
      this.bCanPlayerMove = b;
    };
    this.gameObjects.player.push(this.player);
    bindKeyHandlers();
    this.step = this.step.bind(this);
    this.startLevel();
    this.step();
  }

  step() {
    this.physics();
    this.render();
    if (gameState === GAME_STATES.GAME_PLAYING) {
      requestAnimationFrame(this.step);
    }
  }

  startLevel() {
    let level = parseLevel(levels[1]);
    this.gameObjects.blockers = this.gameObjects.blockers.concat(level);
  }

  physics() {
    const blockers = this.gameObjects.blockers;

    for (let i = 0; i < blockers.length; i++) {
      if (this.player.bCollided(blockers[i])) {
        this.bCanPlayerMove = false;
      }
    }

    this.player.input();
    if (this.bCanPlayerMove) this.player.applyVelocity();

    this.bCanPlayerMove = true;
  }

  render() {
    //clean the canvas before each render
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
