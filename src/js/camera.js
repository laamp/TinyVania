import {
  globals
} from "./util";
import {
  bgImgs,
  bgParallaxImgs
} from "./img-loader";

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
    this.offsetX = -player.pos.x + (globals.screenWidth * 0.5);
    this.offsetY = -player.pos.y + (globals.screenHeight * 0.5);

    this.oldPosY = this.thePlayer.pos.y;

    this.victoryScreen = false;
  }

  update() {
    if (this.thePlayer.pos.x < (globals.screenWidth * this.camBounds.left - this.offsetX)) {
      this.offsetX -= this.thePlayer.vel.x;
    }

    if (this.thePlayer.pos.x > (globals.screenWidth * this.camBounds.right - this.offsetX)) {
      this.offsetX -= this.thePlayer.vel.x;
    }

    if ((this.thePlayer.pos.y < (globals.screenHeight * this.camBounds.top - this.offsetY))) {
      this.offsetY -= this.thePlayer.pos.y - this.oldPosY;
    }

    if ((this.thePlayer.pos.y + this.thePlayer.size.h) > (globals.screenHeight * this.camBounds.bottom - this.offsetY)) {
      this.offsetY -= this.thePlayer.pos.y - this.oldPosY;
    }

    this.oldPosY = this.thePlayer.pos.y;

    this.canvasCtx.save();
    this.canvasCtx.translate(this.offsetX, this.offsetY);
    this.render();
    this.canvasCtx.restore();
  }

  render() {
    // when the game is won
    if (this.victoryScreen) {
      this.canvasCtx.fillStyle = 'black';
      this.canvasCtx.fillRect(0 - this.offsetX, 0 - this.offsetY, globals.screenWidth, globals.screenHeight);

      this.canvasCtx.fillStyle = 'rgb(230, 200, 0)';
      this.canvasCtx.font = 'bold 40px monospace';
      this.canvasCtx.fillText("You've won!", (globals.screenWidth * 0.38) - this.offsetX, (globals.screenHeight / 2) - this.offsetY);
      return;
    }

    //clearing the screen for a new render
    this.canvasCtx.clearRect(
      -this.offsetX, -this.offsetY,
      globals.screenWidth,
      globals.screenHeight
    );

    //drawing the background
    const adjWidth = bgImgs[0].width * 1.333;

    const bgPos = {
      x: globals.screenWidth * 0.5 - adjWidth * 0.5,
      y: globals.screenHeight * 0.5 - bgImgs[0].height * 0.5
    };

    this.canvasCtx.drawImage(
      bgImgs[0],
      -this.offsetX + bgPos.x, -this.offsetY + bgPos.y,
      adjWidth, bgImgs[0].height
    );

    // draw moon
    const adjSize = {
      width: bgParallaxImgs[0].width * 0.6,
      height: bgParallaxImgs[0].height * 0.6
    };

    this.canvasCtx.drawImage(
      bgParallaxImgs[0],
      -this.offsetX * 0.98 + 400, -this.offsetY + 50,
      adjSize.width, adjSize.height
    );

    // draw clouds
    for (let i = 0; i <= 3; i++) {
      this.canvasCtx.drawImage(
        bgParallaxImgs[1],
        -this.offsetX * 0.92 + 800 + (globals.screenWidth * i), -this.offsetY + 60
      );

      this.canvasCtx.drawImage(
        bgParallaxImgs[2],
        -this.offsetX * 0.92 - 200 + (globals.screenWidth * i), -this.offsetY + 20
      );

      this.canvasCtx.drawImage(
        bgParallaxImgs[3],
        -this.offsetX * 0.92 + 500 + (globals.screenWidth * i), -this.offsetY + 165
      );
    }

    //loop through all objects and call their respective render functions
    let layerNames = Object.keys(this.gameObjects);
    layerNames.forEach(name => {
      const renderObjs = this.gameObjects[name];
      for (let i = 0; i < renderObjs.length; i++) {
        if (renderObjs[i] !== null) {
          renderObjs[i].render(this.canvasCtx);
        }
      }
    });

    this.thePlayer.render(this.canvasCtx);

    //render the HUD
    //background
    this.canvasCtx.fillStyle = 'black';
    this.canvasCtx.fillRect(0 - this.offsetX, 0 - this.offsetY, globals.screenWidth, 50);

    //player text
    this.canvasCtx.fillStyle = 'white';
    this.canvasCtx.font = 'bold 28px monospace';
    this.canvasCtx.fillText('PLAYER', 12 - this.offsetX, 35 - this.offsetY);

    //health rectangles
    let totalHealth = this.thePlayer.totalHealth;
    let currentHealth = this.thePlayer.health;
    for (let i = 0; i < totalHealth; i++) {
      if (i + 1 <= currentHealth) {
        this.canvasCtx.fillStyle = 'red';
        this.canvasCtx.fillRect(125 + (i * 20) - this.offsetX, 13 - this.offsetY, 15, 24);
      } else {
        this.canvasCtx.fillStyle = 'transparent';
        this.canvasCtx.strokeStyle = 'white';
        this.canvasCtx.strokeRect(125 + (i * 20) - this.offsetX, 13 - this.offsetY, 15, 24);
      }
    }
  }
}

export default Camera;
