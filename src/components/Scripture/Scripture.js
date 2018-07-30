import React from 'react';
import './Scripture.css';

class Scripture extends React.Component {
  state = {
    game: {},
  }

  selectedCardEvent = e => {
    const currentGame = {...this.state.game};
    console.error('what is this?', currentGame);
  };

  render () {
    const {details} = this.props;
    return (
      <ul className="Scripture col-md-4 selected-Card card-styles" >
        <li>
          <button
            className="verse-styles"
            onClick={this.selectedCardEvent}
          >
            {details}</button></li>
      </ul>
    );
  }
}

export default Scripture;
