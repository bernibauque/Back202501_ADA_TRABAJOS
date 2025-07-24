export class Circle {
    constructor(private radius: number) {}
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  export class Square {
    constructor(private side: number) {}
  
    area(): number {
      return this.side * this.side;
    }
  }
  