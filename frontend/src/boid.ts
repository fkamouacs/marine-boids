import { Vector2 } from "./geometry"

export class Boid {
  public id: string;
  public mass: number;
  public position: Vector2;
  public velocity: Vector2;
  public maxForce: number;
  public maxSpeed: number;
  public orientation: Vector2[];

  constructor(mass: number, position: Vector2 = new Vector2(0, 0), velocity: Vector2 = new Vector2(0, 0),
    maxForce: number, maxSpeed: number, orientation: Vector2[] = [new Vector2(1, 0), new Vector2(0, 1)]) {
    this.id = generateBoidId();
    this.mass = mass;
    this.position = position;
    this.velocity = velocity;
    this.maxForce = maxForce;
    this.maxSpeed = maxSpeed;
    this.orientation = orientation;
  }
}


let generateBoidId = (): string => {
  return crypto.randomUUID();
}
