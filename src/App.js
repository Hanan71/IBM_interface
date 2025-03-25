// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CropDiseaseDetection from './components/CropDiseaseDetection';
import MarketInsights from './components/MarketInsights';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/crop-disease" element={<CropDiseaseDetection />} />
          <Route path="/market-insights" element={<MarketInsights />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
