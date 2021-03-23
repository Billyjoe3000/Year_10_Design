import math

# P = 5 x B -400
# Find P when given B

B = input()
B = int(B)

P = (5 * B) - 400

if (B == 100):
	level = 0
elif (B > 100):
	level = -1
else:
	level = 1

print(P)
print(level)