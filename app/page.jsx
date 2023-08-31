import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url('/assets/images/background.webp')` }}
      >
        <div className="flex flex-col justify-center items-center h-full text-white px-4 sm:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-shadow text-center">
            Triton Pickleball
          </h1>
          <h2 className="text-sm md:text-2xl lg:text-3xl mb-8 text-shadow text-center">
            Social and Competitive Club at UC San Diego
          </h2>
          <div className="flex space-x-4 sm:space-x-8">
            <a
              href="/join"
              className="hover:bg-gray-500 bg-white text-black font-semibold rounded-full py-2 px-4 sm:py-3 sm:px-6 transition duration-300 text-center"
            >
              Join Us
            </a>
            <a
              href="/schedule"
              className="hover:bg-gray-500 bg-white text-black font-semibold rounded-full py-2 px-4 sm:py-3 sm:px-6 transition duration-300 text-center"
            >
              Schedule
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center py-8">
        <div className="max-w-2xl bg-gray-100 flex flex-col justify-center items-center px-10 py-10 shadow-xl rounded-xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center">
            Join The Club
          </h3>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-6 text-center">
            Triton Pickleball is a club where all skill levels and sports
            backgrounds come together for fun and inclusive games.
          </p>
          <p className="text-sm md:text-lg lg:text-xl text-gray-900 font-semibold text-center">
            UCSD members: Pending for Fall Quarter
          </p>
        </div>
        <div className="max-w-2xl bg-gray-100 flex flex-col justify-center items-center px-10 mt-8 py-10 shadow-xl rounded-xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center">
            Practice & Events
          </h3>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-4 text-center">
            Current Practice schedule is being decided. Check back soon!
          </p>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-6 text-center">
            Check the calendar for up-to-date information
          </p>
          <a
            href="/schedule"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full py-1 px-4 sm:py-2 sm:px-6 transition duration-300 text-center"
          >
            See All Practices
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
