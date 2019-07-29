class Circle {
  /**
   *Creates an instance of Circle.
   * @param {number} x
   * @param {number} y
   * @param {number} r
   * @param {number} startAngle
   * @param {number} endAngle
   * @param {string} fillColor
   * @memberof Circle
   */
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  /**
   * draw circle in canvas
   *
   * @param {DOMelement} c => canvas
   * @memberof Circle
   */
  draw(c) {
    const ctx = c.getContext("2d");
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      2 * Math.PI
    );
    ctx.fillStyle = this.fillColor;
    ctx.fill();

    ctx.stroke();
  }
}

/**
 * create random
 *
 * @param {number} min
 * @param {number} max
 * @returns => random number
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomCircle() {
  const r = getRandomInt(5, 50) + 1;
  const y = getRandomInt(r, 80) + 1;
  const x = getRandomInt(r, 100) + 1;
  const color = getRandomColor();

  console.log("x =", x, "y=", y, "r=", r);
  return new Circle(x, y, r, 0, 2 * Math.PI, color);
}

/**
 * display circles in pages
 *
 */
function display() {
  const circleCanvas = document.querySelector("#circle");
  console.log(circleCanvas);
  const circle = randomCircle();
  circle.draw(circleCanvas);
}

display();
