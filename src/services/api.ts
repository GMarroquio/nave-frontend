import axios from 'axios';
import { getUser } from '../utils/userStorage';

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/',
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
  async (config) => {
    if (!config?.url?.endsWith('login')) {
      const { token } = getUser();
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // I cand handle a request with errors here
    return Promise.reject(error);
  }
);

export { api };
