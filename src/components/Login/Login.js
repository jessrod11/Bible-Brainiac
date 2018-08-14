import React from 'react';
import { Link } from 'react-router-dom';
import authRequests from '../../FirebaseRequests/auth';

import './Login.css';

class Login extends React.Component {
  state = {
    user: {
      email: 'jess@test.com',
      password: 'test11',
    },
  };

  loginClickEvent = (e) => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .loginUser(user)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch((err) => {
        console.error('error in loginEvent', err);
      });
  };

  emailChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });

  };

  passwordChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  };

  render () {
    const userImage = require('./Image/user.png');
    const { user } = this.state;
    return (
      <div className="Login">
        <img src={userImage} className="user" alt="login avatar"/>
        <h2 className="text-center">Login</h2>
        <form>
          <label htmlFor="inputEmail">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Enter Email..."
            value={user.email}
            onChange={this.emailChange}
          />
          <label htmlFor="inputPassword">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Enter Password..."
            value={user.password}
            onChange={this.passwordChange}
          />
          <Link to="/register" className="registerLink">Need to register?</Link>
          <button
            type="submit"
            className="btn btn-default btn-lg changeButton"
            onClick={this.loginClickEvent}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
