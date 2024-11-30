import React from 'react'
// import logo from '.../assets/images/about/calltoaction.svg'
import '../../assets/css/about.css'



const Values = () => {
  return (
    <div className='pt-5 '>
      <div className='h-[100px]'></div>
      <h1 className='pl-8 py-6 text-4xl font-sora font-semibold'>Our Values</h1>
      <p className='pl-8 w-[90%] text-[#8d8d8d] '>Our journey is one of relentless progress and transformation. We began as a passionate group with a vision, dedicated to building an educational platform that redefines the boundaries of traditional financial learning.</p>
      
      {/* card */}
      <div className='p-5'>
        {/* card layout 1 */}
        <div>
        <div className='flex flex-col md:flex-row '>
      <div class="mx-auto  flex  md:w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
        <div className='p-2'>
            <h1 className='text-4xl'>🎯</h1>
            <h1 className='font-semibold text-3xl py-4'> Financial Empowerment</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]' >We believe that every young person deserves the knowledge and tools to make confident financial decisions. We're committed to breaking down complex financial concepts into digestible, engaging content that resonates with Gen Z.</p>
          </div>
        </div>
      </div>
      </div>
      {/* card 3 */}
      <div class="mx-auto  flex md:w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
          <div className='p-2'>
            <h1 className='text-4xl'>🎮</h1>
            <h1 className='font-semibold text-3xl py-4'> Learning Through Innovation</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]'>We embrace gamification and interactive learning because we believe that education should be engaging and fun. Our innovative approach makes financial education an adventure rather than a chore.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
        </div>
        {/* Card layout 2 */}
        
        
        <div className='flex flex-col md:flex-row '>
      <div class="mx-auto  flex  md:w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
        <div className='p-2'>
        <h1 className='text-4xl'>🤝</h1>
            <h1 className='font-semibold text-3xl py-4'> Community First</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]' >We foster a supportive, judgment-free environment where students can learn, share, and grow together. Our community is built on trust, mutual respect, and the shared goal of financial literacy.</p>
          </div>
        </div>
      </div>
      </div>
      {/* card 3 */}
      <div class="mx-auto  flex md:w-[45%] items-center justify-center">
      <div class="text-white mt-5 w-[100%] h-auto rounded-md bg-gradient-to-br from-[#8a3ff25c] via-[#090909] bgcard p-[2px]">
        <div class="text-white h-auto w-[100%] rounded-lg bg-gradient-to-br from-[#070707] via-[rgba(38,38,38,0.2)] p-4">
          <div className='p-2'>
          <h1 className='text-4xl'>🌟</h1>
            <h1 className='font-semibold text-3xl py-4'> Authenticity & Relevance</h1>
            <p className='font-normal text-[#b8b8b8] text-[18px]'>We speak your language and understand your world. Our content is tailored specifically for UK Gen Z, using real-life examples and local context that matters to you.</p>
            </div>
        </div>
      </div>
      </div>
      </div>
        
      </div>
    </div>
  )
}


export default Values;