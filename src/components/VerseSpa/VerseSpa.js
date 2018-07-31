import React from 'react';
import featureRequests from '../../FirebaseRequests/featureVerse';
import faveRequests from '../../FirebaseRequests/faves';
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

  render () {
    const featureVerseComponent = this.state.correctVerse.map((feature) => {
      return (
        <YouWon
          key={feature.id}
          details={feature}
          postFavorite={this.postFavorite}
        />
      );
    });

    return (
      <div className="VerseSpa">
        <h1>Scripture for the week</h1>
        {featureVerseComponent}
      </div>
    );
  }
}

export default VerseSpa;
