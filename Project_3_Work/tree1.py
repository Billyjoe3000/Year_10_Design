"""
This class is a single node in the tree
It has 3 properties:
1) Value (what is the value of this node?)
2) Left Child (what is the node connected on the left side?)
3) Right Child (what is the node connected on the right side?)
"""
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

"""
Driver code to create a tree
1) Create the initial node called "root"
2) Create a child node under the root node using root.left or root.right 

root.left sets the value of self.left in the class
root.right sets the value of self.right in the class
By setting root.left or root.right as a Node class, we're creating a new node inside of the root node, thus the new node is the child and "root" is the parent
"""
root = Node(1) # Step 1
root.left = Node(2) # Step 2... repeat
root.right = Node(3)
root.left.left = Node(4) # The next level of child nodes under the root.left node
root.left.right = Node(5)