function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

class BST {
   constructor() {
       this.root = null
   }
   
   insert(data) {
       const newNode = new Node(data) 
       if(!this.root) {
           this.root = newNode
       }
       else {
           let current = this.root
           while(current) {
                if(data <= current.data) {
                    if(!current.left) {
                        current.left = newNode
                        break
                    }
                    current = current.left
                }
                else {
                    if(!current.right) {
                        current.right = newNode
                        break
                    }
                    current = current.right 
                }
           }
       }
   }

   search(data, root = this.root) {
        if(!root) {
            console.log(`BST is empty / couldn't find ${data}`)
            return false
        }
        else if (data === root.data) {
           return root
        }
        else if(data < root.data) {
            return this.search(data, root.left)
        }
        else if(data > root.data) {
            return this.search(data, root.right)
        }
   }

   remove(data, root = this.root) {
        if(!root) {
            console.log('BST is empty')
            return null
        }
        else if(data < root.data) {
            root.left = this.remove(data, root.left)
            return root
        }
        else if(data > root.data) {
            root.right = this.remove(data, root.right)
            return root
        }
        else if(data === root.data) {
            if(root.left === null && root.right === null) { // case 1: if gonna remove node has no child i.e. leaf node
                if (root === this.root) {
                    this.root = null
                }
                return null
            }
            else if(root.left === null) { // case 2(a) : if gonna remove node has only one child (right one)
                if (root === this.root) {
                    this.root = root.right
                }
                return root.right
            }
            else if(root.right === null) { // case 2(b): if gonna remove node has only one child (left one)
                if (root === this.root) {
                    this.root = root.left
                }
                return root.left
            }
             // case 3: if gonna remove node has tow children (both left & right)
            let minValue = this.findMin(root.right)
            root.data = minValue
            if (root === this.root) {
                this.root = root
            }
            root.right = this.remove(minValue, root.right)
            return root
        }
        else {
            return `Couldn't find ${data}`
       }
   }

   findMin(root = this.root) {
       if(root) {
            let current = root
            while(current.left) {
                current = current.left
            }
            return current.data
       }
       else {
           return 'BST is empty'
       }
    }

   findMax(root = this.root) {
       if(root) {
            let current = root
            while(current.right) {
                current = current.right
            }
            return current.data
       }
       else {
           return 'BST is empty'
       }
   }

   findHeight(root = this.root) {
        if(!root)
            return -1
        else
            return Math.max(this.findHeight(root.left), this.findHeight(root.right)) + 1
   }

   levelOrder() {
       if(!this.root) {
           return 'BST is empty'
       }
       const queue = []
       const print = []
       queue.push(this.root)
       while(queue['length']) {
            let current = queue[0]
            queue.shift()
            print.push(current.data)
            if(current.left)
                queue.push(current.left)
            if(current.right)
                queue.push(current.right)
       }
       return print.join(' ')
   }

   preOrder(root = this.root) {
       if(!root) {
           return 
       }
       else {
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
       }
   }

   inOrder(root = this.root) {
       if(!root) {
           return 
       }
       else {
           this.inOrder(root.left)
           console.log(root.data)
           this.inOrder(root.right)
       }
   }

   postOrder(root = this.root) {
       if(!root) {
           return
       }
       else {
           this.postOrder(root.left)
           this.postOrder(root.right)
           console.log(root.data)
       }
   }

   IsBST(root, minValue, maxValue) {
        if(!root)
            return true
        if(root.data < minValue && root.data > maxValue && this.IsBST(root.left, minValue, root.data) && this.IsBST(root.right, root.data, maxValue))
            return true
        else
            return false
   }
}