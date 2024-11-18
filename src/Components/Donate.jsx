import React from 'react';
import qr from '../assets/QR.jpeg';

const Donate = () => {
  return (
    <div className="text-center h-[67vh] flex flex-col lg:flex-row gap-8 justify-center items-center px-4 lg:px-16 py-16 bg-gray-100" id="donate">
      {/* Heading */}
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h1 className="text-4xl font-semibold mb-4 text-teal-600">
          The Receiver's Name: <span className="italic text-teal-700">Madhusudan Tripathi</span>
        </h1>
        <p className="text-xl font-bold mb-4 underline text-teal-500">MUST MATCH</p>
      </div>

      {/* QR Code */}
      <div className="lg:w-1/4 mb-6 lg:mb-0">
        <img src={qr} alt="QR Code" className="w-64 h-64 mx-auto rounded-lg shadow-lg" />
      </div>

      {/* Bank Details */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-5xl font-semibold mb-4 text-teal-600">Bank Account Number</h2>
        <p className="text-3xl font-bold text-gray-800">202002020202002</p>
      </div>
    </div>
  );
};

export default Donate;

