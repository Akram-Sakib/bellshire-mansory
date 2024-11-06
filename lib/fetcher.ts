import axios from 'axios';
import { getCookie } from 'cookies-next';
import { signOut } from './utils';

const fetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

fetcher.interceptors.request.use(
  (config) => {
    const token = getCookie('accessToken');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

fetcher.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Call the logout function here
      signOut();
    }
    return Promise.reject(error);
  }
);

export default fetcher;
