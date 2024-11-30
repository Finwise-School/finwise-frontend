import React from 'react';
import { Link } from 'react-router-dom';
import GoalImg from "../assets/images/calci_images/goalsip.png";
import FireImg from "../assets/images/calci_images/fire.png";
import MutualImg from "../assets/images/calci_images/mutual.png";
import FDImg from "../assets/images/calci_images/fd.png";
import TaxImg from "../assets/images/calci_images/tax.png";
import BudgetImg from "../assets/images/calci_images/budget.png";
import CreditCardImg from "../assets/images/calci_images/creditcard.png";
import IRRImg from "../assets/images/calci_images/irr.png";
import LoanImg from "../assets/images/calci_images/mortgage-borrower.png";
import EMIImg from "../assets/images/calci_images/emi.png";
import CAGRImg from "../assets/images/calci_images/cagr.png";
import RentalImg from "../assets/images/calci_images/rental.png";
import EarlyAccessTemplate from './EarlyAccessTemplate';

const FinancialPlanningTools = () => {
  return (
    <div style={{ marginTop: "0px", backgroundColor: "#070707" }} className="w-full mx-auto bg-gradient-to-tr from-[#070707] via-[#7020b530] to-black">
      <div className="flex justify-center bg-gradient-to-tr from-[#070707] via-[#7020b586] to-black">
        <div className="w-full px-4 py-10 lg:py-20 finwise-gradient text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">Financial Planning Tools</h1>
          <p className="finwise text-gray-400 mt-4 txt-sm sm:text-base lg:text-lg">
            Financial tools to help you manage finances ranging from Budget calculator to Investment.
          </p>
        </div>
      </div>

      <hr className="mt-0 h-0.5 my-8 bg-gray-100 border-0 dark:bg-gray-400" />

      <div className="w-full max-w-screen-xl mx-auto" style={{ maxWidth: "1150px"}}>
        <div className="grid-for-calci grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-5">
          <ToolCard title="Fixed Deposit Calculator" image={FDImg} path="/tools/fixed-deposit" />
          <ToolCard title="SIP Calculator" image={MutualImg} path="/tools/sip" />
          <ToolCard title="Goal SIP Calculator" image={GoalImg} path="/tools/goal-sip" />
          <ToolCard title="F.I.R.E." image={FireImg} path="/tools/fire" />
          <ToolCard title="Tax Calculator" image={TaxImg} path="/tools/tax" />
          <ToolCard title="Budget Boss Calculator" image={BudgetImg} path="/tools/budget-boss" />
          <ToolCard title="Credit Card Calculator" image={CreditCardImg} path="/tools/credit-card" />
          <ToolCard title="IRR" image={IRRImg} path="/tools/irr" />
          <ToolCard title="Mortgage Borrower Calculator" image={LoanImg} path="/tools/mortgage-borrower" />
          <ToolCard title="EMI Calculator" image={EMIImg} path="/tools/emi" />
          <ToolCard title="CAGR" image={CAGRImg} path="/tools/cagr" />
          <ToolCard title="Rental Yield" image={RentalImg} path="/tools/rental-yield" />
        </div>
      </div>

      <EarlyAccessTemplate />
    </div>
  );
};

const ToolCard = ({ title, image, path }) => {
  return (
    <Link to={path} style={{
      background: "linear-gradient(26deg, rgb(53, 24, 88), rgb(117, 70, 174))",
      // backgroundColor: "#351858",
    }} className="tool-card text-white font-bold p-4 flex flex-col items-center h-40 rounded-lg mb-2">
      <img src={image} alt={`${title} Icon`} className="mb-2 h-20 w-20 object-contain" />
      <p className="mt-2">{title}</p>
    </Link>
  );
};

export default FinancialPlanningTools;
