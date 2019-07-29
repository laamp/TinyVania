import Enemy from "./enemy";

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
