import { useEffect } from 'react';

const EarlyAccessRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://forms.gle/wEWKCcHjYmEtoAQw9';
  }, []);

  return null;               // nothing renders — user is instantly redirected
};

export default EarlyAccessRedirect;



//import React from 'react';
//import phoneImage from '../assets/images/calltoaction3.svg';
//import REAButton from './REAButton';

//const Calltoaction = () => {
//  return (
  //  <div className='p-3'>
  //  <div className=" h-auto md:h-[90vh] border-none rounded-xl bg-gradient-to-br from-[#8A3FF2] via-[#662283] to-[#662283] text-white flex items-center justify-center py-12 md:py-0 mx-[10px]">
  //    <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 space-y-12 md:space-y-0">
   //     <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
   ///       <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
   //         Start Your Financial <br className="hidden md:block" /> Journey Today
     //     </h1>
     //     <p className="text-gray-300 leading-relaxed text-base md:text-base">
        //    Want to level up your money game before everyone else? Join our exclusive early access club and be part
        //    of the UK's most exciting financial education revolution. Limited spots available - grab yours now and get
     //    rewarded for being an early adopter! ⚡
      //    </p>
         // <div className="w-full animate-bounce flex justify-center md:justify-start">
         //   <REAButton />
          //</div>
        //</div>

        //<div className="relative w-full md:w-1/2 flex justify-center">
         // <img
          //  src={phoneImage}
           // alt="Phone mockup"
          //  className="w-64 md:w-70 lg:w-[250px]  rounded-md hidden md:block"
       //   />
     //   </div>
    //  </div>
   // </div>
  //  </div>
//  );
// };

//export default Calltoaction;
