import { userController } from "./controller";
import { globals } from "./util";
import { bgImgs } from "./img-loader";

class Camera {
  constructor(player, gameObjects, canvasCtx) {
    this.thePlayer = player;
    this.gameObjects = gameObjects;
    this.canvasCtx = canvasCtx;
    this.camBounds = {
      left: 0.4,
      right: 0.55,
      top: 0.2,
      bottom: 0.9
    };
    this.offsetX = 0;
    this.offsetY = 0;

    this.oldPosY = this.thePlayer.pos.y;
  }

  update() {
    if (userController.left &&
      (this.thePlayer.pos.x < (globals.screenWidth * this.camBounds.left - this.offsetX))) {
      this.offsetX += this.thePlayer.moveAmt;
    }

    if (userController.right &&
      (this.thePlayer.pos.x > (globals.screenWidth * this.camBounds.right - this.offsetX))) {
      this.offsetX -= this.thePlayer.moveAmt;
    }

    if ((this.thePlayer.pos.y < (globals.screenHeight * this.camBounds.top - this.offsetY))) {
      this.offsetY -= this.thePlayer.pos.y - this.oldPosY;
    }

    if ((this.thePlayer.pos.y + this.thePlayer.size.h) > (globals.screenHeight * this.camBounds.bottom - this.offsetY)) {
      this.offsetY -= this.thePlayer.pos.y - this.oldPosY;
    }
    console.log(this.oldPosY);
    this.oldPosY = this.thePlayer.pos.y;

    this.canvasCtx.save();
    this.canvasCtx.translate(this.offsetX, this.offsetY);
    this.render();
    this.canvasCtx.restore();
  }

  render() {
    //clearing the screen for a new render
    this.canvasCtx.clearRect(
      -this.offsetX, -this.offsetY,
      globals.screenWidth,
      globals.screenHeight
    );

    //drawing the background
    this.canvasCtx.drawImage(
      bgImgs[0],
      -this.offsetX, -this.offsetY,
      globals.screenWidth,
      globals.screenHeight
    );

    //loop through all objects and call their respective render functions
    let layerNames = Object.keys(this.gameObjects);
    layerNames.forEach(name => {
      const renderObjs = this.gameObjects[name];
      for (let i = 0; i < renderObjs.length; i++) {
        renderObjs[i].render(this.canvasCtx);
      }
    });

    this.thePlayer.render(this.canvasCtx);
  }
}

export default Camera;
