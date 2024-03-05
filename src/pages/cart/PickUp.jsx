import React from "react";
import "../../styles/Styles.css";

const PickUp = () => {
  return (
    <div className="p-2 sm:mx-12 mb-4">
      <h1 className="font-semibold sm:text-2xl">Shipment Method</h1>
      <form className="text-slate-500">
        <div className="my-4 flex flex-row flex-nowrap items-center justify-between gap-2 sm:gap-4 border-2 rounded-lg p-2 sm:p-4">
          <div className="px-2 min-w-[100px] sm:min-w-[140px] flex flex-row flex-nowrap gap-2 sm:gap-4 items-center">
            <input
              className="w-3 h-3 cursor-pointer"
              type="radio"
              name="pickUp"
              id="pickUp"
            />
            <p className="text-left">Free</p>
          </div>
          <div className="w-full text-sm flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between ">
            <p>Pick-up</p>
            <div>11 Oct, 2024</div>
          </div>
        </div>

        <div className="my-4 flex flex-row flex-nowrap items-center justify-between gap-2 sm:gap-4 border-2 rounded-lg p-3 sm:p-4">
          <div className="px-2 min-w-[100px] sm:min-w-[140px] flex flex-row flex-nowrap gap-2 sm:gap-4 items-center">
            <input
              className="w-3 h-3 cursor-pointer"
              type="radio"
              name="pickUp"
              id="pickUp"
            />
            <p className="text-left">Regular</p>
          </div>
          <div className="w-full text-sm flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between">
            <p>Delivery</p>
            <div>14 Oct, 2024</div>
          </div>
        </div>

        <div className="my-4 flex flex-row flex-nowrap items-center justify-between gap-2 sm:gap-4 border-2 rounded-lg p-3 sm:p-4">
          <div className="px-2 min-w-[100px] sm:min-w-[140px] flex flex-row flex-nowrap gap-2 sm:gap-4 items-center">
            <input
              className="w-3 h-3 cursor-pointer"
              type="radio"
              name="pickUp"
              id="pickUp"
            />
            <p className="text-left2">$8.50</p>
          </div>
          <div className="w-full text-sm flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between">
            <p>Schedule Urgent delivery</p>
            <div>14 Oct, 2024</div>
          </div>
        </div>

        <div className="my-4 flex flex-row flex-nowrap items-center justify-between gap-2 sm:gap-4 border-2 rounded-lg p-3 sm:p-4">
          <div className="px-2 min-w-[100px] sm:min-w-[140px] flex flex-row flex-nowrap gap-2 sm:gap-4 items-center">
            <input
              className="w-3 h-3 cursor-pointer"
              type="radio"
              name="pickUp"
              id="pickUp"
            />
            <p className="text-left">Schedule</p>
          </div>
          <div className="w-full text-sm flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between text-center">
            <p>Pick any delivery date</p>
            <input type="date" name="" id="" />
          </div>
        </div>
      </form>

      <div className="flex justify-center sm:justify-end items-center p-2 gap-4 mx-2 my-8">
        <button className="border py-1 px-3 rounded cursor-pointer transition duration-300 hover:bg-black hover:text-white">
          Back
        </button>
        <button className="border py-1 px-3 rounded cursor-pointer transition duration-300  bg-black text-white hover:bg-white hover:text-black">
          Next
        </button>
      </div>
    </div>
  );
};

export default PickUp;
