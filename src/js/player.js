import Entity from "./entity";
import { userController } from "./controller";
import { gameState, GAME_STATES } from "./index";

const movAmt = 5;

class Player extends Entity {
  constructor(startVals) {
    super(startVals);
  }

  move() {
    if (gameState === GAME_STATES.GAME_PLAYING) {
      if (userController.right) this.pos.x += movAmt;
      if (userController.left) this.pos.x -= movAmt;
      if (userController.up) this.pos.y -= movAmt;
      if (userController.down) this.pos.y += movAmt;
    }
  }
}

export default Player;
