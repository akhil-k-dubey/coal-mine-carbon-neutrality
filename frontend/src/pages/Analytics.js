import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Analytics() {
  const emissionsBySource = [
    { name: 'Excavation', value: 3500 },
    { name: 'Transportation', value: 4200 },
    { name: 'Equipment', value: 2800 },
    { name: 'Processing', value: 2000 },
  ];

  const COLORS = ['#ea580c', '#f59e0b', '#fbbf24', '#fcd34d'];

  const reductionByStrategy = [
    { strategy: 'Electric Vehicles', reduction: 1500 },
    { strategy: 'Renewable Energy', reduction: 2500 },
    { strategy: 'Afforestation', reduction: 2000 },
    { strategy: 'Methane Capture', reduction: 1000 },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Analytics & Insights</h1>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Emissions by Source</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={emissionsBySource}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {emissionsBySource.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Reduction Potential by Strategy</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reductionByStrategy}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="strategy" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reduction" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Key Insights</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <h3 className="font-bold text-green-700 mb-2">Highest Impact Strategy</h3>
            <p className="text-gray-600">Renewable Energy offers the maximum reduction potential (2,500 tCO2e)</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-700 mb-2">Major Emission Source</h3>
            <p className="text-gray-600">Transportation accounts for 33% of total emissions</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-orange-500">
            <h3 className="font-bold text-orange-700 mb-2">Cost Efficiency</h3>
            <p className="text-gray-600">Combining strategies reduces implementation costs by 30%</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-700 mb-2">Timeline</h3>
            <p className="text-gray-600">Carbon neutrality achievable within 5-7 years with all strategies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
