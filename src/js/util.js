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
