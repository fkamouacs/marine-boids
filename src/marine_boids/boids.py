import random

from pygame import Vector2

from marine_boids import types

def generate_boids(amount: int) -> list[types.Boid]:
    boids = []
    for i in range(amount):
        new_boid = types.create_boid()
        boids.append(new_boid)

    return boids


def distance(a: Vector2, b: Vector2) -> float:
    return a.distance_to(b)

def distance_squared(a: Vector2, b: Vector2) -> float:
    return a.distance_squared_to(b)
