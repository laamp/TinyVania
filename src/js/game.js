import Player from "./player";
// import Entity from "./entity";
import { parseLevel } from "./level-loader";
import { randomColor } from "./util";

import level01 from "../levels/level01";

const levels = {
  1: level01
};

class Game {
  constructor({ RES_X, RES_Y, canvasCtx }) {
    this.RES_X = RES_X;
    this.RES_Y = RES_Y;
    this.canvasCtx = canvasCtx;

    //object to contain all objects currently in the game
    this.gameObjects = {
      noCollision: [],
      blockers: [],
      player: []
    };

    this.player = new Player({
      size: { w: 20, h: 20 },
      pos: { x: RES_X / 2, y: RES_Y / 2 },
      vel: { x: 0, y: 3 },
      color: randomColor()
    });
    this.bCanPlayerMove = true;
    window.canMove = b => { //for testing
      this.bCanPlayerMove = b;
    };
    this.gameObjects.player.push(this.player);

    this.render = this.render.bind(this);
    this.physics = this.physics.bind(this);
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
    if (this.bCanPlayerMove) this.player.gravity();

    this.bCanPlayerMove = true;
  }

  render() {
    //clean the canvas before each render
    this.canvasCtx.clearRect(0, 0, this.RES_X, this.RES_Y);

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
