import { width,height } from './Config'

class Map {
    constructor() {
        this.carrot = []
        this.width = width
        this.height = height
        // this.initialize()
    }

    initialize() {
        // create list of carrot
    }

    clear() {
        this.carrot = []
        this.width = 0
        this.height = 0
    }

    isOnCarrot(x,y) {
        return true
    }
}

export default Map