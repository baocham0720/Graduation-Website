// Success.js
import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="mb-4">Thank you for your purchase. Your order has been placed successfully.</p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">Go to Home</Link>
    </div>
  );
};

export default Success;
