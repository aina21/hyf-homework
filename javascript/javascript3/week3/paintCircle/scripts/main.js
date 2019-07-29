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
   * @param {canvas} c => canvas
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
 * display circles in pages
 *
 */
function display() {
  const circleCanvas = document.querySelector("#circle");
  console.log(circleCanvas);
  const circle = new Circle(50, 50, 20, 0, 2 * Math.PI, "#3AB8FF");
  circle.draw(circleCanvas);
}

display();
