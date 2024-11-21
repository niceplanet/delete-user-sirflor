import axios from "axios";

const api = axios.create({
  baseURL: "https://sirflor.com.br",
});

export default api;
