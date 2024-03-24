import React from "react";
// Apparels
import Apparel1 from "../../assets/images/Blouse.png";
import Apparel2 from "../../assets/images/Coat.png";
import Apparel3 from "../../assets/images/Suit.png";
import Apparel4 from "../../assets/images/Jeans.png";
import Apparel5 from "../../assets/images/Trouser.png";
// Brands
import Brand1 from "../../assets/images/Huawei.png";
import Brand2 from "../../assets/images/Sony.png";
import Brand3 from "../../assets/images/Hewlett.png";
import Brand4 from "../../assets/images/Puma.png";
import Brand5 from "../../assets/images/PlayStation.png";
import Brand6 from "../../assets/images/iPhoneLogo.png";
import Brand7 from "../../assets/images/Ssung.png";
import Brand8 from "../../assets/images/Reebok.png";
import Brand9 from "../../assets/images/Adidas.png";
import Brand10 from "../../assets/images/Zara.png";
import Brand11 from "../../assets/images/Dell.png";
import Brand12 from "../../assets/images/Nike.png";
const brands = [
  {
    id: 1,
    src: Brand1,
    category: "gadget",
  },
  {
    id: 2,
    src: Brand2,
    category: "gadget",
  },
  {
    id: 3,
    src: Brand3,
    category: "gadget",
  },
  {
    id: 4,
    src: Brand4,
    category: "clothing",
  },
  {
    id: 5,
    src: Brand5,
    category: "gadget",
  },
  {
    id: 6,
    src: Brand6,
    category: "gadget",
  },
  {
    id: 7,
    src: Brand7,
    category: "gadget",
  },
  {
    id: 8,
    src: Brand8,
    category: "clothing",
  },
  {
    id: 9,
    src: Brand9,
    category: "clothing",
  },
  {
    id: 10,
    src: Brand10,
    category: "clothing",
  },
  {
    id: 11,
    src: Brand11,
    category: "gadget",
  },
  {
    id: 12,
    src: Brand12,
    category: "clothing",
  },
];
const apparel = [
  { id: 1, src: Apparel1, product: "Blouse" },
  { id: 2, src: Apparel2, product: "Coat" },
  { id: 3, src: Apparel3, product: "Suits" },
  { id: 4, src: Apparel4, product: "Jeans" },
  { id: 5, src: Apparel5, product: "Trouser" },
];
const Apparels = () => {
  return (
    <div className="px-2 py-3 sm:px-12">
      <div className="main_content">
        <div className="my-4 grid">
          <h2 className="font-semibold text-[1.2rem] my-4">Men</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {apparel?.map((item) => {
              return (
                <div className="text-center flex flex-col items-center justify-center">
                  <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                    <img className="" src={item.src} alt="/" />
                  </figure>
                  <p className="text-[1.1rem]">{item.product}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-4 grid">
          <h2 className="font-semibold text-[1.2rem] my-4">Women</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center">
            {apparel?.map((item) => {
              return (
                <div className="text-center flex flex-col items-center justify-center">
                  <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                    <img className="" src={item.src} alt="/" />
                  </figure>
                  <p className="text-[1.1rem]">{item.product}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-4 grid">
          <h2 className="font-semibold text-[1.2rem] my-4">Kids</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center">
            {apparel?.map((item) => {
              return (
                <div className="text-center flex flex-col items-center justify-center">
                  <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                    <img className="" src={item.src} alt="/" />
                  </figure>
                  <p className="text-[1.1rem]">{item.product}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="brands">
        <h2 className="font-semibold text-[1.2rem] my-4">Shop by Brand</h2>
        <div className="my-4 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4">
          {brands
            .filter((items) => items.category === "clothing")
            .map((items) => {
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

export default Apparels;
