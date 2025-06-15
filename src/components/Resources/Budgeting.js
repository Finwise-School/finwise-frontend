import React from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    path: "https://finwiseschool.gumroad.com/l/fwsbudgetboss",
    
  },
];

const Budgetings = () => {
  const navigate = useNavigate();

  return (
    <div className="p-[5%]">
      <h1 className="finwise-blue text-5xl md:text-5xl font-bold mb-[8%] text-center">
        Budgeting
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-[8%]">
        {images.map((image, index) => (
          <div key={index} className="m-0 p-0 text-center">
            <a
              href={image.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.imageSrc}
                alt={image.name}
                className="w-full h-[80%] mt-0 m-0"
              />
            </a>
            <h2 className="font-bold mt-4 mb-2 text-sm text-black">
              {image.name}
            </h2>
            <button
              onClick={() => navigate('/resources')}
              className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Back to Resources
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budgetings;
