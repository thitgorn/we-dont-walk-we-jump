import React, { Component } from 'react'

const firstWord = ['Stop thinking in terms of limitations and start thinking in terms of possibilities.','– Terry Josephson']
const secondWord = ['Minds are like parachutes they work best when open.','– Lord Thomas Dewar']
const thridWord = ['Probable impossibilities are to be preferred to improbable possibilities.','– Aristotle']
const fourthWord = ['Everyone has to learn to think differently, bigger, to open to possibilities.','– Oprah Winfrey']
export class Dead extends Component {
  render() {
    let wording = ''
    const rand = Math.floor(Math.random() * 4)
    switch(rand) {
      case 0: wording = firstWord; break;
      case 1: wording = secondWord; break;
      case 2: wording = thridWord; break;
      case 3: wording = fourthWord; break;
      default:
    }

    return (
      <div style={{ width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'absolute',
                    top: '0',
                    left: '0' }}>
        <div style={{ position: 'absolute',width: '90%', maxWidth: '750px', top: '50%', left: '50%',textAlign: 'center', transform: 'translate(-50%,-50%)', color: 'white' }}>
            <div style={{ width: '100%'}}>
              <h3>{wording[0]}</h3>
              <div style={{textAlign:'right'}}>
                <span>{wording[1]}</span>
              </div>
              <hr />
            </div>
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
