import React from "react";

const Join = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white mt-20">
      <div className="max-w-3xl p-6 md:p-10 rounded-xl shadow-xl text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
          Want to join Triton Pickleball?
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6">
          Click the link and fill out the form!
        </p>
        <p className="text-lg md:text-xl text-blue-500 mb-4 md:mb-6 font-bold">
          Form will open up closer to Fall Quarter! Check back soon!
        </p>
        {/* <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfzmitDLmZdLhk4OnQ1oozAyLVHGvpxK9OOtd1UlXhuf38X1w/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-44 mx-auto py-2 md:py-3 bg-blue-500 text-white rounded-full text-center hover:bg-blue-600"
        >
          Form
        </a> */}
      </div>
      <div className="mt-8 md:mt-12 max-w-3xl p-6 md:p-10 rounded-xl shadow-xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
          What are the requirements to be a member?
        </h1>
        <ul className="list-disc list-inside text-lg md:text-xl">
          <li>Be a registered UC San Diego student or faculty</li>
          <li>
            Go to a certain number of practices a quarter to maintain active
            membership (still being decided)
          </li>
          <li>Feel free to join at any time during the quarter</li>
        </ul>
      </div>
    </div>
  );
};

export default Join;
