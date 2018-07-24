import React, { Component } from 'react'
import KeyBinding from 'react-keybinding-component'
import './index.css'

export class IsNotPlaying extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', color: 'white' }} onClick={()=> this.props.clicked()}>
        <KeyBinding onKey={ (e) => this.props.clicked()} />
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', background:'black', zIndex:'-1'}}></div>
        <div style={{ position: 'absolute', top:'50%' , left:'50%', transform: `translate(-50%, -50%)`}}>
            <h1>WE DON'T WALK, WE JUMP</h1>
            <div>
                <img style={{ width:'20%', height:'auto', minWidth: '150px'}} src='http://www.rabbitdigitalgroup.com/images/rdg.png' alt='rabbit' />
            </div>
            <h1 style={{ marginTop: '50px'}} className='blink'>
            Press any key, or touch to continue
            </h1>
        </div>
      </div>
    )
  }
}

export default IsNotPlaying
