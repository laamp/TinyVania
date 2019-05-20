import Entity from "./entity";
import { userController } from "./controller";

const jumpAmt = -50;
export const controllerResets = {
  attack: true,
  jump: true
};

class Player extends Entity {
  constructor(startVals) {
    super(startVals);
    this.moveAmt = 3.5;
  }

  input() {
    if (userController.right) {
      this.spriteIdx = 2;
      this.pos.x += this.moveAmt;
    }
    if (userController.left) {
      this.spriteIdx = 1;
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
