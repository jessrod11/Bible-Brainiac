import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  render () {
    return (
      <div className="Home">
        <div className="jumbotron">
          <div className="container">
            <p><Link to="/game" className="btn btn-info btn-lg play-button" href="#" role="button">Let's play!</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
