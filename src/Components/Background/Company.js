import React, { Component } from 'react'
import { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const explore = keyframes`
  from {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  to {
    top: 0%;
    left: 3%;
    ttransform: translate(0%,0%);
  }
`

export class Company extends Component {
  render() {
    return (
        <div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', background:'black',
                     animation: `1.5s ${fade}`}}>
            <div style={{ color:'white',
                          background: 'none',
                          position: 'absolute',
                          top: '0%',
                          left: '3%',
                          zIndex: '10000',
                          textShadow: '0 0 10px black',
                          animation: `4s ${explore}` }}>
              <h1>{this.props.text}</h1>
            </div>
            <img src={this.props.img} alt='background' style={{ width: '100%', height: '100vh'}}/>
        </div>
    )
  }
}

export default Company
