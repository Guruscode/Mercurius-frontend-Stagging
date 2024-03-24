import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "../../styles/Styles.css";

export default function Accordion() {
  const [priceOpen, setPriceOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [memoryOpen, setMemoryOpen] = useState(false);
  return (
    <div className="hidden md:block">
      {/* Price */}
      <div className="my-4">
        <button
          onClick={() => setPriceOpen(!priceOpen)}
          className="flex justify-between w-full border-b font-semibold"
        >
          <span className="border-b">Price</span>
          <span>
            <BsChevronDown
              className={`transform origin-center transition duration-300 ease-in-out ${
                priceOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
            priceOpen
              ? "grid-row-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className={brandOpen ? "overflow-auto" : "overflow-hidden"}>
            <form className="flex flex-col my-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <label className="text-[#a7a7a7] text-sm" htmlFor="from">
                    From
                  </label>
                  <input
                    className="border p-1 rounded-md outline-none text-end w-20"
                    type="text"
                    name="from"
                    id="from"
                    placeholder="$000"
                  />
                </div>
                <div className="text-[#a7a7a7] mt-4">—</div>
                <div className="flex flex-col">
                  <label className="text-[#a7a7a7] text-sm" htmlFor="to">
                    To
                  </label>
                  <input
                    className="border p-1 rounded-md outline-none text-end w-20"
                    type="text"
                    name="to"
                    id="to"
                    placeholder="$999"
                  />
                </div>
              </div>
              <input
                className="range_bar mt-8"
                type="range"
                name="range"
                id="priceRange"
                // value={""}
              />
            </form>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="my-4">
        <button
          onClick={() => setBrandOpen(!brandOpen)}
          className="flex justify-between w-full border-b font-semibold"
        >
          <span className="border-b">Brands</span>
          <span>
            <BsChevronDown
              className={`transform origin-center transition duration-300 ease-in-out ${
                brandOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
            brandOpen
              ? "grid-row-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className={brandOpen ? "overflow-auto" : "overflow-hidden"}>
            <form className="flex flex-col my-4">
              <label htmlFor="16">
                <input type="checkbox" name="" id="" />
                &nbsp; Apple
              </label>
              <label htmlFor="32">
                <input type="checkbox" name="" id="" />
                &nbsp; Samsung
              </label>
              <label htmlFor="64">
                <input type="checkbox" name="" id="" />
                &nbsp; Xiaomi
              </label>
              <label htmlFor="128">
                <input type="checkbox" name="" id="" />
                &nbsp; Poco
              </label>
              <label htmlFor="256">
                <input type="checkbox" name="" id="" />
                &nbsp; OPPO
              </label>
              <label htmlFor="512">
                <input type="checkbox" name="" id="" />
                &nbsp; Honor
              </label>
              <label htmlFor="512">
                <input type="checkbox" name="" id="" />
                &nbsp; Motorola
              </label>
              <label htmlFor="512">
                <input type="checkbox" name="" id="" />
                &nbsp; Nokia
              </label>
              <label htmlFor="512">
                <input type="checkbox" name="" id="" />
                &nbsp; ReadMi
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* {Memory} */}
      <div className="my-4">
        <button
          onClick={() => setMemoryOpen(!memoryOpen)}
          className="flex justify-between w-full border-b font-semibold"
        >
          <span className="border-b">Built-in memory</span>
          <span>
            <BsChevronDown
              className={`transform origin-center transition duration-300 ease-in-out ${
                memoryOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
            memoryOpen
              ? "grid-row-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className={memoryOpen ? "overflow-auto" : "overflow-hidden"}>
            <form className="flex flex-col my-4">
              <label htmlFor="16">
                <input type="checkbox" name="" id="" />
                &nbsp; 16GB
              </label>
              <label htmlFor="32">
                <input type="checkbox" name="" id="" />
                &nbsp; 32GB
              </label>
              <label htmlFor="64">
                <input type="checkbox" name="" id="" />
                &nbsp; 64GB
              </label>
              <label htmlFor="128">
                <input type="checkbox" name="" id="" />
                &nbsp; 128GB
              </label>
              <label htmlFor="256">
                <input type="checkbox" name="" id="" />
                &nbsp; 256GB
              </label>
              <label htmlFor="512">
                <input type="checkbox" name="" id="" />
                &nbsp; 512GB
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
