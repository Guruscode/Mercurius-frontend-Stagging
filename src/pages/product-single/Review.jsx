import React, { useState } from "react";
import { BsStar, BsChevronDown } from "react-icons/bs";
import Img1 from "../../assets/images/pro1.png";
import Img2 from "../../assets/images/pro2.png";
import Img3 from "../../assets/images/pro3.png";
import Img4 from "../../assets/images/pro4.png";

const DATA = [
  {
    id: 1,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img1,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 2,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img2,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 3,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img3,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 4,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img4,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 1,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img1,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 2,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img2,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 3,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img3,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 4,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img4,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
];

export const Review = () => {
  const [reviews, setReviews] = useState(3);

  const handleReviews = () => {
    setReviews(reviews + 3);
  };
  return (
    <div className="px-1 md:mx-12 mt-4 mb-24">
      <h3 className="text-[1.1rem] font-semibold">Reviews</h3>
      <div className="relative w-full md:w-2/3">
        <div className="review_bar my-4 p-3 max-h-[60vh] overflow-y-auto bg-gradient-to-b from-white from-[65%]  via-transparent to-[#33333370]">
          {DATA.slice(0, reviews).map((product) => {
            return (
              <div key={product.id} className="flex gap-x-4 mb-6">
                <img
                  className="w-14 h-14 rounded-full"
                  src={product.img}
                  alt="/"
                />
                <div className="text-[#333]">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold">{product.name}</h4>
                    <p className="text-sm text-slate-400">{product.date}</p>
                  </div>
                  <div className="flex">
                    <BsStar />
                  </div>
                  <p className="leading-5 mt-1 text-sm">{product.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {reviews < DATA.length && (
          <div className="min-w-[200px] max-w-[300px] mx-auto">
            <button
              onClick={handleReviews}
              className="flex flex-row gap-x-3 items-center justify-center py-1 px-2 text-center bg-transparent w-full border border-black/70 rounded"
            >
              View More <BsChevronDown />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
