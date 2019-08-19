import Entity from "./entity";
import Ghost from "./ghost";
import { randomColor, transparentColor } from "./util";

import level01 from "../levels/level01";
import { environmentImgs } from "./img-loader";

export const levels = {
  1: level01
};

export const parseLevel = levelData => {
  let playerSpawn = { x: 0, y: 0 };
  let tiles = [];
  let killVolumes = [];
  let enemies = [];
  let zombieVolumes = [];
  let victoryTiles = [];
  const tileSize = 40;
  let depth = 0;
  let stride = 0;

  let level = levelData.split("");
  for (let i = 0; i < level.length; i++) {
    switch (level[i]) {
      case "\n": // new line
        stride = 0;
        depth++;
        break;
      case "P":
        playerSpawn = { x: stride * tileSize, y: depth * tileSize };
        stride++;
        break;
      case "!": // victory tile
        victoryTiles.push(new Entity({
          size: { w: tileSize, h: tileSize },
          pos: { x: stride * tileSize, y: depth * tileSize },
          color: 'rgba(255, 255, 0, 0.3)'
        }));
        stride++;
        break;
      case "i": // invisible wall
        tiles.push(new Entity({
          size: { w: tileSize, h: tileSize },
          pos: { x: stride * tileSize, y: depth * tileSize },
          vel: { x: 0, y: 0 },
          color: 'transparent'
        }));
        stride++;
        break;
      case "f": // filler wall
        tiles.push(new Entity({
          size: { w: tileSize, h: tileSize },
          pos: { x: stride * tileSize, y: depth * tileSize },
          vel: { x: 0, y: 0 },
          color: 'rgb(41, 41, 41)'
        }));
        stride++;
        break;
      case "x": // stone block
        tiles.push(new Entity({
          size: { w: tileSize, h: tileSize },
          pos: { x: stride * tileSize, y: depth * tileSize },
          vel: { x: 0, y: 0 },
          color: randomColor(),
          sprites: environmentImgs,
          spriteOffset: {
            x: 0,
            y: 0,
            w: tileSize,
            h: tileSize
          }
        }));
        stride++;
        break;
      case "0": // insta death tile
        killVolumes.push(new Entity({
          size: { w: tileSize, h: tileSize },
          pos: { x: stride * tileSize, y: depth * tileSize },
          vel: { x: 0, y: 0 },
          // color: 'rgba(250, 35, 0, 0.7)',
          color: 'transparent',
          spriteOffset: {
            x: 0,
            y: 0,
            w: tileSize,
            h: tileSize
          }
        }));
        stride++;
        break;
      case "z": // zone that spawns zombies
        zombieVolumes.push(new Entity({
          size: { w: tileSize, h: tileSize },
          pos: { x: stride * tileSize, y: depth * tileSize },
          color: 'rgba(0, 200, 0, 0.0)'
        }));
        stride++;
        break;
      case "g":
        enemies.push(new Ghost({
          pos: { x: stride * tileSize, y: depth * tileSize },
          vel: { x: 0, y: 0 },
          color: 'red'
        }));
        stride++;
        break;
      case " ": // blank space
        stride++;
        break;
      default:
        console.warn("Unhandled level character!");
        break;
    }
  }

  return {
    playerSpawn,
    tiles,
    killVolumes,
    enemies,
    zombieVolumes,
    victoryTiles
  };
};
