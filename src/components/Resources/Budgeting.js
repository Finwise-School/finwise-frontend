import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const FreebiesPage = () => {
  const books = [
    {
      imageSrc: "/images/budget.png",
      path: "https://finwiseschool.gumroad.com/l/fwsbudgetboss",
    },
    {
      imageSrc: "/images/basics.png",
      path: "/basics",
    },
  ];

  const guides = [
    {
      title: "Free Finance Guide",
      imageSrc: "/images/guide.png",
      path: "https://finwiseschool.gumroad.com/l/fwsfreefinanceguide",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Freebies</h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Dive into our collection of free resources crafted to boost your
          financial knowledge and confidence.
        </p>

        {/* Books Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Interactive Books</h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {books.map((bookImage, index) =>
              bookImage.path.startsWith("http") ? (
                <a
                  key={index}
                  href={bookImage.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 mt-2 md:mt-4 rounded-b-full overflow-hidden flex items-center justify-center">
                    <img
                      src={bookImage.imageSrc}
                      alt={`Book ${index}`}
                      className="max-w-full max-h-full object-cover"
                    />
                  </div>
                </a>
              ) : (
                <Link key={index} to={bookImage.path}>
                  <div className="w-20 h-20 md:w-28 md:h-28 mt-2 md:mt-4 rounded-b-full overflow-hidden flex items-center justify-center">
                    <img
                      src={bookImage.imageSrc}
                      alt={`Book ${index}`}
                      className="max-w-full max-h-full object-cover"
                    />
                  </div>
                </Link>
              )
            )}
          </div>
        </section>

        {/* Guides Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Free Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={guide.imageSrc}
                  alt={guide.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                {guide.path.startsWith("http") ? (
                  <a
                    href={guide.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-6 ml-[-10%] bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
                      Get Now
                    </button>
                  </a>
                ) : (
                  <Link to={guide.path}>
                    <button className="mt-6 ml-[-10%] bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
                      Get Now
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreebiesPage;
