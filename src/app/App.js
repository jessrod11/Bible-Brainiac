import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Login from '../Login/Login';
// import Register from '../Register/Register';
// import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
// import Game from '../Game/Game';
// import Scripture from '../VerseSpa/VerseSpa';

import './App.css';

// import firebase from 'firebase';
import FbConnection from '../FirbaseRequests/connection';
FbConnection();

class App extends Component {
  render () {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/home" exact component={Home}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
