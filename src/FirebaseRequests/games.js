import axios from 'axios';
import constants from '../constantsII';

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/games.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const games = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            games.push(res.data[fbKey]);
          });
        }
        resolve(games);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

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

export default {getRequest, postRequest};
