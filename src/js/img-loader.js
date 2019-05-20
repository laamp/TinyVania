import walk1 from "../sprites/characterSprite_walk1.png";
import walk1r from "../sprites/characterSprite_walk1_flipped.png";
import walk2 from "../sprites/characterSprite_walk2.png";
import walk3 from "../sprites/characterSprite_walk3.png";
import walk4 from "../sprites/characterSprite_walk4.png";
import whip1 from "../sprites/characterSprite_whip1.png";
import whip2 from "../sprites/characterSprite_whip2.png";
import whip3 from "../sprites/characterSprite_whip3.png";
import jump from "../sprites/characterSprite_jump.png";
import fall from "../sprites/characterSprite_fall.png";
import damage from "../sprites/characterSprite_damage.png";
import dead from "../sprites/characterSprite_dead.png";
import bg1 from "../sprites/background-outside.png";
import greenStoneTile from "../sprites/green-stone-tile.png";

const walk1Img = new Image();
walk1Img.src = walk1;
const walk1rImg = new Image();
walk1rImg.src = walk1r;
const walk2Img = new Image();
walk2Img.src = walk2;
const walk3Img = new Image();
walk3Img.src = walk3;
const walk4Img = new Image();
walk4Img.src = walk4;
const whip1Img = new Image();
whip1Img.src = whip1;
const whip2Img = new Image();
whip2Img.src = whip2;
const whip3Img = new Image();
whip3Img.src = whip3;
const jumpImg = new Image();
jumpImg.src = jump;
const fallImg = new Image();
fallImg.src = fall;
const damageImg = new Image();
damageImg.src = damage;
const deadImg = new Image();
deadImg.src = dead;
const bg1Img = new Image();
bg1Img.src = bg1;
const greenStoneTileImg = new Image();
greenStoneTileImg.src = greenStoneTile;

export const characterImgs = {
  1: walk1Img,
  2: walk1rImg,
  3: walk2Img,
  5: walk3Img,
  7: walk4Img,
  9: whip1Img,
  11: whip2Img,
  13: whip3Img,
  15: jumpImg,
  17: fallImg,
  19: damageImg,
  21: deadImg
};

export const environmentImgs = {
  1: greenStoneTileImg
};

export const bgImgs = {
  1: bg1Img
};
