import React from "react";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

import Accessories from "../../assets/images/accessories.png";
import Ipad from "../../assets/images/ipad.png";
import Samsung from "../../assets/images/samsung.png";
import Macbook from "../../assets/images/macbook.png";
import Laptop from "../../assets/images/laptops.png";
import Watch from "../../assets/images/watches.png";

export const Selling = function ({ products }) {
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-[repeat(3,minmax(0,300px))] md:grid-cols-[repeat(5,minmax(0,300px))] gap-2">
        {products?.map((product, i) => {
          return (
            <Link to={`/product-view/${product.id}`}>
              <div key={product.id} className="w-full">
                <div
                  key={i}
                  className="relative p-4 bg-[#f6f6f6] w-full min-h-[100%] flex flex-col items-center justify-center"
                >
                  <BsHeart className="w-4 h-4 self-end cursor-pointer text-black/40" />
                  <img
                    className=" min-w-[100px] max-w-[120px] min-h-[100px] max-h-[100px] my-4"
                    src={product.src || product.image}
                    alt="product "
                  />
                  <p className="w-[80%] text-center text-sm">{product.name}</p>
                  <p className="text-sm font-semibold">{`$${product.price}`}</p>
                  <p className="text-sm font-semibold">
                    {product?.color || product?.title?.slice}
                  </p>
                  <button className="relative -bottom-2 text-sm text-white bg-[#1b1b1b] hover:bg-[#1e1e1ebb]/70 p-2 mt-2 rounded-md">
                    Add&nbsp;to&nbsp;Cart
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const BestSelling = function ({ products }) {
  return (
    <div className="mx-6 md:mx-12 my-4">
      <div className="flex flex-row justify-start">
        <h3 className="text-[1.1rem] font-semibold">Best Selling</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {products?.map((product, i) => {
          return (
            <div
              key={i}
              className="w-full p-4 bg-[#f6f6f6] flex flex-col items-center justify-center"
            >
              <BsHeart className="w-4 h-4 self-end cursor-pointer text-black/40" />
              <img className="w-[50%] my-4" src={product.src} alt="" />
              <p className="w-[80%] text-center text-sm">{product.name}</p>
              <p className="text-sm font-semibold">{product.price}</p>
              <button className="text-sm text-white bg-[#1e1e1e] hover:bg-[#1e1e1ebb]/70 p-2 mt-2 rounded-md">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Gadget = function () {
  return (
    <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
      <div className="w-full flex flex-col sm:flex-row md:flex-col bg-[#fff]">
        <img className="w-[80%]" src={Accessories} alt="" />
        <div className="w-[80%] p-4 mx-auto sm:mt-10">
          <h3 className="text-2xl my-2">Popular Products</h3>
          <p className="text-sm">
            Explore a realm where innovation meets design, providing a perfect
            fusion of style, functionality, and performance across popular
            categories.
          </p>
          <button className="border hover:bg-black/90 hover:text-white transition border-[#333] p-3 my-5 rounded-lg w-[90%]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row-reverse md:flex-col bg-[#f9f9f9]">
        <img className="w-[80%] self-end" src={Ipad} alt="" />
        <div className="w-[80%] p-4 mx-auto my-5">
          <h3 className="text-2xl my-2">Brands</h3>
          <p className="text-sm">
            Embark on a journey where cutting-edge technology seamlessly
            intertwines with refined elegance, transforming every task into a
            delightful experience.
          </p>
          <button className="border border-[#333] hover:bg-black/90 transition hover:text-white p-3 my-5 rounded-lg w-[90%]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row md:flex-col bg-[#eaeaea]">
        <img className="w-[80%]" src={Samsung} alt="" />
        <div className="w-[80%] p-4 mx-auto my-5">
          <h3 className="text-2xl my-2">Phones</h3>
          <p className="text-sm">
            Effortlessly multitask and navigate with unparalleled ease as phones
            redefine mobile innovation, setting new standards for a seamless
            user experience.
          </p>
          <button className="border border-[#333] hover:bg-black/90 transition hover:text-white p-3 my-5 rounded-lg w-[90%]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row-reverse md:flex-col bg-[#1F2A37] text-[#eaeaea]">
        <img className="w-[80%] self-end" src={Macbook} alt="" />
        <div className="w-[80%] p-4 mx-auto mt-10">
          <h3 className="text-2xl my-2">Computers</h3>
          <p className="text-sm">
            Embark on a new computing era with computers—blending form,
            performance, and user-friendly innovation seamlessly for an
            unparalleled experience.
          </p>
          <button className="border border-[#eaeaea] hover:bg-white/90 transition hover:text-black p-3 my-5 rounded-lg w-[90%]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export const BigSale = function () {
  return (
    <div className="relative bg-gradient-to-r from-[#222832] to-[#111928] flex justify-center items-center min-h-[450px] max-h-[500px]">
      <img
        className="w-[50%] sm:w-[30%] lg:w-fit absolute left-0 top-0"
        src={Laptop}
        alt=""
      />
      <img
        className="w-[50%] sm:w-[30%] lg:w-fit absolute right-0 bottom-0"
        src={Watch}
        alt=""
      />
      <div className="text-center text-white/50">
        <h3 className="text-2xl  sm:text-4xl md:text-7xl font-light my-3">
          Big Gadget <span className="font-bold text-white">Sale</span>
        </h3>
        <p className="text-sm w-2/3 sm:w-full mx-auto">
          Dive into the Hottest Deals of the Season in Our Big Summer Sale!
        </p>
        <button className="my-4 border border-white/50 hover:text-[#111928] hover:bg-white/90 p-3 rounded-lg w-[50%] transition duration-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};
