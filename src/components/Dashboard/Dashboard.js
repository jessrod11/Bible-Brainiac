import React from 'react';
import favesRequests from '../../FirebaseRequests/faves';
// import authRequests from '../../FirebaseRequests/auth';
import Faves from '../Faves/Faves';

import './Dashboard.css';

class Dashboard extends React.Component {
  state = {
    faves: [],
  }

  componentDidMount () {
    favesRequests.getRequest()
      .then((faves) => {
        this.setState({ faves });
      })
      .catch((err) => {
        console.error('error while getting faves', err);
      });
  }
  render () {
    const favesComponents = this.state.faves.map((fave) => {
      return (
        <Faves
          key={fave.id}
          details={fave}
        />
      );
    });

    return (
      <div className="Dashboard">
        <div className="col-md-6">
          <h1>Dashboard</h1>
          <button className="btn btn-danger">Start New Game</button>
        </div>
        <div className="col-md-6">
          <h1>My Favorite Scriptures</h1>
          {favesComponents}
        </div>
      </div>
    );
  }
}

export default Dashboard;
