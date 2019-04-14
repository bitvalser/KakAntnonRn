import config from '../constants/config';
import { token } from '../helper/jwt';

const { API_URL } = config;

const UserService = {
  getAchives: async () => {
    const jwt = await token();
    console.log(jwt);
    return new Promise(async (resolve, reject) => {
      fetch(`${API_URL}/user/getMyAchives`, {
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
  }
};

export default UserService;
