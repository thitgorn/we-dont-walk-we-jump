import React, { Component } from 'react'
import rightKey from '../../images/icon/right-key.svg'
import leftKey from '../../images/icon/left-key.svg'
import { keyframes } from 'styled-components'

const blink = keyframes`
    from {
        opacity: 0.2
    }
    to {
        opacity: 1
    }
`

export class Pregame extends Component {
  render() {
    return (<div style={{ position:'fixed',
                top:'0',
                left:'0',
                width:'100%',
                height:'100vh',
                zIndex:'1000',
                background: 'rgba(0,0,0,0.6)',
                color: 'white' }}
                onClick={this.props.play}>
                <div style={{position: 'absolute',
                    left: '50%',
                    top: '20%',
                    width: '100%',
                    textAlign:'center',
                    transform: `translate(-50%, -50%)`}}>
                    <h1 style={{ color: 'black', textShadow: '0 0 15px white' }}>Touch to begin</h1>
                </div>
                <div style={{ position: 'fixed', 
                    left: '0', 
                    top: '1', 
                    width: '49%', 
                    height: '98vh', 
                    border: '3px dashed rgba(255,255,255,0.5)',
                    animation: `2s ${blink} infinite`}}>
                    <div style={{position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%, -50%)`}}>
                        <div style={{textAlign: 'center'}}>
                            <img style={{width: '50px', height: 'auto'}} src={leftKey} alt='left' /> 
                            <div>Touch, Press to Jump left</div>
                        </div>
                    </div>
                </div>

                <div style={{ position: 'fixed', 
                    left: '50%', 
                    top: '1', 
                    width: '49%', 
                    height: '98vh', 
                    border: '3px dashed rgba(255,255,255,0.5)',
                    animation: `2s ${blink} infinite`}}>
                    <div style={{position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%, -50%)`}}>
                        <div style={{textAlign: 'center'}}>
                            <img style={{width: '50px', height: 'auto'}} src={rightKey} alt='right' />
                            <div>Touch, Press to jump right</div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

export default Pregame
