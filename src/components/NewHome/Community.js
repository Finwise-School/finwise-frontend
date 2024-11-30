import React, { useEffect } from 'react';
import communityimg from '../../assets/images/homeimages/community.svg';
// import REAButton from './REAButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JoinCommunity = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function
          once: true, // Whether animation should happen only once
        });
      }, []);
    return (
        <div className="w-full h-auto flex items-center justify-between bg-black bg-gradient-to-l from-black via-[rgba(128,0,255,0.1)] to-black">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
                <div className="relative w-full flex justify-center md:justify-start">
                    <img
                        src={communityimg}
                        alt="Community"
                        data-aos="fade-right"
                        className="w-[80%] sm:w-[60%] md:w-[28rem] lg:w-[400px] xl:w-160 object-contain"
                    />
                </div>

                <div className="w-full text-center md:text-left  space-y-6" data-aos="fade-left">
                    <h1 className="text-5xl md:text-6xl text-white font-semibold leading-tight">
                        Join Community  <br />  and chat with <br />  experts
                    </h1>
                    <p className="text-gray-400 w-full md:w-[28rem] leading-relaxed text-base md:text-lg">
                        Your financial questions, answered in real-time. Join exclusive groups led by finance experts and fellow Gen-Z money masters. Whether it's crypto confusion or savings strategies, there's a community waiting to help you level up your money game.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                        {/* <REAButton /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCommunity;
