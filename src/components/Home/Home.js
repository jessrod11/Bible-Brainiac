import React from 'react';
import {Link} from 'react-router-dom';
import scriptureRequests from '../../FirebaseRequests/scriptures';

import './Home.css';

class Home extends React.Component {
  state = {
    scriptures: [],
  }
  componentDidMount () {
    scriptureRequests
      .getRequest()
      .then((scriptures) => {
        this.setState({ scriptures });
      })
      .catch((err) => {
        console.error('error in scriptureGetRequest', err);
      });
  }
   startGameEvent = e => {
     // Math.floor(Math.random()) function
   };

   render () {
     const {authed} = this.props;
     return (
       <div className="Home">
         <div className="jumbotron">
           <div className="container">
             {
               authed ? (
                 <Link
                   to="/game"
                   className="btn btn-info btn-lg play-button"
                   href="#"
                   role="button"
                   onClick={this.startGameEvent}
                 >
                   Let's play!
                 </Link>
               ) : (
                 <button className="btn btn-info btn-lg play-button">
                     Welcome!
                 </button>
               )
             }
           </div>
         </div>
       </div>
     );
   }
}

export default Home;
