import React from 'react';
import './Scripture.css';

class Scripture extends React.Component {
  state = {
    game: {},
  }

  selectedCardEvent = e => {
    const card = {
      verse: this.props.details,
      verseId: this.props.cardId,
    };
    this.props.selectedCardEvent(card);
  };

  render () {
    const {details, cardId} = this.props;
    return (
      <ul className="Scripture col-md-4 selected-Card card-styles" >
        <li>
          <button
            id={cardId}
            className="verse-styles"
            onClick={this.selectedCardEvent}
          >
            {details}</button></li>
      </ul>
    );
  }
}

export default Scripture;
