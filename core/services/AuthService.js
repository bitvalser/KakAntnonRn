import config from '../constants/config';

const { API_URL } = config;

const AuthService = {
  login: async (identifier, password) => {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/auth/local`, {
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain',
          'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          identifier,
          password
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
  register: async (user, password) => {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/auth/local/register`, {
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain',
          'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          email: user.login,
          password
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

export default AuthService;
