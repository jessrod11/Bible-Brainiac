import React from 'react';
import scriptureRequests from '../../FirebaseRequests/scriptures';

import './Game.css';

class Game extends React.Component {
  state = {
    scriptures: [],
  }

  postVerseEvent = e => {

  };

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
        <div className="col-md-4 selected-Card card-styles">
          <h1>{scripture.verse}</h1>
          <button className="btn btn-lg btn-info" onClick={this.postVerseEvent}>Verse</button>
        </div>
      );
    });

    return (
      <div className="Game">
        <h1>Game</h1>
        <button className="btn btn-lg btn-danger" onClick={this.correctVerseEvent}>Gen 1:1</button>
        {scriptureComponents}
      </div>
    );
  };
};

export default Game;
