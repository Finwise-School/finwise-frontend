import React, { useState, useEffect } from 'react';
import phoneImage from '../../assets/images/homeimages/phonebackhero.svg';
import arrowRight from '../../assets/images/homeimages/rea-arrow.svg';
import './AppHome.css';
import REAButton from '../REAButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
    const [toolsCount, setToolsCount] = useState(0);
    const [modulesCount, setModulesCount] = useState(0);
    const [leaguesCount, setLeaguesCount] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });

        const animateCounter = (setter, target, duration) => {
            let start = 0;
            const increment = target / (duration / 50); // Increment based on duration and intervals
            const interval = setInterval(() => {
                start += increment;
                if (start >= target) {
                    start = target; // Ensure we don't exceed the target
                    clearInterval(interval);
                }
                setter(Math.floor(start)); // Update the count state
            }, 50); // Update every 50ms
        };

        animateCounter(setToolsCount, 10, 2000); // Animate to 10+ in 1 second
        animateCounter(setModulesCount, 20, 2500); // Animate to 20+ in 1.5 seconds
        animateCounter(setLeaguesCount, 100, 3000); // Animate to 100+ in 2 seconds
    }, []);

    return (
        <div className="bg-[#070707] text-white">
            <div className="relative h-[120vh] sm:h-[100vh] md:h-[130vh] text-center pt-10 pb-6">
                <div className="absolute h-[100vh] bgaddsback inset-0"></div>

                <div className="relative z-10 w-full h-auto flex justify-center mt-2">
                    <img
                        className="w-[700px] lg:w-[40%]"
                        src={phoneImage}
                        alt="Phone 1"
                        data-aos="fade-up"
                    />

                    <div className="absolute top-[100%] md:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
                            Master Your Money with
                            <br /> Finwise School
                        </h1>
                        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                            Finwise School is a revolutionary platform designed to teach Gen-Z the essentials of personal finance
                            through personalized, gamified experiences.
                        </p>
                        <div className="flex justify-center">
                            <REAButton/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:mt-0 justify-around px-6 bg-[#070707]">
                <div className="text-center">
                    <div className="relative w-64 h-32 rounded-[30px] flex flex-col items-center justify-center mx-auto mb-4">
                        <div className="absolute inset-0 rounded-[30px] bg-radial-custom"></div>
                        <span className="text-4xl font-bold text-white z-10">{toolsCount}+</span>
                        <p className="text-xl text-white inter-thin mt-2 z-10">Financial tools</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="relative w-64 h-32 rounded-[30px] flex flex-col items-center justify-center mx-auto mb-4">
                        <div className="absolute inset-0 rounded-[30px] bg-radial-custom"></div>
                        <span className="text-4xl font-bold text-white z-10">{modulesCount}+</span>
                        <p className="text-xl text-white inter-thin mt-2 z-10">Gamified Modules</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="relative w-64 h-32 rounded-[30px] flex flex-col items-center justify-center mx-auto mb-4">
                        <div className="absolute inset-0 rounded-[30px] bg-radial-custom"></div>
                        <span className="text-4xl font-bold text-white z-10">{leaguesCount}+</span>
                        <p className="text-xl text-white inter-thin mt-2 z-10">Live Leagues</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
