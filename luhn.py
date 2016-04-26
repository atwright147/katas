#!/usr/bin/env python3

numbers = (4916196275740695, 4929934628182370, 5542651608405662, 5350400849650731)
print(numbers)

def validateLuhn(number):
	final = 0
	for i, character in enumerate(reversed(str(number))):
		digit = int(character)
		if i % 2 == 0:  # only do to every other character
			multiplied = digit * 2
			if multiplied > 9:
				digit = multiplied - 9
			else:
				digit = multiplied
		final += digit
	print(final % 10 == 0)

for number in numbers:
	validateLuhn(number)