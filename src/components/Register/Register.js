import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../FirebaseRequests/auth';

import './Register.css';

class Register extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  };

  registerClickEvent = e => {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .registerUser(user)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch(error => {
        console.error('there was an error in registering', error);
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
      <div className="Register">
        <img src={userImage} className="user" alt="register avatar" />
        <h2 className="text-center">Register</h2>
        <form>
          <label htmlFor="inputEmail3">
              Email
          </label>
          <input
            type="email"
            id="inputEmail3"
            placeholder="Email"
            value={user.email}
            onChange={this.emailChange}
          />
          <label htmlFor="inputPassword3">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Password"
            value={user.password}
            onChange={this.passwordChange}
          />
          <Link to="/login" className="loginLink">Need to Login?</Link>
          <button
            type="submit"
            className="btn btn-default btn-lg changeRegisterButton"
            onClick={this.registerClickEvent}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
