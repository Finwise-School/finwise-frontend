import React, { useState } from "react";
import gradient from '../../assets/images/about/gradient.svg'
import arr from '../../assets/images/about/arr.svg'
import {Link} from 'react-router-dom'

const Faq = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-[#070707] px-5 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[680px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            {/* <h2 className="text-3xl font-sora font-bold bg-gradient-to-r from-green-400 via-[#6477B4] to-violet-600 bg-clip-text text-transparent mb-4 sm:text-[40px]"> */}
                            <h2 className="text-3xl font-sora font-bold text-violet-600 bg-clip-text text-transparent mb-4 sm:text-[40px]">
                                Any Questions
                            </h2>

                            <h1 className="md:text-5xl text-4xl font-sora font-bold ">We Got you</h1>
                            <p className="mt-5 text-sm md:text-base text-body-color dark:text-dark-6 ">
                                Gather valuable insights with ease. Our platform enables customers to leave feedback and reviews, helping you understand their preferences and improve your service.
                            </p>
                            {/* Button for all view */}
                            {/* <p className="mt-3 font-medium">View all</p> */}
                            <div className="mt-4">

                            <Link to="/viewall" className="font-medium bg-purple-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                View all
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">

                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="What is FinWise School?"
                            text="FinWise School is an online platform that offers personalized and engaging financial education. We use adaptive learning technology, gamified content, and expert insights to help users understand and apply financial concepts effectively."
                        />
                        <AccordionItem
                            header="Who can benefit from FinWise School?"
                            text="FinWise School is designed for anyone looking to improve their financial literacy, from beginners to advanced learners. Whether you’re a student, young professional, or someone planning for retirement, our platform has something for you."
                        />
                        <AccordionItem
                            header="How does personalized learning experience work?"
                            text="Our platform uses adaptive learning technology to tailor your educational journey based on your existing knowledge, learning pace, and financial goals. This ensures that you receive content that’s most relevant to you."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="What topics are covered at FinWise School?"
                            text="We cover a wide range of financial topics, including budgeting, saving, investing, debt management, retirement planning, and advanced financial concepts like cryptocurrency and real estate investment"
                        />
                        <AccordionItem
                            header="Is FinWise School free to use?"
                            text="We offer both free and premium content. While many of our resources are accessible for free, our premium subscription plans provide access to advanced courses, personalized coaching, and exclusive tools."
                        />
                        <AccordionItem
                            header="How can I sign up for FinWise School?"
                            text="Signing up is easy! Simply visit our website, click on the 'Sign Up' button, and follow the prompts to create your account. You can start learning right away!"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <img src={gradient}></img>
            </div>
        </section>
    );
};

export default Faq;

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        // event.preventDefault();
        setActive(!active);
    };
    return (
        <div className="mb-5 w-full  border-b-2 border-[#808080]  p-2 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)]  dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={() => handleToggle()}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center ">

                    <img src={arr} className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
                        }`}></img>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 font-semibold text-dark dark:text-white">
                        {header}
                    </h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                    {text}
                </p>
            </div>
        </div>
    );
};