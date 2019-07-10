import Entity from "./entity";
import { userController } from "./controller";
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
  constructor(startVals) {
    super(startVals);
    this.moveAmt = 5;

    this.playerState = PLAYER_STATES.IDLE;
  }

  update() {

  }

  input() {
    if (userController.right) {
      this.spriteIdx = 0;
      this.pos.x += this.moveAmt;
    }
    if (userController.left) {
      this.spriteIdx = 0;
      this.pos.x -= this.moveAmt;
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
}

export default Player;
