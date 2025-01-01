import React from 'react';
import { assets } from '../assets/image/assets';

const Card2 = () => {
  return (
    <div className="w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden border relative group">
      {/* Image Section */}
      <img
        src={assets.guest1}
        alt="Profile"
        className="w-full h-40 object-cover"
      />

      {/* Content Section - Hidden by default, shown on hover */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg font-semibold text-gray-800">Ayub Ghauri</h2>
        <p className="text-sm text-gray-600 mt-1">Founder-HospitALL</p>
        <p className="text-sm text-gray-600">CTO NETSOL</p>
      </div>
    </div>
  );
};

export default Card2;
