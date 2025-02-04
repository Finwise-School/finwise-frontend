import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';
import Info from './info/GoalSIP_Info';

const GoalSIP = () => {
  const [goalAmount, setGoalAmount] = useState(100000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [investmentDuration, setInvestmentDuration] = useState(5);
  const [result, setResult] = useState({
    monthlySIP: "0",
    totalInvested: "0",
    goalAmount: "0",
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [errors, setErrors] = useState({
    goalAmount: "",
    annualReturn: "",
    investmentDuration: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { goalAmount: "", annualReturn: "", investmentDuration: "" };

    if (goalAmount <= 0 || isNaN(goalAmount)) {
      newErrors.goalAmount = "Please enter a valid goal amount.";
      valid = false;
    }
    if (annualReturn <= 0 || isNaN(annualReturn)) {
      newErrors.annualReturn = "Please enter a valid annual return percentage.";
      valid = false;
    }
    if (investmentDuration <= 0 || isNaN(investmentDuration)) {
      newErrors.investmentDuration = "Please enter a valid investment duration.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const calculateSIP = () => {
    if (!validateForm()) return;

    const FV = parseFloat(goalAmount);
    const annualReturnRate = parseFloat(annualReturn);
    const years = parseInt(investmentDuration);

    // Convert annual return to monthly return
    const r = annualReturnRate / 100 / 12;
    const n = years * 12;

    // Calculate monthly investment amount using precise formula
    const P = (FV * r) / (Math.pow(1 + r, n) - 1);

    // Calculate total invested amount
    const totalInvested = P * n;

    // Round up values
    const roundedMonthlySIP = Math.ceil(P);
    const roundedTotalInvested = Math.ceil(totalInvested);
    const roundedGoalAmount = Math.ceil(FV);

    // Set the result with comma formatting
    setResult({
      monthlySIP: roundedMonthlySIP.toLocaleString(),
      totalInvested: roundedTotalInvested.toLocaleString(),
      goalAmount: roundedGoalAmount.toLocaleString(),
    });

    // Prepare chart data
    const newLabels = Array.from({ length: years }, (_, i) => i + 1);
    const investedData = newLabels.map(year => {
      const currentN = year * 12;
      const currentInvested = P * currentN;
      return Math.ceil(currentInvested); // Round up for chart data
    });

    setChartData({
      labels: newLabels,
      datasets: [
        {
          label: 'Total Invested Amount',
          data: investedData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    });
  };

  useEffect(() => {
    calculateSIP();
  }, [goalAmount, annualReturn, investmentDuration]);

  return (
    <div className="bg-[#070707] p-2">
      <div className="max-w-6xl mx-auto bg-[#070707] shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#9B4DCA]">Goal SIP Calculator</h1>
          <p className="text-gray-300">Calculate your Systematic Investment Plan (SIP) for achieving financial goals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Fields */}
          <div>
            <h2 className="text-lg font-semibold text-gray-200 mb-4">Input fields:</h2>
            <div className="space-y-4">
              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.goalAmount ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="goalAmount" className="text-gray-100">Goal Amount</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300">&#163;</span>
                  <input
                    type="number"
                    id="goalAmount"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(e.target.value)}
                    className="bg-purple-300 text-gray-900 font-semibold text-right p-2 rounded-lg w-24"
                  />
                </div>
              </div>
              {errors.goalAmount && <p className="text-gray-900 text-sm">{errors.goalAmount}</p>}
              
              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.annualReturn ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="annualReturn" className="text-gray-300">Expected Annual Return (%)</label>
                <input
                  type="number"
                  id="annualReturn"
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(e.target.value)}
                  className="bg-purple-300 text-gray-900 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.annualReturn && <p className="text-gray-900 text-sm">{errors.annualReturn}</p>}

              <div className={`flex items-center justify-between p-4 border rounded-lg ${errors.investmentDuration ? 'border-red-500' : 'border-gray-300'}`}>
                <label htmlFor="investmentDuration" className="text-gray-300">Investment Duration (Years)</label>
                <input
                  type="number"
                  id="investmentDuration"
                  value={investmentDuration}
                  onChange={(e) => setInvestmentDuration(e.target.value)}
                  className="bg-purple-300 text-gray-900 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              {errors.investmentDuration && <p className="text-gray-900 text-sm">{errors.investmentDuration}</p>}
            </div>
          </div>
          {/* Output Fields */}
          <div className="output-fields">
            <h2 className="text-lg font-semibold text-gray-200 mb-4">Results:</h2>
            <div className="space-y-2">
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="text-gray-300">Monthly SIP Amount Required</p>
                <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.monthlySIP}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="text-gray-300">Total Invested Amount</p>
                <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.totalInvested}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="text-gray-300">Goal Amount</p>
                <p className="text-[#9B4DCA] font-semibold text-xl">&#163;{result.goalAmount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8" style={{ marginTop: "-100px" }}>
        <h2 className="text-lg font-semibold text-gray-200 mb-4">Investment Growth Over Time</h2>
            <Line
            className='bg-gray-900'
              data={chartData}
              options={{
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Years',
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Amount Invested (£)',
                    },
                    ticks: {
                      callback: function (value) {
                        if (value >= 1000000) {
                          return '£' + (value / 1000000).toFixed(1) + 'M'; // For millions
                        } else if (value >= 1000) {
                          return '£' + (value / 1000).toFixed(1) + 'K'; // For thousands
                        } else {
                          return '£' + value; // For values below 1000
                        }
                      },
                    },
                  },
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        if (tooltipItem.raw >= 1000000) {
                          return `${tooltipItem.label} year${tooltipItem.label > 1 ? 's' : ''}: £${(tooltipItem.raw / 1000000).toFixed(1)}M`;
                        } else if (tooltipItem.raw >= 1000) {
                          return `${tooltipItem.label} year${tooltipItem.label > 1 ? 's' : ''}: £${(tooltipItem.raw / 1000).toFixed(1)}K`;
                        } else {
                          return `${tooltipItem.label} year${tooltipItem.label > 1 ? 's' : ''}: £${tooltipItem.raw}`;
                        }
                      },
                    },
                  },
                },
              }}
            />
        </div>
        <Tool_Footer message="Plan your investments to reach your financial goals. Start your journey towards achieving them now!"/>
        <Info/>
        <CalculatorList activeCalculator="Goal SIP Calculator" />

      </div>
    </div>
  );
};

export default GoalSIP;
