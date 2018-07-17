import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import firebase from 'firebase';
import FbConnection from '../FirbaseRequests/connection';
FbConnection();

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button className="btn btn-info">Hello</button>
        </p>
      </div>
    );
  }
}

export default App;
