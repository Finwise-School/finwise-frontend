import React from 'react';
import {Link} from 'react-router-dom';
import exploreIcon from '../../assets/images/homeimages/toolsbutton.svg';
import toolImage2 from '../../assets/images/homeimages/fireimg.svg';
import toolImage3 from '../../assets/images/homeimages/goaltool.svg';
import toolImage4 from '../../assets/images/homeimages/moretool.svg';

const HomeTools = () => {
    return (
        <div className="bg-black bg-gradient-to-l from-black via-[rgba(128,0,255,0.1)] to-black text-white flex items-center justify-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 max-w-7xl">
                {/* F.I.R.E Tool */}
                <div className="flex flex-col justify-center h-full">
                    <div className="text-center md:text-left space-y-4">
                        {/* Heading */}
                        <h3 className="text-5xl font-bold text-white mb-2">
                            10+ Financial Planning <br />Tools
                        </h3>

                        {/* Description Text */}
                        <p className="text-gray-400 text-lg md:text-base">
                            Tailor your journey to financial freedom<br /> with our exclusive financial planning tools.
                        </p>

                        <Link to="/tools">
                            <div className="mt-6 flex items-left py-3 rounded-full bg-transparent cursor-pointer transition">
                                <img
                                    src={exploreIcon}
                                    alt="Explore More Tools"
                                    className="w-[50vh] h-auto mr-2 transition-transform transform hover:scale-105" // Added scale effect on hover
                                />
                            </div>
                        </Link>

                    </div>
                </div>

                {/* Global SIP Tool */}
                <div className="flex items-center relative">
                    <img
                        src={toolImage2}
                        id="toolimg"
                        alt="Global SIP Tool"
                        className="w-[240px] h-[480px] rounded-md shadow-lg"
                    />
                    <div id="contentbox" className="bg-white/20 backdrop-blur-md p-4 w-auto h-[280px] shadow-lg ml-0 rounded-lg flex items-center justify-start"
                        style={{
                            background: 'rgba(255, 255, 255, 0.09)',
                            borderRadius: '0 10px 10px 0px',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(5px)',
                            WebkitBackdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}
                    >
                        <div className="text-left">
                            <h3 id="title" className="text-4xl font-bold text-white mb-2">F.I.R.E Tool</h3>
                            <p id="content" className="text-gray-400 text-sm">
                                Calculate your Financial Independence Retire Early (F.I.R.E) Number.
                            </p>
                        </div>
                    </div>


                </div>

                {/* More Financial Tools */}
                <div className="flex items-center relative">
                    <img id="toolimg"
                        src={toolImage3}
                        alt="Financial Tool"
                        className="w-[240px] h-[480px] rounded-md shadow-lg"
                    />
                    <div id="contentbox" className="bg-white/20 backdrop-blur-md p-4 w-auto h-[280px] shadow-lg ml-0 rounded-lg flex items-center justify-start"
                        style={{
                            background: 'rgba(255, 255, 255, 0.09)',
                            borderRadius: '0 10px 10px 0px',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(5px)',
                            WebkitBackdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}
                    >
                        <div className="text-left">
                            <h3 id="title" className="text-4xl font-bold text-white mb-2">Global SIP tool</h3>
                            <p id="content" className="text-gray-400 text-sm">
                                Plan and implement your financial goals with our Goal SIP tool
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center relative">
                    <img id="toolimg"
                        src={toolImage4}
                        alt="Example Tool"
                        className="rounded-md shadow-lg"
                        style={{
                            width: '240px',
                            height: '480px',
                        }}
                    />
                    <div id="contentbox"
                        className="bg-white/20 backdrop-blur-md p-4 w-auto shadow-lg ml-0 rounded-lg flex items-center justify-start"
                        style={{
                            background: 'rgba(255, 255, 255, 0.09)',
                            borderRadius: '0 10px 10px 0px',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(5px)',
                            WebkitBackdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            height: '280px',
                        }}
                    >
                        <div className="text-left">
                            <h3 id="title" className="text-4xl font-bold text-white mb-2">More tools</h3>
                            <p id="content" className="text-gray-400 text-sm">
                                Use over 10+ calculators and tools that help you with every financial decision.
                            </p>
                        </div>
                    </div>

                    {/* Add inline CSS with a media query */}
                    <style>
                        {`
            @media (max-width: 767px) {
                #toolimg {
                    width: 140px !important;
                    height: 280px !important;
                }
                #contentbox {
                    height: 150px !important;
                }
                #title{
                    font-size: 15px;
                }
                #content{
                    font-size: 11px;
                }
            }
        `}
                    </style>
                </div>
            </div>
        </div >
    );
};

export default HomeTools;
