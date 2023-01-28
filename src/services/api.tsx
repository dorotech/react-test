import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://rickandmortyapi.com/api/',
});

export { api };
