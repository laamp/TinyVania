import Entity from "./entity";
import { userController } from "./index";

const movAmt = 10;

class Player extends Entity {
  constructor(startVals) {
    super(startVals);
  }

  move() {
    if (userController.right) this.pos.x += movAmt;
    if (userController.left) this.pos.x -= movAmt;
    if (userController.up) this.pos.y -= movAmt;
    if (userController.down) this.pos.y += movAmt;
  }
}

export default Player;
