import React from "react";
import { BsArrowRight, BsCart3, BsStackOverflow } from "react-icons/bs";

const OrderSummary = () => {
  return (
    <div className="border sm:basis-[45%] p-2 sm:py-4 sm:px-2 lg:px-8 rounded">
      <h2 className="font-semibold text-sm sm:text-[1.2rem] mb-4">
        Order Summary
      </h2>
      <form className="text-sm sm:text-[1rem]">
        <div className="flex flex-col my-4">
          <label className="text-black/70" htmlFor="discount_code">
            Discount code / Promo Code
          </label>
          <input
            className="border outline-none rounded-lg px-4 py-3 w-full"
            type="text"
            name="discountCode"
            id="discount_code"
            placeholder="Code"
          />
        </div>
        <div className="flex flex-col my-4 relative">
          <label className="text-black/70" htmlFor="bonus_card_number">
            Your bonus card number
          </label>
          <input
            className="border outline-none rounded-lg px-4 py-3 pr-20 w-full"
            type="text"
            name="cardNumber"
            id="bonus_card_number"
            placeholder="Enter Card Number"
          />
          <button className="w-fit py-0.5 px-4 rounded-xl absolute bottom-[0.6rem] right-2 border border-black/60 hover:bg-black/70 hover:text-white bg-black text-white transition duration-300 text-sm">
            Apply
          </button>
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
        <div className="flex flex-col ">
          <button className="flex flex-row justify-center items-center gap-x-8 p-2 border w-full my-2 rounded-md bg-black text-white hover:text-white hover:bg-black/80 transition duration-300">
            <BsCart3 size={20} /> Checkout <BsArrowRight size={20} />
          </button>
          <button className="flex flex-row justify-center items-center gap-x-8 p-2 border w-full my-2 rounded-md hover:bg-black/80 hover:text-white text-black bg-transparent">
            <BsStackOverflow size={20} /> Stockpile <BsArrowRight size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderSummary;
