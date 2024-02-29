import React from "react";

import Apparel1 from "../../assets/images/Blouse.png";
import Apparel2 from "../../assets/images/Coat.png";
import Apparel3 from "../../assets/images/Suit.png";
import Apparel4 from "../../assets/images/Jeans.png";
import Apparel5 from "../../assets/images/Trouser.png";
import Sale from "../../assets/images/sales.png";
import Flash from "../../assets/images/flash.png";
import CountDown from "../../components/molecules/CountDown";
import { Selling } from "../../components/molecules/Selling";

const apparel = [
  { id: 1, src: Apparel1, product: "Blouse" },
  { id: 2, src: Apparel2, product: "Coat" },
  { id: 3, src: Apparel3, product: "Suits" },
  { id: 4, src: Apparel4, product: "Jeans" },
  { id: 5, src: Apparel5, product: "Trouser" },
];

const Sales = () => {
  return (
    <div className="my-4 p-2 sm:px-12">
      <div
        className="w-full min-h-[150px] sm:min-h-[500px] rounded flex justify-center my-4"
        style={{
          background: `url(${Sale})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="w-2/4 sm:w-1/5 max-h-[40px] sm:max-h-[100px] rounded-[100%] bg-red-600 mt-2 sm:mt-12 flex justify-center items-center font-serif font-bold sm:text-2xl text-white">
          Mega Sales
        </p>
      </div>
      <div className="my-4">
        <p className="font-semibold text-[1.2rem]">Category Offers</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
          {apparel.map((item) => {
            return (
              <figure className="relative rounded-t bg-gray-400/20 w-full">
                <p className="p-2">Tops</p>
                <img
                  className="max-h-[120px] block mx-auto p-2"
                  src={item.src}
                  alt="/"
                />
                <figure className="bg-[#00003C] text-white p-2 text-center">
                  <p className="font-semibold">Up to 50% Off</p>
                </figure>
              </figure>
            );
          })}
        </div>
      </div>
      <div className="my-4">
        <p className="font-semibold text-[1.2rem]">Special Offers</p>
        <div
          className="w-full min-h-[120px] sm:min-h-[500px] rounded flex justify-end items-end sm:items-center md:items-start"
          style={{
            background: `url(${Flash})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CountDown />
        </div>
      </div>
      <div className="my-4">
        <p className="font-semibold text-[1.2rem]">Flash Sales</p>
        <Selling />
      </div>
    </div>
  );
};

export default Sales;
