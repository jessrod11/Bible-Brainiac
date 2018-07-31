import React from 'react';
import featuredVerseRequest from '../../FirebaseRequests/featureVerse';

import './VerseSpa.css';

class VerseSpa extends React.Component {
  state = {
    featuredVerse: {},
  }

  componentDidMount () {
    featuredVerseRequest.getRequest()
      .then((featuredVerse) => {
        this.state({featuredVerse});
      })
      .catch((err) => {
        console.error('error while getting featuredVerse', err);
      });
  };

  render () {
    // const {details} = this.props;
    return (
      <div className="VerseSpa">
        <h1>Scripture for the week</h1>
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
