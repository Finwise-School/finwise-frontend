import {useEffect, useState} from 'react';
import Wallimg from '../assets/images/Blogs/img2.png'
import Sidecards from './Blogs/sidecards';
import axios from 'axios';
import CardsBottom from './Blogs/cardsBottom';
import CommentSection from './Blogs/CommentSection';
import Blogswrite from './Blogs/Blogswrite';
import EATemplate from './EarlyAccessTemplate';

function Blogs({ baseURL }) {

  const [data, setData] = useState([]);
  const [front, setFront] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  axios.defaults.baseURL = baseURL;
  // axios.defaults.baseURL = 'http://localhost:5000';

  useEffect(() => {
    axios.get('/api/blogsContentFetch')
    .then(response => {
      // setData(response.data[0].Heading);
      setData(response.data);
      setFront(response.data[0]);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleCardClick = (item) => {
    setFront(item);
  };

    return (
      <>
      {data.length > 0 ? (
        <>
          <div className='m-4 md:px-12 gap-20'>
      <h1 className='flex justify-center m-4 font-semibold text-5xl leading-[72px] finwise-blue'>Blogs</h1>
      <h2 className='flex sm:justify-start justify-center text-2xl font-bold my-8 finwise-blue'>Top Stories</h2>
        <div>
            <div className={`flex md:flex-row flex-col ${data.length > 1 ? 'justify-between' : 'justify-center'}`}>
    <div className={`mainCard ${isOpen ? 'md:w-full' : 'md:w-4/6'} bg-white shadow-lg rounded-xl overflow-hidden`}>
    <div className="flex justify-center overflow-hidden border-b border-gray-300">
        <img className='object-cover w-full h-60 md:h-96' src={front.imageUrl} alt="" />
    </div>
    <div className='content p-6'>
        <div className="flex flex-col justify-start gap-4">
            <>
                <h3 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">{front.title}</h3>
                <div className={`blogPara text-gray-600 ${isOpen ? 'h-auto' : 'h-14 overflow-hidden'}`}>
                    <p dangerouslySetInnerHTML={{ __html: front.content }} />
                    <div className='commentSection my-10'>
                      <CommentSection baseURL={baseURL} blogID={front._id} />
                    </div>
                </div>
            </>
        </div>
        <div className="footer flex justify-between items-center my-4">
            <div>
                <h1 className='font-bold text-gray-700 my-4'>{front.writeDate}</h1>
                <h1 className='font-semibold text-gray-600 my-4'>{front.By}</h1>
            </div>
            <button 
                onClick={handleIsOpen} 
                className='font-bold bg-[#3CB371] text-white rounded-[10px] py-3 px-6 transition duration-300 hover:bg-[#2a9e56]'
            >
                {isOpen ? "Show Less" : "Full Story"}
            </button>
        </div> 
    </div> 
</div>
            {(data.length > 1 && !isOpen) &&
              <div className={`sideCard md:flex flex-col md:w-1/6 hidden`}>
            <Sidecards baseURL={baseURL} sidedata={data.slice(0, 3)} onToggle={handleCardClick}/> 
            </div>
            }
            </div>
        </div>
        {data.length > 2 && (<CardsBottom baseURL={baseURL} onToggle={handleCardClick}/>)}
        </div>
        <EATemplate />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Blogs Available</h2>
            <p className="text-gray-600 mb-6">
                It seems there are currently no blogs to display. Check back later for updates!
            </p>
            <button 
                className="bg-[#3CB371] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#2a9e56]"
                onClick={() => window.location.reload()} // Example action
            >
                Refresh
            </button>
        </div>
    </div>
      )}
        </>
    )
}

export default Blogs;






// import {useEffect, useState} from 'react';
// import Wallimg from '../assets/images/Blogs/img2.png'
// import Thumbnail from '../assets/images/Blogs/b-2.png'
// import Sidecards from './Blogs/sidecards';
// import axios from 'axios';
// import CardsBottom from './Blogs/cardsBottom';
// import Blogswrite from './Blogs/Blogswrite'
// import EATemplate from './EarlyAccessTemplate';
// import { useNavigate } from 'react-router-dom';

// function Blogs() {

//   // const [data, setData] = useState([]); UNCOMMENT LATER (DON'T DELETE)
//   const [front, setFront] = useState({});
//   const [isOpen, setIsOpen] = useState(false);

//   //UNCOMMENT LATER (DON'T DELETE)
//   // useEffect(() => {
//   //   axios.get('http://localhost:5000/api')
//   //   .then(response => {
//   //     // setData(response.data[0].Heading);
//   //     setData(response.data);
//   //     setFront(response.data[0]);
//   //   })
//   //   .catch(error => console.error('Error fetching data:', error));
//   // }, []);

//   const navigate = useNavigate();

//   const handleBwClick = () => {
//     navigate('/blogswriting');
//   }

//   const handleIsOpen = () => {
//     setIsOpen(!isOpen);
//   }

//   const handleCardClick = (item) => {
//     setFront(item);
//   };

//     return (
//       <>
//           <div className='m-4 md:px-12 gap-20 md:mb-20'>
//             {/* UNCOMMENT WHEN DONE */}
//             <div className='flex flex-row justify-between'>
//               <h1 className='flex justify-start font-semibold text-5xl leading-[72px] finwise-blue items-start'>Blogs</h1>
//               <button className='finwise-green-bg border border-[#223876] text-[#FFFFFF]' onClick={handleBwClick}>Write your own Blog!</button>
//             </div>
//             <h2 className='flex sm:justify-start justify-center text-2xl font-bold my-8 finwise-blue'>Top Stories</h2>
//         <div>
//             <div className='flex md:flex-row flex-col justify-between'>
//             <div className='mainCard md:w-4/6 bg-slate-100 rounded-xl'>
//               <div className="rounded-t-xl flex justify-center flex-wrap md:max-h-96  overflow-hidden border border-[#262626]">
//                 <img className='flex' src={Thumbnail} alt="" />
//               </div>
//               <div className='content p-4'>
//               <div className="flex flex-col justify-start gap-4">
//                 <>
//                   <h3 className="text-3xl font-bold text-[#1A1A1A]">The UK Tax System: Adulting Just Got Real (But We Got You)</h3>
//                   <button onClick={handleIsOpen} className={`font-bold hover:bg-[#3CB371] hover:text-white rounded-[10px] border border-[#223876] py-3 px-6 md:w-[20%] ${isOpen ? 'block' : 'hidden'}`}>Show Less</button>
//                   <div className={`blogPara ${isOpen ? 'h-auto' : 'h-14 overflow-hidden'}`}>
//                   <Blogswrite />
//                   </div>
//                 </>
//               </div>
//               <div className="footer flex justify-between my-4">
//                 <h1 className='font-bold my-auto'>Aug 9</h1>
//                 <button onClick={handleIsOpen} className='font-bold hover:bg-[#3CB371] hover:text-white rounded-[10px] border border-[#223876] py-3 px-6'>{isOpen ? "Show Less" : "Full Story"}</button>
//                </div> 
//                </div> 
//             </div>
//             <div className={`sideCard md:flex flex-col md:w-1/6 hidden`}>
//               {Array.from({ length: 3 }, (_, index) => (
//               <Sidecards key={index} onToggle={handleCardClick}/>
//               ))}
//             </div>
//             </div>
//         </div>
//         <CardsBottom onToggle={handleCardClick}/>
//         </div>
//         <EATemplate />
//         </>
//     )
// }

// export default Blogs;