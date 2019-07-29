import Enemy from "./enemy";
import {
    zombieRiseLeft,
    zombieRiseRight,
    zombieLeft,
    zombieRight
} from "./img-loader";

const ZOMBIE_STATES = {
    SPAWNING_LEFT: "SPAWNING_LEFT",
    MOVING_LEFT: "MOVING_LEFT",
    DEATH: "DEATH"
};

class Zombie extends Enemy {
    constructor(startVals) {
        super(startVals);
        this.moveSpeed = startVals.moveSpeed || 1;

        if (startVals.movingLeft === undefined) {
            this.movingLeft = true;
        } else {
            this.movingLeft = startVals.movingLeft;
        }
    }

    ai() {
        if (this.movingLeft) {
            this.vel.x = -this.moveSpeed;
        } else {
            this.vel.x = this.moveSpeed;
        }
    }
}

export default Zombie;
