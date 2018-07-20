import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {
  render () {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <button className="btn btn-danger">Start New Game</button>
      </div>
    );
  }
}

export default Dashboard;
