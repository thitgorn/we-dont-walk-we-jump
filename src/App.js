import React, { Component } from 'react'
import './App.css'
import Game from './Logic/Game'
import Rabbit from './Components/Rabbit/Rabbit'
import { Carrot } from './Components/Carrot/Carrot'
import KeyBinding from 'react-keybinding-component'
import { IsNotPlaying } from './Components/IsNotPlaying';
import { Pregame } from './Components/Pregame';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: null,
      senceStage: 0,
      lane: 1,
      key: 1234,
      stage: 'isNotPlaying',
    }
    this.notify = this.notify.bind(this)
  }

  // isNotPlaying, isPlaying, Dead

  notify() {
    this.setState({senceStage: this.state.senceStage + 1})
  }

  refresh = () => {
    this.setState({ key: Math.random() })
  }

  dead = () => {
    this.setState({stage: 'dead'})
  }
  
  componentDidMount() {
    const game = new Game(this.notify)
    game.update = this.refresh
    game.dead = this.dead
    // game.play()
    this.setState({ game: game })
  }

  left = () => {
    this.state.game.moveLeft()
    this.setState({lane: this.state.game.Rabbit.x})
  }

  right = () => {
    this.state.game.moveRight()
    this.setState({lane: this.state.game.Rabbit.x})
  }

  handleKey = (e) => {
    switch(e.keyCode) {
      case 39: this.right(); break
      case 37: this.left(); break
      default:
    }
  }

  NotPlaying = () => {
    this.setState({stage: 'isPlaying'})
  }

  play = () => {
    this.setState({lane: 1})
    this.state.game.restart()
    this.state.game.play()
  }
  render() {
    if(this.state.stage==='isNotPlaying') {
      return <IsNotPlaying clicked={this.NotPlaying}/>
    }
    if(this.state.stage==='dead') {
      return <h1>DEAD</h1>
    }
    if(this.state.stage==='isPlaying') {
      const backgroundColor = ['fade-black','fade-blue','fade-red','fade-yellow']
      return (
        <div className={`App ${backgroundColor[this.state.senceStage % backgroundColor.length]}`}>
          {
            (!this.state.game.isPlaying) ? 
              <Pregame play={this.play}/>
            : null
          }
          <div style={{ position:'fixed', top:'0', left:'0', width:'100%', height:'100vh', zIndex:'999', display: 'flex' }}>
            <div style={{ background: 'none' ,width: '50%', height: '100vh', opacity: '0.1'}} onClick={this.left}>
            </div>
            <div style={{ background: 'none' ,width: '50%', height: '100vh', opacity: '0.1'}} onClick={this.right}>
            </div>
          </div>
          <KeyBinding onKey={this.handleKey} />
          <Rabbit x={this.state.lane} />
          { this.state.game ? <Carrot currentPosition={this.state.game.Rabbit.y} carrots={this.state.game.Map.carrot} /> : null }
        </div>
      )
    }
  }
}

export default App
