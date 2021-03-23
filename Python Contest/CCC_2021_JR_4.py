def swap(letters, letter1Position, letter2Position):
	letter1 = letters[letter1Position]
	letter2 = letters[letter2Position]

	letters[letter1Position] = letter2
	letters[letter2Position] = letter1

	return letters

lettersSTR = input()
lettersSTR = str(lettersSTR)
lettersARRAY = []
count = 0

for i in range(len(lettersSTR)):
	lettersARRAY.append(lettersSTR[i])

#print(lettersARRAY)
for k in range(20):
	for i in range(len(lettersARRAY)):
		if (lettersARRAY[i] == "L"):
			
			for j in range(i):
				
				if (lettersARRAY[j] == "S"):
					swap(lettersARRAY, i, j)
					count += 1
					break

				elif (lettersARRAY[j] == "M"):
					swap(lettersARRAY, i, j)
					count += 1
					break

		elif (lettersARRAY[i] == "S"):
			
			for g in range(len(lettersARRAY), i, -1):
				
				if (lettersARRAY[len(lettersARRAY) - (g + 1)] == "M"):
					swap(lettersARRAY, i, len(lettersARRAY) - (g + 1))
					count += 1
					break

print(count)