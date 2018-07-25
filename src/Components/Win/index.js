import React, { Component } from 'react'
import { keyframes } from 'styled-components'

const text1 = keyframes`
    0% {
        opacity: 1;
    }
    20% {
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`
const text2 = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    40% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`
const text3 = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
    60% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`
const text4 = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    60% {
        opacity: 1;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`
const text5 = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`
const text6 = keyframes`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    100% {
        opacity: 1;
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
                    color: 'white',
                    textShadow: '0px 0px 10px black',
                    background: 'linear-gradient(to bottom, black, rgba(0,0,0,0.2))',
                    }}>

        <div style={{opacity: '0', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text1}`}}>
            You cannot shake hands with a clenched fist.
        </div>

        <div style={{opacity: '0', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text2}`}}>
            Let us sacrifice our today so that our children can have a better tomorrow.
        </div>

        <div style={{opacity: '0', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text3}`}}>
            When you reach the end of your rope, tie a knot in it and hang on.
        </div>

        <div style={{opacity: '0', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text4}`}}>
            There is no charm equal to tenderness of heart.
        </div>

        <div style={{opacity: '0', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text5}`}}>
            JOIN US
        </div>

        <div style={{opacity: '1', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text6}`}}>
            RABBIT DIGITAL GROUP
        </div>
      </div>
    )
  }
}

export default Win
