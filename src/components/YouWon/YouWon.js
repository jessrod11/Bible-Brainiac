import React from 'react';
import './YouWon.css';

class  YouWon extends  React.Component {
  render () {
    const { details } = this.props;
    return (
      <div className="YouWon">
        <h1>{details.verse}</h1>
        <h1>{details.verseBook}</h1>
      </div>
    );
  }
}

export default YouWon;
