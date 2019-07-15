import Entity from "./entity";
import { userController } from "./controller";
import { randomColor } from "./util";
import {
  characterWalkingLeft,
  characterWalkingRight,
  characterWhipLeft,
  characterWhipRight,
  characterJumpLeft,
  characterJumpRight,
  characterDamageLeft,
  characterDamageRight,
  characterDeadLeft,
  characterDeadRight
} from "./img-loader";

export const PLAYER_STATES = {
  IDLE_LEFT: "IDLE_LEFT",
  IDLE_RIGHT: "IDLE_RIGHT",
  RUNNING_LEFT: "RUNNING_LEFT",
  RUNNING_RIGHT: "RUNNING_RIGHT",
  JUMPING_LEFT: "JUMPING_LEFT",
  JUMPING_RIGHT: "JUMPING_RIGHT",
  FALLING_LEFT: "FALLING_LEFT",
  FALLING_RIGHT: "FALLING_RIGHT",
  ATTACKING_LEFT: "ATTACKING_LEFT",
  ATTACKING_RIGHT: "ATTACKING_RIGHT",
  DAMAGED_LEFT: "DAMAGED_LEFT",
  DAMAGED_RIGHT: "DAMAGED_RIGHT",
  DEAD_LEFT: "DEAD_LEFT",
  DEAD_RIGHT: "DEAD_RIGHT"
};

class Player extends Entity {
  constructor(canvas) {
    let startVals = {
      size: { w: 58, h: 107 },
      pos: { x: canvas.width / 2, y: canvas.height / 2 },
      vel: { x: 0, y: 0 },
      color: randomColor(),
      sprites: characterWalkingRight,
      spriteOffset: { x: -102, y: -12, w: 260, h: 119.6 }
    };
    super(startVals);

    this.moveSpeed = 5;
    this.jumpAmount = -50;
    this.bumped = false;
    this.playerState = PLAYER_STATES.RUNNING_LEFT;
    this.actionResets = { attack: true, jump: true };

    this.animationRunning = false;

    this.boundaryCollision = {
      top: false, right: false,
      bottom: false, left: false
    };
    this.calculateBounds();
  }

  render(ctx) {
    super.render(ctx);
  }

  update() {
    //sprite switching
    switch (this.playerState) {
      case PLAYER_STATES.RUNNING_RIGHT:
        this.sprites = characterWalkingRight;
        break;
      case PLAYER_STATES.RUNNING_LEFT:
        this.sprites = characterWalkingLeft;
        break;
      case PLAYER_STATES.JUMPING_RIGHT:
        this.sprites = characterJumpRight;
        break;
      case PLAYER_STATES.JUMPING_LEFT:
        this.sprites = characterJumpLeft;
        break;
      default:
        this.sprites = [this.nullImg];
        break;
    }

    if ((userController.right || userController.left) && (this.vel.y === 0)) {
      // this.spriteIdx = (this.spriteIdx + 1) % this.sprites.length;
    }
  }

  input() {
    this.vel.x = 0;
    //moving right
    if (userController.right && !this.boundaryCollision.right) {
      this.vel.x = this.moveSpeed;
      this.playerState = PLAYER_STATES.RUNNING_RIGHT;
    }
    //moving left
    if (userController.left && !this.boundaryCollision.left) {
      this.vel.x = -this.moveSpeed;
      this.playerState = PLAYER_STATES.RUNNING_LEFT;
    }
    //attacking
    if (userController.attack && this.actionResets.attack) {
      this.actionResets.attack = false;
      console.log("attack!");
      setTimeout(() => this.actionResets.attack = true, 1000);
    }
    //jumping
    if ((userController.jump) && this.actionResets.jump) {
      this.actionResets.jump = false;
      this.bumped = false;
      this.vel.y = this.jumpAmount;
    }
  }

