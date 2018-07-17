import Rabbit from './Rabbit'
import Map from './Map'

class Game {
    constructor () {
        this.Map = new Map()
        this.Rabbit = new Rabbit()
        this.isPlaying = false
    }

    play() {
        this.isPlaying = true
    }

    pause() {
        this.isPlaying = false
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