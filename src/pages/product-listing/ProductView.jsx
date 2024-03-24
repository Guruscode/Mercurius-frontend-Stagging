import React, { useState } from "react";
import Model from "../../assets/images/img3.png";
import "../../styles/Styles.css";
import { Link } from "react-router-dom";
import {
  BsStar,
  BsPlus,
  BsDash,
  BsCart3,
  BsChevronRight,
} from "react-icons/bs";

export const ProductView = ({ product }) => {
  const [counter, setCounter] = useState(0);
  console.log(product);
  return (
    <div className="p-2 md:mx-12">
      <div className="flex flex-col md:flex-row bg-white/70">
        {/* Product */}
        <div className="w-full md:w-[45%] flex flex-col-reverse md:flex-row justify-start items-center sm:gap-3">
          <div className="w-fit flex flex-row md:flex-col justify-center sm:justify-start gap-3 p-2 sm:min-h-[85%]">
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                className="rounded sm:rounded-l-md border-gray w-1/12 sm:w-20 cursor-pointer"
                src={product?.image}
                alt="/"
              />
            ))}
          </div>

          <div className="w-full flex justify-center items-center h-[85%] sm:px-2">
            <img
              className="max-w-full max-h-full lg:max-h-[400px]"
              src={product?.image}
              alt="/"
            />
          </div>
        </div>
        {/* Pricing */}
        <div className="w-full md:w-[54%] sm:p-2 text-sm">
          <div className="sm:mt-4">
            <h3 className="text-2xl sm:text-4xl font-semibold mb-2">
              {product?.title}
            </h3>
            {<p className="text-[#333]">Brand: Nike</p>}
            <p className="flex items-center gap-x-1 text-[#333]">
              Rating:
              <span className="flex ">
                <BsStar />
              </span>
              <span className="text-[.75rem] text-slate-400">
                {product?.rating?.rate}
              </span>
            </p>
            <p className="text-[.75rem] text-slate-400">
              {product?.rating?.count}+ sold
            </p>
          </div>
          <hr className="w-full" />
          <div className="pricing my-3">
            <p className="text-3xl font-bold">
              ${product?.price}{" "}
              {product && (
                <span className="font-light line-through text-[1.3rem] text-slate-400">
                  ${product.price * 1.25}{" "}
                  {/* Manipulate the slash price based on the actual price */}
                </span>
              )}
            </p>
            <p className="text-[#333] text-sm">+$2.00 delivery fee to Lagos</p>
          </div>

          <div className="w-fit my-3">
            <p className="text-slate-600 font-semibold">Choose a Color</p>
            <div className="flex flex-row justify-between items-center gap-4">
              <div className="w-6 h-6 cursor-pointer bg-[#ECDECC] rounded-full"></div>
              <div className="w-6 h-6 cursor-pointer bg-[#00003C] rounded-full"></div>
              <div className="w-6 h-6 cursor-pointer bg-[#BBC1F8] rounded-full"></div>
              <div className="w-6 h-6 cursor-pointer bg-[#FFD3F8] rounded-full"></div>
            </div>
          </div>

          <div className="my-3 ">
            <p className="text-slate-600 font-semibold">Choose a Size</p>
            <div className="w-fit flex flex-row justify-between items-center gap-2 text-[.7rem]">
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="sm"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="sm"
                />{" "}
                SM
              </label>
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="md"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="md"
                />{" "}
                M
              </label>
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="lg"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="lg"
                />{" "}
                L
              </label>
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="xl"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="xl"
                />{" "}
                XL
              </label>
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="xxl"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="xxl"
                />{" "}
                XXL
              </label>
            </div>
          </div>

          <div className="w-fit sm:1/6 text-slate-500 my-3">
            <p className="text-slate-600 font-semibold">Choose Quantity</p>

            <p className="flex flex-row justify-between items-center border rounded-md w-full h-8">
              <BsDash
                className="bg-slate-200 h-full w-fit cursor-pointer"
                onClick={() => setCounter(counter - 1)}
                size="25"
              />
              {counter}
              <BsPlus
                className="bg-slate-200 h-full w-fit cursor-pointer"
                onClick={() => setCounter(counter + 1)}
                size="25"
              />
            </p>
          </div>
          <hr className="w-full" />
          <div className="max-w-[200px] mx-auto">
            <button className="flex justify-center items-center gap-2 text-sm sm:text-[1.2rem] bg-black py-2 px-4 text-white w-full sm:w-[100%] my-4 rounded hover:bg-black/80 transition">
              <BsCart3 className="" size={25} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDescription = ({ product }) => {
  return (
    <div className="px-1 sm:mx-12 my-4 rounded">
      <div className="w-full md:w-2/3">
        <Link to="/productDesc">
          <div className="flex flex-row flex-nowrap items-center justify-between">
            <h3 className="font-semibold py-2">Product Description</h3>
            <BsChevronRight />
          </div>
        </Link>
        <hr />
        <div className="w-full md:w-2/3">
          <p className="p-2 text-justify text-sm">{product?.description}</p>
        </div>
      </div>
    </div>
  );
};
