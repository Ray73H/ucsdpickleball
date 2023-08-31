import React from "react";

const Contact = () => {
  return (
    <footer id="contact" className="bg-gray-800 py-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-4">Contacts</h1>
        <div className="mb-8"></div>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:ucsdpickleball@gmail.com"
            className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 md:px-8 md:py-4 rounded-full text-sm font-semibold"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/triton.pickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 md:px-8 md:py-4 rounded-full text-sm font-semibold"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@triton.pickleball"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 md:px-8 md:py-4 rounded-full text-sm font-semibold"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
