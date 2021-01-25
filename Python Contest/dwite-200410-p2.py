import math

input = "00:00"

h = input[0:2]
h = int(h)

m = input[3:5]

XM = " AM"

def calcTime():
	if 12 <= h <= 23:
		XM = " PM"
		h = h - 12

	if h == 0:
		h = 12

	h = str(h)

	print(h + ":" + m + XM)

calcTime()