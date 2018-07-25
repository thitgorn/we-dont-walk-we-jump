import React, { Component } from 'react'
import { keyframes } from 'styled-components'

const k = keyframes`
    from {
        bottom: 200%;
    }
    to {
        bottom: 50%;
    }
`
export class Win extends Component {
  render() {
    return (
      <div style={{ width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    background: 'linear-gradient(to bottom, black, rgba(0,0,0,0.2))',
                    }}>
        <div style={{position: 'absolute', bottom: '50%', left: '50%', animation: `5s ${k}`}}>
            MOON
        </div>
      </div>
    )
  }
}

export default Win
