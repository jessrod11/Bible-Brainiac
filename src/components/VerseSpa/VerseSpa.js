import React from 'react';

import './VerseSpa.css';

class VerseSpa extends React.Component {
  state = {
    game: {},
  }

  render () {
    // const {details} = this.props;
    return (
      <div className="VerseSpa">
        <h1>Scripture for the week</h1>
        <div>
          <h1>"For I know the plans I have for you, declares the Lord, plans to prosper you and not harm you, plans to give you hope and a future."</h1>
          <h3> Jeremiah 29:11</h3>
        </div>
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
