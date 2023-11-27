import axios from 'axios';

const CURRENT_PATCH = '13.18.1';
const DEFAULT_ENDPOINT = `http://ddragon.leagueoflegends.com/cdn/${CURRENT_PATCH}/data/pt_BR`;
export const DEFAULT_IMAGE_ENDPOINT = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading`;
export const DEFAULT_SPLASH_ENDPOINT = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash`;

const api = axios.create({
  baseURL: DEFAULT_ENDPOINT,
  timeout: 10000,
});

api.interceptors.request.use(config => {
  return config;
});

api.interceptors.response.use(response => {
  return response;
});

export default api;
