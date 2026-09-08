import uuid
import random
from typing import TypedDict, NotRequired

import pygame
from pygame.math import Vector2
from .constants import SCREEN

class Boid(TypedDict):
    id: NotRequired[str]
    position: NotRequired[Vector2]

def create_boid() -> Boid:
    return {
        "id": str(uuid.uuid4()),
        "position": pygame.Vector2(random.randint(0,SCREEN.get_width()), random.randint(0,SCREEN.get_height()))  }
