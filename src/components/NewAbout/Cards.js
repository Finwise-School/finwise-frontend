import React from "react";

const Card = ({ id, index,step, title, description, image }) => {
  return (
    <div
      id={id}
      className="sticky top-[calc(var(--index)*5rem)] transform transition-transform duration-500 bg-transparent mt-5"
      style={{
        "--index": index,
      }}
    >
      <div className="bg-gradient-to-br from-[#0e0e0e] via-[#121212] to-[#2b095bd6] rounded-3xl border-gray-800 border-2   shadow-lg overflow-hidden flex flex-col sm:flex-row">
        {/* <div className="w-full sm:w-2/5">
          {/* <img
            className="w-full h-full object-cover aspect-square sm:aspect-video"
            src={image}
            alt={title}
          /> 
        </div> */}
        <div className="p-5 sm:p-10 flex-1">
        <h2 className=" font-sora font-medium   text-violet-600   text-[20px]">
              {step}
        </h2>
          <h1 className="text-2xl sm:text-3xl my-4 font-sora font-semibold text-white">
            {title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-inter text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cards = [
    {
      id: "card-1",
      index: 1,
      step:"Step 1",
      title: "Sign Up and Create Your Account",
      description:
        "Fill Out Registration Information: Provide your basic details like name, email, and password to create your account.",
    //   image: "/public/card-image.jpg",
    },
    {
      id: "card-2",
      index: 2,
      step:"Step 2",
      title: "Complete a Financial Assessment",
      description:
        "Answer Questions About Your Financial Goals: Share your short-term and long-term financial objectives to help tailor your plan.",
    //   image: "/public/card-image.jpg",
    },
    {
      id: "card-3",
      index: 3,
      step:"Step 3",
      title: "Start Learning with Financial Modules",
      description:
        "Complete Educational Modules: Work through interactive modules designed to build your financial knowledge and skills.",
    //   image: "/public/card-image.jpg",
    },
    {
        id: "card-4",
        index: 4,
        step:"Step 4",
        title: "Utilize Financial Tools and Resources",
        description:
          "Access Financial Tools: Use tools to create and manage a budget, helping you track and control your spending.",
      //   image: "/public/card-image.jpg",
      },
      {
        id: "card-5",
        index: 5,
        step:"Step 5",
        title: "Monitor Progress and Get Expert Advice",
        description:
          "Check the Leaderboard: See how you rank against other users by tracking your progress on the leaderboard.",
      //   image: "/public/card-image.jpg",
      },
      {
        id: "card-6",
        index: 6,
        step:"Step 6",
        title: "Achieve Goals and Earn Rewards",
        description:
          "Earn Rewards for Completing Modules: Receive rewards for completing modules and achieving milestones, motivating you to stay on track.",
      //   image: "/public/card-image.jpg",
      },
  ];

  return (
    <div className="bgadd min-h-screen">
      <div className="h-40"></div>
      <div className="my-4 flex flex-col justify-center items-center text-center">
      <h1 className='text-3xl font-bold py-2'>Navigating the Finwise School Experience</h1>
        <p className='text-[#888888]'>Navigating the Finwise School process is simple and designed to guide you toward financial success. Here's a step-by-step overview</p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      
      <div className="h-[50vh]"></div>
    </div>
  );
};

export default Cards;