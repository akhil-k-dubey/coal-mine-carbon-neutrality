import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const [emissionData, setEmissionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for demonstration
    const mockData = [
      { month: 'Jan', emissions: 2400, sinks: 1400 },
      { month: 'Feb', emissions: 2210, sinks: 1600 },
      { month: 'Mar', emissions: 2290, sinks: 1800 },
      { month: 'Apr', emissions: 2000, sinks: 2100 },
      { month: 'May', emissions: 2181, sinks: 2400 },
      { month: 'Jun', emissions: 2500, sinks: 2200 },
    ];
    setEmissionData(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-gray-600">Total Emissions</h3>
          <p className="text-3xl font-bold text-green-800">12,500 tCO2e</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-gray-600">Carbon Sinks</h3>
          <p className="text-3xl font-bold text-blue-800">5,200 tCO2e</p>
        </div>
        <div className="bg-orange-100 p-6 rounded-lg">
          <h3 className="text-gray-600">Gap to Neutrality</h3>
          <p className="text-3xl font-bold text-orange-800">7,300 tCO2e</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="text-gray-600">Reduction Progress</h3>
          <p className="text-3xl font-bold text-purple-800">35%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Emissions vs Sinks Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emissionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="emissions" stroke="#ea580c" />
              <Line type="monotone" dataKey="sinks" stroke="#22c55e" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Monthly Emissions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={emissionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="emissions" fill="#ea580c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
