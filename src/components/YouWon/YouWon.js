import React from 'react';
import './YouWon.css';

class  YouWon extends  React.Component {
  render () {
    const { details, postFavorite, completeGame } = this.props;
    return (
      <div className="YouWon">
        <h1>{details.verse}</h1>
        <h1>{details.verseBook}</h1>
        <button
          className=" btn btn-lg glyphicon glyphicon-heart heart-button"
          onClick={postFavorite}
        >
        </button>
        <button
          className="btn btn-lg btn-default complete-button"
          onClick={completeGame}
        >
          Complete</button>
      </div>
    );
  }
}

export default YouWon;
