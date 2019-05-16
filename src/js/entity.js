class Entity {
  constructor({ size, pos, vel }) {
    this.size = size;
    this.pos = pos;
    this.vel = vel;
  }

  render(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(
      this.pos.x,
      this.pos.y,
      this.size.w,
      this.size.h
    );
  }

  move() {
    this.pos.x += 1;
  }
}

export default Entity;
