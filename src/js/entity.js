import { globals } from "./util";

const nullImg = new Image();

class Entity {
  constructor({ size, pos, vel, color, sprites, spriteOffset }) {
    this.size = size || { w: 100, h: 100 };
    this.pos = pos || { x: 0, y: 0 };
    this.vel = vel || { x: 0, y: 0 };
    this.color = color || "limegreen";
    this.sprites = sprites || null;
    this.spriteOffset = spriteOffset || { x: 0, y: 0, w: 0, h: 0 };

    this.spriteIdx = 0;
    this.nullImg = nullImg;
    this.render = this.render.bind(this);
  }

  render(ctx) {
    if (this.sprites === null) {
      ctx.fillStyle = this.color;
      ctx.fillRect(
        this.pos.x,
        this.pos.y,
        this.size.w,
        this.size.h
      );
    } else {
      ctx.drawImage(
        this.sprites[this.spriteIdx],
        this.pos.x + this.spriteOffset.x,
        this.pos.y + this.spriteOffset.y,
        this.spriteOffset.w,
        this.spriteOffset.h
      );
    }
  }

  applyVelocity(deltaT) {
    const timeAdj = 0.01;
    this.pos.y += (this.vel.y * (deltaT * timeAdj));
    this.pos.x += this.vel.x;

    this.vel.y += (globals.gravity * (deltaT * timeAdj));
    if (this.vel.y > globals.maxVelocity) this.vel.y = globals.maxVelocity;
  }

  input() { }

  update() { }
}

export default Entity;
