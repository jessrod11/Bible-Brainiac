import React from 'react';
import scriptureRequests from '../../FirebaseRequests/scriptures';

import './Game.css';

class Game extends React.Component {
  state = {
    scriptures: [],
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
        <div className="col-md-4">
          <h1>{scripture.verse}</h1>
        </div>
      );
    });

    return (
      <div className="Game ">
        <h1>Game</h1>
        {scriptureComponents}
      </div>
    );
  };
};

export default Game;
