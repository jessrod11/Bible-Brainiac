import React from 'react';
import scriptureRequests from '../../FirebaseRequests/scriptures';
import authRequests from '../../FirebaseRequests/auth';
import helpers from '../../helpers';
import gameRequest from '../../FirebaseRequests/games';

import './Home.css';

class Home extends React.Component {
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
      selectedCard: '',
      inProgress: true,
      createdAt: '',
      completedAt: '',
      uid: '',
    },
  }
  componentDidMount () {
    scriptureRequests
      .getRequest()
      .then((scriptures) => {
        this.setState({ scriptures });
      })
      .catch((err) => {
        console.error('error in scriptureGetRequest', err);
      });
  }

  startGameEvent = e => {
    const newGame = { ...this.state.newGame };
    const scriptures = [...this.state.scriptures];
    const randomScriptures = helpers.shuffle(scriptures);
    newGame.scriptures.card1 = randomScriptures[0];
    newGame.scriptures.card2 = randomScriptures[1];
    newGame.scriptures.card3 = randomScriptures[2];
    newGame.scriptures.card4 = randomScriptures[3];
    newGame.scriptures.card5 = randomScriptures[4];
    newGame.scriptures.card6 = randomScriptures[5];
    newGame.scriptures.card7 = randomScriptures[6];
    newGame.scriptures.card8 = randomScriptures[7];
    newGame.correctCard = `card${Math.floor(Math.random() * 8) + 1}`;
    newGame.createdAt = new Date();
    newGame.uid = authRequests.getUID();
    gameRequest.postRequest(newGame)
      .then((res) => {
        const gameId = res.data.name;
        this.props.history.push(`/game/${gameId}`);
      })
      .catch((err) => {
        console.error('error in startGameEvent',err);
      });
  };

  render () {
    const { authed } = this.props;
    return (
      <div className="Home">

        <header id="display">
          <h1>Scripture Memory App</h1>
          {
            authed ? (
              <button
                className="btn btn-info btn-lg play-button"
                onClick={this.startGameEvent}
              >
                Let's play!
              </button>
            ) : (
              <button className="btn btn-info btn-lg play-button">
                    Welcome!
              </button>
            )
          }
        </header>
      </div>
    );
  }
}

export default Home;
