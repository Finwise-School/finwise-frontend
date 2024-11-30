import React from 'react'
import sai from '../../assets/images/about/sai.svg'
import girl from '../../assets/images/about/girl.svg'
import mathew from '../../assets/images/about/mathew.svg'
import Tstar from '../../assets/images/about/Tstar.svg'
import Marquee from 'react-fast-marquee';

const Testimonial = () => {
    return (
        <div className='h-auto py-[2rem]'>
            <div className='flex flex-col justify-center items-center bgadds'>
                <h1 className='text-3xl font-bold py-2'>Word from Our People</h1>
                <p className='text-[#888888] text-center md:ml-0'>Read the success stories and heartfelt testimonials from our valued members.</p>
                <div className='w-[100%] mt-5'>
                    <Marquee loop={0}
                        pauseOnHover={true}>
                        <div className=' mx-3 bg-gradient-radial from-[#1B1B1B] via-[#1b1b1b] w-[400px] md:w-[500px] rounded-xl border-[#2c2c2c]  p-5'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <img src={sai} className='h-10'></img>
                                    <h1 className='px-2 font-medium text-sm'>Sai</h1>
                                    <p className='text-[15px] text-[#888888]'>UK,  Edinburgh</p>
                                </div>
                                <div className='flex flex-row justify-start items-center'>
                                    <h1 className='text-[24px] font-semibold'>5</h1>
                                    <img src={Tstar}></img>
                                </div>
                            </div>
                            <h1 className='pl-3 pt-3 font-semibold text-xl '>Expectional Service</h1>
                            <p className='p-3 font-normal text-[#bcbcbc]  text-[14px] md:text-[14px] md:text-[18px]'>Finwise transformed my approach to financial planning. Their financial tools have made it so easy to set clear goals and track my progress. I finally feel that I am in control of my financial future”</p>
                        </div>
                        {/* card 2 */}
                        <div className=' mx-3 bg-gradient-radial from-[#1B1B1B] via-[#1b1b1b]  w-[500px] rounded-xl border-[#2c2c2c]  p-5'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <img src={girl} className='h-10'></img>
                                    <h1 className='px-2 font-medium'>Kate</h1>
                                    <p className='text-[15px] text-[#888888]'>UK, Glasglow</p>
                                </div>
                                <div className='flex flex-row justify-start items-center'>
                                    <h1 className='text-[24px] font-semibold'>5</h1>
                                    <img src={Tstar}></img>
                                </div>
                            </div>
                            <h1 className='pl-3 pt-3 font-semibold text-xl '>Efficient and Reliable</h1>
                            <p className='p-3 font-normal text-[#bcbcbc] text-[14px] md:text-[18px]'>I wish I had found finwise years ago.
                                Their easy-to-use tools and
                                comprehensive planning strategies
                                have helped me optimize my savings
                                and enjoy my retirernent with peace of
                                mind.</p>
                        </div>
                        {/* card 3 */}
                        <div className=' mx-3 bg-gradient-radial from-[#1B1B1B] via-[#1b1b1b]  w-[500px] rounded-xl border-[#2c2c2c]  p-5'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <img src={mathew} className='h-10'></img>
                                    <h1 className='px-2 font-medium'>Mathew</h1>
                                    <p className='text-[15px] text-[#888888]'>UKI London</p>
                                </div>
                                <div className='flex flex-row justify-start items-center'>
                                    <h1 className='text-[24px] font-semibold'>5</h1>
                                    <img src={Tstar}></img>
                                </div>
                            </div>
                            <h1 className='pl-3 pt-3 font-semibold text-xl '>Fun and insightful</h1>
                            <p className='p-3 font-normal text-[#bcbcbc] text-[14px] md:text-[18px]'>The way they teach about the financial
                                concepts is kinda fun and insightful.
                                100% recommended if someone is
                                struggling with money or to understand
                                basic or even advanced financial
                                concepts.</p>
                        </div>
                    </Marquee>


                    <Marquee loop={0}
                        direction="right"
                        pauseOnHover={true}>
                        <div className=' mx-3 bg-gradient-radial from-[#1B1B1B] via-[#1b1b1b]  w-[500px] rounded-xl border-[#2c2c2c]  p-5'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <img src={sai} className='h-10'></img>
                                    <h1 className='px-2 font-medium'>Sai</h1>
                                    <p className='text-[15px] text-[#888888]'>UK,  Edinburgh</p>
                                </div>
                                <div className='flex flex-row justify-start items-center'>
                                    <h1 className='text-[24px] font-semibold'>5</h1>
                                    <img src={Tstar}></img>
                                </div>
                            </div>
                            <h1 className='pl-3 pt-3 font-semibold text-xl '>Expectional Service</h1>
                            <p className='p-3 font-normal text-[#bcbcbc] text-[14px] md:text-[18px]'>Finwise transformed my approach to financial planning. Their financial tools have made it so easy to set clear goals and track my progress. I finally feel that I am in control of my financial future”</p>
                        </div>
                        {/* card 2 */}
                        <div className=' mx-3 bg-gradient-radial from-[#1B1B1B] via-[#1b1b1b]  w-[500px] rounded-xl border-[#2c2c2c]  p-5'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <img src={girl} className='h-10'></img>
                                    <h1 className='px-2 font-medium'>Kate</h1>
                                    <p className='text-[15px] text-[#888888]'>UK, Glasglow</p>
                                </div>
                                <div className='flex flex-row justify-start items-center'>
                                    <h1 className='text-[24px] font-semibold'>5</h1>
                                    <img src={Tstar}></img>
                                </div>
                            </div>
                            <h1 className='pl-3 pt-3 font-semibold text-xl '>Efficient and Reliable</h1>
                            <p className='p-3 font-normal text-[#bcbcbc] text-[14px] md:text-[18px]'>I wish I had found finwise years ago.
                                Their easy-to-use tools and
                                comprehensive planning strategies
                                have helped me optimize my savings
                                and enjoy my retirernent with peace of
                                mind.</p>
                        </div>
                        {/* card 3 */}
                        <div className=' mx-3 bg-gradient-radial from-[#1B1B1B] via-[#1b1b1b]  w-[500px] rounded-xl border-[#2c2c2c]  p-5'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <img src={mathew} className='h-10'></img>
                                    <h1 className='px-2 font-medium'>Mathew</h1>
                                    <p className='text-[15px] text-[#888888]'>UKI London</p>
                                </div>
                                <div className='flex flex-row justify-start items-center'>
                                    <h1 className='text-[24px] font-semibold'>5</h1>
                                    <img src={Tstar}></img>
                                </div>
                            </div>
                            <h1 className='pl-3 pt-3 font-semibold text-xl '>Fun and insightful</h1>
                            <p className='p-3 font-normal text-[#bcbcbc] text-[14px] md:text-[18px]'>The way they teach about the financial
                                concepts is kinda fun and insightful.
                                100% recommended if someone is
                                struggling with money or to understand
                                basic or even advanced financial
                                concepts.</p>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Testimonial