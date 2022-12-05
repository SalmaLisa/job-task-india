import React from "react";
import brocli from "../assets/broc.png";

const Brocli = () => {
  return (
    <div className="grid grid-cols-12 w-10/12 mx-auto bg-transparent mt-10">
      <div className=" col-span-7 flex ml-6">
        <div className="bg-white w-72 h-64 flex justify-center items-center rounded-[50px] shadow-xl">
          <img className="-ml-10" src={brocli} alt="" />
        </div>
        <div className="ml-10 mt-7">
          <h2 className="font-bold text-4xl my-1 ">Brocolli</h2>
          <p className="font-bold  text-xl mb-1">1 kg</p>
          <p className="text-2xl text-red-500 mb-1">
            <span>₹ 60.50</span> <del className="text-gray-500">₹ 68</del>
          </p>
          <p style={{ color: "#FF0000" }} className="text-xl mb-3">
            {" "}
            4% Off
          </p>
          <div className="flex items-center justify-center">
            <p
              style={{ background: "#E75D41" }}
              className="text-white rounded-full mr-3 px-3 font-semibold"
            >
              <span className="mr-2">+</span>
              <span className="mx-2">1</span>
              <span className="ml-2 ">-</span>
            </p>
            <p
              style={{ background: "#E75D41" }}
              className="text-white rounded-full px-3 font-semibold"
            >
              Add to Cart
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#FAC06E" }}
        className="col-span-5 py-5 px-6 rounded-lg z-40"
      >
        <h3 className="font-bold text-3xl text-center my-2">
          Important Information
        </h3>
        <p className="text-justify">
          The product image(s) shown are for representation purposes only. The
          actual product may vary. It is recommended to read the product labels
          (if any), batch details, directions for use, etc., as contained in the
          actual product before consuming and/or utilizing the product. The
          product is meant for fresh and immediate consumption, or as specified
          by the seller of the product. For other information, please contact
          the merchant directly.
        </p>
      </div>
    </div>
  );
};

export default Brocli;
