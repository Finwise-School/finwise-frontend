import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import bookImage from "../../assets/images/books/analysis.png";

const BasicsOfTechnicalAnalysis = () => {
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "2-digit" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const writeDate = formatDate(new Date());

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setSubmit(true);
      const emailData = { email, writeDate };

      try {
        const response = await axios.post(
          "https://api.finwiseschool.com/api/emailData",
          emailData
        );

        if (response.status === 201) {
          console.log("Email Address Received");
          setIsEmailSubmitted(true);
        } else {
          console.error("Error saving data:", response.data);
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
      } finally {
        setSubmit(false);
      }
    } else {
      console.error("Invalid email address.");
    }
  };

  return (
    <div className="bg-[#0c0c0c] font-inter flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[calc(100%-40px)] lg:max-w-[calc(100%-160px)] bg-[#070707] rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-opacity-60 border border-gray-600 shadow-lg">
        <div className="bg-[#223876] bg-opacity-40 rounded-t-2xl p-4 sm:p-6 lg:p-8 flex justify-center relative w-full">
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center text-white">
            <i className="fas fa-arrow-left text-sm sm:text-lg"></i>
            <span className="ml-2 text-sm sm:text-lg">Back</span>
          </div>

          <img
            src={bookImage}
            alt="Basics of Technical Analysis Cover"
            className="rounded-lg shadow-lg w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] lg:w-[300px] lg:h-[400px]"
          />
        </div>

        <div className="py-4 sm:py-6 text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
            Basics of Technical Analysis
          </h1>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-[#223876] text-white py-3 px-8 sm:py-4 sm:px-10 lg:py-4 lg:px-12 rounded-full text-base sm:text-lg lg:text-2xl w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] mx-auto transition-all duration-300"
          >
            Download Now
          </button>
        </div>

        <div className="text-gray-200 p-4 sm:p-6 lg:p-8 rounded-b-2xl">
          <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
            Unlock the power of market trends and make smarter trading decisions!{" "}
            <span className="font-semibold">"Basics of Technical Analysis"</span> by Finwise School is
            your go-to guide for understanding and applying technical analysis in financial markets.
          </p>

          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">
            In this book, you'll discover:
          </h2>
          <ul className="list-disc list-inside space-y-2 sm:space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg">
            <li>
              <span className="font-semibold">Key Concepts:</span> Learn how to use historical data to
              forecast market movements.
            </li>
            <li>
              <span className="font-semibold">Understanding Chart Types:</span> Explore candlestick,
              bar, and line charts.
            </li>
            <li>
              <span className="font-semibold">Spotting Trends:</span> Identify uptrends, downtrends,
              and market ranges.
            </li>
            <li>
              <span className="font-semibold">Chart Patterns:</span> Decode powerful patterns like
              Head & Shoulders.
            </li>
            <li>
              <span className="font-semibold">Psychological Insights:</span> Maintain discipline and
              avoid emotional trading.
            </li>
          </ul>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg">
            With clear explanations and practical examples,{" "}
            <span className="font-semibold">"Basics of Technical Analysis"</span> equips you with the
            tools needed for informed trading.
          </p>
        </div>
      </div>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {!isEmailSubmitted ? (
              <>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Enter your Email Address:
                </h3>
                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[6%]"
                    required
                    onChange={handleEmailChange}
                    value={email}
                  />
                  <Button className="bg-[#223876]" type="submit" disabled={submit}>
                    {submit ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Your email was successfully submitted!
                </p>
                <a
                  href="https://drive.usercontent.google.com/u/0/uc?id=1vGrwxwJ4Avdr5-WoIDRYdzqBR0w1ctx2&export=download"
                  download
                >
                  <Button color="success">Download Now</Button>
                </a>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BasicsOfTechnicalAnalysis;
