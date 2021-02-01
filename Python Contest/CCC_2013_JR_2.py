word = input()

def check(char):
	#print(char)
	if (char == "I" or char == "O" or char == "S" or char == "H" or char == "Z" or char == "X" or char == "N"):
		return True
	else:
		return False

for i in range(len(word)):
	#print(word[i])
	#print(check(word[i]))

	if (check(word[i]) == False):
		print("NO")
		quit()

print("YES")