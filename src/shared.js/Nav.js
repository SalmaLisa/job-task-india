import React, { useState } from "react";

import logo from "../assets/logo.png";
import offer from "../assets/Vector.png";
import { MdGpsFixed } from 'react-icons/md';
import { HiChevronDown, HiOutlineSearch } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="relative flex items-center justify-between">
        <div
          className="inline-flex items-center"
          
        >
          <img className=" w-14 h-[75px]" src={logo} alt="" />
          <p className="ml-5  flex items-center">
          <MdGpsFixed className="text-xl text-gray-600 "></MdGpsFixed>
            <span className="border-b border-gray-700 text-gray-700 ml-2 mr-1 font-semibold">Hyder Hills, Green Villa, Hyderabad</span>
            <HiChevronDown className="text-2xl text-amber-500"></HiChevronDown>
          </p>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/search"
              aria-label="search"
              title="search"
              className="font-medium tracking-wide text-gray-700 flex items-center"
            >
              <HiOutlineSearch></HiOutlineSearch>
              <span className="ml-1 font-bold">Search</span>
              
            </Link>
          </li>
          <li>
            <Link
             
              aria-label="offer"
              title="offer"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 flex items-center"
            >
              <img className="h-4 w-4" src={offer} alt="" />
              <span className="ml-1 font-bold">Offer</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              aria-label="cart"
              title="cart"
              className="font-medium tracking-wide text-gray-700 flex items-center"
            >
              <AiOutlineShoppingCart className="font-bold text-xl"></AiOutlineShoppingCart>
              <span className="ml-1 font-bold">Cart</span>
            </Link>
          </li>
          <li>
            <Link
             
              aria-label="profile"
              title="profile"
              className="font-medium tracking-wide text-gray-700 flex items-center"
            >
              <CgProfile className="font-bold text-xl"></CgProfile>
              <span className="ml-1 font-bold">Profile</span>
            </Link>
          </li>
        </ul>
        <div className="lg:hidden z-10">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      aria-label="logo"
                      title="logo"
                      className="inline-flex items-center"
                    >
                      <img className=" w-20" src={logo} alt="" />
                      <span className="ml-2 text-3xl tracking-wide font-semibold text-gray-800  italic">
                        <span className=" font-bold border-yellow-400 border-b-4">
                          
                        </span>{" "}
                        Cars
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/home"
                        aria-label="home"
                        title="home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/blog"
                        aria-label="blog"
                        title="blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
