import Entity from "./entity";

class Enemy extends Entity {
    constructor(startVals) {
        super(startVals);
        this.health = 1;
        this.dead = false;
        this.iFrames = false;
        this.collisionDamage = 1;
        this.bumped = false;
        this.recoverTime = 500;
        this.boundaryCollision = {
            bottom: false,
            left: false,
            right: false
        };
        this.calculateBounds();

        this.ai = this.ai.bind(this);
    }

    ai() {
    }

    render(ctx) {
        super.render(ctx);
    }

    update() {
        // stop enemy when they hit the ground
        if (this.boundaryCollision.bottom && this.vel.y > 0) {
            this.vel.y = 0;
        }
        this.boundaryCollision.bottom = false;
    }

    takeDamage(damageAmount) {
        if (this.iFrames) return;

        this.iFrames = true;
        this.health -= damageAmount;

        if (this.health === 0) this.dead = true;

        setTimeout(() => this.iFrames = false, this.recoverTime);
    }

    calculateBounds() {
        this.boundaries = {
            bottom: { x: this.pos.x + (this.size.w * 0.5), y: this.pos.y + this.size.h },
            left: { x: this.pos.x, y: this.pos.y + (this.size.h * 0.5) },
            right: { x: this.pos.x + this.size.w, y: this.pos.y + (this.size.h * 0.5) }
        };
    }

    calcBoundsCollision(otherBox) {
        // bottom collision detection
        if ((this.boundaries.bottom.x >= otherBox.pos.x) && (this.boundaries.bottom.x <= (otherBox.pos.x + otherBox.size.w)) &&
            (this.boundaries.bottom.y >= otherBox.pos.y) && (this.boundaries.bottom.y <= (otherBox.pos.y + otherBox.size.h))) {

            this.boundaryCollision.bottom = true;

            if (!this.bumped) {
                let offset = this.boundaries.bottom.y - otherBox.pos.y;
                this.bump(offset);
            }
        }
        if (!this.boundaryCollision.bottom) {
            this.bumped = false;
        }

        // left collision detection
        if ((this.boundaries.left.x >= otherBox.pos.x) && (this.boundaries.left.x <= (otherBox.pos.x + otherBox.size.w)) &&
            (this.boundaries.left.y >= otherBox.pos.y) && (this.boundaries.left.y <= (otherBox.pos.y + otherBox.size.h))) {
            this.boundaryCollision.left = true;
            this.dead = true;
        }

        // right collision detection
        if ((this.boundaries.right.x >= otherBox.pos.x) && (this.boundaries.right.x <= (otherBox.pos.x + otherBox.size.w)) &&
            (this.boundaries.right.y >= otherBox.pos.y) && (this.boundaries.right.y <= (otherBox.pos.y + otherBox.size.h))) {
            this.boundaryCollision.right = true;
            this.dead = true;
        }
    }

    // fix enemy position if they clip a wall
    bump(amount) {
        this.pos.y -= amount;
        this.bumped = true;
    }
}

export default Enemy;
