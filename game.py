import pygame
import sys

pygame.init()

width = 1280
height = 720

window = pygame.display.set_mode((width, height))

game_over = False

while not game_over:
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      game_over = True
      
    
  pygame.display.flip()
pygame.quit()