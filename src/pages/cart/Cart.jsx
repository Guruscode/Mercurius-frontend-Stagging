import React from "react";
import OrderSummary from "../product-listing/OrderSummary";
import Image from "../../assets/images/pro6.png";
import { BsPlus, BsDash, BsX } from "react-icons/bs";
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

const Cart = () => {
  return (
    <div className="p-2 md:mx-4 lg:mx-12 mb-4">
      <h2 className="font-semibold text-sm sm:text-[1.2rem] mb-4">
        Shopping Cart
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="sm:basis-[55%] overflow-y-auto max-h-[75vh] cart scrollbar-hide">
          {products?.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row justify-between items-center gap-2 p-2 border-b border-solid"
              >
                <div className="w-full sm:w-fit flex flex-row items-center justify-around gap-x-4 mb-4">
                  <img className="w-14 sm:w-16" src={item.img} alt="/" />
                  <div className="text-center sm:text-left text-sm text-[.9rem]">
                    <p>{item.desc}</p>
                    <p>{item.id}</p>
                  </div>
                </div>
                <div className="w-full sm:w-[50%] flex flex-row-reverse sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center justify-end gap-4 w-32 text-sm text-[.9rem]">
                    <BsDash size={20} />
                    <p className="py-1.5 px-2 border">1</p>
                    <BsPlus size={20} />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold sm:text-[1.2rem]">
                      {item.price}
                    </p>
                    <BsX size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Order Summary */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
