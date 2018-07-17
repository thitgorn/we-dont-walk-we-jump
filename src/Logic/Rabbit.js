class Rabbit {
    constructor() {
        this.x = 1
        this.y = 0
    }

    moveUp() {
        this.y+=1
    }

    moveRight() {
        this.x = (this.x+1) % 3
    }

    moveLeft() {
        this.x = (this.x-1)
        if(this.x < 0) {
            this.x = 2
        }
    }

    reset() {
        this.x = 1
        this.y = 0
    }
}

export default Rabbit