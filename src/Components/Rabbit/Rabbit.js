import React, { Component } from 'react'
import './Rabbit.css'

export class Rabbit extends Component {
  render() {
    const left = (20 + (this.props.x * 30)) + '%'
    return (
      <div id='rabbit' style={{ left: left}}>
      </div>
    )
  }
}

export default Rabbit
