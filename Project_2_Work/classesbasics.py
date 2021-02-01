class Fraction:
	# blueprint to make an object
	def __init__(self, n, d):
		self.num = n # adding attibute "num" as imported variable n to object self
		self.den = d # adding attribute "den" as imported variable d to object self

		# self = {num = n, den = d}

	# creating a method to modify the fraction, changed to multiplication because addition was too complex :)
	def multiplyFraction(self, f2): 

		# self = {num = 5, den = 6}
		# f2 = {num = 3, den = 8}
		return Fraction(self.num * f2.num, self.den * f2.den) # turns out new Fraction does not work, that's a js thing
		# returning {5 * 3, 6 * 8}

	# creating method to print a fraction with a slash in between
	def printFraction(self):
		print(str(self.num) + "/" + str(self.den))
		# printing the num attribute + "/" + the den attribute

# Write a program that takes two fractions and adds them

f1 = Fraction(5, 6) # creating new object {num = 5, den = 6}
f2 = Fraction(3, 8) # creating new object {num = 3, den = 8}
fsum = f1.multiplyFraction(f2) # creating a new variable called fsum and invoking method multiplyFraction and passing f1 as self and f2 as f2

f1.printFraction() # invoking printFraction and passing object f1 as self
f2.printFraction() # invoking printFraction and passing object f2 as self
fsum.printFraction() # invoking printFraction and passing object fsum as self