console.log("loaded");

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

const position = {
  top: 20,
  botton: 300,
  left: 400,
  right: 20
};

/**
 * Should translate the circles one at a time from their random start position to their target.
 * Log something out after each element has been moved
 *
 */
function translateOneByOne() {
  //red circle move
  moveElement(redBox, {
    x: position.right - parseInt(redBox.style.left),
    y: position.botton - parseInt(redBox.style.top)
  })
    .then(() => {
      //blue circle move
      console.log("red circle has been moved", redBox.style.top ,redBox.style.left);
      return moveElement(blueBox, {
        x: position.left - parseInt(blueBox.style.left),
        y: position.botton - parseInt(blueBox.style.top)
      });
    })
    .then(() => {
      //green circle move
      console.log("blue circle has been moved");
      return moveElement(greenBox, {
        x: position.left - parseInt(greenBox.style.left),
        y: position.top - parseInt(greenBox.style.top)
      });
    })
    .then(() => {
      console.log("green circle has been moved");
    });
}

// function translateAllAtOnce(){

// }

translateOneByOne();
