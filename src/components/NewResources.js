import React, { useEffect } from 'react'
import '../index.css'
import budgetb1 from '../assets/images/newresource/1.jpg'
import budgetb2 from '../assets/images/newresource/2.png'
import budgetb3 from '../assets/images/newresource/3.png'
import budgetb4 from '../assets/images/newresource/4.png'
import budgetb5 from '../assets/images/newresource/5.png'
import budgetb6 from '../assets/images/newresource/6.png'
import budgetb7 from '../assets/images/newresource/7.png'
import budgetb8 from '../assets/images/newresource/8.png'
import EarlyAccessTemplate from './EarlyAccessTemplate'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='my-10 mx-6 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold my-6'>Browse by Category</h1>
            <div className='flex flex-wrap justify-start md:justify-center items-center'>
                {/* cat-1 */}
                <Link to="/budgeting">
                    <div className='flex flex-row m-2'>
                        <div>
                            <img src={budgetb1} className='h-[250px]'></img>
                        </div>
                        <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Budgeting</h1>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/stock">
                    <div className='flex flex-row m-2'>
                        <div>
                            <img src={budgetb2} className='h-[250px]'></img>
                        </div>
                        <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Stock Market</h1>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/comingSoon">
                    <div className='flex flex-row m-2'>
                        <div>
                            <img src={budgetb3} className='h-[250px]'></img>
                        </div>
                        <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Taxation</h1>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/comingSoon">
                    <div className='flex flex-row m-2'>
                        <div>
                            <img src={budgetb4} className='h-[250px]'></img>
                        </div>
                        <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Retirement Planning</h1>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/comingSoon">
                    <div className='flex flex-row m-2'>
                        <div>
                            <img src={budgetb5} className='h-[250px]'></img>
                        </div>
                        <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Smart with money</h1>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/comingSoon">
                    <div className='flex flex-row m-2'>
                        <div>
                            <img src={budgetb6} className='h-[250px]'></img>
                        </div>
                        <div className='bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Finance hacks</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}


const Ads = () => {
    return (
        <div>
            <div class="mx-auto p-10 flex items-center justify-center">
                <div class="text-white my-20 w-[96%] h-auto rounded-2xl bg-gradient-to-b from-[#8A3FF2] via-[#50248C] to-[#50248C]  p-[2px]">
                    <div className='bgresrcads h-[70vh]'>
                        <div className='p-12 w-[100%] sm:w-[60%] h-full flex flex-col md:justify-center items-start'>
                            <p className='text-[20px]'><span className='text-2xl font-bold'>100% OFF</span> on all guides</p>
                            <h1 className='font-sora font-semibold text-5xl my-4'><span className='text-[25px] text-green-400'> Free for all</span> <br />
                                Early members</h1>
                            <button className='bg-black px-8 py-4 rounded-xl mt-3'>Get now</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

const Newarr = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold '>New Arrivals</h1>
            <div className='flex flex-wrap justify-center items-center'>
                {/* cat-1 */}
                <Link to="/budgetBlue">
                    <div className='flex flex-col m-2'>
                        <div className='bg-[#121212] rounded-t-xl pt-2'>
                            <img src={budgetb1} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                        </div>
                        <div
                            className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Budgeting</h1>
                            <p>The Budgeting Blueprint</p>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/comingSoon">
                    <div className='flex flex-col m-2'>
                        <div className='bg-[#121212] rounded-t-xl pt-2'>
                            <img src={budgetb4} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                        </div>
                        <div
                            className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Finwise School</h1>
                            <p>Retirement Planning</p>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/comingSoon">
                    <div className='flex flex-col m-2'>
                        <div className='bg-[#121212] rounded-t-xl pt-2'>
                            <img src={budgetb3} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                        </div>
                        <div
                            className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Finwise School</h1>
                            <p>The Tax Planning Playbook</p>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/basics">
                    <div className='flex flex-col m-2'>
                        <div className='bg-[#121212] rounded-t-xl pt-2'>
                            <img src={budgetb7} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                        </div>
                        <div
                            className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Finwise School</h1>
                            <p>Basics of Technical Analysis</p>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/comingSoon">
                    <div className='flex flex-col m-2'>
                        <div className='bg-[#121212] rounded-t-xl pt-2'>
                            <img src={budgetb6} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                        </div>
                        <div
                            className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Finwise School</h1>
                            <p>101 Finance Hacks</p>
                        </div>
                    </div>
                </Link>
                {/* cat-1 */}
                <Link to="/comingSoon">
                    <div className='flex flex-col m-2'>
                        <div className='bg-[#121212] rounded-t-xl pt-2'>
                            <img src={budgetb5} className='w-[150px] h-[200px] md:w-[250px] md:h-[300px]'></img>
                        </div>
                        <div
                            className='bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start'>
                            <h1 className='font-semibold text-xl'>Finwise School</h1>
                            <p>Smart With Money</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    )
}

