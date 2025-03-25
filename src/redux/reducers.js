// src/redux/reducers.js

const initialState = {
    user: null,
    marketInsights: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_MARKET_INSIGHTS':
        return { ...state, marketInsights: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  