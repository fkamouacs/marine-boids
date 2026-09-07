# src/marine-boids/main.py
import pygame
import random

def main() -> None:
    pygame.init()
    screen = pygame.display.set_mode((1200, 720))
    clock = pygame.time.Clock()
    running = True


    temp_boid = {
            "name": "temp",
            "pos": pygame.Vector2(random.randint(0,screen.get_width() // 2), random.randint(0,screen.get_height() // 2)) 
        }

    boids = [temp_boid]

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        screen.fill("purple")

        for boid in boids:
            pygame.draw.circle(screen, "red", boid["pos"], 40) 

        pygame.display.flip()

        clock.tick(60)

    pygame.quit()

if __name__ == "__main__":
    main()
