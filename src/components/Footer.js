import React, { useState } from 'react';
import footerimg from '../assets/images/footerimg.svg';
import { Link } from 'react-router-dom';
import { Spinner, Button, Modal } from "flowbite-react";
import axios from 'axios';

const Footer = () => {
  const [phone, setPhone] = useState('');
  const [submit, isSubmit] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };

  const date = new Date();
  const writeDate = formatDate(date);

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const cleanedValue = value.replace(/\D/g, '').slice(0, 10);
    setPhone(cleanedValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (phone.length === 10) {
      isSubmit(true);
      const phoneData = { phone, writeDate };

      try {
        const response = await axios.post('https://api.finwiseschool.com/api/phoneData', phoneData);

        if (response.status === 201) {
          console.log('Phone Number Received');
          setOpenModal(true);
        } else {
          console.error('Error saving data:', response.data);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      } finally {
        isSubmit(false);
      }
    } else {
      console.error('Invalid phone number. It should be exactly 10 digits.');
    }
  };

  return (
    <div className="w-full">
      {/* Modal */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Thank you for subscribing to our newsletter. We’ll keep you updated!
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="gray" onClick={() => setOpenModal(false)}>
                OK
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <footer className="bg-black w-full">
        <div className="max-w-screen-xl mx-auto px-0 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start">

            {/* Newsletter Section */}
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h1
                className="md:text-4xl md:text-left text-center text-3xl font-bold text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #22c55e, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Master your Finance with Finwise
              </h1>
              <form
                onSubmit={onSubmit}
                className="flex items-center mt-6 space-x-4"
              >
                <div className="flex items-center p-8 space-x-2 flex-col md:flex-row">
                  <input
                    type="text"
                    placeholder="Phone no"
                    className="bg-gray-800 text-white px-4 py-3 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <div className='w-full md:px-0 px-20 mt-3 md:mt-0'>
                    <button className="bg-purple-500 md:w-[100%] w-full text-white px-6 md:mt-0 py-3 rounded-full flex items-center justify-center hover:bg-purple-600">
                      Send <i className="fas fa-paper-plane ml-2"></i>
                    </button>
                  </div>

                </div>

              </form>
            </div>
          </div>

          <hr className="border-black my-8" />

          {/* Footer Links */}
          <div className="grid-for-calci grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-white font-semibold mb-4">Tools</h3>
              <ul className="text-gray-400 space-y-2">
                <li><Link to="/tools/budget-boss">Budget Boss</Link></li>
                <li><Link to="/tools/goal-sip">Goal SIP</Link></li>
                <li><Link to="/tools/sip">SIP Calculator</Link></li>
                <li><Link to="/tools/fire">F.I.R.E</Link></li>
                <li><Link to="/tools/">Many more</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Blogs</h3>
              <ul className="text-gray-400 space-y-2">
                <li><Link to="blogs/uk-tax-system">UK Tax System</Link></li>
                <li><Link to="blogs/">Debt Management</Link></li>
                <li><Link to="blogs/">Negotiation Wizardry</Link></li>
                <li><Link to="blogs/">How to Budget</Link></li>
                <li><Link to="blogs/">Investing Yes or No?</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="text-gray-400 space-y-2">
                <li><Link to="/budgeting">Budgeting</Link></li>
                <li><Link to="/stock">Stock Market</Link></li>
                <li><Link to="/taxation">Taxation</Link></li>
                <li><Link to="/retirement">Retirement Planning</Link></li>
                <li><Link to="/books">More</Link></li>
              </ul>
            </div>
            <div>
              <img
                id="footerimgg"
                src={footerimg}
                alt="Footer Image"
                className="w-full rounded-lg shadow-lg"
                style={{
                  width: "70%",
                  marginTop: "0",
                }}
              />
              <style>
                {`
                  @media (min-width: 1024px) {
                    #footerimgg {
                      position: relative;
                      top: -10rem;
                      width: 100%;
                    }
                  }
                `}
              </style>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <span className="text-gray-400">Follow us</span>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-spotify"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/finwiseschool?igsh=MWNkNHNsam1kcXM5dQ==" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@finwise.school?_t=8rpn5Dg3Dsn&_r=1" className="text-gray-400 hover:text-white">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.linkedin.com/company/finwiseschool/" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com/@finwiseschool?si=HtlrLSelgF0_JTCv" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>

            </div>
            <Link to="/contact" className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
            <p className="text-gray-400 text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0 w-full lg:w-auto">
              &copy; 2024 Finwise School All Rights Reserved
            </p>

            <div className="flex flex-col lg:flex-row lg:space-x-4 text-center lg:text-left space-y-2 lg:space-y-0 order-1 lg:order-2">
              <p className="text-gray-400">
                <Link to="/privacy">Privacy Notice</Link>
              </p>
              <p className="text-gray-400">
                <Link to="#">Terms and Conditions</Link>
              </p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
