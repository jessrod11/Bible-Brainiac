import React from 'react';
import featureRequests from '../../FirebaseRequests/featureVerse';
import faveRequests from '../../FirebaseRequests/faves';
import YouWon from '../YouWon/YouWon';

import './VerseSpa.css';

class VerseSpa extends React.Component {
  state = {
    correctVerse: [],
  }

  componentDidMount () {
    const tempVerseArray = [];
    featureRequests.getVerseRequest()
      .then((correctVerse) => {
        const numberOfVerse = correctVerse.length;
        let counter = 0;
        correctVerse.forEach((verse) => {
          featureRequests.getSingleGame(verse.gameId)
            .then((game) => {
              if (game.completedAt === '') {
                tempVerseArray.push(verse);
              }
              counter++;
              if (counter === numberOfVerse) {
                this.setState({correctVerse: tempVerseArray});
              }
            });
        });
      })
      .catch((err) => {
        console.error('error while getting featuredVerse', err);
      });
  };

  postFavorite = () => {
    const correctVerse = {...this.state.correctVerse};
    faveRequests.postRequest(correctVerse)
      .then(() => {
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        console.error('error while posting new fave', err);
      });
  };

  completeGame = e => {
    const gameId = this.props.match.params.gameId;
    featureRequests.getSingleGame(gameId)
      .then((game) => {
        game.completedAt = new Date();
        featureRequests.putRequest(gameId, game)
          .then(() => {
            this.props.history.push('/home');
          });
      })
      .catch((err) => {
        console.error('error while updating scripture', err);
      });
  }

  render () {
    const featureVerseComponent = this.state.correctVerse.map((feature) => {
      return (
        <YouWon
          key={feature.id}
          details={feature}
          postFavorite={this.postFavorite}
          completeGame={this.completeGame}
        />
      );
    });

    return (
      <div className="VerseSpa">
        <h3>Scripture for the week</h3>
        <img className="trophy" src="https://img.clipartxtras.com/ecbca120af1b2d73ef4016db46aa5954_image-pizza-eating-contest-trophypng-club-penguin-wiki-trophy-clipart-transparent_720-720.png" alt=""/>
        <div className="container text-center well well-lg spaWell">
          {featureVerseComponent}
        </div>
      </div>
    );
  }
}

export default VerseSpa;
