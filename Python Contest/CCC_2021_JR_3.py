import math

lines = []
processedLines = []

while True:
	currentLine = input()
	currentLine = str(currentLine)

	if (currentLine == "99999"):
		break
	else: 
		lines.append(currentLine)

for i in range(len(lines)):
	digit1 = lines[i][0:1]
	digit2 = lines[i][1:2]
	digits3to5 = lines[i][2:5]
	#print(digit1)
	#print(digit2)
	#print(digits3to5)

	# everything is now an int
	digit1 = int(digit1)
	digit2 = int(digit2)
	digits3to5 = int(digits3to5)

	processedLines.append({"digit1": digit1, "digit2": digit2, "digits3to5": digits3to5})

for i in range(len(processedLines)):
	sumOfDigits = processedLines[i]["digit1"] + processedLines[i]["digit2"]

	if (sumOfDigits == 0):
		direction += ""

	elif (math.remainder(sumOfDigits, 2) != 0):
		direction = "left"

	else:
		direction = "right"

	processedLines[i]["direction"] = direction

for i in range(len(processedLines)):
	output = processedLines[i]["direction"] + " " + str(processedLines[i]["digits3to5"])
	print(output)