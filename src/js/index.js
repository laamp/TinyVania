//TinyVania by Lance Smith
//Entry file
import "../css/reset";
import "../css/style";
import Game from "./game";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  const game = new Game(canvas);
});
