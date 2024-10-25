import React from 'react';
import { useParams } from 'react-router-dom';

export default function CustomerDetails() {
  const { id } = useParams();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Customer Details</h1>
          <p className="mt-2 text-sm text-gray-700">
            Detailed information for customer ID: {id}
          </p>
        </div>
      </div>
      <div className="mt-8 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <p className="text-gray-500">Customer details will be displayed here</p>
        </div>
      </div>
    </div>
  );
}