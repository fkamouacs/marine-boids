import uuid
import random
from typing import TypedDict, NotRequired

import pygame
from pygame.math import Vector2
from .constants import SCREEN

class Boid(TypedDict):
    id: NotRequired[str]
    position: Vector2
    velocity: Vector2

def create_boid() -> Boid:
    return {
        "id": str(uuid.uuid4()),
        "position": pygame.Vector2(random.randint(0,SCREEN.get_width()), random.randint(0,SCREEN.get_height())),
        "velocity": pygame.Vector2(random.randint(-1,1), random.randint(-1,1))
    }
