import tkinter as tk

print("Stage 1")

def conversion(*args):
	print("working")

	val = ent_value.get()
	print(val)

	# Check to ensure it's just 0s and 1s

	ent_value.delete(0,tk.END)

 
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