class stack {
    constructor() {
        this.stack = []
    }

    push(value) {
        this.stack.push(value)
    }

    pop() {
        this.stack.pop()
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    length() {
        return this.stack['length']
    }

    areTheyPair(opening, closing) {
        if(opening === '(' && closing === ')')
            return true
        else if(opening === '{' && closing === '}')
            return true
        else if(opening === '[' && closing === ']')
            return true
        else
            return false
    }

    areParanthesesBalanced(expression) {
        let openingParentheses = 0
        let closingParentheses = 0
        
        for(let i = 0; i < expression.length; i++) {
            if(expression[i] === '(' || expression[i] === '{' || expression[i] === '[') {
                openingParentheses++
                this.push(expression[i])
            }
            else if (expression[i] === ')' || expression[i] === '}' || expression[i] === ']') {
                closingParentheses++
                if(this.areTheyPair(this.top(), expression[i])) {
                    this.pop()
                }
            }
        }
        
        if(openingParentheses === closingParentheses && this.length() === 0) {
            return `${expression} is balanced!`
        }
        else {
            this.stack.length = 0
            return `${expression} is not balanced!`
        }
    }
}