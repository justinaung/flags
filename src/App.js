import React, { Component } from 'react'
import './App.css'
import worldImg from './world.jpg'
import CountryGame from './CountryGame'


class App extends Component {
  render() {
    const myVar = {};
    return (
      <div className="flag-app">
        <div>
          <header 
            className="title-header"
            style={{ backgroundImage: `url(${worldImg})` }}
          >
            <h1 className="title-text">Guess The Flag</h1>
          </header>
        </div>
        {myVar.flags.mm}
        <CountryGame />
      </div>
    );
  }
}

export default App;