  calculateBounds() {
    this.boundaries = {
      topLeft: { x: this.pos.x + (this.size.w * 0.2), y: this.pos.y },
      topRight: { x: this.pos.x + (this.size.w * 0.8), y: this.pos.y },
      rightTop: { x: this.pos.x + this.size.w, y: this.pos.y + (this.size.h * 0.2) },
      right: { x: this.pos.x + this.size.w, y: this.pos.y + (this.size.h * 0.5) },
      rightBottom: { x: this.pos.x + this.size.w, y: this.pos.y + (this.size.h * 0.8) },
      bottomLeft: { x: this.pos.x + (this.size.w * 0.2), y: this.pos.y + this.size.h },
      bottomRight: { x: this.pos.x + (this.size.w * 0.8), y: this.pos.y + this.size.h },
      leftTop: { x: this.pos.x, y: this.pos.y + (this.size.h * 0.2) },
      left: { x: this.pos.x, y: this.pos.y + (this.size.h * 0.5) },
      leftBottom: { x: this.pos.x, y: this.pos.y + (this.size.h * 0.8) }
    };
  }

  calcBoundsCollision(otherBox) {
    if ((this.boundaries.topLeft.x >= otherBox.pos.x) && (this.boundaries.topLeft.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.topLeft.y >= otherBox.pos.y) && (this.boundaries.topLeft.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.top = true;
    }
    if ((this.boundaries.topRight.x >= otherBox.pos.x) && (this.boundaries.topRight.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.topRight.y >= otherBox.pos.y) && (this.boundaries.topRight.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.top = true;
    }

    if ((this.boundaries.rightTop.x >= otherBox.pos.x) && (this.boundaries.rightTop.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.rightTop.y >= otherBox.pos.y) && (this.boundaries.rightTop.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.right = true;
    }
    if ((this.boundaries.right.x >= otherBox.pos.x) && (this.boundaries.right.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.right.y >= otherBox.pos.y) && (this.boundaries.right.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.right = true;
    }
    if ((this.boundaries.rightBottom.x >= otherBox.pos.x) && (this.boundaries.rightBottom.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.rightBottom.y >= otherBox.pos.y) && (this.boundaries.rightBottom.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.right = true;
    }

    if ((this.boundaries.bottomLeft.x >= otherBox.pos.x) && (this.boundaries.bottomLeft.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.bottomLeft.y >= otherBox.pos.y) && (this.boundaries.bottomLeft.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.bottom = true;
      this.actionResets.jump = true;
      if (!this.bumped) {
        let offset = this.boundaries.bottomLeft.y - otherBox.pos.y;
        this.bump(offset);
      }
    }
    if ((this.boundaries.bottomRight.x >= otherBox.pos.x) && (this.boundaries.bottomRight.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.bottomRight.y >= otherBox.pos.y) && (this.boundaries.bottomRight.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.bottom = true;
      this.actionResets.jump = true;
      if (!this.bumped) {
        let offset = this.boundaries.bottomLeft.y - otherBox.pos.y;
        this.bump(offset);
      }
    }
    if (!this.boundaryCollision.bottom) {
      this.bumped = false;
      this.playerState = PLAYER_STATES.JUMPING_LEFT;
    }

    if ((this.boundaries.leftTop.x >= otherBox.pos.x) && (this.boundaries.leftTop.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.leftTop.y >= otherBox.pos.y) && (this.boundaries.leftTop.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.left = true;
    }
    if ((this.boundaries.left.x >= otherBox.pos.x) && (this.boundaries.left.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.left.y >= otherBox.pos.y) && (this.boundaries.left.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.left = true;
    }
    if ((this.boundaries.leftBottom.x >= otherBox.pos.x) && (this.boundaries.leftBottom.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.leftBottom.y >= otherBox.pos.y) && (this.boundaries.leftBottom.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.left = true;
    }
  }

  bump(amount) {
    this.pos.y -= amount;
    this.bumped = true;
  }
}

export default Player;
