import Entity from "./entity";
import { userController } from "./controller";

const movAmt = 3.5;
const jumpAmt = -50;
const controllerResets = {
  attack: true,
  jump: true
};

class Player extends Entity {
  constructor(startVals) {
    super(startVals);
  }

  input() {
    if (userController.right) this.pos.x += movAmt;
    if (userController.left) this.pos.x -= movAmt;

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
      console.log("jump"); //for testing
      setTimeout(() => {
        controllerResets.jump = true;
      }, 1000);
    }
  }
}

export default Player;
