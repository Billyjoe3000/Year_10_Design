game1 = input()
game2 = input()
game3 = input()
game4 = input()
game5 = input()
game6 = input()

data = game1 + game2 + game3 + game4 + game5 + game6

count_W = 0

for i in range(6):
	if (data[i] == "W"):
		count_W += 1

if (count_W >= 5):
	print(1)
elif (count_W >= 3):
	print(2)
elif (count_W >= 1):
	print(3)
else:
	print(-1)