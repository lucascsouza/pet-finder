import axios from 'axios';

const token = localStorage.getItem('token');
const auth = token ? `Bearer ${token}` : '';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization: auth,
  },
});

export default api;
