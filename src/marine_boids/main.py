# src/marine-boids/main.py
import random

import pygame

from . import boids
from .constants import SCREEN

def main() -> None:
    pygame.init()
    clock = pygame.time.Clock()
    running = True

    boid_list = boids.generate_boids(4)

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        SCREEN.fill("purple")

        for boid in boid_list:
            pygame.draw.circle(SCREEN, "red", boid["position"], 40) 

        pygame.display.flip()

        clock.tick(60)

    pygame.quit()

if __name__ == "__main__":
    main()
