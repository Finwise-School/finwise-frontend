import React, { useEffect } from 'react';
import playwithstock from '../../assets/images/homeimages/playwithstock.svg';
// import REAButton from './REAButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PlayWithStock = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="w-full h-auto flex items-center justify-center bg-black bg-gradient-to-l from-black via-[rgba(128,0,255,0.1)] to-black">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
        {/* Image Section (on the left in desktop, swapped to the bottom in mobile) */}
        <div className="relative w-full flex justify-start">
          <img
            src={playwithstock}
            alt="Play with stocks"
             data-aos="fade-right"
            className="w-[80%] sm:w-[60%] md:w-[32rem] lg:w-[500px] xl:w-160 object-contain"
          />
        </div>

        {/* Text Section (on the right in desktop, swapped to the top in mobile) */}
        <div className="w-full text-center md:text-left space-y-6" data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl text-white font-semibold leading-tight">
          Level Up  <br /> Your Stock Game
          </h1>
          <p className="text-gray-400 text-sm w-full md:w-[28rem] leading-relaxed md:text-lg">
            Learn stocks the fun way! Dive into gamified modules, explore simulators like technical and fundamental analysis, and master investing skills—all while playing. Your financial glow-up starts here!
          </p>
          <div className="w-full flex justify-center md:justify-start">
            {/* <REAButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayWithStock;
