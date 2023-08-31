"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu(); // Close the menu after clicking
  };

  return (
    <nav className="fixed w-full top-0 h-16 bg-black transition flex justify-between items-center py-2 px-6">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo.webp"
          alt="Weather Logo"
          width={45}
          height={50}
          className="object-contain rounded-xl"
        />
        <p className="text-xl font-semibold text-white">Triton Pickleball</p>
      </Link>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black py-2">
            <div className="flex flex-col items-center">
              <Link
                href="/about"
                className="block text-white py-2"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/schedule"
                className="block text-white py-2"
                onClick={toggleMenu}
              >
                Schedule/Events
              </Link>
              <Link
                href="/gallery"
                className="block text-white py-2"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link
                href="/sponsors"
                className="block text-white py-2"
                onClick={toggleMenu}
              >
                Sponsors
              </Link>
              <button
                onClick={handleContactClick}
                className="block text-white py-2"
              >
                Contact
              </button>
              <Link href="/join">
                <button
                  className="bg-white text-black hover:bg-gray-300 px-4 py-2 rounded-full h-8 flex items-center justify-center"
                  onClick={toggleMenu}
                >
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="flex gap-4 md:gap-6 items-center text-white text-lg">
          <Link href="/about" className="hover:text-gray-700">
            About Us
          </Link>
          <Link href="/schedule" className="hover:text-gray-700">
            Schedule/Events
          </Link>
          <Link href="/gallery" className="hover:text-gray-700">
            Gallery
          </Link>
          <Link href="/sponsors" className="hover:text-gray-700">
            Sponsors
          </Link>
          <button onClick={handleContactClick} className="hover:text-gray-700">
            Contact
          </button>
          <Link href="/join">
            <button className="bg-white text-black hover:bg-gray-300 px-4 py-2 rounded-full h-8 flex items-center justify-center">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
