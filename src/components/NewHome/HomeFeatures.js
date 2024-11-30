import React, { useEffect } from 'react';
import './AppHome.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import phoneImage from '../assets/images/featureshome.svg'; // Replace with actual phone image path

const Features = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function
          once: true, // Whether animation should happen only once
        });
      }, []);
    return (
        <div
            className="relative mt-20 w-full  bg-[#070707] bgaddsf"
            style={{
                // backgroundImage: `url(${phoneImage})`,
                // backgroundSize: 'contain',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
                minHeight: '120vh',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0"></div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                {/* Scale-down wrapper for responsiveness */}
                <div className="w-full" style={{ transform: 'scale(1)', transformOrigin: 'top center' }}>
                    <div className="flex flex-wrap justify-between w-full px-2">
                        {/* Left Column (Larger) */}
                        <div className="space-y-6  md:pl-14   md:w-[50%]">
                            {/* Grocery Coupons */}
                            <div
                                className="bg-white/20 backdrop-blur-md p-6 w-full sm:w-[400px] h-[160px] sm:h-[200px] shadow-lg ml-0 rounded-lg flex items-center justify-start"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    borderRadius: '32px 32px 0px 32px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    // marginLeft: '40px',
                                }}
            
                            >
                                <div className="text-left">
                                    <i className="fas fa-shopping-cart text-2xl text-white mb-2"></i>
                                    <h3 className="text-sm sm:text-lg font-bold text-white mb-2">
                                        Learn Through Games 🎮
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-xs">
                                        Master money concepts by playing Budget Boss, Stock Market simulator, and more
                                        exciting financial games.
                                    </p>
                                </div>
                            </div>

                            {/* Cashback Offer */}
                            <div
                                className="bg-white/20 backdrop-blur-md p-3 w-full sm:w-[400px] h-[160px] sm:h-[200px] shadow-lg ml-0 rounded-lg flex items-center justify-start"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    borderRadius: '32px 32px 0px 32px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    // marginLeft: '40px',
                                }}
            
                            >
                                <div className="text-left">
                                    <i className="fas fa-money-bill-wave text-2xl text-white mb-2"></i>
                                    <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                                        Finance Community & Leagues 🏆
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-xs">
                                        Join thousands of UK students, compete in financial leagues, and learn together.
                                        Share tips, win competitions, and climb the leaderboard!
                                    </p>
                                </div>
                            </div>

                            {/* Exclusive Deals */}
                            <div
                                className="bg-white/20 backdrop-blur-md p-6 w-full sm:w-[400px] h-[160px] sm:h-[200px] shadow-lg ml-0 rounded-lg flex items-center justify-start"
                                style={{
                                    background: 'rgba(255, 255, 0, 0.04)',
                                    borderRadius: '32px 32px 0px 32px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    // marginLeft: '40px',
                                }}
            
                            >
                                <div className="text-left">
                                    <i className="fas fa-tags text-2xl text-white mb-2"></i>
                                    <h3 className="text-sm sm:text-lg font-bold text-white mb-2">
                                        Gamified Learning Path 🎯
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-xs">
                                        Turn boring finance into an adventure! Complete missions, unlock achievements, and
                                        level up your financial knowledge.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Smaller) */}
                        <div className="space-y-6 w-full mt-[400px]  md:pl-10 md:mt-0  md:w-1/3">
                            {/* Financial Tools */}
                            <div
                                className="bg-white/20 backdrop-blur-md p-6 w-full sm:w-[400px] h-[160px] sm:h-[200px] shadow-lg ml-0 rounded-lg flex items-center justify-start"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    borderRadius: '32px 32px 32px 0px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                }}
                                data-aos="fade-left"
                            >
                                <div className="text-left">
                                    <i className="fas fa-coins text-2xl text-white mb-2"></i>
                                    <h3 className="text-sm sm:text-lg font-bold text-white mb-2">
                                        Daily Rewards & Streaks ⚡
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-xs">
                                        Keep your learning streak alive! Complete daily challenges and earn exciting rewards
                                        including grocery coupons.
                                    </p>
                                </div>
                            </div>

                            {/* Gamified Learning */}
                            <div
                                className="bg-white/20 backdrop-blur-md p-6 w-full sm:w-[400px] h-[160px] sm:h-[200px] shadow-lg ml-0 rounded-lg flex items-center justify-start"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    borderRadius: '32px 32px 32px 0px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                }}
                                data-aos="fade-left"
                            >
                                <div className="text-left">
                                    <i className="fas fa-gamepad text-2xl text-white mb-2"></i>
                                    <h3 className="text-sm sm:text-lg font-bold text-white mb-2">
                                        Tools & Resources 📚
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-xs">
                                        10+ financial learning tools and downloadable resources. From budgeting basics to
                                        investment guides.
                                    </p> 
                                </div>
                            </div>

                            {/* Leaderboard Challenges */}
                            <div
                                className="bg-white/20 backdrop-blur-md p-6 w-full sm:w-[400px] h-[160px] sm:h-[200px] shadow-lg ml-0 rounded-lg flex items-center justify-start"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    borderRadius: '32px 32px 32px 0px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                }}
                                data-aos="fade-left"
                            >
                                <div className="text-left">
                                    <i className="fas fa-trophy text-2xl text-white mb-2"></i>
                                    <h3 className="text-sm sm:text-lg font-bold text-white mb-2">
                                        Level Up Your Avatar 🦸‍♂️
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-xs">
                                        Watch your financial character evolve as you master each module! From rookie to
                                        money master, your avatar grows with your knowledge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;