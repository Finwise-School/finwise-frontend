import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import REAButton from '../../REAButton';
import Logo from '../../../assets/images/logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    const isActive = (path) => location.pathname === path ? 'text-purple-400' : 'text-white'; // Change text color to white

    return (
        <nav className="bg-[#070707] text-white border-gray-200 dark:bg-[#070707]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-12" alt="Finwise School Logo" />
                    <div className="flex flex-col text-white">
                        <span className="text-lg font-semibold">Finwise School</span>
                        <span className="text-sm font-thin">Finance Smart, Live Wise</span>
                    </div>
                </Link>

                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={handleToggle}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M8.5 13h7.5"
                        />
                    </svg>
                </button>

                <div
                    className={`fixed inset-y-0 right-0 bg-[#070707] text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}
                    style={{
                        zIndex: 9999,
                        width: '100%',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(7, 7, 7, 0.6)',
                    }}
                >
                    <div className="flex flex-col p-4 h-full">
                        <button
                            type="button"
                            className="self-end p-2 text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            onClick={handleToggle}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1l12 12M13 1L1 13"
                                />
                            </svg>
                        </button>
                        <ul className="flex flex-col space-y-4 mt-4">
                            <li>
                                <Link
                                    to="/about"
                                    className={`block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/about')}`}
                                    onClick={handleLinkClick}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tools"
                                    className={`block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/tools')}`}
                                    onClick={handleLinkClick}
                                >
                                    Tools
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blogs"
                                    className={`block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/blogs')}`}
                                    onClick={handleLinkClick}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/resources"
                                    className={`block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/resources')}`}
                                    onClick={handleLinkClick}
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/early-access"
                                    className="block py-2 px-3 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    <span
                                        style={{
                                            backgroundImage: 'linear-gradient(to right, #22c55e, #a855f7)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        Request Early Access &nbsp; <i className="fa fa-external-link"></i>
                                    </span>
                                </Link>


                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-4">
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#070707] dark:bg-[#070707]">
                        <li>
                            <Link
                                to="/about"
                                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive('/about')}`}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tools"
                                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive('/tools')}`}
                            >
                                Tools
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive('/blogs')}`}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/resources"
                                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive('/resources')}`}
                            >
                                Resources
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-4">
                    <REAButton />
                </div>
            </div>

            <hr className="md:hidden border-t border-gray-300 dark:border-gray-300" />
        </nav>
    );
};

export default Navbar;
