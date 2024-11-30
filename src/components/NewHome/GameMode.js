import React, { useEffect } from 'react';
import gamemode from '../../assets/images/homeimages/gamemode.svg';
// import REAButton from './REAButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GameMode = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function
          once: true, // Whether animation should happen only once
        });
      }, []);
    return (
        <div className="w-full h-auto flex items-center justify-center bg-black bg-gradient-to-r from-black via-[rgba(128,0,255,0.1)] to-black">
            <ddiv className="container mx-auto flex flex-col-reverse md:flex-row-reverse justify-around items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
                <div className="relative w-full flex justify-center">
                    <img
                        src={gamemode}
                        alt="Play with stocks"
                        data-aos="fade-left"
                        className="w-[80%] sm:w-[60%] md:w-[32rem] lg:w-[500px] xl:w-160 object-contain"
                    />
                </div>

                <div className="w-full text-center md:text-left space-y-6"   data-aos="fade-right">
                    <h1 className="text-5xl md:text-6xl text-white font-semibold leading-tight">
                        Learn in <br className="hidden md:block" /> Game Mode
                    </h1>
                    <p className="text-gray-400 text-sm  w-full md:w-[28rem] leading-relaxed text-base md:text-lg">
                        Step into a world where managing money feels like playing your favorite game. Master budgeting, saving, and investing through exciting challenges and real-life scenarios.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                        {/* <REAButton /> */}
                    </div>
                </div>
            </ddiv>
        </div>
    );
};

export default GameMode;
