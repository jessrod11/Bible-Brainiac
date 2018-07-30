import React from 'react';
import favesRequests from '../../FirebaseRequests/faves';
import gameRequests from '../../FirebaseRequests/games';
import authRequests from '../../FirebaseRequests/auth';
import Faves from '../Faves/Faves';

import './Dashboard.css';

class Dashboard extends React.Component {
  state = {
    games: [],
    faves: [],
  }

  componentDidMount () {
    gameRequests.getRequest(authRequests.getUID())
      .then((games) => {
        this.setState({games});
      })
      .catch((err) => {
        console.error('error with getting gameRequest on Dash', err);
      });
  }

  componentWillMount () {
    favesRequests.getRequest()
      .then((faves) => {
        this.setState({ faves });
      })
      .catch((err) => {
        console.error('error while getting faves', err);
      });
  }
  render () {
    const gameComponents = this.state.games.map((game) => {
      const singleGameEvent = () => {
        this.props.history.push(`/game/${game.id}`);
      };
      return (
        <button
          key={game.id}
          className="col-xs-12 btn btn-default"
          onClick={singleGameEvent}
        >
          <span className="col-xs-6 text-center"> Game Number: {game.id}</span>
        </button>
      );
    });
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
          {gameComponents}
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
