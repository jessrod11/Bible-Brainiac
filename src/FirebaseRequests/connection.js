import firebase from 'firebase';
import constants from '../constantsII';

const firebaseApp = () => {
  firebase.initializeApp(constants.firebaseConfig);
};

export default firebaseApp;
