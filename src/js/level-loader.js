import Entity from "./entity";
import Enemy from "./enemy";
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
          color: 'red',
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
          color: 'rgba(255, 0, 0, 0.25)'
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
    zombieVolumes
  };
};
