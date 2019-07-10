import Entity from "./entity";
import { randomColor, transparentColor } from "./util";

import level01 from "../levels/level01";
import { environmentImgs } from "./img-loader";

export const levels = {
  1: level01
};

export const parseLevel = levelData => {
  let tiles = [];
  let killVolumes = [];
  const tileSize = 40;
  let depth = 0;
  let stride = 0;

  let level = levelData.split("");
  for (let i = 0; i < level.length; i++) {
    switch (level[i]) {
      case "\n":
        stride = 0;
        depth++;
        break;
      case "x":
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
      case "0":
        killVolumes.push(new Entity({
          size: { w: tileSize, h: tileSize },
          pos: { x: stride * tileSize, y: depth * tileSize },
          vel: { x: 0, y: 0 },
          color: randomColor(),
          spriteOffset: {
            x: 0,
            y: 0,
            w: tileSize,
            h: tileSize
          }
        }));
        stride++;
        break;
      case " ":
        stride++;
        break;
      default:
        console.warn("Unhandled level character!");
        break;
    }
  }

  return { tiles, killVolumes };
};
