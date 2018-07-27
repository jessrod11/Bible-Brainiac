import axios from 'axios';
import constants from '../constantsII';

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

export default { getRequest };
