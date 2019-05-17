import Player from "./player";
import Entity from "./entity";
import { parseLevel } from "./level-loader";

import level01 from "../levels/level01";

const levels = {
  1: level01
};

class Game {
  constructor({ RES_X, RES_Y, canvasCtx }) {
    this.RES_X = RES_X;
    this.RES_Y = RES_Y;
    this.canvasCtx = canvasCtx;

    //array to contain all objects currently in the game
    this.gameObjects = [];

    this.player = new Player({
      size: { w: 20, h: 20 },
      pos: { x: RES_X / 2, y: RES_Y / 2 },
      vel: { x: 0, y: 0 }
    });
    this.gameObjects.push(this.player);

    this.render = this.render.bind(this);
    this.physics = this.physics.bind(this);
  }

  startLevel() {
    let level = parseLevel(levels[1]);
    this.gameObjects = this.gameObjects.concat(level);
  }

  physics() {
    //loop through all objects and update their position
    for (let i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects[i].move();
    }
  }

  render() {
    //clean the canvas before each render
    this.canvasCtx.clearRect(0, 0, this.RES_X, this.RES_Y);

    //render all gameObjects
    for (let i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects[i].render(this.canvasCtx, "blue");
    }
  }
}

export default Game;
