import React from 'react';
import Scripture from '../Scripture/Scripture';
// import scriptureRequests from '../../FirebaseRequests/scriptures';
import gameRequests from '../../FirebaseRequests/games';
// import authRequests from '../../FirebaseRequests/auth';

import './Game.css';

class Game extends React.Component {
  state = {
    game: {},
  }

  componentDidMount () {
    const gameId = this.props.match.params.id;
    gameRequests.getSingleGameRequest(gameId)
      .then((game) => {
        this.setState({ game });
      })
      .catch((err) => {
        console.error('error while getting game', err);
      });
  }

  render () {
    let gameComponents = null;
    if (this.state.game.scriptures) {
      gameComponents = Object.keys(this.state.game.scriptures).map((cardId) => {
        const details = this.state.game.scriptures[cardId].verse;
        const verseId = this.state.game.scriptures[cardId].id;
        return (
          <Scripture
            key={verseId}
            details={details}
          />
        );
      });
    }
    let scriptureBook = '';
    if (this.state.game.scriptures) {
      scriptureBook = this.state.game.scriptures[this.state.game.correctCard].verseBook;
    }

    return (
      <div className="Game">
        <h1>Game</h1>
        <button className="btn btn-lg btn-danger">{scriptureBook}</button>
        {gameComponents}
      </div>
    );
  };
};

export default Game;
