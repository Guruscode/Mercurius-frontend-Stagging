import React from "react";
import { brands } from "../../db_local/store";
const AllBrands = () => {
  return (
    <div className="my-4 mx-6 md:mx-12">
      <h2 className="font-semibold text-[1.2rem] my-4">Brands</h2>
      <div className="grid grid-rows-3 grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {brands?.map((items) => {
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
  );
};

export default AllBrands;
