import React from "react";

const Sponsor = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="p-12 text-center rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold mb-4">Sponsors</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are always interested in any sponsorships to support our club!
        </p>
        <a
          href="mailto:ucsdpickleball@gmail.com"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          Email Us
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
