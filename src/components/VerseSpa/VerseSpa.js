import React from 'react';

import scriptureRequests from '../../FirebaseRequests/scriptures';
import './VerseSpa.css';

class VerseSpa extends React.Component {
  state = {
    scriptures: [],
  }
  componentDidMount () {
    scriptureRequests
      .postRequest()
      .then(() => {
        this.props.history.push('/scripture');
      })
      .catch((err) => {
        console.error('error while posting scripture', err);
      });
  }
  render () {
    return (
      <div className="VerseSpa">
        <h1>Scripture for the week</h1>
        {/* <h1>{singleScriptureComponent}</h1> */}
      </div>
    );
  }
}

export default VerseSpa;
