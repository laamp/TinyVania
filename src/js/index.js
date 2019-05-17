//top level game management file
import "../css/reset";
import "../css/style";

import level01 from "../levels/level01";

import Game from "./game";
import { canvasResolution } from "./util";
import { bindKeyHandlers } from "./controller";

//game state
export const GAME_STATES = {
  MENU: "MENU",
  GAME_PLAYING: "GAME_PLAYING",
  GAME_PAUSED: "GAME_PAUSED"
};

export let gameState = GAME_STATES.GAME_PLAYING;
console.log(gameState);

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
    setInterval(() => {
      game.physics();
      game.render();
    }, 60);
  };
  start();
  bindKeyHandlers();
  game.loadLevel(level01);
});
