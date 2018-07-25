import React, { Component } from 'react'
import { keyframes } from 'styled-components'
import background from '../../images/background/city.png'

const text1 = keyframes`
    0% {
        opacity: 0;
    }
    5% {
        opacity: 1;
    }
    15% {
        opacity: 1;
    }
    20% {
        opacity: 0;
    }
`
const text2 = keyframes`
    0% {
        opacity: 0;
    }
    15% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    35% {
        opacity: 1;
    }
    40% {
        opacity: 0;
    }
`
const text3 = keyframes`
    0% {
        opacity: 0;
    }
    35% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
    55% {
        opacity: 1;
    }
    60% {
        opacity: 0;
    }
`
const text4 = keyframes`
    0% {
        opacity: 0;
    }
    55% {
        opacity: 0;
    }
    60% {
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    80% {
        opacity: 0;
    }
`
const text5 = keyframes`
    0% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    75% {
        opacity: 1;
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
    95% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const backgroundEffect = keyframes`
    from {
        bottom: 30%;
    } to {
        bottom: 0%;
    }
`

export class Win extends Component {
  render() {
    return (
        <div>
            <div style={{position: 'fixed', top: '0', left: '0', width:'100%', height:'100vh', 
                            background: 'linear-gradient(to bottom, black, rgba(0,0,0,0.2))'}}></div>
            <div style={{ width: '100%',
                            height: '100vh',
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            color: 'white',
                            textShadow: '0px 0px 10px black',
                            backgroundImage: `url('${background}')`,
                            backgroundSize: 'cover',
                            animation: `36s ${backgroundEffect}`
                            }}>

                <div style={{opacity: '0', background:'rgba(0,0,0,0.8)', padding: '10px', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text1}`}}>
                    You cannot shake hands with a clenched fist.
                </div>

                <div style={{opacity: '0', background:'rgba(0,0,0,0.8)', padding: '10px',  position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text2}`}}>
                    Let us sacrifice our today so that our children can have a better tomorrow.
                </div>

                <div style={{opacity: '0', background:'rgba(0,0,0,0.8)', padding: '10px', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text3}`}}>
                    When you reach the end of your rope, tie a knot in it and hang on.
                </div>

                <div style={{opacity: '0', background:'rgba(0,0,0,0.8)', padding: '10px', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text4}`}}>
                    There is no charm equal to tenderness of heart.
                </div>

                <div style={{opacity: '0', background:'rgba(0,0,0,0.8)', padding: '10px', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text5}`}}>
                    JOIN US
                </div>

                <div style={{opacity: '1', background:'rgba(0,0,0,0.8)', padding: '10px', position: 'absolute', bottom: '50%', left: '50%', animation: `36s ${text6}`}}>
                    RABBIT DIGITAL GROUP
                </div>
            </div>
        </div>
    )
  }
}

export default Win
