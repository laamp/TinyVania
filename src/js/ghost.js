import Enemy from "./enemy";
import {
    ghostLeft,
    ghostRight,
    enemyDeath
} from "./img-loader";

class Ghost extends Enemy {
    constructor(startVals) {
        super(startVals);
        this.moveSpeed = startVals.moveSpeed || 0;
        this.size = {
            w: 80,
            h: 80
        };
        this.spriteOffset = {
            x: 0,
            y: 0,
            w: 100,
            h: 100
        };
        this.color = "red";

        if (startVals.movingLeft === undefined) {
            this.movingLeft = true;
        } else {
            this.movingLeft = startVals.movingLeft;
        }

        if (this.movingLeft) {
            this.sprites = ghostLeft;
        } else {
            this.sprites = ghostRight;
        }

        this.animate = this.animate.bind(this);
        this.deathAnimation = this.deathAnimation.bind(this);

        this.animationIntervalId = null;
        this.deathAnimationId = null;
    }

    ai() {
        // move toward player
    }

    deathAnimation() {
        this.spriteIdx++;
        if (this.spriteIdx >= this.sprites.length) {
            clearInterval(this.deathAnimationId);
            this.dead = true;
        }
    }

    animate() {
        this.spriteIdx++;
        if (this.spriteIdx >= this.sprites.length) this.spriteIdx = 0;
    }
}

export default Ghost;
