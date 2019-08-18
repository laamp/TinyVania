import Enemy from "./enemy";
import {
    zombieRiseLeft,
    zombieRiseRight,
    zombieLeft,
    zombieRight,
    enemyDeath
} from "./img-loader";

class Zombie extends Enemy {
    constructor(startVals) {
        super(startVals);
        this.moveSpeed = startVals.moveSpeed || 0;
        this.size = {
            w: 60,
            h: 100
        };
        this.spriteOffset = {
            x: -30,
            y: -30,
            w: 110,
            h: 130
        };
        this.color = "white";

        if (startVals.movingLeft === undefined) {
            this.movingLeft = true;
        } else {
            this.movingLeft = startVals.movingLeft;
        }

        if (this.movingLeft) {
            this.sprites = zombieRiseLeft;
        } else {
            this.sprites = zombieRiseRight;
        }

        this.spawnAnimation = this.spawnAnimation.bind(this);
        this.animate = this.animate.bind(this);
        this.deathAnimation = this.deathAnimation.bind(this);

        this.animationIntervalId = null;
        this.deathAnimationId = null;
        this.spawnId = setInterval(this.spawnAnimation, 400);
    }

    ai() {
        if (this.health > 0 && this.deathAnimationId === null) {
            if (this.movingLeft) {
                this.vel.x = -this.moveSpeed;
            } else {
                this.vel.x = this.moveSpeed;
            }
        }

        if (this.deathAnimationId === null) {
            if (this.health <= 0 || this.boundaryCollision.left || this.boundaryCollision.right) {
                this.health = 0;
                this.sprites = enemyDeath;
                this.spriteIdx = 0;
                clearInterval(this.animationIntervalId);
                clearInterval(this.spawnId);
                this.vel = {
                    x: 0,
                    y: 0
                };
                this.deathAnimationId = setInterval(this.deathAnimation, 200);
            }
        }
    }

    spawnAnimation() {
        this.spriteIdx++;
        if (this.spriteIdx >= this.sprites.length) {
            clearInterval(this.spawnId);
            this.spriteIdx = 0;
            if (this.movingLeft) {
                this.sprites = zombieLeft;
            } else {
                this.sprites = zombieRight;
            }
            this.moveSpeed = 1;
            this.animationIntervalId = setInterval(this.animate, 250);
        }
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

export default Zombie;
