import React, { Component } from 'react'
import Company from './Company'
import rabbitstale from '../../images/background/4_Rabbit.jpg'
import link from '../../images/background/2_Link.jpg'
import codeandcraft from '../../images/background/3_Code.jpg'
import thezero from '../../images/background/1_Zero.jpg'
import moonshot from '../../images/background/5_Moonshot.jpg'

import rabbitstalelogo from '../../images/logo/rabbitstale.png'
import linklogo from '../../images/logo/link.png'
import codeandcraftlogo from '../../images/logo/codeandcraft.png'
import thezerologo from '../../images/logo/thezero.png'
import moonshotlogo from '../../images/logo/moonshot.png'

import { Win } from '../Win'


export class Background extends Component {
  render() {
    const stage = this.props.senceStage
    return (
        <div>
            { stage === 0 ? <Company isPlaying={this.props.isPlaying} text='thezero' logo={thezerologo} img={thezero}/> : null}
            { stage === 1 ? <Company isPlaying={this.props.isPlaying} text='link' logo={linklogo} img={link}/> : null}
            { stage === 2 ? <Company isPlaying={this.props.isPlaying} text='codeandcraft' logo={codeandcraftlogo} img={codeandcraft}/> : null}
            { stage === 3 ? <Company isPlaying={this.props.isPlaying} text='rabbitstale' logo={rabbitstalelogo} img={rabbitstale}/> : null}
            { stage === 4 ? <Company isPlaying={this.props.isPlaying} text='moonshot' logo={moonshotlogo} img={moonshot}/> : null}
            { stage >= 5 ? <Win /> : null}
        </div>
    )
  }
}

export default Background
