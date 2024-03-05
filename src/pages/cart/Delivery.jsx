import React from "react";
import { BsPencil, BsX, BsPlusCircleFill } from "react-icons/bs";
import "../../styles/Styles.css";

const addressList = [
  {
    id: 1,
    type: "Home",
    street: "06 Ademola Adetokumbo Street",
    address: "06 Ademola Adetukumbo street, Wuse 2, Abuja Nigeria.",
    phone: "+(234) 80-55-0104",
  },
  {
    id: 2,
    type: "Office",
    street: "91 Asokoro Abuja.",
    address: "Federal Mortgage Bank, 91 Asokoro, Abuja.",
    phone: "+(234) 07-55-0127",
  },
];

const Delivery = () => {
  return (
    <main className="p-2 sm:mx-12 my-2">
      <h1 className="font-semibold sm:text-2xl my-4">Select Address</h1>
      <div className="flex flex-col rounded-md border p-3 sm:p-6">
        {addressList.map((address) => {
          return (
            <div
              key={address.id}
              className="flex flex-col sm:flex-row flex-wrap justify-between p-3 sm:p-6 bg-black/10 mb-4 sm:mx-4 rounded"
            >
              <div className="">
                <div className="flex flex-col">
                  <input
                    className="w-3 h-3 mt-3 cursor-pointer self-end sm:self-start"
                    type="radio"
                    name="address"
                    id="address"
                  />
                  <div className="flex flex-col-reverse sm:flex-row gap-2 items-start sm:items-center">
                    <p className="sm:leading-8 text-sm">{address.street}</p>
                    <p className="text-[12px] mt-2 sm:my-0 text-white px-2 py-[0.2rem] rounded-md bg-black/90">
                      {address.type}
                    </p>
                  </div>
                  <p className="sm:leading-8 text-sm">{address.address}</p>
                  <p className="sm:leading-8 text-sm">{address.phone}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end sm:justify-center gap-4">
                <BsPencil
                  className="text-black/90 hover:text-black cursor-pointer rounded-full hover:bg-black/50"
                  aria-label="edit"
                  size={20}
                />
                <BsX
                  className="text-black/90 hover:text-black cursor-pointer rounded-full hover:bg-black/50"
                  size={25}
                  aria-label="delete"
                />
              </div>
            </div>
          );
        })}
        <div className="relative cursor-pointer rounded-lg flex flex-col justify-center items-center p-2 mx-auto m-2 w-full">
          <div className="">
            <BsPlusCircleFill className="" size={30} />
          </div>
          <div className="mt-1">
            <p>Add Address</p>
          </div>
          <div className="absolute border-dashed border-b-2 h-8 -top-[9px] -z-10 w-3/4"></div>
        </div>
      </div>

      <div className="flex justify-center sm:justify-end items-center p-2 gap-4 mx-2 my-8">
        <button className="border py-1 px-3 rounded cursor-pointer transition duration-300 hover:bg-black hover:text-white">
          Back
        </button>
        <button className="border py-1 px-3 rounded cursor-pointer transition duration-300  bg-black text-white hover:bg-white hover:text-black">
          Next
        </button>
      </div>
    </main>
  );
};

export default Delivery;
