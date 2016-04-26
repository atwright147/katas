#!/usr/bin/env python3

from random import randint

cards = list(range(1, 53))
cards_len = len(cards)
print("Initial pack: \n", cards)

i = 1
while i < cards_len:
	random_item = randint(1, cards_len-1)
	cards[0], cards[random_item] = cards[random_item], cards[0]  # http://stackoverflow.com/q/4554130/633056
	i += 1

print("Shuffled pack: \n", cards)
