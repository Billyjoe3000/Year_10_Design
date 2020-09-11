import tkinter as tk

print("Stage 3")

# conversion gets the value entered
def conversion(*args):
	print("conversion function")

	val = ent_value.get()
	print(val)

	# calling function check01
	check = check01(val)
	print(check)

	if check == True:
		val = removezeros(val)
		print("Val is binary: " + val) 
	else:
		print("Val is not binary")
		lab_results.config(text = "INVALID INPUT") # updating the lab results widget


	ent_value.delete(0,tk.END)

# checks if it's only 0s and 1s
def check01(str):
	print("check01 function") # printing check

# counting the number of 0s and 1s
	num_0 = str.count("0") 
	num_1 = str.count("1")

# checking if they add up to the length
	if num_0 + num_1 == len(str):
		return True
	return False

#function removes front zeros from input val
def removezeros(str):
	for i in range(0, len(str),1):
		if str[i] == "1":
			return str[i:]
	return str
 
# Create root window
root = tk.Tk()

# Building the widgets
lab_instructions = tk.Label(root, text = "Enter Binary")
ent_value = tk.Entry(root)
lab_results = tk.Label(root, text = "--")

# Putting the widgets into the window
lab_instructions.pack()
ent_value.pack()
lab_results.pack()

# Binding the return key to the function called conversion
root.bind("<Return>", conversion)
root.mainloop()