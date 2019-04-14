import config from '../constants/config';
import { token } from '../helper/jwt';

const { API_URL } = config;

const AchivesService = {
  getAllAchives: async () => {
    const jwt = await token();
    return new Promise(async (resolve, reject) => {
      fetch(`${API_URL}/achives`, {
        method: 'GET',
        headers: {
          'accept': 'application/json, text/plain',
          'content-type': 'application/json;charset=UTF-8',
          'Authorization': jwt
        },
        mode: 'cors'
      })
        .then(response => response.json())
        .then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  },
  createAhive: async (title, description) => {
    const jwt = await token();
    return new Promise(async (resolve, reject) => {
      fetch(`${API_URL}/achives`, {
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain',
          'content-type': 'application/json;charset=UTF-8',
          'Authorization': jwt
        },
        body: JSON.stringify({
          title,
          description
        }),
        mode: 'cors'
      })
        .then(response => response.json())
        .then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  }
};

export default AchivesService;
