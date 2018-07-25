import axios from 'axios';
import constants from '../constantsII';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/scripture.json`)
      .then(res => {
        const scriptures = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            scriptures.push(res.data[fbKey]);
          });
        }
        resolve(scriptures);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postRequest = (newScripture) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/scripture.json/`, newScripture)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { getRequest, postRequest };
