import React, { Component } from 'react'
import './Rabbit.css'
import rabbitright from '../../images/rabbit/Right-01.png'
import rabbitleft from '../../images/rabbit/Left-01.png'

export class Rabbit extends Component {
  render() {
    const left = (20 + (this.props.x * 30)) + '%'
    const rabbit = this.props.turn === 'right' ? rabbitright : rabbitleft
    return (
      <div id='rabbit' style={{ left: left }}>
        <img src={rabbit} alt='rabbit' style={{ width:'100%', height:'auto' }}/>
      </div>
    )
  }
}

export default Rabbit
