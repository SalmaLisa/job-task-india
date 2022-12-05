import React, { useState } from "react";
import CurvedDiv from "../components/CurvedDiv";
import brocli from "../assets/broc.png";
import offer from "../assets/Vector.png";
import { AiOutlineRight } from "react-icons/ai";
import vector from "../assets/Vector (1).png";
import CartPageProduct from "../components/CartPageProduct";
import CartPageFooter from "../components/CartPageFooter";

const CartPage = () => {
  const [price, setPrice] = useState(60.5);
  const [toPay, setToPay] = useState(69.5);
  const [quantity,setQuantity]=useState(1)

  const handlePriceIncrease = () => {
    setQuantity(quantity+1)
    const newPrice = (price + 60.5).toFixed(2);
    setPrice(parseFloat(newPrice));
    setToPay(toPay + 60.5);

  };
  const handlePriceDecrease = () => {
    if (quantity>1) {
      setQuantity(quantity-1)
      const newPrice = (price - 60.5).toFixed(2);
      setPrice(parseFloat(newPrice));
      setToPay(toPay - 60.5);
    }
  };

  return (
    <>
      <div className="relative">
        <div>
          <CurvedDiv></CurvedDiv>
        </div>
        <div className="grid grid-cols-12 w-11/12 absolute top-24 left-24">
          <div className="flex col-span-5">
            <div className="flex">
              <div className="bg-white w-44 h-40 border justify-center items-center rounded-[20px] flex shadow-xl">
                <img className="-ml-3" src={brocli} alt="" />
              </div>
              <div className="ml-5">
                <h2 className="font-bold text-4xl my-1 ">Brocolli</h2>
                <div className="mt-2 m">
                  <span className="font-bold  text-xl mb-1">1 kg</span>
                  <span
                    style={{ background: "#E75D41" }}
                    className="text-white rounded-full mr-3 px-3 py-1 font-semibold ml-3"
                  >
                    <span
                      onClick={handlePriceIncrease}
                      className="mr-2 text-xl cursor-pointer"
                    >
                      +
                    </span>
                    <span className="mx-2">{quantity}</span>
                    <span
                      onClick={handlePriceDecrease}
                      className="ml-2 text-xl cursor-pointer "
                    >
                      -
                    </span>
                  </span>
                </div>
                <div className="w-80 mt-5">
                  <div
                    style={{ background: "#FFDA03" }}
                    className="p-3 rounded-lg"
                  >
                    <div className="flex justify-between items-center ">
                      <img className="w-5 h-5" src={offer} alt="" />
                      <AiOutlineRight></AiOutlineRight>
                    </div>
                    <div className="ml-5 -mt-3">
                      <p className="font-bold text-xl">Add a coupon code</p>
                      <small className=" block font-semibold">
                        Avail offer and discounts on your order
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex col-span-3">
            <div>
              <div className="bg-sky-200 border border-gray-400 w-20 h-20 flex justify-center items-center rounded-full shadow-xl">
                <img className="-ml-1" src={brocli} alt="" />
              </div>
              <p className="text-red-400 font-bold text-2xl -mt-6 ml-12">x1</p>
            </div>
            <div className="ml-4 mt-6">
              <p className="text-2xl text-red-500 mb-1 font-semibold">
                <span>₹ 60.50</span> <del className="text-gray-500">₹ 68</del>
              </p>
              <p
                style={{ color: "#FF0000" }}
                className="text-xl mb-3 font-semibold"
              >
                {" "}
                4% Off
              </p>

              <span
                style={{ background: "#01A367" }}
                className="text-white rounded-full px-4 py-2 font-semibold"
              >
                + Add to Cart
              </span>
            </div>
          </div>
          <div className="px-6 border-l-2 border-gray-700 col-span-4">
            <h2 className="text-2xl font-bold text-center my-3">
              Bill Details
            </h2>
            <p className="font-semibold flex justify-between text-xl">
              <span>Item Total</span>
              <span>
                <span>₹</span>
                {price}
              </span>
            </p>
            <div className="font-semibold flex justify-between  text-xl">
              <div className="flex items-center">
                <span className=" mr-2 ">Delivery Fee</span>
                <div>
                  <img src={vector} alt="" />
                </div>
              </div>
              <span>
                <span>₹</span>00.00
              </span>
            </div>
            <div className="font-semibold flex justify-between text-xl border-black border-b-2">
              <div className="flex items-center">
                <span className=" mr-2">Taxes and Charges</span>
                <div>
                  <img src={vector} alt="" />
                </div>
              </div>
              <span>
                <span>₹</span>09.00
              </span>
            </div>

            <p className="font-semibold flex justify-between text-xl">
              <span className="font-bold">To Pay</span>
              <span>
                <span>₹</span>
                {toPay}
              </span>
            </p>
          </div>
        </div>
        <div className="w-9/12 ml-32 -mt-20 ">
          <CartPageProduct></CartPageProduct>
        </div>
      </div>
      <div>
        <CartPageFooter toPay={toPay}></CartPageFooter>
      </div>
    </>
  );
};

export default CartPage;
