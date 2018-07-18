import React, { Component } from 'react';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Game from '../Game/Game';
import Scripture from '../VerseSpa/VerseSpa';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App container">
        <Login />
        <Register />
        <Dashboard />
        <Home />
        <Navbar />
        <Game />
        <Scripture />
      </div>
    );
  }
}

export default App;
