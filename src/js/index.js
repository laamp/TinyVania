//top level game management file

import Entity from "./entity";
import Player from "./player";
import Game from "./game";
window.Entity = Entity; //TESTING
window.Player = Player; //TESTING
window.Game = Game; //TESTING

//constants
export const WINDOW_WIDTH = 640;
export const WINDOW_HEIGHT = 480;

//control variables
export const userController = {
  left: false,
  right: false,
  up: false,
  down: false
};

//gets the canvas and grabs its context for rendering
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  const canvasCtx = canvas.getContext("2d");

  const game = new Game({
    DIM_X: WINDOW_WIDTH,
    DIM_Y: WINDOW_HEIGHT,
    canvasCtx
  });

  const Start = () => {
    setInterval(game.render, 60);
  };

  const bindKeyHandlers = () => {
    window.onkeydown = e => {
      if (e.key === "a") userController.left = true;
      if (e.key === "d") userController.right = true;
      if (e.key === "w") userController.up = true;
      if (e.key === "s") userController.down = true;
    };

    window.onkeyup = e => {
      if (e.key === "a") userController.left = false;
      if (e.key === "d") userController.right = false;
      if (e.key === "w") userController.up = false;
      if (e.key === "s") userController.down = false;
    };
  };
  bindKeyHandlers();

  window.Start = Start; //TESTING
  window.canvasCtx = canvasCtx; //TESTING
});
