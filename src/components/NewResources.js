
import React from 'react';
import '../index.css';
import budgetb1 from '../assets/images/budgetboook.svg';
import budgetb2 from '../assets/images/budgetboook.svg';
import budgetb3 from '../assets/images/budgetboook.svg';
import budgetb4 from '../assets/images/budgetboook.svg';
import budgetb5 from '../assets/images/budgetboook.svg';
import budgetb6 from '../assets/images/budgetboook.svg';
import budgetb7 from '../assets/images/budgetboook.svg';
import EarlyAccessTemplate from './EarlyAccessTemplate';
import logo from '../assets/images/logo.svg';

const Category = () => {
  return (
    <div className="my-10 mx-6 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold my-6">Browse by Category</h1>
      <div className="flex flex-wrap justify-center items-center">
        {[ // Category data for reusability
          { img: budgetb1, title: 'Budgeting', description: 'The Budgeting Blueprint' },
          { img: budgetb2, title: 'Stock Market', description: 'Retirement Planning' },
          { img: budgetb3, title: 'Taxation', description: 'The Tax Planning Playbook' },
          { img: budgetb4, title: 'Retirement Planning', description: 'Basics of Technical Analysis' },
          { img: budgetb5, title: 'Smart with Money', description: '101 Finance Hacks' },
          { img: budgetb6, title: 'Finance Hacks', description: 'Smart With Money' },
        ].map((category, index) => (
          <div className="flex flex-row m-6" key={index}>
            <div>
              <img src={category.img} alt={`${category.title}`} className="h-[250px]" />
            </div>
            <div className="bg-[#121212] rounded-r-3xl p-3 flex flex-col justify-center items-start">
              <h1 className="font-semibold text-xl">{category.title}</h1>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Ads = () => {
  return (
    <div className="mx-auto flex items-center justify-center my-20">
      <div className="text-white w-[96%] h-auto rounded-2xl bg-gradient-to-b from-[#8A3FF2] via-[#50248C] to-[#50248C] p-[2px]">
        <div className="bgresrcads h-[70vh]">
          <div className="p-5 w-full sm:w-[60%] h-full flex flex-col justify-center items-start">
            <p className="text-[20px]">
              <span className="text-2xl font-bold">100% OFF</span> on all guides
            </p>
            <h1 className="font-sora font-semibold text-5xl my-4">
              <span className="text-[25px] text-green-400">Free for all</span> <br />
              Early members
            </h1>
            <button className="bg-black px-8 py-4 rounded-xl mt-3">Get now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-2xl font-semibold">New Arrivals</h1>
      <div className="flex flex-wrap justify-center items-center">
        {[
          { img: budgetb7, title: 'Budgeting', description: 'Basics of Technical Analysis' },
          { img: budgetb1, title: 'Finance Basics', description: 'The Budgeting Blueprint' },
        ].map((item, index) => (
          <div className="flex flex-col m-6" key={index}>
            <div className="bg-[#121212] rounded-t-xl pt-2">
              <img src={item.img} alt={item.title} className="w-[150px] h-[200px] md:w-[250px] md:h-[300px]" />
            </div>
            <div className="bg-[#121212] w-[150px] md:w-[250px] rounded-b-lg md:rounded-b-xl p-3 flex flex-col justify-center items-start">
              <h1 className="font-semibold text-xl">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GuideOfDay = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold">Guide of the Day - 29 Nov 2024</h1>
      <div className="flex flex-wrap justify-center items-center">
        {[
          { img: budgetb1, author: 'Finwise School', title: 'Basics of Technical Analysis', description: 'Your go-to guide for understanding financial markets.' },
        ].map((guide, index) => (
          <div className="flex flex-row m-6" key={index}>
            <div>
              <img src={guide.img} alt={guide.title} className="w-[250px]" />
            </div>
            <div className="bg-gradient-to-tr from-green-500 to-violet-900 rounded-r-3xl p-1">
              <div className="bg-[#171717] w-[250px] h-full rounded-r-3xl flex flex-col justify-center items-start p-4">
                <p className="italic">By {guide.author}</p>
                <h1 className="font-bold text-lg mb-2">{guide.title}</h1>
                <p className="text-[18px]">{guide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <div className="bgadd h-auto">
        <div className="mx-auto flex items-center justify-center">
          <div className="text-white w-[96%] h-auto rounded-2xl bg-gradient-to-b from-[#8A3FF2] via-[#50248C] to-[#50248C] p-[2px]">
            <div className="bgresrc h-[70vh]">
              <div className="p-5 w-full sm:w-[60%] h-full flex flex-col justify-center items-start">
                <p className="text-[20px]">Free Guide to Jump-Start Your Financial Journey</p>
                <h1 className="font-sora font-semibold text-3xl my-4">
                  Take Control of Your Finances in Just 2 Weeks
                </h1>
                <p>
                  Get started with our free, expert-created guide designed to help you build strong financial habits and
                  achieve your goals.
                </p>
                <button>Get</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category />
      <Ads />
      <NewArrivals />
      <GuideOfDay />
      <EarlyAccessTemplate />
    </>
  );
};

export default Main;
