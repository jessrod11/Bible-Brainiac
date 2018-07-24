import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
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
