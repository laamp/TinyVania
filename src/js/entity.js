class Entity {
  constructor({ size, pos, vel, color }) {
    this.size = size || { w: 100, h: 100 };
    this.pos = pos || { x: 0, y: 0 };
    this.vel = vel || { x: 0, y: 0 };
    this.color = color || "magenta";
    this.bApplyGravity = false;

    this.render = this.render.bind(this);
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.pos.x,
      this.pos.y,
      this.size.w,
      this.size.h
    );
  }

  applyVelocity() {
    this.pos.y += this.vel.y;
    this.pos.x += this.vel.x;
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
