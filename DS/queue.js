class queue {
    constructor() {
        this.queue = []
    }

    enqueue(value) {
        this.queue.push(value)
        return `${value} enqueued`
    }

    dequeue() {
        if(this.queue.length === 0) {
            return 'Queue is empty'
        }
        return `${this.queue.shift()} dequeued`
    }

    front() {
        if(this.queue.length === 0) {
            return 'Queue is empty'
        }
        return this.queue[0]
    }

    rear() {
        if(this.queue.length === 0) {
            return 'Queue is empty'
        }
        return this.queue[this.queue.length - 1]
    }

    print() {
        if(this.queue.length === 0) {
            return 'Queue is empty'
        }
        console.log(this.queue.join())
    }
}