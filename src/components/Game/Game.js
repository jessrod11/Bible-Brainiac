import React from 'react';
import Scripture from '../Scripture/Scripture';
import scriptureRequests from '../../FirebaseRequests/scriptures';
import gameRequests from '../../FirebaseRequests/games';
import authRequests from '../../FirebaseRequests/auth';

import './Game.css';

class Game extends React.Component {
  state = {
    scriptures: [],
    newGame: {
      scriptures: {
        card1: '',
        card2: '',
        card3: '',
        card4: '',
        card5: '',
        card6: '',
        card7: '',
        card8: '',
      },
      correctCard: '',
      inProgress: true,
      createdAt: '',
      completedAt: '',
      uid: '',
    },
  }

  grabNewGame = () => {
    gameRequests.getRequest(authRequests.getUID())
      .then((newGame) => {
        console.error('what is new game', newGame);
      })
      .catch((err) => {
        console.error('error while getting game', err);
      });
  }

  componentDidMount () {
    scriptureRequests
      .getRequest()
      .then((scriptures) => {
        this.setState({scriptures});
      })
      .catch((err) => {
        console.error('error in scriptureGetRequest', err);
      });
  }

  render () {
    const scriptureComponents = this.state.scriptures.map((scripture) => {
      return (
        <Scripture
          key={scripture.id}
          details={scripture}
          grabNewGame={this.grabNewGame}
        />
      );
    });

    return (
      <div className="Game">
        <h1>Game</h1>
        <button className="btn btn-lg btn-danger">Gen 1:1</button>
        {scriptureComponents}
      </div>
    );
  };
};

export default Game;
