class Rabbit {
    constructor() {
        this.x = 1
        this.y = 0
        console.log(this)
    }

    moveUp() {
        this.y+=1
    }

    moveRight() {
        this.x = (this.x+1) % 3
        console.log(this)
    }

    moveLeft() {
        this.x = (this.x-1)
        if(this.x < 0) {
            this.x = 2
        }
        console.log(this)
    }

    reset() {
        this.x = 1
        this.y = 0
    }
}

export default Rabbit