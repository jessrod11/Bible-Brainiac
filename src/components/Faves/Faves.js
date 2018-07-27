import React from 'react';
import './Faves.css';

class Faves extends React.Component {
  render () {
    const {details} = this.props;
    return (
      <div className="Faves">
        <h3>{details.verse}</h3><button className="glyphicon glyphicon-trash"></button>
        <h5>{details.verseBook}</h5>
      </div>
    );
  }
}

export default Faves;
