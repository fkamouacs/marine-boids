import random

from . import types

def generate_boids(amount: int) -> list[types.Boid]:
    boids = []
    for i in range(amount):
        new_boid = types.create_boid()
        boids.append(new_boid)

    return boids

