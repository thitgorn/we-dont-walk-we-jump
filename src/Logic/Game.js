import Rabbit from './Rabbit'
import Map from './Map'
import { mapInterval, height } from './Config';

class Game {
    constructor (notify) {
        this.Map = new Map()
        this.Rabbit = new Rabbit()
        this.deadCount = 0
        this.isPlaying = false
        this.notify = notify
        this.playing()
        this.Map.initialize()
        this.endSence = false
    }

    play() {
        this.isPlaying = true
    }

    pause() {
        this.isPlaying = false
    }

    playing() {
        setInterval(() => {
            if(this.isPlaying) {
                if(this.Rabbit.y >= this.Map.carrot[this.Map.carrot.length - 1].y + this.Map.carrot[this.Map.carrot.length - 1].height - 1) {
                    // win
                } else {
                    this.Rabbit.moveUp()
                }
                if(this.Rabbit.y >= height) {
                    this.endSence = true
                }
                if(this.Rabbit.y % mapInterval === 0) {
                    this.notify()
                }
                if(!this.Map.isOnCarrot(this.Rabbit.x,this.Rabbit.y)) {
                    this.dead()
                    this.deadCount += 1
                    this.isPlaying = false
                }
                this.update()
            }
        },450)
    }

    restart() {
        // this.Map.clear()
        this.Rabbit.reset()
        this.isPlaying = false
    }

    moveLeft() {
        if (!this.isPlaying) 
            return
        this.Rabbit.moveLeft()
    }

    moveRight() {
        if (!this.isPlaying) 
            return
        this.Rabbit.moveRight()
    }
}

export default Game