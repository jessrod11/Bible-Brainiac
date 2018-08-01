import axios from 'axios';
import constants from '../constantsII';

const postRequest = (newVerse, gameId) => {
  newVerse.gameId = gameId;
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

const getVerseRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/featuredVerse.json`)
      .then(res => {
        const featuredVerse = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            featuredVerse.push(res.data[fbKey]);
          });
        }
        resolve(featuredVerse);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const putRequest = (gameId, updatedGame) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${constants.firebaseConfig.databaseURL}/games/${gameId}.json`, updatedGame)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getSingleGame = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/games/${id}.json`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {postRequest, getVerseRequest, putRequest, getSingleGame};
