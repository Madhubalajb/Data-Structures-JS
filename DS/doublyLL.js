function Node(data) {
    this.data = data
    this.previous = null
    this.next = null
}

class doublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addData(data) {
        const newNode = new Node(data)
        if(this.head === null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
    }

    insertData(data, position) {
        const newNode = new Node(data)
        let currentNode = this.head
        let previousNode
        if(position === 0) {
            newNode.next = currentNode
            if(currentNode) currentNode.previous = newNode
            this.head = newNode
            this.tail = (this.tail) ? this.tail : newNode
        }
        else {
            for(let i = 1; i < position; i++) {
                currentNode = currentNode.next
            }
            previousNode = currentNode.previous
            previousNode.next = newNode
            newNode.previous = previousNode
            currentNode.previous = newNode
            newNode.next = currentNode
        }
    }

    modifyData(data, position) {
        let currentNode = this.head
        for(let i = 1; i < position; i++) {
            currentNode = currentNode.next
        }
        currentNode.data = data
    }

    removeDataAtPosition(position) {
        let currentNode = this.head
        let previousNode
        let nextNode
        if(position === 0) {
            this.head = this.head.next
            if(this.head) this.head.previous = null
        }
        else {
            for(let i = 1; i < position; i++) {
                currentNode = currentNode.next
            }
            previousNode = currentNode.previous
            nextNode = currentNode.next
            delete(currentNode)
            previousNode.next = nextNode
            nextNode.previous = previousNode
        }
    }

    removeDataAtLast() {
        let currentNode = this.tail
        let previousNode = this.tail.previous
        this.tail = previousNode
        if(previousNode) previousNode.next = null
        delete(currentNode)
        if(!this.tail) this.head = this.tail
    }
    
    reverse() {
        let current = this.head
        let nextNode
        while(current) {
            nextNode = current.next
            current.next = current.previous
            current.previous = nextNode
            if(!current.previous) {
                this.head = current
            }
            current = nextNode
        }
        return this.head
    }
    

    traverseData() {
        let currentNode = this.head
        if(currentNode) {
            console.log(currentNode.data)
            while(currentNode.next !== null) {
                currentNode = currentNode.next
                console.log(currentNode.data)
            }
        }
        else {
            console.log('List is empty')
        }
    }
}