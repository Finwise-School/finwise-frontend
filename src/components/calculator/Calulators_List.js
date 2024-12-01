import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const calculators = [
  { path: "/tools/fixed-deposit", name: "Fixed Deposit Calculator" },
  { path: "/tools/goal-sip", name: "Goal SIP Calculator" },
  { path: "/tools/sip", name: "SIP Calculator" },
  { path: "/tools/fire", name: "FIRE Calculator" },
  { path: "/tools/cagr", name: "CAGR Calculator" },
  { path: "/tools/emi", name: "EMI Calculator" },
  { path: "/tools/budget-boss", name: "Budget Calculator" },
  { path: "/tools/irr", name: "IRR Calculator" },
  { path: "/tools/credit-card", name: "Credit Card Calculator" },
  { path: "/tools/tax", name: "Tax Calculator" },
  { path: "/tools/rental-yield", name: "Rental Yield Calculator" },
  { path: "/tools/mortgage-borrower", name: "Mortgage Borrower Calculator" }
];

const CalculatorList = ({ activeCalculator }) => {
  return (
    <div className="mt-16">
      <h2 className="text-lg font-semibold text-gray-200 mb-4">Try our more Popular Calculators</h2>
      <div className="space-y-2">
        {calculators.map(calculator => (
          <Link
            key={calculator.path}
            to={calculator.path}
            className={`flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-gray-800 ${activeCalculator === calculator.name ? 'text-green-500' : 'text-gray-800'}`}
          >
            <p className={activeCalculator === calculator.name ? 'text-[#9B4DCA]' : 'text-gray-200'}>{calculator.name}</p>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-300" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CalculatorList;
