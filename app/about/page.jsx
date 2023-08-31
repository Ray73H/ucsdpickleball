import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row min-h-screen items-center bg-white bg-opacity-75 py-20 sm:py-16">
        <div className="flex-1 max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-xl mb-8 sm:mb-0">
          <h1 className="text-2xl sm:text-5xl font-semibold mb-4">
            What is Triton Pickleball?
          </h1>
          <p className="text-base sm:text-xl text-gray-700">
            Triton Pickleball is dedicated to fostering a pickleball community
            on campus while promoting physical activity and sportsmanship among
            students and faculty. Our primary goal is to grow the sport of
            pickleball within the university community by providing
            opportunities for individuals of different skill levels to engage in
            the game and develop their abilities.
          </p>
        </div>
        <div className="flex-1 max-w-lg mx-auto p-4 flex justify-center">
          <img
            src="/assets/images/group.webp"
            alt="team"
            className="max-w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
      <div className="bg-gray-100 py-8 sm:py-16 text-center">
        <h1 className="text-2xl sm:text-5xl font-semibold mb-8">Leaders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Ray Heinonen</h2>
            <p className="text-gray-700">DUPR rating: 5.08</p>
            <p className="text-gray-700">Experience playing: 1 year</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Gabriel Dyer</h2>
            <p className="text-gray-700">DUPR rating: 4.69</p>
            <p className="text-gray-700">Experience playing:</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Kylun Freeman</h2>
            <p className="text-gray-700">DUPR rating: 4.44</p>
            <p className="text-gray-700">Experience playing:</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Matthew Powley</h2>
            <p className="text-gray-700">DUPR rating: 4.08</p>
            <p className="text-gray-700">Experience playing:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
