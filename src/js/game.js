import Player from "./player";

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

  loadLevel(levelData) {
    const tileSize = 20;

    let level = levelData.split("");
    for (let i = 0; i < level.length; i++) {
      // console.log(level[i]);
    }
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
      this.gameObjects[i].render(this.canvasCtx, "red");
    }
  }
}

export default Game;
