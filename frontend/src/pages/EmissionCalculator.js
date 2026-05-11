import React, { useState } from 'react';

function EmissionCalculator() {
  const [activities, setActivities] = useState([]);
  const [activityType, setActivityType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('tonnes');
  const [totalEmissions, setTotalEmissions] = useState(0);

  const emissionFactors = {
    excavation: 0.15,
    transportation: 0.25,
    equipment: 0.35,
    processing: 0.20,
  };

  const addActivity = () => {
    if (activityType && quantity) {
      const emission = quantity * emissionFactors[activityType];
      setActivities([...activities, { type: activityType, quantity, unit, emission }]);
      setTotalEmissions(totalEmissions + emission);
      setActivityType('');
      setQuantity('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Emission Calculator</h1>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Add Activities</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Activity Type</label>
            <select
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select activity</option>
              <option value="excavation">Excavation</option>
              <option value="transportation">Transportation</option>
              <option value="equipment">Equipment Usage</option>
              <option value="processing">Processing</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter quantity"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="tonnes">Tonnes</option>
              <option value="kg">Kilograms</option>
              <option value="hours">Hours</option>
            </select>
          </div>

          <button
            onClick={addActivity}
            className="w-full bg-green-800 text-white font-bold py-2 rounded-lg hover:bg-green-700"
          >
            Add Activity
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          
          <div className="mb-6">
            <h3 className="font-bold mb-4">Activities Added:</h3>
            <div className="space-y-2">
              {activities.map((activity, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded">
                  <p className="font-bold">{activity.type}</p>
                  <p className="text-sm text-gray-600">{activity.quantity} {activity.unit}</p>
                  <p className="text-green-700 font-bold">CO2e: {activity.emission.toFixed(2)} tonnes</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-600 mb-2">Total Emissions</p>
            <p className="text-4xl font-bold text-green-800">{totalEmissions.toFixed(2)} tCO2e</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmissionCalculator;
