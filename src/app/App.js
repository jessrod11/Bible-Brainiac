import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import firebase from 'firebase';

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Dashboard from '../components/Dashboard/Dashboard';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Game from '../components/Game/Game';
import Scripture from '../components/VerseSpa/VerseSpa';

import './App.css';

import FbConnection from '../FirebaseRequests/connection';
FbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/home', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  state = {
    authed: false,
  }
  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  runAway = () => {
    this.setState({ authed: false });
  };

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              runAway={this.runAway}
            />
            <Switch>
              <Route
                path="/home"
                render={props => <Home{...props} authed={this.state.authed}/>}
              />
              <PrivateRoute
                path="/dashboard"
                authed={this.state.authed}
                component={Dashboard}
              />
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
                path="/game/:id"
                authed={this.state.authed}
                component={Game}
              />
              <PrivateRoute
                path="/scripture/:gameId"
                authed={this.state.authed}
                component={Scripture}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
