import React, { Component } from 'react'

export class Dead extends Component {
  render() {
    return (
      <div style={{ width: '100%',
                    height: '100vh',
                    background:'black',
                    position: 'absolute',
                    top: '0',
                    left: '0' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'white' }}>
            <h1>Everyone Has Their First Time</h1>
            <button onClick={()=> this.props.retry()}
                    style={{}}>
                RETRY
            </button>
            <button onClick={()=> window.close()}
                    style={{}}>
                LEAVE
            </button>
        </div>
      </div>
    )
  }
}

export default Dead
