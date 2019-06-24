import { globals, isObjEmpty } from "./util";

class Entity {
  constructor({ size, pos, vel, color, sprites, spriteOffset }) {
    this.size = size || { w: 100, h: 100 };
    this.pos = pos || { x: 0, y: 0 };
    this.vel = vel || { x: 0, y: 0 };
    this.color = color || "magenta";
    this.sprites = sprites || { 1: new Image() };
    this.spriteOffset = spriteOffset || { x: 0, y: 0, w: 0, h: 0 };

    this.spriteIdx = 1;

    this.render = this.render.bind(this);
  }

  render(ctx) {
    if (isObjEmpty(this.sprites)) {
      ctx.fillStyle = this.color;
      ctx.fillRect(
        this.pos.x,
        this.pos.y,
        this.size.w,
        this.size.h
      );
    }
    ctx.drawImage(
      this.sprites[this.spriteIdx],
      this.pos.x + this.spriteOffset.x,
      this.pos.y + this.spriteOffset.y,
      this.spriteOffset.w,
      this.spriteOffset.h
    );
  }

  applyVelocity(deltaT) {
    const timeAdj = 0.01;
    this.pos.y += (this.vel.y * (deltaT * timeAdj));
    this.pos.x += this.vel.x;

    this.vel.y += (globals.gravity * (deltaT * timeAdj));
    if (this.vel.y > globals.maxVelocity) this.vel.y = globals.maxVelocity;
  }

  bCollided(box2) {
    let box1 = this;

    if ((box1.pos.x <= (box2.pos.x + box2.size.w)) &&
      ((box1.pos.x + box1.size.w) >= box2.pos.x) &&
      (box1.pos.y <= (box2.pos.y + box2.size.h)) &&
      ((box1.pos.y + box1.size.h) >= box2.pos.y)) {
      return true;
    }
    return false;
  }

  input() {
    //should be overriden by child classes
  }

  resetVelocity() {
    this.vel.y = 0;
    this.vel.x = 0;
  }
}

export default Entity;
