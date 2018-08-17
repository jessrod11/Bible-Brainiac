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

  updateFaveComponent = () => {
    favesRequests.getRequest(authRequests.getUID())
      .then((faves) => {
        this.setState({ faves });
      })
      .catch((err) => {
        console.error('error while getting faves', err);
      });
  };

  componentWillMount () {
    this.updateFaveComponent();
  }

  deleteFaveEvent = (gameId) => {
    favesRequests
      .deleteRequest(gameId)
      .then(() => {
        this.updateFaveComponent();
      })
      .catch((err) => {
        console.error('error while deleting', err);
      });
  };

  render () {
    const gameComponents = this.state.games.map((game) => {
      const singleGameEvent = () => {
        this.props.history.push(`/game/${game.id}`);
      };
      return (
        <button
          key={game.id}
          className="col-xs-12 btn btn-default text-center game-button"
          onClick={singleGameEvent}
        >
          <span className="col-xs-6"> Game Number: {game.id}</span>
        </button>
      );
    });
    const favesComponents = this.state.faves.map((fave) => {
      return (
        <Faves
          key={fave.id}
          details={fave}
          onClick={this.deleteFaveEvent}
        />
      );
    });

    return (
      <div className="Dashboard container ">
        <h1 className="text-center"> My Dashboard</h1>
        <div className="col-md-6 game-container">
          <h2>My Games</h2>
          {gameComponents}
        </div>
        <div className="col-md-6 faves-container">
          <h2>My Favorite Scriptures</h2>
          {favesComponents}
        </div>
      </div>
    );
  }
}

export default Dashboard;
