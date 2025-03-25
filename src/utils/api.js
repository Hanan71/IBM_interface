// src/utils/api.js

import axios from 'axios';

const BASE_URL = "https://your-backend-api-url.com/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getMarketPricing = () => {
  return api.get('/market/pricing');
};

export const detectCropDisease = (imageData) => {
  return api.post('/crop/disease-detect', { image: imageData });
};

export const getWeather = (location) => {
  return api.get(`/weather/${location}`);
};
