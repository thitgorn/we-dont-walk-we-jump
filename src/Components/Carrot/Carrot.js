import React, { Component } from 'react'
import './Carrot.css'
// import styled, { keyframes } from 'styled-components';

export class Carrot extends Component {
  render() {
    const carrots = this.props.carrots.map( (item, index) => {
      // const keyframe = keyframes`
      //     from {
      //       bottom: -${ item.y * 25 }px
      //     }
      //     to {
      //       bottom: 0px
      //     }
      // `
      return (
              <div style={{
                position: 'fixed',
                // top: `${item.y - this.props.currentY + 100}%`,
                left: `${ 15 + ( item.x * 30 ) }%`,
                width: '10%',
                height: `${item.height}%`,
                background: 'orange'
              }}></div>
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
