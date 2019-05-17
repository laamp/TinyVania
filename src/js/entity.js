class Entity {
  constructor({ size, pos, vel }) {
    this.size = size;
    this.pos = pos;
    this.vel = vel;
  }

  render(ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(
      this.pos.x,
      this.pos.y,
      this.size.w,
      this.size.h
    );
  }

  //should be overriden by child classes
  move() {

  }
}

export default Entity;
