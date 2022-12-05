import React from "react";
import CurvedDiv from "../components/CurvedDiv";
import Products from "../components/Products";
import { HiOutlineSearch } from "react-icons/hi";
import Categories from "../components/Categories";
import FooterCurve from "../shared.js/FooterCurve";

const SearchPage = () => {
  return (
    <div>
      <div className="relative mb-32">
        <div>
          <CurvedDiv></CurvedDiv>
        </div>
        <div className="absolute top-80 left-52">
          <div className=" border bg-white flex items-center rounded-lg">
            <input
              className=" w-full py-3 px-5 text-xl "
              placeholder="Search for items or stores"
              type="search"
              name=""
              id=""
            />
            <HiOutlineSearch className="mr-5 text-2xl"></HiOutlineSearch>
          </div>
          <div className="mt-16">
            <h1 className="text-4xl font-bold my-4">Popular Searches</h1>
            <Products></Products>
          </div>
        </div>
      </div>
      <div>
        <Categories></Categories>
      </div>
      <FooterCurve></FooterCurve>
    </div>
  );
};

export default SearchPage;
