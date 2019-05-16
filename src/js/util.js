export const canvasResolution = {
  width: 640,
  height: 480
};

export const userController = {
  left: false,
  right: false,
  up: false,
  down: false
};

export const bindKeyHandlers = () => {
  window.onkeydown = e => {
    if (e.key === "a") userController.left = true;
    if (e.key === "d") userController.right = true;
    if (e.key === "w") userController.up = true;
    if (e.key === "s") userController.down = true;
  };

  window.onkeyup = e => {
    if (e.key === "a") userController.left = false;
    if (e.key === "d") userController.right = false;
    if (e.key === "w") userController.up = false;
    if (e.key === "s") userController.down = false;
  };
};
