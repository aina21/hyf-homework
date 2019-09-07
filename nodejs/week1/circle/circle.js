class Circle{
    constructor(radius){
        this.radius = radius;
    }

    /**
     * diameter of circle
     *
     * @returns number
     * @memberof Circle
     */
    getDiameter(){
        return this.radius * 2;
    }

    /**
     * circumference of circle
     *
     * @returns number
     * @memberof Circle
     */
    getCircumference(){
        return this.radius * 2 * Math.PI;
    }

    /**
     * area of circle
     *
     * @returns number
     * @memberof Circle
     */
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

const circle = new Circle(10);
console.log(circle.getDiameter()); // 20
console.log(circle.getCircumference()); // 62.83185307179586
console.log(circle.getArea()); // 314.1592653589793
