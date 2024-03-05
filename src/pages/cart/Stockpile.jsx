import React, { useState } from "react";
import CreditCard from "./CreditCard";
import PayPal from "./PayPal";
import PayPalCredit from "./PayPalCredit";

import Image from "../../assets/images/img2.png";

const products = [
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Cropped sweatshirt",
    price: "$398",
    paymentStatus: true,
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Cropped sweatshirt",
    price: "$398",
    paymentStatus: false,
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Cropped sweatshirt",
    price: "$398",
    paymentStatus: true,
  },
];

const Stockpile = () => {
  const [toggle, setToggle] = useState(0);

  const updateToggle = (toggle) => {
    setToggle(toggle);
  };
  return (
    <main className="my-2 px-2 lg:px-12">
      <h2 className="font-semibold text-[1.2rem] mb-4">Stockpile Payments</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-3 lg:gap-8">
        <div className="w-full md:w-[65%] sm:border p-2 sm:py-4 sm:px-4 rounded">
          {/* <h2 className="font-semibold text-[1.2rem] mb-4">Summary</h2> */}
          {/* All Items to Checkout */}
          <div className="overflow-y-auto">
            {products.map((items, i) => {
              return (
                <div
                  key={i}
                  className="py-2 px-3 bg-gray-100 flex flex-row flex-nowrap justify-between items-center lg:rounded-xl my-2"
                >
                  <div className="flex flex-row flex-nowrap justify-start gap-x-2 sm:gap-x-4 items-center">
                    <img className="w-16" src={items.img} alt="/" />
                    <p className="text-[.8rem] text-left sm:w-[70%]">
                      {items.desc}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <p
                      className={`text-[.7rem] border py-[3px] px-1 rounded ${
                        items.paymentStatus ? "bg-green-400" : "bg-red-500"
                      }`}
                    >
                      {items.paymentStatus ? "Paid" : "Unpaid"}
                    </p>
                    <p className="font-semibold text-sm sm:text-[1rem]">
                      {items.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Order Summary */}
          <div>
            <div className="my-2">
              <div className="my-4">
                <p className="text-sm font-semibold text-black/60">Address</p>
                <p className="text-sm">
                  1131 Dusty Townline, Jacksonville, TX 40322
                </p>
              </div>
              <div className="my-4">
                <p className="text-sm font-semibold text-black/60">
                  Shipment Mode
                </p>
                <p className="text-sm">Free</p>
              </div>
            </div>
            <div>
              <ul>
                <li className="flex flex-row flex-nowrap justify-between my-2">
                  <p className="font-semibold">Sub-Total</p>
                  <p className="font-semibold">$1346</p>
                </li>
                <li className="flex flex-row flex-nowrap justify-between my-2">
                  <p className="font-semibold text-black/60">Estimated Tax</p>
                  <p className="font-semibold">$50</p>
                </li>
                <li className="flex flex-row flex-nowrap justify-between my-2">
                  <p className="font-semibold text-black/60">
                    Estimated shipping & Handling
                  </p>
                  <p className="font-semibold">$29</p>
                </li>
                <li className="flex flex-row flex-nowrap justify-between my-2">
                  <p className="font-semibold">Total</p>
                  <p className="font-semibold">$1425</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Payment Mode Details */}
        <div className="w-full md:w-[35%] p-2 sm:py-4 sm:px-4 rounded-xl">
          <h2 className="font-semibold text-[1.2rem] my-4">Payment</h2>
          <ul className="flex flex-row gap-4 sm:gap-6 border-b border-solid">
            <li
              role="button"
              className={`${
                toggle === 0 ? "border-b-2 border-black" : ""
              } text-sm`}
              onClick={() => updateToggle(0)}
            >
              Credit&nbsp;Card
            </li>
            <li
              role="button"
              className={toggle === 1 ? "border-b-2 border-black" : ""}
              onClick={() => updateToggle(1)}
            >
              PayPal
            </li>
            <li
              role="button"
              className={toggle === 2 ? "border-b-2 border-black" : ""}
              onClick={() => updateToggle(2)}
            >
              PayPal&nbsp;Credit
            </li>
          </ul>
          <div className="flex items-center justify-center text-2xl md:text-6xl">
            {toggle === 0 && <CreditCard />}
            {toggle === 1 && <PayPal />}
            {toggle === 2 && <PayPalCredit />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stockpile;
