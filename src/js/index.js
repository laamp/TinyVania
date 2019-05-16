import Entity from "./entity";
import Player from "./player";
import Game from "./game";
window.Entity = Entity;
window.Player = Player;
window.Game = Game;

//constants
const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;

//gets the canvas and grabs its context for rendering
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  const canvasCtx = canvas.getContext("2d");

  window.canvasCtx = canvasCtx;
});
