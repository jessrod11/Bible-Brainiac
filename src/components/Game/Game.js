import React from 'react';
import Scripture from '../Scripture/Scripture';
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
        this.setState({ scriptures });
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
