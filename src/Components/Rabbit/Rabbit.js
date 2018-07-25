import React, { Component } from 'react'
import './Rabbit.css'
import rabbitright from '../../images/rabbit/Right.png'
import rabbitleft from '../../images/rabbit/Left.png'
import { keyframes } from 'styled-components'

import climbR01 from '../../images/rabbit/Climb-Right-01.png'
import climbR02 from '../../images/rabbit/Climb-Right-02.png'
import climbR03 from '../../images/rabbit/Climb-Right-03.png'

import climbL01 from '../../images/rabbit/Climb-Left-01.png'
import climbL02 from '../../images/rabbit/Climb-Left-02.png'
import climbL03 from '../../images/rabbit/Climb-Left-03.png'

const climbright = keyframes`
  0% {
    background-image: url('${climbR01}')
  }
  25% {
    background-image: url('${climbR02}')
  }
  50% {
    background-image: url('${climbR03}')
  }
  75% {
    background-image: url('${climbR02}')
  }
  100% {
    background-image: url('${climbR01}')
  }
`

const climbleft = keyframes`
  0% {
    background-image: url('${climbL01}')
  }
  25% {
    background-image: url('${climbL02}')
  }
  50% {
    background-image: url('${climbL03}')
  }
  75% {
    background-image: url('${climbL02}')
  }
  100% {
    background-image: url('${climbL01}')
  }
`

export class Rabbit extends Component {
  render() {
    const left = (20 + (this.props.x * 30)) + '%'
    const rabbit = this.props.turn === 'right' ? rabbitright : rabbitleft
    const climb = this.props.turn === 'right' ? climbright : climbleft
    return (
      <div id='rabbit' style={{ left: left }}>
        <div style={{ width:'100%',
                      height:'100%',
                      backgroundImage: `url('${rabbit}')`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      animation: `2s ${climb} infinite` }}></div>
        {/* <img src={rabbit} alt='rabbit' style={{ width:'100%', height:'auto', animation: `1s ${k} infinite` }}/> */}
      </div>
    )
  }
}

export default Rabbit
