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
      verseBook: this.props.book,
    };
    this.props.selectedCardEvent(card);
  };

  render () {
    const {details, cardId, book} = this.props;
    return (
      <div className="Scripture col-md-4">
        <ul className="scriptureCard">
          <li>
            <button
              id={cardId}
              className="verse-styles"
              onClick={this.selectedCardEvent}
              book={book}
            >
              {details}</button></li>
        </ul>
      </div>
    );
  }
}

export default Scripture;
