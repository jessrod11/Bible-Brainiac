import React from 'react';
import Alert from 'react-s-alert';
import Scripture from '../Scripture/Scripture';
import gameRequests from '../../FirebaseRequests/games';
import featureRequests from '../../FirebaseRequests/featureVerse';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

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

  ohNo = e => {
    Alert.error('Uh-Oh! Try Again!', {
      position: 'top',
      effect: 'bouncyflip',
      timeout: 1000,
    });
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
          <div>
            <span>
              {this.props.children}
            </span>
            <Alert stack={{ limit: 3 }} />

            <Scripture
              key={verseId}
              cardId={cardId}
              details={details}
              book={verseBook}
              scriptures={this.state.game}
              selectedCardEvent={this.selectedCardEvent}
            />
          </div>
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
          <div className="">
            {gameComponents}
          </div>
        </div>
        <div id="mybutton">
          <button
            className="text-center scriptureBtn"
            onClick={this.correctBookEvent}
          >
            {scriptureBook}
          </button>
        </div>
      </div>
    );
  };
};

export default Game;
