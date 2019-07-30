export const globals = {
  screenWidth: 1024,
  screenHeight: 768,
  gravity: 15,
  maxVelocity: 100,
  transparentColor: "#FFFFFFFF"
};

export const isObjEmpty = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const randomColor = () => {
  const vals = [
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "A", "B",
    "C", "D", "E", "F"
  ];

  const randR =
    vals[Math.floor(Math.random() * vals.length)] +
    vals[Math.floor(Math.random() * vals.length)];
  const randG =
    vals[Math.floor(Math.random() * vals.length)] +
    vals[Math.floor(Math.random() * vals.length)];
  const randB =
    vals[Math.floor(Math.random() * vals.length)] +
    vals[Math.floor(Math.random() * vals.length)];

  return ("#" + randR + randG + randB);
};

export const boxCollision = (b1, b2) => {
  if (b1 === null || b2 === null) return false;

  if ((b1.pos.x <= (b2.pos.x + b2.size.w)) &&
    ((b1.pos.x + b1.size.w) >= b2.pos.x) &&
    (b1.pos.y <= (b2.pos.y + b2.size.h)) &&
    ((b1.pos.y + b1.size.h) >= b2.pos.y)) {
    return true;
  }
  return false;
};
