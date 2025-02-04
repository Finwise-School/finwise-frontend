import React from 'react';

const FAQcarouselcard = ({ title, answer, isExpanded, onToggle }) => {

    return (
        <>
    <div className={`flex flex-col rounded-xl border border-[#262626] text-[#9B4DCA]-bg p-[8%] md:p-[10%] lg:p-[12%] ${isExpanded ? 'h-auto' : 'md:h-[25rem]'}`}>
      <h1 className={`text-lg md:text-2xl leading-7 md:leading-9 ${isExpanded ? 'font-black text-[#223876]' : 'font-semibold text-[#FFFFFF]'}`}>{title}</h1>
      {Array.isArray(answer) ? (null) : (
  <p className={`font-medium text-sm leading-5 md:text-lg md:leading-7 tracking-tighter py-5 text-[#262626] transition ease-in-out ${isExpanded ? 'h-36' : 'h-32 overflow-hidden'}`}>
  {answer}
</p>
)}
      <div className='mt-4 flex md:justify-start md:items-start justify-center items-center'>
        <button
          className='faqButton rounded-lg md:rounded-[10px] border border-[#262626] py-[14px] px-5 md:py-4 md:px-6 text-white w-full md:w-auto'
          onClick={onToggle}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
        </>
    )
}

export default FAQcarouselcard
