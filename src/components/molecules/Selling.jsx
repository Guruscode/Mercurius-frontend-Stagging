import React from "react";
// import { Link } from "react-router-dom";

// import Img1 from "../../assets/images/pro1.png";
// import Img2 from "../../assets/images/pro2.png";
// import Img3 from "../../assets/images/pro3.png";
// import Img4 from "../../assets/images/pro4.png";
// import Img5 from "../../assets/images/pro5.png";
// import Img6 from "../../assets/images/pro6.png";
// import Img7 from "../../assets/images/pro7.png";
// import Img8 from "../../assets/images/pro8.png";
import Img9 from "../../assets/images/pro9.png";
import Img10 from "../../assets/images/pro10.png";
import Img11 from "../../assets/images/pro11.png";
import Img12 from "../../assets/images/pro12.png";

// Single Images
import Accessories from "../../assets/images/accessories.png";
import Ipad from "../../assets/images/ipad.png";
import Samsung from "../../assets/images/samsung.png";
import Macbook from "../../assets/images/macbook.png";
import Laptop from "../../assets/images/laptops.png";
import Watch from "../../assets/images/watches.png";
import { BsHeart } from "react-icons/bs";

// const contents = [
//   {
//     id: 1,
//     img: Img1,
//     name: "Apple iPhone 14 Pro Max",
//     details: "128GB Deep Purple (MQ9T3RX/A)",
//     price: "$900",
//   },
//   {
//     id: 2,
//     img: Img2,
//     name: "Apple iPhone 14 Pro Max",
//     details: "128GB Deep Purple (MQ9T3RX/A)",
//     price: "$900",
//   },
//   {
//     id: 3,
//     img: Img3,
//     name: "Apple iPhone 14 Pro Max",
//     details: "128GB Deep Purple (MQ9T3RX/A)",
//     price: "$900",
//   },
//   {
//     id: 4,
//     img: Img4,
//     name: "Apple iPhone 14 Pro Max",
//     details: "128GB Deep Purple (MQ9T3RX/A)",
//     price: "$900",
//   },
//   {
//     id: 5,
//     img: Img5,
//     name: "Apple iPhone 14 Pro Max",
//     details: "128GB Deep Purple (MQ9T3RX/A)",
//     price: "$900",
//   },
//   {
//     id: 6,
//     img: Img6,
//     name: "Apple iPhone 14 Pro Max",
//     details: "128GB Deep Purple (MQ9T3RX/A)",
//     price: "$900",
//   },
//   {
//     id: 7,
//     img: Img7,
//     name: "Apple iPhone 14 Pro Max",
//     details: "128GB Deep Purple (MQ9T3RX/A)",
//     price: "$900",
//   },
//   {
//     id: 8,
//     img: Img8,
//     name: "Apple iPhone 14 Pro Max",
//     details: "128GB Deep Purple (MQ9T3RX/A)",
//     price: "$900",
//   },
// ];
const bests = [
  {
    id: 9,
    img: Img9,
    name: "Apple iPhone 14 Pro Max",
    details: "128GB Deep Purple (MQ9T3RX/A)",
    price: "$900",
  },
  {
    id: 10,
    img: Img10,
    name: "Apple iPhone 14 Pro Max",
    details: "128GB Deep Purple (MQ9T3RX/A)",
    price: "$900",
  },
  {
    id: 11,
    img: Img11,
    name: "Apple iPhone 14 Pro Max",
    details: "128GB Deep Purple (MQ9T3RX/A)",
    price: "$900",
  },
  {
    id: 12,
    img: Img12,
    name: "Apple iPhone 14 Pro Max",
    details: "128GB Deep Purple (MQ9T3RX/A)",
    price: "$900",
  },
];
export const Selling = function ({ products }) {
  console.log(products);
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-[repeat(3,minmax(0,300px))] md:grid-cols-[repeat(5,minmax(0,300px))] gap-2">
        {products?.map((product, i) => {
          return (
            // <Link to="/product-view">
            <div key={product.id} className="w-full">
              <div
                key={i}
                className="p-4 bg-[#f6f6f6] w-full flex flex-col items-center justify-center"
              >
                <BsHeart className="w-4 h-4 self-end cursor-pointer text-black/40" />
                <img className=" max-h-[120px] my-4" src={product.src} alt="" />
                <p className="w-[80%] text-center text-sm">{product.name}</p>
                <p className="text-sm font-semibold">{product.price}</p>
                <p className="text-sm font-semibold">{product.color}</p>
                <button className="text-sm text-white bg-[#1b1b1b] hover:bg-[#1e1e1ebb]/70 p-2 mt-2 rounded-md">
                  Add&nbsp;to&nbsp;Cart
                </button>
              </div>
            </div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
};

export const BestSelling = function () {
  return (
    <div className="mx-2 sm:mx-12 my-4">
      <div className="flex flex-row justify-start">
        <h3 className="text-[1.1rem] font-semibold">Best Selling</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {bests.map((product, i) => {
          return (
            <div
              key={i}
              className="w-full p-4 bg-[#f6f6f6] flex flex-col items-center justify-center"
            >
              <BsHeart className="w-4 h-4 self-end cursor-pointer text-black/40" />
              <img className="w-[50%] my-4" src={product.img} alt="" />
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
