import React, { useState } from 'react';

const HouseholdEssentialsSection = ({ homeEssentials, setHomeEssentials }) => {
  const [showEssentials, setShowEssentials] = useState(true);

  const addHomeEssential = () => setHomeEssentials([...homeEssentials, { name: '', spending: 0, frequency: 'monthly' }]);
  const removeHomeEssential = (index) => setHomeEssentials(homeEssentials.filter((_, i) => i !== index));

  const handleHomeEssentialChange = (index, field, value) => {
    const newEssentials = [...homeEssentials];
    newEssentials[index][field] = value;
    setHomeEssentials(newEssentials);
  };

  return (
    <div className="section mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-200">Household Essentials 🏠</h2>
        <button onClick={() => setShowEssentials(!showEssentials)} className="text-xl text-green-500">
          {showEssentials ? <i className="fas fa-minus text-white"></i> : <i className="fas fa-plus"></i>}
        </button>
      </div>

      {showEssentials && (
        <div className="border rounded-lg p-4 mb-4 bg-gradient-to-r from-purple-100 to-purple-500">
          {homeEssentials.map((essential, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <span className="text-sm text-gray-600">Essential {index + 1}</span>
              <input
                type="text"
                value={essential.name}
                onChange={(e) => handleHomeEssentialChange(index, 'name', e.target.value)}
                placeholder="Expense Name"
                className="p-2 border rounded-lg text-gray-900 flex-grow mb-2 md:mb-0"
              />
              <div className="flex items-center mb-2 md:mb-0">
                <div className="relative w-32">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2">£</span>
                  <input
                    type="number"
                    value={essential.spending}
                    onChange={(e) => handleHomeEssentialChange(index, 'spending', parseFloat(e.target.value) || 0)}
                    placeholder="Spending Amount"
                    className={`pl-6 p-2 border rounded-lg text-gray-900 w-full ${essential.isValid !== undefined && !essential.isValid ? 'border-red-500' : ''}`}
                  />
                </div>
                <span className="ml-2">per</span>
                <select
                  value={essential.frequency}
                  onChange={(e) => handleHomeEssentialChange(index, 'frequency', e.target.value)}
                  className="p-2 border text-gray-900 rounded-lg ml-2"
                >
                  <option value="weekly">Week</option>
                  <option value="monthly">Month</option>
                </select>
                <button onClick={() => removeHomeEssential(index)} className="ml-2 text-gray-900">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          ))}
          <button onClick={addHomeEssential} className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-800 text-sm">
            <i className="fas fa-plus mr-2"></i>Add Household Essential
          </button>
        </div>
      )}
      <hr className="border-t-2 border-gray-500 my-4" />
    </div>
  );
};

export default HouseholdEssentialsSection;
