import Entity from "./entity";

class Enemy extends Entity {
    constructor(startVals) {
        super(startVals);
        this.collisionDamage = 1;
    }

    render(ctx) {
        super.render(ctx);
    }
}

export default Enemy;
