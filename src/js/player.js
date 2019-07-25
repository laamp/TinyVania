import Entity from "./entity";
import { userController } from "./controller";
import { randomColor } from "./util";
import {
  characterIdleLeft,
  characterIdleRight,
  characterWalkingLeft,
  characterWalkingRight,
  characterWhipLeft,
  characterWhipRight,
  characterJumpLeft,
  characterJumpRight,
  characterFallLeft,
  characterFallRight,
  characterDamageLeft,
  characterDamageRight,
  characterDeadLeft,
  characterDeadRight
} from "./img-loader";

export const PLAYER_STATES = {
  IDLE_LEFT: "IDLE_LEFT",
  IDLE_RIGHT: "IDLE_RIGHT",
  RUNNING_LEFT: "RUNNING_LEFT",
  RUNNING_RIGHT: "RUNNING_RIGHT",
  JUMPING_LEFT: "JUMPING_LEFT",
  JUMPING_RIGHT: "JUMPING_RIGHT",
  FALLING_LEFT: "FALLING_LEFT",
  FALLING_RIGHT: "FALLING_RIGHT",
  ATTACKING_LEFT: "ATTACKING_LEFT",
  ATTACKING_RIGHT: "ATTACKING_RIGHT",
  DAMAGED_LEFT: "DAMAGED_LEFT",
  DAMAGED_RIGHT: "DAMAGED_RIGHT",
  DEAD_LEFT: "DEAD_LEFT",
  DEAD_RIGHT: "DEAD_RIGHT"
};

class Player extends Entity {
  constructor(canvas) {
    let startVals = {
      size: { w: 58, h: 107 },
      pos: { x: canvas.width / 2, y: canvas.height / 2 },
      vel: { x: 0, y: 0 },
      color: randomColor(),
      sprites: characterWalkingRight,
      spriteOffset: { x: -102, y: -12, w: 260, h: 119.6 }
    };
    super(startVals);

    this.attackId = 0;
    this.attackSpeed = 400;
    this.attackFrames = false;
    this.attackVolume = null;
    this.attackPower = 1;
    this.facingLeft = false;
    this.debugColor = "magenta";

    this.health = 5;
    this.dead = false;
    this.iFrameDuration = 700;
    this.iFrames = false;
    this.damageReset = true;
    this.moveSpeed = 5;
    this.jumpAmount = -50;
    this.bumped = false;
    this.playerState = PLAYER_STATES.IDLE_RIGHT;
    this.actionResets = {
      attack: true,
      attackPressed: false,
      animatingAttack: false,
      onGround: false,
      jumpPressed: false
    };

    this.boundaryCollision = {
      top: false, right: false,
      bottom: false, left: false
    };
    this.calculateBounds();

    this.attack = this.attack.bind(this);
    this.attackAnimation = this.attackAnimation.bind(this);
    this.attackReset = this.attackReset.bind(this);

    this.takeDamage = this.takeDamage.bind(this);
    this.takeDamageReset = this.takeDamageReset.bind(this);

    this.animSpeed = 150;
    this.animationIntervalId = null;
    this.startAnimInterval = this.startAnimInterval.bind(this);
    this.clearAnimInterval = this.clearAnimInterval.bind(this);

    this.startAnimInterval();
  }

  render(ctx) {
    super.render(ctx);
  }

