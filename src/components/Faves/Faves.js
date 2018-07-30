import React from 'react';
import './Faves.css';

class Faves extends React.Component {
  render () {
    const {details} = this.props;
    return (
      <div className="Faves">
        <h3>{details.verse}</h3>
        <h5>{details.verseBook}</h5>
        <button className="glyphicon glyphicon-trash"></button>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Faves;
