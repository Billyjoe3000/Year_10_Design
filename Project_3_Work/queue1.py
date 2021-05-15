"""
Defined attributes in __init__

self.front = POSITION of the front of the queue in the array
self.rear = POSITION of the rear of the queue in the array
self.size = Total size of the current queue
self.Q = The actual queue array
self.capacity = The maximum size of the queue parsed to the class via the __init__ function capacity variable (constant)

self.rear initial = 29 (capacity = 30)
1st enqueue self.rear = 30 % 30 = 0
2nd enqueue self.rear = 0 + 1 % 30 = 1
3rd enqueue self.rear = 1 + 1 % 30 = 2

NOTHING is ever removed from the queue entirely, the front and rear are just shifted
"""

class Queue:
 
    # __init__ function
    def __init__(self, capacity):
        self.front = self.size = 0 # the starting size and the starting position of the queue is always 0
        self.rear = capacity -1 # the starting position of the rear of the queue is always the capacity - 1
        self.Q = [None]*capacity
        self.capacity = capacity
     
    # Queue is full when size becomes
    # equal to the capacity
    def isFull(self):
        return self.size == self.capacity
     
    # Queue is empty when size is 0
    def isEmpty(self):
        return self.size == 0
 
    # Function to add an item to the queue.
    # It changes rear and size
    def EnQueue(self, item):
        if self.isFull(): # check if the queue is full, if it is full it does not do the other stuff
            print("Full")
            return
        self.rear = (self.rear + 1) % (self.capacity) # changing the position of the rear to the position of the last thing in the list
        self.Q[self.rear] = item # queuing the item into the self.Q attribute
        self.size = self.size + 1 # increasing the size
        print("% s enqueued to queue"  % str(item))
 
    # Function to remove an item from queue.
    # It changes front and size
    def DeQueue(self):
        if self.isEmpty():
            print("Empty")
            return
         
        print("% s dequeued from queue" % str(self.Q[self.front])) # returning the item on the front
        self.front = (self.front + 1) % (self.capacity) # adding +1 to the front shifting it up the queue
        self.size = self.size -1 # decreasing the size
         
    # Function to get front of queue
    def que_front(self):
        if self.isEmpty():
            print("Queue is empty")
 
        print("Front item is", self.Q[self.front])
         
    # Function to get rear of queue
    def que_rear(self):
        if self.isEmpty():
            print("Queue is empty")
        print("Rear item is",  self.Q[self.rear])
 
 
# Driver Code
if __name__ == '__main__':
 
    queue = Queue(30)
    queue.EnQueue(10)
    queue.EnQueue(20)
    queue.EnQueue(30)
    queue.EnQueue(40)
    queue.DeQueue()
    queue.que_front()
    queue.que_rear()