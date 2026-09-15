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

  equals(other: Vector2): boolean {
    if (!other) return false;
    return this.x == other.x && this.y == other.y;
  }

  magnitude(): number {
    return Math.sqrt((this.x ** 2 + this.y ** 2));
  }

  magnitude_squared(): number {
    return this.x ** 2 + this.y ** 2;
  }

  plus(v: Vector2): Vector2 {
    return new Vector2(this.x + v.x, this.y + v.y);
  }
}
