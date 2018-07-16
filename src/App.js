import React, { Component } from 'react';
import './App.css';
import { Rabbit } from './Components/Rabbit//Rabbit';
import Game from './Logic/Game'

class App extends Component {
  componentDidMount() {
    const game = new Game(200,200);
    game.start()
  }
  render() {
    return (
      <div className="App">
        <Rabbit />
        <div className='block'></div>
        <div className='block'></div>
        <div className='block'></div>
      </div>
    );
  }
}

export default App;
