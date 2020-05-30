class stack {
    constructor() {
        this.stack = []
    }

    push(number) {
        this.stack.push(number)
        return `Pushed ${number}`
    }

    pop() {
        if(this.stack.length === 0) {
            return 'Stack is empty'
        }
        return `Popped ${this.stack.pop()}`
    }

    top() {
        let length = this.stack.length
        if(length === 0) {
            return 'Stack is empty'
        }
        return `Top - ${this.stack[length - 1]}`
    }

    print() {
        if(this.stack.length === 0) {
            return 'Stack is empty'
        }
        console.log(this.stack)
    }
}