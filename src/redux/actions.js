// src/redux/actions.js

export const setUser = (userData) => ({
    type: 'SET_USER',
    payload: userData,
  });
  
  export const setMarketInsights = (data) => ({
    type: 'SET_MARKET_INSIGHTS',
    payload: data,
  });
  