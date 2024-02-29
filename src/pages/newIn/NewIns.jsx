import React from "react";
import Apparel1 from "../../assets/images/Blouse.png";
import Apparel2 from "../../assets/images/Coat.png";
import Apparel3 from "../../assets/images/Suit.png";
import Apparel4 from "../../assets/images/Jeans.png";
import Apparel5 from "../../assets/images/Trouser.png";

// import Accordion from "../product-listing/Accordion";
import { Selling } from "../../components/molecules/Selling";

const apparel = [
  { id: 1, src: Apparel1, product: "Blouse" },
  { id: 2, src: Apparel2, product: "Coat" },
  { id: 3, src: Apparel3, product: "Suits" },
  { id: 4, src: Apparel4, product: "Jeans" },
  { id: 5, src: Apparel5, product: "Trouser" },
];

const NewIns = () => {
  return (
    <div className="px-2 py-3 sm:px-12">
      <h2 className="font-semibold text-[1.2rem] my-4">Shop by Category</h2>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 justify-center items-center">
          {apparel.map((item) => {
            return (
              <div
                key={item.id}
                className="text-center flex flex-col items-center justify-center"
              >
                <figure className="w-1/2 sm:min-w-[160px] sm:min-h-[160px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                  <img className="" src={item.src} alt="/" />
                </figure>
                <p className="text-[1.1rem]">{item.product}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row flex-nowrap gap-6 mt-8">
          {/* <Accordion /> */}
          <Selling />
        </div>
      </div>
    </div>
  );
};

export default NewIns;
