'''
1) set parallel arrays (binaryvalues & hexvalues)
2) create an infinite loop
3) try the stuff in the try:
4) IF the stuff in the try: works then skip the except (this is kinda like an if and else statement, if the condition in the if works, it skips the else)
5) print the hexvalues at the same index
6) IF the stuff in the try does not work, then do the stuff in the except
'''

# setting up the parallel arrays with the binary and hex values
# for the same index in the 2 arrays, the values are the same
binaryvalues = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"]
hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

while True: # infinite loop (short for while True == True)
	try: # infinitely try this stuff in here
		userInput = input() # asking the user for an input in the command line
		index = binaryvalues.index(userInput) # comparing the input from the user to values in binaryvalues to get the index in the array (getting the position of the number that was inputed)

	except: # if the stuff in the try fails, then do this:
		print("Invalid Input") # print and inform the user that the input is wrong
		break # break escapes the loop that it is in therefore ending the program

	print(hexvalues[index]) # print the hex value at that same index (recall that they are parallel so the same index corresponds to the same number)

