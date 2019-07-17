import Entity from "./entity";
import { userController } from "./controller";
import { randomColor } from "./util";
import {
  characterIdleLeft,
  characterIdleRight,
  characterWalkingLeft,
  characterWalkingRight,
  characterWhipLeft,
  characterWhipRight,
  characterJumpLeft,
  characterJumpRight,
  characterFallLeft,
  characterFallRight,
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
    this.playerState = PLAYER_STATES.IDLE_RIGHT;
    this.actionResets = { attack: true, jump: true };

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
      case PLAYER_STATES.IDLE_LEFT:
        this.sprites = characterIdleLeft;
        break;
      case PLAYER_STATES.IDLE_RIGHT:
        this.sprites = characterIdleRight;
        break;
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
      case PLAYER_STATES.FALLING_LEFT:
        this.sprites = characterFallLeft;
        break;
      case PLAYER_STATES.FALLING_RIGHT:
        this.sprites = characterFallRight;
        break;
      default:
        this.sprites = [this.nullImg];
        break;
    }

    this.animate();
  }

  animate() {
    if ((userController.right) && (this.vel.y === 0)) { //running right on the ground
      this.playerState = PLAYER_STATES.RUNNING_RIGHT;
    } else if ((userController.left) && (this.vel.y === 0)) { //running left on the ground
      this.playerState = PLAYER_STATES.RUNNING_LEFT;
    } else if ((!userController.left && !userController.right) && this.playerState === PLAYER_STATES.RUNNING_LEFT) { //running left -> idle
      this.playerState = PLAYER_STATES.IDLE_LEFT;
    } else if ((!userController.left && !userController.right) && this.playerState === PLAYER_STATES.RUNNING_RIGHT) { //running right -> idle
      this.playerState = PLAYER_STATES.IDLE_RIGHT;
    } else if ((this.playerState === PLAYER_STATES.RUNNING_LEFT) && (this.vel.y > 0)) { //running left -> falling
      this.playerState = PLAYER_STATES.FALLING_LEFT;
    } else if ((this.playerState === PLAYER_STATES.RUNNING_LEFT) && (this.vel.y < 0)) { //running left -> jumping
      this.playerState = PLAYER_STATES.JUMPING_LEFT;
    } else if ((this.playerState === PLAYER_STATES.RUNNING_RIGHT) && (this.vel.y > 0)) { //running right -> falling
      this.playerState = PLAYER_STATES.FALLING_RIGHT;
    } else if ((this.playerState === PLAYER_STATES.RUNNING_RIGHT) && (this.vel.y < 0)) { //running right -> jumping
      this.playerState = PLAYER_STATES.JUMPING_RIGHT;
    } else if ((this.playerState === PLAYER_STATES.JUMPING_LEFT) && (this.vel.y > 0)) { //jumping left -> falling left
      this.playerState = PLAYER_STATES.FALLING_LEFT;
    } else if ((this.playerState === PLAYER_STATES.JUMPING_RIGHT) && (this.vel.y > 0)) { //jumping right -> falling right
      this.playerState = PLAYER_STATES.FALLING_RIGHT;
    } else if ((this.playerState === PLAYER_STATES.IDLE_LEFT) && this.vel.y < 0) { //idle left -> jumping
      this.playerState = PLAYER_STATES.JUMPING_LEFT;
    } else if ((this.playerState === PLAYER_STATES.IDLE_RIGHT) && this.vel.y < 0) { //idle right -> jumping
      this.playerState = PLAYER_STATES.JUMPING_RIGHT;
    } else if ((this.playerState === PLAYER_STATES.FALLING_LEFT) && this.vel.y === 0) { //falling left -> on the ground
      this.playerState = PLAYER_STATES.IDLE_LEFT;
    } else if ((this.playerState === PLAYER_STATES.FALLING_RIGHT) && this.vel.y === 0) { //falling right -> on the ground
      this.playerState = PLAYER_STATES.IDLE_RIGHT;
    } else if ((this.playerState === PLAYER_STATES.JUMPING_LEFT) && userController.right) { //jumping left -> turning to the right
      this.playerState = PLAYER_STATES.JUMPING_RIGHT;
    } else if ((this.playerState === PLAYER_STATES.JUMPING_RIGHT) && userController.left) { //jumping right -> turning to the left
      this.playerState = PLAYER_STATES.JUMPING_LEFT;
    } else if ((this.playerState === PLAYER_STATES.FALLING_LEFT) && userController.right) { //falling left -> turning to the right
      this.playerState = PLAYER_STATES.FALLING_RIGHT;
    } else if ((this.playerState === PLAYER_STATES.FALLING_RIGHT) && userController.left) { //falling right -> turning to the left
      this.playerState = PLAYER_STATES.FALLING_LEFT;
    } else if ((this.playerState === PLAYER_STATES.IDLE_LEFT) && this.vel.y > 0) {
      this.playerState = PLAYER_STATES.FALLING_LEFT;
    } else if ((this.playerState === PLAYER_STATES.IDLE_RIGHT) && this.vel.y > 0) {
      this.playerState = PLAYER_STATES.FALLING_RIGHT;
    }

    this.spriteIdx = (this.spriteIdx + 1) % this.sprites.length;
    if (!this.sprites[this.spriteIdx]) this.spriteIdx = 0;
  }

  input() {
    this.vel.x = 0;
    //moving right
    if (userController.right && !this.boundaryCollision.right) {
      this.vel.x = this.moveSpeed;
    }
    //moving left
    if (userController.left && !this.boundaryCollision.left) {
      this.vel.x = -this.moveSpeed;
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
