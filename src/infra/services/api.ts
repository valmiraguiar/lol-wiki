import axios from 'axios';
import { DEFAULT_LIST_ENDPOINT } from './constants/constants';

const api = axios.create({
  baseURL: DEFAULT_LIST_ENDPOINT,
  timeout: 10000,
});

api.interceptors.request.use(config => {
  return config;
});

api.interceptors.response.use(response => {
  return response;
});

export default api;
