class Entity {
  constructor({ size, pos, vel }) {
    this.size = size;
    this.pos = pos;
    this.vel = vel;

    this.render = this.render.bind(this);
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

  bCollided(box2) {
    let box1 = this;
    if (
      (box1.pos.x <= (box2.pos.x + box2.size.w)) &&
      ((box1.pos.x + box1.size.w) >= box2.pos.x) &&
      (box1.pos.y <= (box2.pos.y + box2.size.h)) &&
      ((box1.pos.y + box1.size.h) >= box2.pos.y)
    ) {
      return true;
    }
    return false;
  }

  //should be overriden by child classes
  input() {

  }
}

export default Entity;
