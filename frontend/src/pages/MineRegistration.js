import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function MineRegistration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log('Form data:', data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Register Your Coal Mine</h1>
      
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8">
          Mine registered successfully! You can now start tracking emissions.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Mine Name</label>
          <input
            type="text"
            {...register('mineName', { required: 'Mine name is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Enter mine name"
          />
          {errors.mineName && <p className="text-red-500 text-sm mt-1">{errors.mineName.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Mine Type</label>
          <select
            {...register('mineType', { required: 'Please select mine type' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="">Select type</option>
            <option value="underground">Underground</option>
            <option value="open-cast">Open Cast</option>
          </select>
          {errors.mineType && <p className="text-red-500 text-sm mt-1">{errors.mineType.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            {...register('location', { required: 'Location is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Enter location"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">State</label>
          <input
            type="text"
            {...register('state', { required: 'State is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Enter state"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Annual Capacity (Tonnes)</label>
          <input
            type="number"
            {...register('capacity', { required: 'Capacity is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Enter annual capacity"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-800 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Register Mine
        </button>
      </form>
    </div>
  );
}

export default MineRegistration;
