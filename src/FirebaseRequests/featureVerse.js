import axios from 'axios';
import constants from '../constantsII';

const postRequest = (newVerse) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/featuredVerse.json`, newVerse)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {postRequest};
