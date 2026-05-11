import React, { useState } from 'react';

function PathwaySimulator() {
  const [strategies, setStrategies] = useState({});
  const [results, setResults] = useState(null);

  const baselineEmissions = 10000;

  const handleStrategyChange = (strategy, value) => {
    setStrategies({ ...strategies, [strategy]: value });
  };

  const simulate = () => {
    let reduction = 0;
    if (strategies.electricVehicles) reduction += baselineEmissions * 0.15;
    if (strategies.renewableEnergy) reduction += baselineEmissions * 0.25;
    if (strategies.afforestation) reduction += baselineEmissions * 0.20;
    if (strategies.methaneCaptue) reduction += baselineEmissions * 0.10;

    const remainingEmissions = baselineEmissions - reduction;
    const yearsToNeutrality = remainingEmissions > 0 ? (remainingEmissions / 500) : 1;

    setResults({
      baselineEmissions,
      reduction,
      remainingEmissions: Math.max(0, remainingEmissions),
      yearsToNeutrality: Math.max(1, yearsToNeutrality),
      percentageReduction: ((reduction / baselineEmissions) * 100).toFixed(2),
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Pathway Simulator</h1>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Select Strategies</h2>

          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={strategies.electricVehicles || false}
                onChange={(e) => handleStrategyChange('electricVehicles', e.target.checked)}
                className="mr-3"
              />
              <span className="font-bold">Electric Vehicles (15% reduction)</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={strategies.renewableEnergy || false}
                onChange={(e) => handleStrategyChange('renewableEnergy', e.target.checked)}
                className="mr-3"
              />
              <span className="font-bold">Renewable Energy (25% reduction)</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={strategies.afforestation || false}
                onChange={(e) => handleStrategyChange('afforestation', e.target.checked)}
                className="mr-3"
              />
              <span className="font-bold">Afforestation (20% reduction)</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={strategies.methaneCaptue || false}
                onChange={(e) => handleStrategyChange('methaneCaptue', e.target.checked)}
                className="mr-3"
              />
              <span className="font-bold">Methane Capture (10% reduction)</span>
            </label>
          </div>

          <button
            onClick={simulate}
            className="w-full mt-6 bg-green-800 text-white font-bold py-3 rounded-lg hover:bg-green-700"
          >
            Simulate
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Results</h2>

          {results ? (
            <div className="space-y-4">
              <div className="bg-red-100 p-4 rounded">
                <p className="text-gray-600">Baseline Emissions</p>
                <p className="text-2xl font-bold text-red-700">{results.baselineEmissions} tCO2e</p>
              </div>

              <div className="bg-green-100 p-4 rounded">
                <p className="text-gray-600">Total Reduction</p>
                <p className="text-2xl font-bold text-green-700">{results.reduction.toFixed(0)} tCO2e</p>
              </div>

              <div className="bg-orange-100 p-4 rounded">
                <p className="text-gray-600">Remaining Emissions</p>
                <p className="text-2xl font-bold text-orange-700">{results.remainingEmissions.toFixed(0)} tCO2e</p>
              </div>

              <div className="bg-blue-100 p-4 rounded">
                <p className="text-gray-600">Reduction Percentage</p>
                <p className="text-2xl font-bold text-blue-700">{results.percentageReduction}%</p>
              </div>

              <div className="bg-purple-100 p-4 rounded">
                <p className="text-gray-600">Years to Neutrality</p>
                <p className="text-2xl font-bold text-purple-700">{results.yearsToNeutrality.toFixed(1)} years</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select strategies and click "Simulate" to see results</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PathwaySimulator;
