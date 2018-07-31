import React from 'react';
import Scripture from '../Scripture/Scripture';
import gameRequests from '../../FirebaseRequests/games';
import featureRequests from '../../FirebaseRequests/featureVerse';

import './Game.css';

class Game extends React.Component {
  state = {
    game: {},
    // correctScripture: [],
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

  selectedCardEvent = (card) => {
    this.correctCardCheck(card);
  };

  correctCardCheck = (card) => {
    if (card.verseId === this.state.game.correctCard) {
      featureRequests.postRequest({id: card.verseId})
        .then(() => {
          this.props.history.push(`/scripture/${card.verseId}`);
        })
        .catch((error) => {
          console.error('error in featuredVerse post', error);
        });
    }
  };

  render () {
    let gameComponents = null;
    if (this.state.game.scriptures) {
      gameComponents = Object.keys(this.state.game.scriptures).map((cardId) => {
        const details = this.state.game.scriptures[cardId].verse;
        const verseId = this.state.game.scriptures[cardId].id;
        return (
          <Scripture
            key={verseId}
            cardId={cardId}
            details={details}
            scriptures={this.state.game}
            selectedCardEvent={this.selectedCardEvent}
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
        <button
          className="btn btn-lg btn-danger"
          onClick={this.correctBookEvent}
        >
          {scriptureBook}
        </button>
        {gameComponents}
      </div>
    );
  };
};

export default Game;
