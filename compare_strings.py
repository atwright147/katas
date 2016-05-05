#!/usr/bin/env python3

def compare(a, b):
	count_a = {}
	count_b = {}
	isSame = False
	for i, character in enumerate(str(a)):
		if character in count_a:
			count_a[character] += 1
		else:
			count_a[character] = 1

	for i, character in enumerate(str(b)):
		if character in count_b:
			count_b[character] += 1
		else:
			count_b[character] = 1

	unmatched_item = set(count_a.items()) ^ set(count_b.items())
	if len(unmatched_item) == 0:
		isSame = True

	return isSame


print(compare("abcdef", "fedcba"))
print(compare("aabbcc", "abcabc"))
print(compare("aaaaaa", "bbbbbb"))