import math

# input = [2,4,4,6]

# for i in range(len(input),0,3):
# 	x1 = input[i]
# 	y1 = input[i + 1]
#	x2 = input[i + 2]
#	y2 = input[i + 3]
#	print(x1,y1,x2,y2)

x1 = 2
y1 = 4
x2 = 4
y2 = 8

def areaOfCircle():
	pi = 3.14159

	r = math.sqrt((y2 - y1) ** (2) + (x2 - x1) ** (2))
	a = (pi * r ** 2)

	round(a, 3)
	print(a)

areaOfCircle()
