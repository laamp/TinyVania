import Entity from "./entity";

export const parseLevel = levelData => {
  let tiles = [];
  const tileSize = 20;
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
          vel: { x: 0, y: 0 }
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

  return tiles;
};
