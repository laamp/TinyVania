export const userController = {
  left: false,
  right: false,
  up: false,
  down: false,
  jump: false,
  attack: false
};

export const bindKeyHandlers = () => {
  window.onkeydown = e => {
    if (e.repeat) return;
    if (e.key === "a") userController.left = true;
    if (e.key === "d") userController.right = true;
    if (e.key === "w") userController.up = true;
    if (e.key === "s") userController.down = true;
    if (e.key === "l") userController.jump = true;
    if (e.key === "k") userController.attack = true;
  };

  window.onkeyup = e => {
    if (e.repeat) return;
    if (e.key === "a") userController.left = false;
    if (e.key === "d") userController.right = false;
    if (e.key === "w") userController.up = false;
    if (e.key === "s") userController.down = false;
    if (e.key === "l") userController.jump = false;
    if (e.key === "k") userController.attack = false;
  };
};
