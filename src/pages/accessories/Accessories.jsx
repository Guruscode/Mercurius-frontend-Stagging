import React from "react";
import { Selling } from "../../components/molecules/Selling";
import { apparel, brands, accessories } from "../../db_local/store";

const Accessories = () => {
  return (
    <div className="px-2 py-3 sm:px-12">
      <div className="my-4">
        <h2 className="font-semibold text-[1.2rem] my-4">Shop by category</h2>
        <div className="w-full sm:w-fit mx-auto grid grid-cols-2 sm:grid-cols-[repeat(3,minmax(0,300px))] md:grid-cols-[repeat(auto,minmax(0,200px))] text-center gap-4">
          {apparel?.map((item) => {
            return (
              <div
                key={item.id}
                className=" text-center flex flex-col items-center justify-center"
              >
                <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                  <img className="" src={item.src} alt="/" />
                </figure>
                <p className="text-sm mt-2 mb-4 font-semibold">
                  {item.product}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-4">
        <h2 className="font-semibold text-[1.2rem] my-4">Quick Picks</h2>
        <Selling products={accessories} />
      </div>
      <div className="my-4">
        <h2 className="font-semibold text-[1.2rem] my-4">Shop by brands</h2>
        <div className="my-4 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4">
          {brands
            .filter((items) => items.category === "clothing")?.map((items) => {
              return (
                <div
                  className="mx-auto w-full flex items-center shadow hover:scale-105 cursor-pointer transition"
                  key={items.id}
                >
                  <img className="block mx-auto" src={items.src} alt="/" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
