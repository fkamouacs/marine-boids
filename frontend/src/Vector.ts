class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

/**
 *Represents a 2 dimensional vector starting at (0,0)
*/
class Vector2 {
  public v: Point;

  constructor(v: Point) {
    this.v = v;
  }

  magnitude(): number {
    return Math.sqrt((this.v.x ** 2 + this.v.y ** 2));
  }

  magnitude_squared(): number {
    return this.v.x ** 2 + this.v.y ** 2;
  }
}
