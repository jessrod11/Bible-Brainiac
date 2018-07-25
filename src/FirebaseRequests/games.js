import axios from 'axios';
import constants from '../constantsII';

const postRequest = (newGame) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/games.json`, newGame)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {postRequest };
