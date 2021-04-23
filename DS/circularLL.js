function Node(data) {
    this.data = data
    this.next = null
}

class circularLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addData(data) {
        const newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
            this.tail.next = this.head
        }
    }

    insertData(data, position) {
        const newNode = new Node(data)
        let currentNode = this.head
        let previousNode
        if(position === 0) {
            this.head = newNode
            newNode.next = currentNode
            this.tail = (this.tail) ? this.tail : newNode
            this.tail.next = this.head
        }
        else {
            for(let i = 1; i <= position; i++) {
                previousNode = currentNode 
                currentNode = currentNode.next
            }
            if(!currentNode) {
                previousNode.next = newNode
                newNode.next = currentNode
            }
            else {
                previousNode.next = newNode
                this.tail = newNode
                this.tail.next= this.head
            }
        }
    }

    modifyData(data, position) {
        let currentNode = this.head
        for(let i = 1; i <= position; i++) {
            currentNode = currentNode.next
        }
        currentNode.data = data
    }

    removeData(position) {
        let currentNode = this.head
        let previousNode
        let nextNode
        if(position === 0) {
            nextNode = currentNode.next
            this.head = nextNode
            this.tail.next = this.head
        }
        else {
            for(let i = 1; i <= position; i++) {
                previousNode = currentNode 
                currentNode = currentNode.next 
            }
            if(currentNode === this.tail) {
                this.tail = previousNode
                this.tail.next = this.head
            }
            else {
                nextNode = currentNode.next 
                previousNode.next = nextNode
            }
        }
    }

    traverseData() {
        let currentNode = this.head
        if(currentNode) {
            console.log(currentNode.data)
            while(currentNode.next !== this.head) {
                currentNode = currentNode.next
                console.log(currentNode.data)
            }
        }
        else {
            console.log('List is empty')
        }
    }
}