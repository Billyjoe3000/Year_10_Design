import requests
import json
import tkinter as tk

#Get Key
#This is a file not in my respository I don't want you to have it
file = open("..//..//..//API_Keys//fixerkey.txt","r")

key = file.read()

resp = requests.get('http://data.fixer.io/api/latest?access_key='+key)

#Converts response to JSON
data = resp.json()

#print(data["base"])
#print(data["date"])
#print(data["rates"]["CAD"])
#print(data["rates"]["USD"])

country = []
value = []
rate_data = data["rates"]

###########################################################

def action(cur):
	print(rate_data[cur])

###########################################################

for key in rate_data:
	country.append(key)
	value.append(rate_data[key])

#print(country)
#print(value)

###########################################################

root = tk.Tk() # makes root window

# build frame
f1 = tk.Frame(root)

# build widgets
cur_label = tk.Label(f1, text = "Select Currency")
var = tk.StringVar(f1)
var.set(country[0])
dropDown = tk.OptionMenu(f1, var, *country, command = action)

# pack widgets into frame
cur_label.pack()
dropDown.pack()

# pack frame
f1.pack()

root.mainloop() # starts program and waits

