// src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://spell-checker-r8fz.onrender.com',
});

export default API;
