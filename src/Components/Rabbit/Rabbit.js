import React, { Component } from 'react'
import './Rabbit.css'

export class Rabbit extends Component {
  render() {
    const left = (20 + (this.props.x * 30)) + '%'
    console.log(this.props.x)
    return (
      <div id='rabbit' style={{ left: left}}>
        rabbit
      </div>
    )
  }
}

export default Rabbit
