import axios from 'axios';

export const Endpoints = {
  BASE_URL: 'https://gist.githubusercontent.com/',
  PRODUCTS:
    'filipepiresg/d5d8b1502558ff033a2d7c78c2cab40a/raw/5b834764b9889c5130ce29dcb4b22be278abddbe/products.json',
};

export default axios.create({
  baseURL: Endpoints.BASE_URL,
  timeout: 7 * 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
