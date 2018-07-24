import React, { Component } from 'react'
import rabbitstale from '../../images/background/rabbitstale.png'
import link from '../../images/background/link.jpg'
import codeandcraft from '../../images/background/codeandcraft.jpg'
import thezero from '../../images/background/thezero.jpg'
import moonshot from '../../images/background/moonshot.png'


export class Background extends Component {
  render() {
    let background = ''
    switch(this.props.senceStage % 5) {
        case 0: background = thezero; break;
        case 1: background = link; break;
        case 2: background = codeandcraft; break;
        case 3: background = rabbitstale; break;
        case 4: background = moonshot; break;
        default:;
    }
    return (
        <div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh'}}>
            <img src={background} alt='background' style={{ width: '100%', height: '100vh'}}/>
        </div>
    )
  }
}

export default Background
