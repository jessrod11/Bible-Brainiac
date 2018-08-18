import React from 'react';
import {Alert} from 'react-bootstrap';
import Scripture from '../Scripture/Scripture';
import gameRequests from '../../FirebaseRequests/games';
import featureRequests from '../../FirebaseRequests/featureVerse';

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

  selectedCardEvent = (card) => {
    this.correctCardCheck(card);
  };

  ohNo = () => {
    return (
      <div>
        <Alert bsStyle="danger">"Oh No!"</Alert>
      </div>
    );
  }

  correctCardCheck = (card) => {
    const gameId = this.props.match.params.id;
    if (card.verseId === this.state.game.correctCard) {
      featureRequests.postRequest(card, gameId)
        .then(() => {
          this.props.history.push(`/scripture/${gameId}`);
        })
        .catch((error) => {
          console.error('error in featuredVerse post', error);
        });
    } else {
      this.ohNo();
    }
  };

  render () {
    let gameComponents = null;
    if (this.state.game.scriptures) {
      gameComponents = Object.keys(this.state.game.scriptures).map((cardId) => {
        const details = this.state.game.scriptures[cardId].verse;
        const verseId = this.state.game.scriptures[cardId].id;
        const verseBook = this.state.game.scriptures[cardId].verseBook;
        return (
          <Scripture
            key={verseId}
            cardId={cardId}
            details={details}
            book={verseBook}
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
        <div className="text-center">
          <div className="col-md-12">
            {gameComponents}
          </div>
        </div>
        <button
          className="btn btn-lg btn-danger text-center scriptureBtn"
          onClick={this.correctBookEvent}
        >
          {scriptureBook}
        </button>
      </div>
    );
  };
};

export default Game;
