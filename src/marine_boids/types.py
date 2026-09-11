import uuid
import random
from dataclasses import dataclass, field

import pygame
from pygame.math import Vector2
from .constants import SCREEN

@dataclass
class Boid:
    id: str
    mass: float
    position: Vector2
    velocity: Vector2
    max_force: float
    max_speed: float
    forward: Vector2 

    @classmethod
    def create_boid(cls, max_force, max_speed) -> "Boid":
        return cls(
            id=str(uuid.uuid4()),
            position=pygame.Vector2(random.randint(0,SCREEN.get_width()), random.randint(0,SCREEN.get_height())),
            velocity=pygame.Vector2(random.randint(-5,5), random.randint(-5,5)),
            mass=1,
            max_force=max_force,
            max_speed=max_speed,
            forward=pygame.Vector2(random.choice([-1,1]))
        )
