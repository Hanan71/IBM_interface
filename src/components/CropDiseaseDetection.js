// src/components/CropDiseaseDetection.js

import React, { useState } from 'react';
import { detectCropDisease } from '../utils/api';  // Import API
const CropDiseaseDetection = () => {
  const [image, setImage] = useState(null);  // لTo store uploaded images
  const [result, setResult] = useState(null);  // To store the detection result
  const [loading, setLoading] = useState(false);  // To store loading status
  // التعامل مع رفع الصورة
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);  // To store uploaded images
  };

  // Deal with  sending messeges to API
  const handleSubmit = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);  // add imges to The data sent
      try {
        setLoading(true);  // Activate the downloadل
        const response = await detectCropDisease(formData);  // send request الـ API
        setResult(response.data);  // store the result to The situation
      } catch (error) {
        console.error("Error detecting disease:", error);
      } finally {
        setLoading(false);  // stop daownloading 
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold"> Detection of typatic diseases</h2>
      <input 
        type="file" 
        onChange={handleImageUpload} 
        className="my-4" 
        accept="image/*" 
      />
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'downloading...' : ' Detection of the disease '}
      </button>

      {result && (
        <div className="mt-4">
          <h3>result:</h3>
          <p>{result.disease}</p>
        </div>
      )}
    </div>
  );
};

export default CropDiseaseDetection;

