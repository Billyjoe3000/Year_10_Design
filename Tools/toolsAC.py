'''
isEven takes a single integer a >= 0
- if a is even it will return true
- if a is odd it will return false
'''
def isEven (a):

	if a % 2 == 0:
		return True
		
	return False

# Test code for isEven
print(isEven(0))
print(isEven(10))
print(isEven(7))

'''
missing_char takes a string and removes the n letter
- missing_char('kitten', 1) → 'ktten'
- missing_char('kitten', 0) → 'itten'
- missing_char('kitten', 4) → 'kittn'
'''
def missing_char(str, n):
  newStr = ""
  newStr = str[0:n] + str[n + 1: len(str)]
  
  return newStr