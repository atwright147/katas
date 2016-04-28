#!/usr/bin/env python3

def staircase(n):
	for i, step in enumerate(range(1, n+1), 1):
		spaces = n - i
		hashes = i
		out_spaces = ""
		out_hashes = ""
		x = 0
		while x < spaces:
			out_spaces += " "
			x += 1
		y = 0
		while y < hashes:
			out_hashes += "#"
			y += 1
		print(out_spaces + out_hashes)


staircase(6)