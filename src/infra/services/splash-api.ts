import axios from 'axios';
import { DEFAULT_SPLASH_ENDPOINT } from './constants/constants';

const splashApi = axios.create({
  baseURL: DEFAULT_SPLASH_ENDPOINT,
  timeout: 10000,
});

splashApi.interceptors.request.use(config => {
  return config;
});

splashApi.interceptors.response.use(response => {
  return response;
});

export default splashApi;
