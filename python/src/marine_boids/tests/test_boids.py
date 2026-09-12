import pygame

from marine_boids.boids import distance, distance_squared

def test_distance():
    assert distance(pygame.Vector2(0,0), pygame.Vector2(3,4)) == 5

def test_distance_sqaured():
    assert distance_squared(pygame.Vector2(0,0), pygame.Vector2(3,4)) == 25
