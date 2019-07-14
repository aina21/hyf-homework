console.log("loaded");

const btnAllByOne = document.querySelector(".btn-AllAtOnce");
const btnOneByOne = document.querySelector(".btn-oneByOne");
const btnRestart = document.querySelector(".btn-restart");

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const boxes = [redBox, blueBox, greenBox];

const positions = {
  top: 20,
  botton: 300,
  left: 400,
  right: 20
};

const targets = {
  red: {
    x: positions.right - parseInt(redBox.style.left),
    y: positions.botton - parseInt(redBox.style.top)
  },
  blue: {
    x: positions.left - parseInt(blueBox.style.left),
    y: positions.botton - parseInt(blueBox.style.top)
  },
  green: {
    x: positions.left - parseInt(greenBox.style.left),
    y: positions.top - parseInt(greenBox.style.top)
  }
};
/**
 * Should translate the circles one at a time from their random start position to their target.
 * Log something out after each element has been moved
 *
 */
function translateOneByOne() {
  //red circle move
  return moveElement(redBox, targets.red)
    .then(() => {
      //blue circle move
      console.log("red circle has been moved");
      return moveElement(blueBox, targets.blue);
    })
    .then(() => {
      //green circle move
      console.log("blue circle has been moved");
      return moveElement(greenBox, targets.green);
    })
    .then(() => {
      console.log("green circle has been moved");
    });
}

/**
 * Should translate all the circles at the same time from their random start position to their target.
 * Log out something after all elements have been moved
 *
 */
function translateAllAtOnce() {
  const redMovement = moveElement(redBox, targets.red);
  const blueMovement = moveElement(blueBox, targets.blue);
  const greenMovement = moveElement(greenBox, targets.green);
  //   return Promise.all(redMovement, blueMovement, greenMovement);
}

/**
 * reload page
 *
 */
function restart() {
    document.location.reload(true);
}

btnAllByOne.addEventListener("click", () => {
  translateAllAtOnce();
});

btnOneByOne.addEventListener("click", () => {
  translateOneByOne();
});

btnRestart.addEventListener("click", () => {
    restart();
  });
