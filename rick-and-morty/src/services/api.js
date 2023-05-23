//MÓDULO AXIOS - PARA REQUISIÇÕES HTTP
import axios from 'axios';

const api = axios.create({
    //URL BASE PARA AS REQUISIÇÕES
    baseURL: 'https://rickandmortyapi.com/api/'
});

export default api;