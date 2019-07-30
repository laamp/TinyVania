import Enemy from "./enemy";
import {
    zombieRiseLeft,
    zombieRiseRight,
    zombieLeft,
    zombieRight,
    characterIdleLeft
} from "./img-loader";

const ZOMBIE_STATES = {
    SPAWNING_LEFT: "SPAWNING_LEFT",
    SPAWNING_RIGHT: "SPAWNING_RIGHT",
    MOVING_LEFT: "MOVING_LEFT",
    MOVING_RIGHT: "MOVING_RIGHT",
    DEATH: "DEATH"
};

class Zombie extends Enemy {
    constructor(startVals) {
        super(startVals);
        this.moveSpeed = startVals.moveSpeed || 1;
        this.size = { w: 60, h: 100 };
        this.spriteOffset = { x: -30, y: -30, w: 110, h: 130 };
        this.color = "white";

        if (startVals.movingLeft === undefined) {
            this.movingLeft = true;
        } else {
            this.movingLeft = startVals.movingLeft;
        }

        if (this.movingLeft) {
            this.sprites = zombieLeft;
        } else {
            this.sprites = zombieRight;
        }

        this.animate = this.animate.bind(this);
        this.animationIntervalId = setInterval(this.animate, 250);
    }

    ai() {
        if (this.movingLeft) {
            this.vel.x = -this.moveSpeed;
        } else {
            this.vel.x = this.moveSpeed;
        }
    }

    animate() {
        this.spriteIdx++;
        if (this.spriteIdx >= this.sprites.length) this.spriteIdx = 0;
    }
}

export default Zombie;
