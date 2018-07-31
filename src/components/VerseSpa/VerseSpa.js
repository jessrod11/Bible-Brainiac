import React from 'react';
import featureRequests from '../../FirebaseRequests/featureVerse';
import authRequests from '../../FirebaseRequests/auth';
import YouWon from '../YouWon/YouWon';

import './VerseSpa.css';

class VerseSpa extends React.Component {
  state = {
    correctVerse: [],
  }

  componentDidMount () {
    featureRequests.getVerseRequest(authRequests.getUID())
      .then((correctVerse) => {
        this.setState({correctVerse});
      })
      .catch((err) => {
        console.error('error while getting featuredVerse', err);
      });
  };

  render () {
    const featureVerseComponent = this.state.correctVerse.map((feature) => {
      return (
        <YouWon
          key={feature.id}
          details={feature}
        />
      );
    });

    return (
      <div className="VerseSpa">
        <h1>Scripture for the week</h1>
        {featureVerseComponent}
        <button
          className=" btn btn-lg glyphicon glyphicon-heart"
        >
        </button>
        <button
          className="btn btn-lg btn-info"
          onClick={this.completedEvent}
        >
          Complete</button>
      </div>
    );
  }
}

export default VerseSpa;
