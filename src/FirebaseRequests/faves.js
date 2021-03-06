import axios from 'axios';
import constants from '../constantsII';

const postRequest = (newFave) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/faves.json`, newFave)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/faves.json`)
      .then(res => {
        const faves = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            faves.push(res.data[fbKey]);
          });
        }
        resolve(faves);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteRequest = (gameId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/faves/${gameId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { postRequest, getRequest, deleteRequest };