const Guideofday = () => {
    return (
        <div className='my-10 flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold '>Guide of Day - 29 Nov 2024 </h1>
            <div className='flex flex-wrap justify-center items-center'>
                {/* cat-1 */}
                <div className='flex flex-row  md:m-6 mt-2'>
                    <Link to="/basics">
                        <div>
                            <img src={budgetb7} className='w-[250px]'></img>
                        </div>
                    </Link>
                    <div className='bg-gradient-to-tr from-green-500 to-violet-900 rounded-r-3xl p-1 '>
                        <div className='bg-[#171717] w-[250px] h-full rounded-r-3xl flex flex-col justify-center  items-start p-4'>
                            <p className='italic'>By finwise school</p>
                            <h1 className='font-bold text-base md:text-lg mb-2'>Basics of Technical Analysis</h1>
                            <p className='text-[12px] md:text-[18px]'>This is your go-to guide for understanding and applying technical analysis in financial markets.</p>
                        </div>
                    </div>
                </div>
                {/* cat-1 */}
                <div className='flex flex-row md:m-6 mt-2'>
                    <Link to="/budgetBlue">
                        <div>
                            <img src={budgetb1} className='w-[250px]'></img>
                        </div>
                    </Link>
                    <div className='bg-gradient-to-tr from-green-500 to-violet-900 rounded-r-3xl p-1 '>
                        <div className='bg-[#171717] w-[250px] h-full rounded-r-3xl flex flex-col justify-center  items-start p-4'>
                            <p className='italic'>By finwise school</p>
                            <h1 className='font-bold text-base md:text-lg mb-2'>Basics of Technical Analysis</h1>
                            <p className='text-[12px] md:text-[18px]'>This is your go-to guide for understanding and applying technical analysis in
                                financial markets.</p>
                        </div>
                    </div>
                </div>
                {/* cat-1 */}
                <div className='flex flex-row md:m-6 mt-2'>
                    <Link to="/comingSoon">
                        <div>
                            <img src={budgetb8} className='w-[250px]'></img>
                        </div>
                    </Link>
                    <div className='bg-gradient-to-tr from-green-500 to-violet-900 rounded-r-3xl p-1 '>
                        <div className='bg-[#171717] w-[250px] h-full rounded-r-3xl flex flex-col justify-center  items-start p-4'>
                            <p className='italic'>By finwise school</p>
                            <h1 className='font-bold text-base md:text-lg mb-2'>Basics of Technical Analysis</h1>
                            <p className='text-[12px] md:text-[18px]'>This is your go-to guide for understanding and applying technical analysis in
                                financial markets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <>
            <div className=' bgadd h-auto '>
                <div class="mx-auto  flex  items-center justify-center p-4">
                    <div class="text-white w-[96%] h-auto rounded-2xl bg-gradient-to-b from-[#8A3FF2] via-[#50248C] to-[#50248C]  p-[2px]">

                        <div className='bgresrc h-[50vh] md:h-[70vh]'>
                            <div className='p-5 md:p-14 w-[100%] sm:w-[60%] h-full flex flex-col justify-center items-start'>
                                <p className='text-[20px]'>Free Guide to Jump-Start Your Financial Journey</p>
                                <h1 className='font-sora font-semibold text-3xl my-4'>Take Control of Your Finances in Just 2 Weeks</h1>
                                <p>Get started with our free, expert-created guide designed to help you build strong financial habits and achieve your goals.</p>
                                <button>Get</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Category />
            <Ads />
            <Newarr />
            <Guideofday />

            {/* final end */}
        </>
    )
}

export default Main;