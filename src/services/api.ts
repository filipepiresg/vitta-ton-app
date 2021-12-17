import axios from 'axios';

export const Endpoints = {
  BASE_URL: 'http://localhost:3000/',
  PRODUCTS: 'products/',
};

export default axios.create({
  baseURL: Endpoints.BASE_URL,
  timeout: 7 * 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
