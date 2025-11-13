import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tp-ci-cd-master.onrender.com:8080', // will call relative endpoints like /authors, /books, etc.
});

export default api;