  // every tick
  update() {
    this.calculateBounds();

    // zero out player's velocity if they are on the ground or hit a ceiling
    if (this.boundaryCollision.bottom && this.vel.y > 0) this.vel.y = 0;
    if (this.boundaryCollision.top && this.vel.y < 0) this.vel.y = 0;
    if (this.boundaryCollision.left && this.vel.x < 0) this.vel.x = 0;
    if (this.boundaryCollision.right && this.vel.x > 0) this.vel.x = 0;

    // reset collision for player
    Object.keys(this.boundaryCollision).forEach(k => {
      this.boundaryCollision[k] = false;
    });

    // sprite switching based on player state
    switch (this.playerState) {
      case PLAYER_STATES.IDLE_LEFT:
        this.sprites = characterIdleLeft;
        break;
      case PLAYER_STATES.IDLE_RIGHT:
        this.sprites = characterIdleRight;
        break;
      case PLAYER_STATES.RUNNING_RIGHT:
        this.sprites = characterWalkingRight;
        break;
      case PLAYER_STATES.RUNNING_LEFT:
        this.sprites = characterWalkingLeft;
        break;
      case PLAYER_STATES.JUMPING_RIGHT:
        this.sprites = characterJumpRight;
        break;
      case PLAYER_STATES.JUMPING_LEFT:
        this.sprites = characterJumpLeft;
        break;
      case PLAYER_STATES.FALLING_LEFT:
        this.sprites = characterFallLeft;
        break;
      case PLAYER_STATES.FALLING_RIGHT:
        this.sprites = characterFallRight;
        break;
      case PLAYER_STATES.ATTACKING_LEFT:
        this.sprites = characterWhipLeft;
        break;
      case PLAYER_STATES.ATTACKING_RIGHT:
        this.sprites = characterWhipRight;
        break;
      case PLAYER_STATES.DAMAGED_LEFT:
        this.sprites = characterDamageLeft;
        break;
      case PLAYER_STATES.DAMAGED_RIGHT:
        this.sprites = characterDamageRight;
        break;
      default:
        this.sprites = [this.nullImg];
        break;
    }
    if (!this.sprites[this.spriteIdx]) this.spriteIdx = 0;

    // is the player facing left?
    if ((this.playerState === PLAYER_STATES.IDLE_LEFT) ||
      (this.playerState === PLAYER_STATES.RUNNING_LEFT) ||
      (this.playerState === PLAYER_STATES.JUMPING_LEFT) ||
      (this.playerState === PLAYER_STATES.FALLING_LEFT) ||
      (this.playerState === PLAYER_STATES.ATTACKING_LEFT)) {
      this.facingLeft = true;
    } else { this.facingLeft = false; }

    if (!this.actionResets.animatingAttack) this.animate();

    // figure out attack frames
    if (this.actionResets.animatingAttack && this.spriteIdx === 2) {
      this.attackFrames = true;
    }

    // rendering for attack hitbox
    if (this.attackFrames) {
      if (!this.facingLeft) {
        this.attackVolume = new Entity({
          pos: { x: this.pos.x + this.size.w + 5, y: this.pos.y + 30 },
          size: { w: 94, h: 50 }
        });
      } else {
        this.attackVolume = new Entity({
          pos: { x: this.pos.x - 99, y: this.pos.y + 30 },
          size: { w: 94, h: 50 }
        });
      }
    } else {
      this.attackVolume = null;
    }
  }

  animate() {
    if (!this.actionResets.animatingAttack) {
      if (userController.right && userController.left) {
        if (this.facingLeft) {
          this.playerState = PLAYER_STATES.IDLE_LEFT;
        } else {
          this.playerState = PLAYER_STATES.IDLE_RIGHT;
        }
      } else if ((userController.right) && (this.vel.y === 0)) { //running right on the ground
        this.playerState = PLAYER_STATES.RUNNING_RIGHT;
      } else if ((userController.left) && (this.vel.y === 0)) { //running left on the ground
        this.playerState = PLAYER_STATES.RUNNING_LEFT;
      } else if ((!userController.left && !userController.right) && this.playerState === PLAYER_STATES.RUNNING_LEFT) { //running left -> idle
        this.playerState = PLAYER_STATES.IDLE_LEFT;
      } else if ((!userController.left && !userController.right) && this.playerState === PLAYER_STATES.RUNNING_RIGHT) { //running right -> idle
        this.playerState = PLAYER_STATES.IDLE_RIGHT;
      } else if ((this.playerState === PLAYER_STATES.RUNNING_LEFT) && (this.vel.y > 0)) { //running left -> falling
        this.playerState = PLAYER_STATES.FALLING_LEFT;
      } else if ((this.playerState === PLAYER_STATES.RUNNING_LEFT) && (this.vel.y < 0)) { //running left -> jumping
        this.playerState = PLAYER_STATES.JUMPING_LEFT;
      } else if ((this.playerState === PLAYER_STATES.RUNNING_RIGHT) && (this.vel.y > 0)) { //running right -> falling
        this.playerState = PLAYER_STATES.FALLING_RIGHT;
      } else if ((this.playerState === PLAYER_STATES.RUNNING_RIGHT) && (this.vel.y < 0)) { //running right -> jumping
        this.playerState = PLAYER_STATES.JUMPING_RIGHT;
      } else if ((this.playerState === PLAYER_STATES.JUMPING_LEFT) && (this.vel.y > 0)) { //jumping left -> falling left
        this.playerState = PLAYER_STATES.FALLING_LEFT;
      } else if ((this.playerState === PLAYER_STATES.JUMPING_RIGHT) && (this.vel.y > 0)) { //jumping right -> falling right
        this.playerState = PLAYER_STATES.FALLING_RIGHT;
      } else if ((this.playerState === PLAYER_STATES.IDLE_LEFT) && this.vel.y < 0) { //idle left -> jumping
        this.playerState = PLAYER_STATES.JUMPING_LEFT;
      } else if ((this.playerState === PLAYER_STATES.IDLE_RIGHT) && this.vel.y < 0) { //idle right -> jumping
        this.playerState = PLAYER_STATES.JUMPING_RIGHT;
      } else if ((this.playerState === PLAYER_STATES.FALLING_LEFT) && this.vel.y === 0) { //falling left -> on the ground
        this.playerState = PLAYER_STATES.IDLE_LEFT;
      } else if ((this.playerState === PLAYER_STATES.FALLING_RIGHT) && this.vel.y === 0) { //falling right -> on the ground
        this.playerState = PLAYER_STATES.IDLE_RIGHT;
      } else if ((this.playerState === PLAYER_STATES.JUMPING_LEFT) && userController.right) { //jumping left -> turning to the right
        this.playerState = PLAYER_STATES.JUMPING_RIGHT;
      } else if ((this.playerState === PLAYER_STATES.JUMPING_RIGHT) && userController.left) { //jumping right -> turning to the left
        this.playerState = PLAYER_STATES.JUMPING_LEFT;
      } else if ((this.playerState === PLAYER_STATES.FALLING_LEFT) && userController.right) { //falling left -> turning to the right
        this.playerState = PLAYER_STATES.FALLING_RIGHT;
      } else if ((this.playerState === PLAYER_STATES.FALLING_RIGHT) && userController.left) { //falling right -> turning to the left
        this.playerState = PLAYER_STATES.FALLING_LEFT;
      } else if ((this.playerState === PLAYER_STATES.IDLE_LEFT) && this.vel.y > 0) { //idle left -> falling left
        this.playerState = PLAYER_STATES.FALLING_LEFT;
      } else if ((this.playerState === PLAYER_STATES.IDLE_RIGHT) && this.vel.y > 0) { //idle right -> falling right
        this.playerState = PLAYER_STATES.FALLING_RIGHT;
      } else if (this.playerState === PLAYER_STATES.ATTACKING_LEFT) { //attacking left -> idle
        this.playerState = PLAYER_STATES.IDLE_LEFT;
      } else if (this.playerState === PLAYER_STATES.ATTACKING_RIGHT) { //attacking right -> idle
        this.playerState = PLAYER_STATES.IDLE_RIGHT;
      }
    }
  }

