import Player from "./player";

class Game {
  constructor({ DIM_X, DIM_Y, canvasCtx }) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.canvasCtx = canvasCtx;

    this.player = new Player({
      size: { w: 45, h: 100 },
      pos: { x: 15, y: 15 },
      vel: { x: 0, y: 0 }
    });

    this.render = this.render.bind(this);
    this.physics = this.physics.bind(this);
  }

  physics() {
    this.player.move();
  }

  render() {
    this.canvasCtx.clearRect(
      0, 0,
      this.DIM_X,
      this.DIM_Y
    );

    this.player.render(this.canvasCtx);
    this.physics();
  }
}

export default Game;
