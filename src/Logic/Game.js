import Rabbit from './Rabbit'
import Map from './Map'
import { mapInterval } from './Config';

class Game {
    constructor (notify) {
        this.Map = new Map()
        this.Rabbit = new Rabbit()
        this.isPlaying = false
        this.notify = notify
        this.playing()
        this.Map.initialize()
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
                this.Rabbit.moveUp()
                console.log(this.Rabbit);
                if(this.Rabbit.y % mapInterval === 0) {
                    this.notify()
                }
                console.log(this.Map.isOnCarrot(this.Rabbit.x,this.Rabbit.y));
            }
        },490)
    }

    restart() {
        this.Map.clear()
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