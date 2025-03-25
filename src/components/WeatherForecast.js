// src/components/WeatherForecast.js

import React, { useState } from 'react';
import { getWeather } from '../utils/api';  //  Import API

const WeatherForecast = () => {
  const [location, setLocation] = useState('');  // for Storage of the entrance site
  const [weatherData, setWeatherData] = useState(null);  // To store weather data
  const [loading, setLoading] = useState(false);  // To store loading data

  // التعامل مع تغيير الموقع
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // تحميل بيانات الطقس
  const handleFetchWeather = async () => {
    if (location) {
      setLoading(true);  // Activate the download
      try {
        const response = await getWeather(location);  // Recall the weather data API
        setWeatherData(response.data);  // To store the data
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);  // Stop loading
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold"> Expectations of the savour</h2>
      <input 
        type="text" 
        value={location} 
        onChange={handleLocationChange} 
        className="my-4 p-2 border border-gray-300 rounded"
        placeholder="Enter the name of the city"
      />
      <button 
        onClick={handleFetchWeather} 
        className="bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'Loading...' : ' Weather show'}
      </button>

      {weatherData && (
        <div className="mt-4">
          <h3>The weather in:{location}:</h3>
          <p>The temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
