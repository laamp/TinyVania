import Player from "./player";

class Game {
  constructor({ DIM_X, DIM_Y, canvasCtx }) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.canvasCtx = canvasCtx;
  }

  spawnPlayer() {
    this.player = new Player({
      size: { w: 20, h: 20 },
      pos: { x: 15, y: 15 },
      vel: { x: 0, y: 0 }
    });

    this.player.render(this.canvasCtx);
  }
}

export default Game;
