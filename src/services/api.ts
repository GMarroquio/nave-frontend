import axios from 'axios';

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/',
  headers: { 'Content-Type': 'application/json' }
});

export { api };
