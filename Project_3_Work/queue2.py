class Queue:
 
    def __init__(self, capacity):
        self.front = 0
        self.size = 0 
        self.rear = capacity - 1 
        self.queue = [None] * capacity
        self.capacity = capacity
 
    def EnQueue(self, item):
        if self.size == self.capacity: 
            print("Queue is Full")
        
        else:
            self.rear = (self.rear + 1) % (self.capacity)
            self.queue[self.rear] = item
            self.size = self.size + 1
            print("% s enqueued to queue"  % str(item))

    def DeQueue(self):
        if self.size == 0:
            print("Queue is Empty")
        
        else:
            print("%s dequeued from queue" % str(self.queue[self.front]))
            self.front = (self.front + 1) % (self.capacity)
            self.size = self.size - 1
            
    def que_front(self):
        if self.size == 0:
            print("Queue is Empty")
        
        else:
            print("Front item is", self.queue[self.front])

    def que_rear(self):
        if self.size == 0:
            print("Queue is Empty")

        else:
            print("Rear item is",  self.queue[self.rear])
 
queue = Queue(10)
queue.EnQueue(1)
queue.EnQueue(2)
queue.EnQueue(3)
queue.DeQueue()
queue.DeQueue()
queue.DeQueue()
queue.DeQueue()

"""
Expected output:
1 2 3
1 2 3
"""