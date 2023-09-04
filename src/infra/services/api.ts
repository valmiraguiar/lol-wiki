import axios from "axios";

const CURRENT_PATCH = '13.17.1';
const DEFAULT_ENDPOINT = `http://ddragon.leagueoflegends.com/cdn/${CURRENT_PATCH}/data/pt_BR`;

const api = axios.create({
  baseURL: DEFAULT_ENDPOINT,
  timeout: 10000,
});

api.interceptors.request.use(config => {
  return config;
});

api.interceptors.response.use(response => {
  console.log(response.data)
  return response;
});

export default api;