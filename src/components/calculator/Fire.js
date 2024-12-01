import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';
import Info from './info/FIRE_Info';

const Fire = () => {
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [currentAge, setCurrentAge] = useState(20);
  const [retirementAge, setRetirementAge] = useState(40);
  const [inflationRate, setInflationRate] = useState(10);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let validationErrors = {};

    if (isNaN(monthlyExpense) || monthlyExpense <= 0) {
      validationErrors.monthlyExpense = "Monthly expense must be a positive number.";
    }

    if (isNaN(currentAge) || currentAge <= 0) {
      validationErrors.currentAge = "Current age must be a positive number.";
    }

    if (isNaN(retirementAge) || retirementAge <= 0) {
      validationErrors.retirementAge = "Retirement age must be a positive number.";
    } else if (parseInt(currentAge) >= parseInt(retirementAge)) {
      validationErrors.retirementAge = "Retirement age must be greater than current age.";
    }

    if (isNaN(inflationRate) || inflationRate <= 0) {
      validationErrors.inflationRate = "Inflation rate must be a positive number.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-GB', { style: 'decimal', maximumFractionDigits: 0 }).format(number);
  };

  const calculateFIRE = () => {
    if (!validateForm()) return;

    const monthlyExpenseValue = parseFloat(monthlyExpense);
    const currentAgeValue = parseInt(currentAge);
    const retirementAgeValue = parseInt(retirementAge);
    const inflationRateValue = parseFloat(inflationRate) / 100;

    const yearsUntilRetirement = retirementAgeValue - currentAgeValue;
    const annualExpenseToday = monthlyExpenseValue * 12;
    const futureExpense = annualExpenseToday * Math.pow(1 + inflationRateValue, yearsUntilRetirement);

    const leanFIRE = futureExpense * 20;
    const fire = futureExpense * 25;
    const fatFIRE = futureExpense * 50;

    setResult({
      expenseToday: formatNumber(annualExpenseToday),
      expenseAtRetirement: formatNumber(futureExpense),
      leanFIRE: formatNumber(leanFIRE),
      fire: formatNumber(fire),
      fatFIRE: formatNumber(fatFIRE),
    });
  };

  useEffect(() => {
    calculateFIRE();
  }, [monthlyExpense, currentAge, retirementAge, inflationRate]);

  return (
    <div className="bg-[#070707] p-2">
      <div className="max-w-6xl mx-auto bg-[#070707] shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#9B4DCA]">FIRE Calculator</h1>
          <p className="text-gray-900">Financial Independence Retire Early Calculator</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input Fields */}
          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">Input fields:</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="monthly-expense" className="text-gray-300">Monthly Expense</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300">&#163;</span>
                  <input
                    type="number"
                    id="monthly-expense"
                    value={monthlyExpense}
                    onChange={(e) => setMonthlyExpense(e.target.value)}
                    className="bg-purple-300 text-gray-900 font-semibold text-right p-2 rounded-lg w-24"
                  />
                </div>
              </div>
              {errors.monthlyExpense && <p className="text-gray-900 text-sm">{errors.monthlyExpense}</p>}

              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="current-age" className="text-gray-300">Current Age</label>
                <input
                  type="number"
                  id="current-age"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                  className="bg-purple-300 text-gray-900 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.currentAge && <p className="text-gray-900 text-sm">{errors.currentAge}</p>}

              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="retirement-age" className="text-gray-300">Retirement Age</label>
                <input
                  type="number"
                  id="retirement-age"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(e.target.value)}
                  className="bg-purple-300 text-gray-900 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.retirementAge && <p className="text-gray-900 text-sm">{errors.retirementAge}</p>}

              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="inflation-rate" className="text-gray-300">Assumed Inflation Rate</label>
                <input
                  type="number"
                  id="inflation-rate"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(e.target.value)}
                  className="bg-purple-300 text-gray-900 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.inflationRate && <p className="text-gray-900 text-sm">{errors.inflationRate}</p>}
            </div>
          </div>
          {/* Output Fields */}
          <div className="output-fields mt-0 md:mt-0">
            <h2 className="text-lg font-semibold text-gray-300 mb-4">Results:</h2>
            {result && (
              <div className="space-y-2">
                <div className="grid grid-cols-1 gap-2" style={{ "row-gap": "0.6rem" }}>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="text-gray-300">Expense Today</p>
                    <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.expenseToday}</p>
                  </div>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="text-gray-300 flex items-center">Expense at {retirementAge}  </p>
                    <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.expenseAtRetirement}</p>
                  </div>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="text-gray-300 flex items-center">Lean FIRE  </p>
                    <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.leanFIRE}</p>
                  </div>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="text-gray-300 flex items-center">FIRE  </p>
                    <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.fire}</p>
                  </div>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="text-gray-300 flex items-center">FAT FIRE  </p>
                    <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.fatFIRE}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ marginTop: "-5rem" }}>
          <Tool_Footer message="Discover how to achieve financial independence and retire early. Begin your journey to a secure future!" />
        </div>
        <Info/>
        <CalculatorList activeCalculator="FIRE Calculator" />
      </div>
    </div>
  );
};

export default Fire;
