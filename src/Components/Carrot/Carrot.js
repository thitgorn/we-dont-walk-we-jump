import React, { Component } from 'react'
import './Carrot.css'
import { keyframes } from 'styled-components';
export class Carrot extends Component {
  render() {
    const carrots = this.props.carrots.map( (item, index) => {
      const keyframe = keyframes`
          0% {
            bottom: ${((item.y * 15 ) + 10)}%
          }
          100% {
            bottom: -${(item.y + item.height) * 15}%
          }
      `
      return (
              <div style={{
                position: 'fixed',
                // bottom: `${(((item.y - this.props.currentY) * 15 ) + 10)}%`,
                bottom: '-100%',  
                left: `${15 + (item.x * 30)}%`,
                width: '10%',
                height: `${item.height * 15}%`,
                border: '1px solid orange',
                color: 'white',
                animation: `${(10+((item.y) *15))/10 + item.height}s ${keyframe}`
              }}>carrot</div>
            )
    })
    return (
      <div>
        {carrots}
        {/* <div className='carrot' style={{ position:'fixed', left:'45%', width:'10%', height:'100px', background: 'cyan' }}>
        </div>
        <div className='carrot' style={{ position:'fixed', left:'75%', width:'10%', height:'100px', background: 'cyan' }}>
        </div> */}
      </div>
    )
  }
}

export default Carrot
