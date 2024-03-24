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
  {
    id: 1,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Apparel1,
    product: "Blouse",
  },
  {
    id: 2,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Apparel2,
    product: "Coat",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Apparel3,
    product: "Suits",
  },
  {
    id: 4,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Apparel4,
    product: "Jeans",
  },
  {
    id: 5,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Apparel5,
    product: "Trouser",
  },
  {
    id: 6,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Sale,
    product: "Sport light",
  },
  {
    id: 7,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Flash,
    product: "Flash sale",
  },
  {
    id: 8,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Sale,
    product: "Sport light",
  },
  {
    id: 9,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Sale,
    product: "Sport light",
  },
  {
    id: 10,
    name: "HP Spectre x360",
    title: "Laptop  Intel Core i7, 512GB SSD",
    src: Apparel2,
    product: "Coat",
  },
];

const Sales = () => {
  return (
    <div className="my-4 p-2 sm:px-12">
      <div className="relative w-full rounded text-center">
        <img className="w-full h-full -z-10" src={Sale} alt="Promo sales" />
        <div className="absolute top-0 z-10 w-full flex items-center justify-center">
          <p className="w-1/2 sm:w-1/4 rounded-[100%] bg-red-600 mt-2 sm:mt-12 flex justify-center items-center font-serif font-bold sm:text-2xl text-white py-2 md:py-4 px-5">
            Mega&nbsp;Sales
          </p>
        </div>
      </div>
      <div className="my-4">
        <p className="font-semibold text-[1.2rem]">Category Offers</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
          {apparel?.map((item) => {
            return (
              <figure
                key={item.id}
                className="relative rounded-t bg-white/80 w-full min-h-[150px]"
              >
                <p className="absolute w-fit p-2 bg-red-800 text-white text-sm">
                  Tops
                </p>
                <img
                  className="max-h-[120px] block mx-auto p-2"
                  src={item.src}
                  alt="/"
                />
                <figcaption className="absolute bottom-0 w-full bg-[#00003C] text-white p-2 text-center">
                  <p className="font-semibold text-sm">Up to 50% Off</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
      <div className="my-4">
        <p className="font-semibold text-[1.2rem]">Special Offers</p>
        <div className="relative aspect-[16/7]">
          <img
            className="absolute w-full top-0 -z-10"
            src={Flash}
            alt="flash sale banner"
          />
          <div className="flex justify-end items-end sm:items-center md:items-start">
            <CountDown />
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="font-semibold text-[1.2rem]">Flash Sales</p>
        <Selling products={apparel} />
      </div>
    </div>
  );
};

export default Sales;
