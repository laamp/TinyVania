import Entity from "./entity";

class Enemy extends Entity {
    constructor(startVals) {
        super(startVals);
        this.health = 20;
        this.dead = false;
        this.iFrames = false;
        this.collisionDamage = 1;
        this.recoverTime = 500;
    }

    render(ctx) {
        super.render(ctx);
    }

    takeDamage(damageAmount) {
        if (this.iFrames) return;

        this.iFrames = true;
        this.health -= damageAmount;

        console.log(`Enemy health is ${this.health}`);

        if (this.health === 0) this.dead = true;

        setTimeout(() => this.iFrames = false, this.recoverTime);
    }
}

export default Enemy;
