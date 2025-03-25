// src/components/MarketInsights.js

import React, { useEffect, useState } from 'react';
import { getMarketPricing } from '../utils/api';  // اAPI

const MarketInsights = () => {
  const [marketData, setMarketData] = useState(null);  // Detection of the disease
  const [loading, setLoading] = useState(false);  // To store loading status

  // To store market data when loading a component 
  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);  // Activate the download 
      try {
        const response = await getMarketPricing();  //  Activate the download API 
        setMarketData(response.data);  // srore informations
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false);  // stop downloading 
      }
    };

    fetchMarketData();
  }, []);  //  It will run useEffect Once when the component is loaded

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Market insights </h2>
      {loading ? (
        <p> downloading...</p>
      ) : (
        marketData && (
          <div className="mt-4">
            <p> The direction: {marketData.price} $</p>
            <p>The direction: {marketData.trend}</p>
          </div>
        )
      )}
    </div>
  );
};

export default MarketInsights;
