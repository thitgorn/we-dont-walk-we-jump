import React, { Component } from 'react'
import Company from './Company'
import rabbitstale from '../../images/background/rabbitstale.png'
import link from '../../images/background/link.jpg'
import codeandcraft from '../../images/background/codeandcraft.jpg'
import thezero from '../../images/background/thezero.jpg'
import moonshot from '../../images/background/moonshot.png'


export class Background extends Component {
  render() {
    const stage = this.props.senceStage % 5
    return (
        <div>
            { stage === 0 ? <Company text='thezero' img={thezero}/> : null}
            { stage === 1 ? <Company text='link' img={link}/> : null}
            { stage === 2 ? <Company text='codeandcraft' img={codeandcraft}/> : null}
            { stage === 3 ? <Company text='rabbitstale' img={rabbitstale}/> : null}
            { stage === 4 ? <Company text='moonshot' img={moonshot}/> : null}
        </div>
    )
  }
}

export default Background
