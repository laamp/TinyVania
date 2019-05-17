export const canvasResolution = {
  width: 640,
  height: 480
};

export const randomColor = () => {
  const vals = [
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "A", "B",
    "C", "D", "E", "F"
  ];
  const red2 = "FF";
  const green2 = "FF";
  const blue2 = "99";
  const red =
    vals[Math.floor(Math.random() * vals.length)] +
    vals[Math.floor(Math.random() * vals.length)];
  const green =
    vals[Math.floor(Math.random() * vals.length)] +
    vals[Math.floor(Math.random() * vals.length)];
  const blue =
    vals[Math.floor(Math.random() * vals.length)] +
    vals[Math.floor(Math.random() * vals.length)];
  const alpha =
    vals[Math.floor(Math.random() * vals.length)] +
    vals[Math.floor(Math.random() * vals.length)];

  return ("#" + red + green + blue2);
  // return ("navy");
};
