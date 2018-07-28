import React from 'react';
import './Scripture.css';

class Scripture extends React.Component {
  render () {
    const {details} = this.props;
    return (
      <div className="Scripture col-md-4 selected-Card card-styles" >
        <h2 className="verse-styles"> {details}</h2>
      </div>
    );
  }
}

export default Scripture;
