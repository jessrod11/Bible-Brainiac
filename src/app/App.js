import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Game from '../Game/Game';
import Scripture from '../VerseSpa/VerseSpa';

import './App.css';

// import firebase from 'firebase';
import FbConnection from '../FirbaseRequests/connection';
FbConnection();

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location }}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location }}}
          />
        )
      }
    />
  );
};

class App extends Component {
  state = {
    authed: false,
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/home" exact component={Home}/>
                <PublicRoute
                  path="/register"
                  authed={this.state.authed}
                  component={Register}
                />
                <PublicRoute
                  path="/login"
                  authed={this.state.authed}
                  component={Login}
                />
                <PrivateRoute
                  path="/game"
                  authed={this.state.authed}
                  component={Game}
                />
                <PrivateRoute
                  path="/dashboard"
                  authed={this.state.authed}
                  component={Dashboard}
                />
                <PrivateRoute
                  path="/scripture"
                  authed={this.state.authed}
                  component={Scripture}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
