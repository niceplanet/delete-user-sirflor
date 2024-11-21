import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_IP
});

export default api;