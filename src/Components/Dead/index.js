import React, { Component } from 'react'

export class Dead extends Component {
  render() {
    return (
      <div style={{ width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'absolute',
                    top: '0',
                    left: '0' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'white' }}>
            <h1>Everyone Has Their First Time</h1>
            <div style={{textAlign: 'center'}}>
                <button onClick={()=> this.props.retry()}
                        style={{ border: '1px solid white',
                                 borderRadius: '4px',
                                 background: 'rgba(255,255,0,0.3)',
                                 padding: '5px 10px',
                                 margin: '20px',
                                 color: 'white'}}>
                    RETRY
                </button>
                <button onClick={()=> window.close()}
                        style={{ border: '1px solid white',
                                 borderRadius: '4px',
                                 background: 'rgba(255,255,0,0.3)',
                                 padding: '5px 10px',
                                 margin: '20px',
                                 color: 'white'}}>
                    LEAVE
                </button>
            </div>
        </div>
      </div>
    )
  }
}

export default Dead
