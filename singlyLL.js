function Node(data) {
    this.data = data
    this.next = null
}

class singlyLinkedList {
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
            this.tail = newNode
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
        }
        else {
            for(let i = 1; i <= position; i++) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = newNode
            newNode.next = currentNode
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
        }
        else {
            for(let i = 1; i <= position; i++) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            nextNode = currentNode.next
            previousNode.next = nextNode
        }
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