  clearAnimInterval() {
    clearInterval(this.animationIntervalId);
    this.animationIntervalId = null;
  }

  startAnimInterval() {
    this.animationIntervalId = setInterval(() => {
      this.spriteIdx = (this.spriteIdx + 1) % this.sprites.length;
      if (!this.sprites[this.spriteIdx] || this.vel.x === 0) this.spriteIdx = 0;
    }, this.animSpeed);
  }

  input() {
    if (!this.damageReset) return;

    this.vel.x = 0;

    if (userController.right && userController.left) {
      this.vel.x = 0;
    } else {
      //moving right
      if (userController.right && !this.boundaryCollision.right) {
        this.vel.x = this.moveSpeed;
      }

      //moving left
      if (userController.left && !this.boundaryCollision.left) {
        this.vel.x = -this.moveSpeed;
      }
    }

    // attacking
    if (!userController.attack) this.actionResets.attackPressed = false;
    if (userController.attack &&
      this.actionResets.attack &&
      !this.actionResets.attackPressed) {
      this.actionResets.attackPressed = true;
      this.clearAnimInterval();
      this.attack();
    }

    // jumping
    if (!userController.jump) this.actionResets.jumpPressed = false;
    if (!this.boundaryCollision.bottom) this.actionResets.onGround = false;
    if ((userController.jump) &&
      this.actionResets.onGround &&
      !this.actionResets.jumpPressed) {
      this.actionResets.jumpPressed = true;
      this.actionResets.onGround = false;
      this.bumped = false;
      this.vel.y = this.jumpAmount;
    }
  }

  attack() {
    Object.assign(this.actionResets, { animatingAttack: true, attack: false });
    this.spriteIdx = 0;

    if (this.facingLeft) {
      this.playerState = PLAYER_STATES.ATTACKING_LEFT;
    } else {
      this.playerState = PLAYER_STATES.ATTACKING_RIGHT;
    }

    this.attackId = setInterval(this.attackAnimation, this.attackSpeed / characterWhipLeft.length + 1);
    setTimeout(this.attackReset, this.attackSpeed);
  }

  attackAnimation() {
    if (this.spriteIdx >= this.sprites.length - 1) {
      clearInterval(this.attackId);
    } else {
      this.spriteIdx++;
    }
  }

  attackReset() {
    Object.assign(this.actionResets, { animatingAttack: false, attack: true });
    this.attackFrames = false;
    this.startAnimInterval();
  }

