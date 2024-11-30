import React from 'react';
import arrowRight from '../assets/images/rea-arrow.svg'; // Import the SVG arrow
import {Link} from 'react-router-dom';

const ButtonLink = ({ href, text, icon }) => {
    return (
        <Link
            to="/early-access"
            className="inline-block bg-gradient-to-r from-green-400 to-purple-600 text-white font-semibold py-3 px-5 rounded-full text-lg hover:opacity-90 transition-opacity flex justify-between items-center w-max"
        >
            <span className="mr-2">Request early access</span>
            <img src={arrowRight} alt="Right Arrow" className="ml-2 w-8 h-8" />
        </Link>
    );
};

export default ButtonLink;
