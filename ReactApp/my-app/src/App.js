import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>这个是第一个reactApp</h2>
        </div>
        <p className="App-intro">
          三国演绎 <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
