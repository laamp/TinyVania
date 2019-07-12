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

const jumpAmt = -50;
export const controllerResets = {
  attack: true,
  jump: true
};

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
    this.moveAmt = 5;
    this.posBuffer = { x: 0, y: 0 };
    this.bOnTheGround = false;
    this.playerState = PLAYER_STATES.IDLE_LEFT;

    this.boundaries = {};
    this.boundaryCollision = {
      top: false, right: false,
      bottom: false, left: false
    };
    this.calculateBounds();
  }

  update() {
    this.calculateBounds();

    switch (this.playerState) {
      case PLAYER_STATES.IDLE_RIGHT:
        this.sprites = characterWalkingRight;
        break;
      case PLAYER_STATES.IDLE_LEFT:
        this.sprites = characterWalkingLeft;
        break;
      default:
        this.sprites = [this.nullImg];
        break;
    }
  }

  input() {
    this.vel.x = 0;
    if (userController.right) {
      this.spriteIdx = 0;
      this.vel.x = this.moveAmt;
      this.playerState = PLAYER_STATES.IDLE_RIGHT;
    }
    if (userController.left) {
      this.spriteIdx = 0;
      this.vel.x = -this.moveAmt;
      this.playerState = PLAYER_STATES.IDLE_LEFT;
    }

    if ((userController.attack) && (controllerResets.attack)) {
      controllerResets.attack = false;
      console.log("attack!"); //for testing
      setTimeout(() => {
        controllerResets.attack = true;
      }, 1000);
    }

    if ((userController.jump) && (controllerResets.jump)) {
      controllerResets.jump = false;
      this.vel.y = jumpAmt;
    }
  }

  calculateBounds() {
    this.boundaries = {
      top: { x: this.pos.x + (this.size.w / 2.0), y: this.pos.y },
      right: { x: this.pos.x + this.size.w, y: this.pos.y + (this.size.h / 2.0) },
      bottom: { x: this.pos.x + (this.size.w / 2.0), y: this.pos.y + this.size.h },
      left: { x: this.pos.x, y: this.pos.y + (this.size.h / 2.0) }
    };
  }

  calcBoundsCollision(otherBox) {
    if ((this.boundaries.top.x > otherBox.pos.x) && (this.boundaries.top.x < (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.top.y > otherBox.pos.y) && (this.boundaries.top.y < (otherBox.pos.y + otherBox.size.h))) {
      console.log("top hit");
    }
    console.log("sfdsad");
  }
}

export default Player;
