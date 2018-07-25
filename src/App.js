import React, { Component } from 'react'
import './App.css'
import Game from './Logic/Game'
import Rabbit from './Components/Rabbit/Rabbit'
import { Carrot } from './Components/Carrot/Carrot'
import KeyBinding from 'react-keybinding-component'
import { IsNotPlaying } from './Components/IsNotPlaying';
import { Pregame } from './Components/Pregame';
import { Background } from './Components/Background';
import { Dead } from './Components/Dead'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: null,
      senceStage: 0,
      lane: 1,
      key: 1234,
      stage: 'isNotPlaying',
      turn: 'left'
    }
    this.notify = this.notify.bind(this)
  }

  notify() {
    this.setState({senceStage: this.state.senceStage + 1})
  }

  refresh = () => {
    this.setState({ key: Math.random() })
  }

  dead = () => {
    this.setState({stage: 'dead', deadCount: this.state.game.deadCount})
  }
  
  componentDidMount() {
    const game = new Game(this.notify)
    game.update = this.refresh
    game.dead = this.dead
    game.win = this.win
    // game.play()
    this.setState({ game: game })
  }

  left = () => {
    if(!this.state.game.endSence) {
      this.state.game.moveLeft()
      this.setState({lane: this.state.game.Rabbit.x, turn: 'left'})
    }
  }

  right = () => {
    if(!this.state.game.endSence) {
      this.state.game.moveRight()
      this.setState({lane: this.state.game.Rabbit.x, turn: 'right'})
    }
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
      return <Dead retry={this.NotPlaying} count={this.state.deadCount}/>
    }
    if(this.state.stage==='isPlaying') {
      return (
        <div className={`App`}>
          {
            (!this.state.game.isPlaying) ? 
              <Pregame play={this.play}/>
            : null
          }
          <Background senceStage={this.state.senceStage} isPlaying={this.state.game.isPlaying}/>
          { this.state.game.endSence ? null :
            <div>
              <div style={{ position:'fixed', top:'0', left:'0', width:'100%', height:'100vh', zIndex:'999', display: 'flex' }}>
                <div style={{ background: 'none' ,width: '50%', height: '100vh', opacity: '0.1'}} onClick={this.left}>
                </div>
                <div style={{ background: 'none' ,width: '50%', height: '100vh', opacity: '0.1'}} onClick={this.right}>
                </div>
              </div>
              <KeyBinding onKey={this.handleKey} /> 
            </div>
          }
          <Rabbit isPlaying={this.state.game.isPlaying} x={this.state.lane} turn={this.state.turn} />
          { this.state.game ? <Carrot isPlaying={this.state.game.isPlaying} currentPosition={this.state.game.Rabbit.y} carrots={this.state.game.Map.carrot} /> : null }
        </div>
      )
    }
  }
}

export default App
