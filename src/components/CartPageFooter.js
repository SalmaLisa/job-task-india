import React from "react";
import { MdGpsFixed, MdLocationOn } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";

const CartPageFooter = ({toPay}) => {
 
  return (
    <div className="relative">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F5FCF4"
            fill-opacity="1"
            d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute top-20 w-full">
        <div className="flex justify-between w-11/12 mx-auto mt-12">
        <div >
          <p className="font-bold text-2xl mb-3">Add a delivery address</p>
          <div>
            <p className="flex items-center">
              <span className="border-b border-gray-700 text-gray-600 mr-1 font-bold">
                Hyder Hills, Green Villa, Hyderabad
              </span>
              <HiChevronDown className="text-2xl text-amber-500"></HiChevronDown>
            </p>
          </div>
          <div className="flex justify-between px-5 border border-gray-600 w-72 text-xl py-2 rounded-2xl mt-5 mb-20 ">
            <input
              className="focus:outline-none border-r-2 border-gray-600 w-48"
              type="search"
              placeholder="Current location"
            />
            <div>
              <MdGpsFixed className="text-3xl text-gray-600 "></MdGpsFixed>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-3">
            <span className="bg-orange-200 p-1 rounded-lg mr-1">
              <MdLocationOn className="text-3xl text-orange-600"></MdLocationOn>
            </span>
            <h1 className="text-2xl font-semibold">Home</h1>
          </div>
          <div>
            <span className="border-b border-gray-700 text-gray-600 mt-3  mr-1 font-bold">
              Hyder Hills, Green Villa..
            </span>
            <br />
            <button
              className="px-32 py-3 rounded-full text-white font-bold text-xl mt-3"
              style={{ background: "#01A367" }}
            >
              Pay ₹{toPay}
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageFooter;
