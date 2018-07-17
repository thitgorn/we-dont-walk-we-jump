import React, { Component } from 'react'
import './Carrot.css'

export class Carrot extends Component {
  render() {
    return (
    <div>
      <div className='carrot' style={{ position:'fixed', left:'15%', width:'10%', height:'100px', background: 'cyan' }}>
      </div>
      {/* <div className='carrot' style={{ position:'fixed', left:'45%', width:'10%', height:'100px', background: 'cyan' }}>
      </div>
      <div className='carrot' style={{ position:'fixed', left:'75%', width:'10%', height:'100px', background: 'cyan' }}>
      </div> */}
    </div>
    )
  }
}

export default Carrot
