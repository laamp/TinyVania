import Entity from "./entity";

class Enemy extends Entity {
    constructor(startVals) {
        super(startVals);
        this.isNull = startVals.isNull || false;
        this.health = 3;
        this.dead = false;
        this.iFrames = false;
        this.collisionDamage = 1;
        this.bumped = false;
        this.recoverTime = 500;
        this.boundaryCollision = {
            bottom: false
        };
        this.calculateBounds();

        // remove for zombie
        this.movingLeft = startVals.movingLeft || true;
        this.moveSpeed = startVals.moveSpeed || 1;
    }

    ai() {
        // remove for zombie
        if (this.movingLeft) {
            this.vel.x = -this.moveSpeed;
        } else {
            this.vel.x = this.moveSpeed;
        }
    }

    render(ctx) {
        if (!this.isNull) super.render(ctx);
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
            bottom: { x: this.pos.x + (this.size.w * 0.5), y: this.pos.y + this.size.h }
        };
    }

    calcBoundsCollision(otherBox) {
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
    }

    // fix enemy position if they clip a wall
    bump(amount) {
        this.pos.y -= amount;
        this.bumped = true;
    }
}

export default Enemy;
