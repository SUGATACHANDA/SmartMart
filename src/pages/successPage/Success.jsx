import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <svg className="w-20 h-20 text-green-500 mb-8" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-5.707l-7-7a1 1 0 00-1.414 1.414L6.393 11l-3.707 3.707a1 1 0 001.414 1.414L10 12.586l3.707 3.707a1 1 0 001.414-1.414L11.607 11l3.707-3.707a1 1 0 00-1.414-1.414z" clipRule="evenodd" />
      </svg>
      <h1 className="text-3xl font-bold text-gray-800">Payment Successful!</h1>
      <p className="text-gray-600 text-lg mt-4">Your payment has been processed successfully.</p>
      <p className="text-gray-600 text-lg mt-2">Your order will be dispatched soon.</p>
      <Link to={'/'} className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
        Continue Shopping
      </Link>
    </div>
  );
};

export default PaymentSuccess