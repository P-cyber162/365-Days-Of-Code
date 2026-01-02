interface Shape {
    area(): number;
}

class Square implements Shape {
    side: number;
    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const square = new Square(5);
const circle = new Circle(4);

console.log(square.area());
console.log(circle.area());