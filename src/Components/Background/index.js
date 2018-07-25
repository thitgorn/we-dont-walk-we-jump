import React, { Component } from 'react'
import Company from './Company'
import rabbitstale from '../../images/background/rabbitstale.png'
import link from '../../images/background/link.jpg'
import codeandcraft from '../../images/background/codeandcraft.jpg'
import thezero from '../../images/background/thezero.jpg'
import moonshot from '../../images/background/moonshot.png'

import rabbitstalelogo from '../../images/logo/rabbitstale.png'
import linklogo from '../../images/logo/link.png'
import codeandcraftlogo from '../../images/logo/codeandcraft.png'
import thezerologo from '../../images/logo/thezero.png'
import moonshotlogo from '../../images/logo/moonshot.png'

import { Win } from '../Win'


export class Background extends Component {
  render() {
    if(!this.props.isPlaying) {
      return <Company text='thezero' logo={null} img={thezero}/>
    }
    const stage = this.props.senceStage
    return (
        <div>
            { stage === 0 ? <Company text='thezero' logo={thezerologo} img={thezero}/> : null}
            { stage === 1 ? <Company text='link' logo={linklogo} img={link}/> : null}
            { stage === 2 ? <Company text='codeandcraft' logo={codeandcraftlogo} img={codeandcraft}/> : null}
            { stage === 3 ? <Company text='rabbitstale' logo={rabbitstalelogo} img={rabbitstale}/> : null}
            { stage === 4 ? <Company text='moonshot' logo={moonshotlogo} img={moonshot}/> : null}
            { stage >= 5 ? <Win /> : null}
        </div>
    )
  }
}

export default Background
