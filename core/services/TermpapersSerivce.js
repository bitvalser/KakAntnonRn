import config from '../constants/config';
import { token } from '../helper/jwt';

const { API_URL } = config;

const TermpapersService = {
  getTermpapers: async () => {
    const jwt = await token();
    return new Promise(async (resolve, reject) => {
      fetch(`${API_URL}/termpapers`, {
        method: 'GET',
        headers: {
          accept: 'application/json, text/plain',
          'content-type': 'application/json;charset=UTF-8',
          Authorization: jwt
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
  takeTermpaper: async (thm) => {
    const jwt = await token();
    return new Promise(async (resolve, reject) => {
      fetch(`${API_URL}/termpapers/takeTP`, {
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain',
          'content-type': 'application/json;charset=UTF-8',
          'Authorization': jwt
        },
        body: JSON.stringify({
          theme: thm
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
  },
  createTermpaper: async (thm, description) => {
    const jwt = await token();
    return new Promise(async (resolve, reject) => {
      fetch(`${API_URL}/termpapers`, {
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain',
          'content-type': 'application/json;charset=UTF-8',
          'Authorization': jwt
        },
        body: JSON.stringify({
          theme: thm,
          description,
          accepted: false
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

export default TermpapersService;
