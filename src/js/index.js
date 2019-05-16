import Entity from "./entity";
import Player from "./player";
window.Entity = Entity;
window.Player = Player;

// test vals for rendering something
// { size: { w: 50, h: 100 }, pos: { x: 10, y: 10 }, vel: { x: 0, y: 0 } }

//gets the canvas and grabs its context for rendering
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  window.ctx = ctx;
});
