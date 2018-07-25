import { width,height } from './Config'
import Carrot from './Carrot'

class Map {
    constructor() {
        this.carrot = []
        this.width = width
        this.height = height
    }

    initialize() {
        // the first block
        // Math.floor(Math.random() * 10);  0-9
        const firstCarrot = new Carrot(1, 0, 5)
        this.carrot.push(firstCarrot)

        // create list of carrot
        while((this.carrot[this.carrot.length - 1].y + this.carrot[this.carrot.length - 1].height) < this.height) {
            const x = Math.floor(Math.random() * 3);
            const height = Math.floor(Math.random() * 2) + 3;
            const y = ((this.carrot[this.carrot.length - 1].y + 
                        this.carrot[this.carrot.length - 1].height) - 1)
            const carrot = new Carrot(x,y,height)
            this.carrot.push(carrot)
        }

        for(var i = 0 ; i < 20 ; i++) {
            const carrot = new Carrot(0, this.carrot[this.carrot.length - 1].y + this.carrot[this.carrot.length - 1].height - 1, 5)
            this.carrot.push(carrot)
        }
    }

    clear() {
        this.carrot = []
        this.width = 0
        this.height = 0
    }

    isOnCarrot(x,y) {
        for(var i = 0; i < this.carrot.length; i++) {
            if(this.carrot[i].x === x && y >= this.carrot[i].y && y<= this.carrot[i].y + this.carrot[i].height) {
                return true
            }
        }
        return false
    }
}

export default Map