class HashTable {
    constructor(size) {
        this.bucket = {}
        this.numberOfValues = 0
        this.bucketSize = size
    }

    calculateHash(key) {
        return key.toString().length % this.bucketSize
    }

    add(key, value) {
        const hash = this.calculateHash(key)

        if(!this.bucket.hasOwnProperty(hash)) {
            this.bucket[hash] = {}
        }
        if(!this.bucket[hash].hasOwnProperty(key)) {
            this.numberOfValues++
        }
        this.bucket[hash][key] = value
    }

    remove(key) {
        const hash = this.calculateHash(key)
        if(this.bucket.hasOwnProperty(hash) && this.bucket[hash].hasOwnProperty(key)) {
            delete this.bucket[hash][key]
            this.numberOfValues--
        }
        else {
            return `Couldn't find ${key}`
        }
    }

    search(key) {
        const hash = this.calculateHash(key)
        if(this.bucket.hasOwnProperty(hash) && this.bucket[hash].hasOwnProperty(key)) {
            return this.bucket[hash][key]
        }
        else {
            return `Couldn't find ${key}`
        }
    }

    length() {
        return this.numberOfValues
    }

    print() {
        for(const value in this.bucket) {
            for(const key in this.bucket[value]) {
                console.log(this.bucket[value][key])
            }
        }
    }
}