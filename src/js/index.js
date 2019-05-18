//top level game management file
import "../css/reset";
import "../css/style";

import Game from "./game";
import { canvasResolution } from "./util";
import { bindKeyHandlers } from "./controller";

//gets the canvas and grabs its context for rendering
//also sets up and starts the game
window.addEventListener("DOMContentLoaded", () => {
  //get the canvas
  const canvas = document.getElementById("game");
  canvas.width = canvasResolution.width;
  canvas.height = canvasResolution.height;
  const canvasCtx = canvas.getContext("2d");

  //create game instance
  const game = new Game({
    RES_X: canvasResolution.width,
    RES_Y: canvasResolution.height,
    canvasCtx
  });

  //start the game
  const start = () => {
    game.startLevel();
    game.step();

    // setInterval(() => {
    //   game.physics();
    //   game.render();
    // }, 60);
  };
  start();
  bindKeyHandlers();
});
