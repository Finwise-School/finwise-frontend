import React from 'react'
// import logo from '.../assets/images/about/calltoaction.svg'
import chip from '../assets/images/about/Chip.svg'
import target from '../assets/images/about/Target.svg'
import grp from '../assets/images/about/grpicon.svg'
import '../assets/css/about.css'
import Test from '../components/NewAbout/Testimonials.js'
import Support from '../components/NewAbout/Support.js'
import Faq from '../components/NewAbout/Faq.js'
import Cards from '../components/NewAbout/Cards.js'
import Values from '../components/NewAbout/Values.js'

const About = () => {
    return (
        <>
            {/* <Navigation /> */}
            <div className=' bgadd h-auto '>
                <div class="mx-auto  flex  items-center justify-center">
                    <div class="text-white w-[96%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
                        <div class="text-white h-auto w-[100%] rounded-lg bgaddsab bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
                            <div>
                                <h1 className='font-sora p-5'>FinWise School</h1>
                                <h1 className='font-sora font-semibold text-5xl text-white p-5'>About us</h1>
                                <div className='font-inter p-5 flex flex-row items-center'>
                                    <img src={chip} className='w-10'></img>
                                    <h1 className='italic pl-3'>Company id</h1>
                                    <h1 className='font-semibold pl-3'>SC819264</h1>
                                </div>
                                <p className='p-5 font-normal text-[#b8b8b8]'>At Finwise School, we're revolutionizing financial education for the UK's young minds. Born from a  vision to make financial literacy accessible, engaging, and actually fun, we're on a mission to  empower 12-24 year olds with the knowledge and tools they need to build a secure financial future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className='flex flex-col sm:flex-row '>
                    <div class="mx-auto  flex  md:w-[45%] items-center justify-center">
                        <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
                            <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
                                <div className='p-2'>
                                    <img src={target} className='h-[50px]'></img>
                                    <h1 className='font-semibold text-3xl py-4'>Our Vision</h1>
                                    <p className='font-normal text-[#b8b8b8] text-[18px]' >We believe that financial literacy shouldn't be a privilege but a right. By making financial education  accessible, engaging, and relevant to Gen Z, we're working to create a generation of confident,  informed decision-makers who can navigate their financial futures with clarity and purpose.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div class="mx-auto  flex md:w-[45%] items-center justify-center">
                        <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
                            <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
                                <div className='p-2'>
                                    <img src={grp} className='h-[50px]'></img>
                                    <h1 className='font-semibold text-3xl py-4'>What Sets Us Apart?</h1>
                                    <p className='font-normal text-[#b8b8b8] text-[18px]'>We speak your language. No complicated jargon or boring lectures here. Through our innovative  gamified learning platform, we transform complex financial concepts into engaging, interactive  experiences. From mastering budgeting basics to understanding ISAs and pension planning, we  make learning about money as exciting as your favorite mobile game.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* final end */}

            </div>
            <Values />
            <Cards />
            <Test />
            <Support />
            <Faq />

        </>
    )
}

export default About;