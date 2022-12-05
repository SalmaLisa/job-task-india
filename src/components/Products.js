import React from "react";
import carrot from "../assets/carrot.png";
import banana from "../assets/banana.png";
import papaya from "../assets/papaya.png";
import garlic from "../assets/garlic.png";
import onion from "../assets/onion.png";

const Products = () => {
  return (
    <>
      
       <div className="grid grid-cols-5 gap-5 mt-7 ">
      <div style={{boxShadow:"6px 5px 12px gray"}} className="card card-compact bg-base-100 rounded-5xl  rounded-[20px] ">
        <figure>
          <img src={carrot} alt="Shoes" />
        </figure>
        <div className="px-4 space-y-1 mt-4">
          <h2 className="card-title">Carrot</h2>
          <p>1 Kg</p>
          <p>30.50/-</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div style={{boxShadow:"6px 5px 12px gray"}} className="card card-compact bg-base-100 rounded-5xl  rounded-[20px] ">
        <figure>
          <img src={banana} alt="Shoes" />
        </figure>
        <div className="px-4 space-y-1 mt-4 ">
          <h2 className="card-title">Banana</h2>
          <p>1 Kg</p>
          <p>30.50/-</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div  style={{boxShadow:"6px 5px 12px gray"}} className="card card-compact bg-base-100 rounded-5xl  rounded-[20px]  ">
        <figure>
          <img src={papaya} alt="Shoes" />
        </figure>
        <div className="px-4 space-y-1 mt-4">
          <h2 className="card-title">Papaya</h2>
          <p>1 Kg</p>
          <p>30.50/-</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div  style={{boxShadow:"6px 5px 12px gray"}} className="card card-compact bg-base-100 rounded-5xl  rounded-[20px] shadow-2xl ">
        <figure>
          <img src={garlic} alt="Shoes" />
        </figure>
        <div className="px-4 space-y-1 mt-4">
          <h2 className="card-title">Garlic</h2>
          <p>1 Kg</p>
          <p>30.50/-</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div  style={{boxShadow:"6px 5px 12px gray"}} className="card card-compact bg-base-100 rounded-5xl  rounded-[20px] shadow-2xl ">
        <figure>
          <img src={onion} alt="Shoes" />
        </figure>
        <div className="px-4 space-y-1 mt-4">
          <h2 className="card-title">Onion</h2>
          <p>1 Kg</p>
          <p>30.50/-</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
