import leftImage from '../images/carrot/L.png'
import centerImage from '../images/carrot/center.png'
import rightImage from '../images/carrot/R.png'

class Carrot {
    constructor(x, y, height) {
        this.x = x
        this.y = y
        this.height = height
        
        const image = Math.floor(Math.random() * 3)
        switch(image) {
            case 0: this.image = leftImage; break;
            case 1: this.image = centerImage; break;
            case 2: this.image = rightImage; break;
            default:;
        }
    }
}

export default Carrot