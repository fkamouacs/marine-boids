export interface Point {
  x: number;
  y: number;
}

/**
 *Represents a 2 dimensional vector starting at (0,0)
*/
export class Vector2 implements Point {
  public x: number;
  public y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  magnitude(): number {
    return Math.sqrt((this.x ** 2 + this.y ** 2));
  }

  magnitude_squared(): number {
    return this.x ** 2 + this.y ** 2;
  }
}
