class Books:
    def __init__(self): # defining the variables in the class
        self.l = 0
        self.m = 0
        self.s = 0
    def add(self, book):
        if book =='L': # if there is an l then
            self.l += 1 # counting the total amount of books in each size
        if book == 'M':
            self.m += 1
        if book == 'S':
            self.s += 1
books = input() # taking input
count = Books() # invoking class initialization

for book in books: # looping through books and counting them using the class add attribute
    count.add(book) 

# defining seperate ones for the l, m, and s sections
l = Books()
m = Books()

k = 0 # defining a starting point that carries through multiple for loops

for i in range(count.l): # counting through the length of the l section
    l.add(books[k]) # using the same class to count the amount of l, m, and s in the l section
    k += 1 # adding 1 to the starting point
for i in range(count.m): # counting through the length of the m section
    m.add(books[k]) # using the same class to count the amount of l, m, and s in the m section
    k += 1

print(l.m + l.s + m.l + m.s - min(m.l, l.m))