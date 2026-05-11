import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-800 mb-4">Coal Mine Carbon Neutrality</h1>
        <p className="text-xl text-gray-600 mb-8">Quantify, Analyze, and Achieve Carbon Neutrality in Coal Mining Operations</p>
        <div className="flex gap-4 justify-center">
          <Link to="/register-mine" className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-700">Register Your Mine</Link>
          <Link to="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">View Dashboard</Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">📊 Emission Calculator</h3>
          <p className="text-gray-600">Calculate activity-wise carbon emissions from excavation, transportation, and equipment usage.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">🌳 Carbon Sinks</h3>
          <p className="text-gray-600">Estimate carbon sequestration potential through afforestation and natural sinks.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">🎯 Neutrality Pathways</h3>
          <p className="text-gray-600">Simulate strategies for achieving carbon neutrality with clean technologies.</p>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">How It Works</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-blue-700 mb-2">Step 1: Register</h4>
            <p className="text-gray-600">Register your coal mine with basic information about location, type, and capacity.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 mb-2">Step 2: Input Data</h4>
            <p className="text-gray-600">Enter data on mining activities and operational metrics.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 mb-2">Step 3: Calculate</h4>
            <p className="text-gray-600">System calculates emissions using established emission factors.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 mb-2">Step 4: Plan</h4>
            <p className="text-gray-600">Simulate pathways and strategies to achieve carbon neutrality goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
