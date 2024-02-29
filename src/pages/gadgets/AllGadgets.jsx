import React from "react";
//Gadget Image
import Galaxy from "../../assets/images/Galaxy.png";
import Canon from "../../assets/images/Canon.png";
import Chromebook from "../../assets/images/Chromebook.png";
import Sanyo from "../../assets/images/Sanyo.png";
// Brand Image
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
const gadgets = [
  { id: 1, name: "Phone", img: Galaxy },
  { id: 2, name: "Computer", img: Chromebook },
  { id: 3, name: "Camera", img: Canon },
  { id: 4, name: "TV", img: Sanyo },
];

const AllGadgets = () => {
  return (
    <div className="px-2 py-3 md:px-12">
      <h2 className="font-semibold text-[1.2rem] my-4">Shop by Category</h2>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {gadgets.map((item) => {
            return (
              <div
                key={item.key}
                className="flex flex-col items-center justify-center gap-4"
              >
                <img
                  className="w-1/2 sm:w-fit cursor-pointer hover:scale-110"
                  src={item.img}
                  alt="/"
                />
                <p className="font-semibold">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="brands">
          <h2 className="font-semibold text-[1.2rem] my-4">Shop by Brand</h2>
          <div className="my-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {brands
              .filter((items) => items.category === "gadget")
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
    </div>
  );
};

export default AllGadgets;
