import React from 'react';
import { Link } from 'react-router-dom';
import authRequests from '../../FirebaseRequests/auth';

import './Navbar.css';

class Navbar extends React.Component {
  render () {
    const { authed, runAway } = this.props;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      runAway();
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand brand-style" to="/home">Scripture App</Link>
            </div>
            {
              authed ? (
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/scripture/:id">Scripture</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li className="navbar-form"><button onClick={logoutClickEvent}  className="btn btn-info logout-button">Logout</button></li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  <li className="login-button text-center"><Link to="/login">Login</Link></li>
                </ul>
              )
            }
          </div>
        </nav>
      </div >
    );
  }
}

export default Navbar;
