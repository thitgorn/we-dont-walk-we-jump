import React, { Component } from 'react'
import { keyframes } from 'styled-components'

export class Company extends Component {
  render() {
    let fade,explore,move
    if(this.props.isPlaying) {
      fade = keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
      `

      explore = keyframes`
      from {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      to {
        top: 1%;
        left: 3%;
        ttransform: translate(0%,0%);
      }
      `

      move = keyframes`
      from {
        height: 120vh;
      }
      to {
        height: 100vh;
      }
      `
    }

    return (
        <div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', background:'black',
                     animation: `1.5s ${fade}`}}>
            <div style={{ color:'white',
                          background: 'none',
                          position: 'absolute',
                          top: '1%',
                          left: '3%',
                          zIndex: '10000',
                          textShadow: '0 0 10px black',
                          animation: `4s ${explore}` }}>
              <div style={{ background: 'rgba(0,0,0,0.5)' }}>
                { this.props.logo ? 
                  <img src={this.props.logo} alt='logo' style={{ width: '100px', height: 'auto'}}/>
                  : null
                }
              </div>
            </div>
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '100vh',
                            backgroundImage: `url('${this.props.img}')`, backgroundSize: 'cover', backgroundPosition: 'center',
                            animation: `13s ${move}` }}/>
              {/* <img src={this.props.img} alt='background' style={{ width: 'auto', height: '150%'}}/> */}
        </div>
    )
  }
}

export default Company
