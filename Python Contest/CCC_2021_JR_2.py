count = input()
count = int(count)

bids = []
bidAmounts = []

for i in range(count):
	person = input()
	bid = input()
	bid = int(bid)
	bids.append([person, bid])
	bidAmounts.append(bid)

#print(bids)
#print(bidAmounts)

highestBid = max(bidAmounts)

for i in range(count):
	if highestBid == bids[i][1]:
		print(bids[i][0])
		break

# what's the highest bid?
# is there a tie?
# if there is, who is first?