  calculateBounds() {
    this.boundaries = {
      topLeft: { x: this.pos.x + (this.size.w * 0.2), y: this.pos.y },
      topRight: { x: this.pos.x + (this.size.w * 0.8), y: this.pos.y },
      rightTop: { x: this.pos.x + this.size.w, y: this.pos.y + (this.size.h * 0.2) },
      right: { x: this.pos.x + this.size.w, y: this.pos.y + (this.size.h * 0.5) },
      rightBottom: { x: this.pos.x + this.size.w, y: this.pos.y + (this.size.h * 0.8) },
      bottomLeft: { x: this.pos.x + (this.size.w * 0.2), y: this.pos.y + this.size.h },
      bottomRight: { x: this.pos.x + (this.size.w * 0.8), y: this.pos.y + this.size.h },
      leftTop: { x: this.pos.x, y: this.pos.y + (this.size.h * 0.2) },
      left: { x: this.pos.x, y: this.pos.y + (this.size.h * 0.5) },
      leftBottom: { x: this.pos.x, y: this.pos.y + (this.size.h * 0.8) }
    };
  }

  calcBoundsCollision(otherBox) {
    if ((this.boundaries.topLeft.x >= otherBox.pos.x) && (this.boundaries.topLeft.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.topLeft.y >= otherBox.pos.y) && (this.boundaries.topLeft.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.top = true;
    }
    if ((this.boundaries.topRight.x >= otherBox.pos.x) && (this.boundaries.topRight.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.topRight.y >= otherBox.pos.y) && (this.boundaries.topRight.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.top = true;
    }

    if ((this.boundaries.rightTop.x >= otherBox.pos.x) && (this.boundaries.rightTop.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.rightTop.y >= otherBox.pos.y) && (this.boundaries.rightTop.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.right = true;
    }
    if ((this.boundaries.right.x >= otherBox.pos.x) && (this.boundaries.right.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.right.y >= otherBox.pos.y) && (this.boundaries.right.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.right = true;
    }
    if ((this.boundaries.rightBottom.x >= otherBox.pos.x) && (this.boundaries.rightBottom.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.rightBottom.y >= otherBox.pos.y) && (this.boundaries.rightBottom.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.right = true;
    }

    if ((this.boundaries.bottomLeft.x >= otherBox.pos.x) && (this.boundaries.bottomLeft.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.bottomLeft.y >= otherBox.pos.y) && (this.boundaries.bottomLeft.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.bottom = true;
      this.actionResets.onGround = true;
      if (!this.bumped) {
        let offset = this.boundaries.bottomLeft.y - otherBox.pos.y;
        this.bump(offset);
      }
    }
    if ((this.boundaries.bottomRight.x >= otherBox.pos.x) && (this.boundaries.bottomRight.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.bottomRight.y >= otherBox.pos.y) && (this.boundaries.bottomRight.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.bottom = true;
      this.actionResets.onGround = true;
      if (!this.bumped) {
        let offset = this.boundaries.bottomLeft.y - otherBox.pos.y;
        this.bump(offset);
      }
    }
    if (!this.boundaryCollision.bottom) {
      this.bumped = false;
    }

    if ((this.boundaries.leftTop.x >= otherBox.pos.x) && (this.boundaries.leftTop.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.leftTop.y >= otherBox.pos.y) && (this.boundaries.leftTop.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.left = true;
    }
    if ((this.boundaries.left.x >= otherBox.pos.x) && (this.boundaries.left.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.left.y >= otherBox.pos.y) && (this.boundaries.left.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.left = true;
    }
    if ((this.boundaries.leftBottom.x >= otherBox.pos.x) && (this.boundaries.leftBottom.x <= (otherBox.pos.x + otherBox.size.w)) &&
      (this.boundaries.leftBottom.y >= otherBox.pos.y) && (this.boundaries.leftBottom.y <= (otherBox.pos.y + otherBox.size.h))) {
      this.boundaryCollision.left = true;
    }
  }

  // corrects player's position if they sink into the floor
  bump(amount) {
    this.pos.y -= amount;
    this.bumped = true;
  }

  takeDamage(damageAmount) {
    if (!this.damageReset) return;

    this.iFrames = true;
    this.health -= damageAmount;
    if (this.health <= 0) this.dead = true;
    this.damageReset = false;

    if (this.facingLeft) {
      this.playerState = PLAYER_STATES.DAMAGED_LEFT;
      Object.assign(this.vel, { x: 4, y: this.jumpAmount });
    } else {
      this.playerState = PLAYER_STATES.DAMAGED_RIGHT;
      Object.assign(this.vel, { x: -4, y: this.jumpAmount });
    }

    setTimeout(this.takeDamageReset, this.iFrameDuration);
  }

  takeDamageReset() {
    this.iFrames = false;
    this.damageReset = true;

    if (this.playerState === PLAYER_STATES.DAMAGED_LEFT) {
      this.playerState = PLAYER_STATES.IDLE_LEFT;
    } else {
      this.playerState = PLAYER_STATES.IDLE_RIGHT;
    }
  }
}

export default Player;
