import React, { useState } from "react";
import "../../styles/Styles.css";
import Image from "../../assets/images/img2.png";
import PayPal from "./PayPal";
import PayPalCredit from "./PayPalCredit";
import CreditCard from "./CreditCard";

const products = [
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
];

const Checkout = () => {
  const [toggle, setToggle] = useState(0);

  const updatetoggle = (toggle) => {
    setToggle(toggle);
  };
  return (
    <main className="my-2 px-2 md:px-12">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="sm:border basis-1/2 p-2 sm:py-4 sm:px-8 rounded">
          <h2 className="font-semibold text-[1.2rem] mb-4">Summary</h2>
          {/* All Items to Checkout */}
          <div className="overflow-y-auto">
            {products?.map((items, i) => {
              return (
                <div
                  key={i}
                  className="py-2 px-3 bg-gray-100 flex flex-row flex-nowrap justify-between items-center lg:rounded-xl my-2"
                >
                  <div className="flex flex-row flex-nowrap justify-start gap-x-2 sm:gap-x-4 items-center">
                    <img className="w-[20%]" src={items.img} alt="" />
                    <p className="font-semibold text-[.8rem] sm:text-[1rem] text-center w-[70%]">
                      {items.desc}
                    </p>
                  </div>
                  <p className="font-semibold text-sm sm:text-[1rem]">
                    {items.price}
                  </p>
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
        <div className="basis-1/2 p-2 sm:py-4 sm:px-8 rounded-xl">
          <h2 className="font-semibold text-[1.2rem] my-4">Payment</h2>
          <ul className="flex flex-row gap-4 sm:gap-6 border-b border-solid">
            <li
              role="button"
              className={`${
                toggle === 0 ? "border-b-2 border-black" : ""
              } text-sm`}
              onClick={() => updatetoggle(0)}
            >
              Credit&nbsp;Card
            </li>
            <li
              role="button"
              className={toggle === 1 ? "border-b-2 border-black" : ""}
              onClick={() => updatetoggle(1)}
            >
              PayPal
            </li>
            <li
              role="button"
              className={toggle === 2 ? "border-b-2 border-black" : ""}
              onClick={() => updatetoggle(2)}
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

export default Checkout;
