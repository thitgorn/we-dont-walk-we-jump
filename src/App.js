import React, { Component } from 'react';
import './App.css';
import Game from './Logic/Game'
import Rabbit from './Components/Rabbit/Rabbit';
import { Carrot } from './Components/Carrot/Carrot';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: null,
      state: 0,
      lane: 1,
    }
    this.notify = this.notify.bind(this)
  }

  notify() {
    console.log('view change');
    this.setState({state: this.state.state + 1})
  }
  
  componentDidMount() {
    const game = new Game(this.notify)
    game.play()
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

  render() {
    const backgroundColor = ['fade-black','fade-blue','fade-red','fade-yellow']
    return (
      <div className={`App ${backgroundColor[this.state.state % backgroundColor.length]}`}>
        <div style={{ position:'fixed', top:'0', left:'0', width:'100%', height:'100vh', zIndex:'999', display: 'flex' }}>
          <div style={{ background: 'cyan' ,width: '50%', height: '100vh', opacity: '0.1'}} onClick={this.left}>
          </div>
          <div style={{ background: 'green' ,width: '50%', height: '100vh', opacity: '0.1'}} onClick={this.right}>
          </div>
        </div>
        <Rabbit x={this.state.lane} />
        { this.state.game ? <Carrot carrots={this.state.game.Map.carrot} /> : null }
        {/* <div className='block'></div>
        <div className='block'></div>
        <div className='block'></div> */}
      </div>
    );
  }
}

export default App;
