import React, { Component } from 'react'
import './Carrot.css'
import { keyframes } from 'styled-components'
export class Carrot extends Component {
  render() {
    const carrots = this.props.carrots.map((carrot,index) => {
      let animation = ''
      if(((carrot.y - this.props.currentPosition) * 25) <= 100 && this.props.isPlaying) {
        animation = keyframes`
                      from {
                        bottom: ${(carrot.y - this.props.currentPosition) * 25}%
                      }
                    
                      to {
                        bottom: ${(carrot.y - this.props.currentPosition - 1) * 25}%
                      }
                    `
      }
      return <div key={`carrot${index}`} style={{ position: 'absolute',
                bottom: `${ ((carrot.y - this.props.currentPosition)) * 25}%`,
                left: `${(15 + (carrot.x * 30))}%`,
                width: '10%',
                height: `${carrot.height * 25}%`,
                animation: `0.450s ${animation}`,
                zIndex:`${( (index%50) * -1) + 100}`}}>
                  <img src={carrot.image} style={{width: `100%`, height: `100%`}} alt='carrot'/>
              </div>
    })
    return (
      <div>
        {carrots}
      </div>
    )
  }
}

export default Carrot
