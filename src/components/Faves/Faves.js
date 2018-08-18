import React from 'react';
import './Faves.css';

class Faves extends React.Component {
  render () {
    const {details} = this.props;
    const deleteIt = (e) => {
      this.props.onClick(this.props.details.id);
    };
    return (
      <div className="Faves text-center">
        <h3>{details[0].verse}</h3>
        <h3>{details[0].verseBook}</h3>
        <button
          className="glyphicon glyphicon-trash"
          onClick={deleteIt}
        >
        </button>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Faves;
