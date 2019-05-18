import Entity from "./entity";
import { userController } from "./controller";
import { gameState, GAME_STATES } from "./game";

const movAmt = 5;
const controllerResets = {
  attack: true,
  jump: true
};

class Player extends Entity {
  constructor(startVals) {
    super(startVals);
  }

  applyVelocity() {
    this.pos.y += this.vel.y;
    this.pos.x += this.vel.x;
  }

  input() {
    if (gameState === GAME_STATES.GAME_PLAYING) {
      if (userController.right) this.pos.x += movAmt;
      if (userController.left) this.pos.x -= movAmt;
      if (userController.up) this.pos.y -= movAmt;
      if (userController.down) this.pos.y += movAmt;
      if ((userController.attack) && (controllerResets.attack)) {
        controllerResets.attack = false;
        console.log("attack!"); //for testing
        setTimeout(() => {
          controllerResets.attack = true;
        }, 1000);
      }
      if ((userController.jump) && (controllerResets.jump)) {
        controllerResets.jump = false;
        console.log("jump"); //for testing
        setTimeout(() => {
          controllerResets.jump = true;
        }, 1000);
      }
    }
  }
}

export default Player;
