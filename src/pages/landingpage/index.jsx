import React from "react";
import Header from "../../components/molecules/Header";
import { Slider, ItemSelling } from "./Hero";
import Footer from "../../components/molecules/Footers";

import {
  BestSelling,
  Selling,
  Gadget,
  BigSale,
} from "../../components/molecules/Selling";
import {
  Category,
  MaleFemaleCategory,
} from "../../components/molecules/categories";
import BrandsIndex from "../brands/AllBrands";

export default function Index() {
  return (
    <>
      <Header />
      <Slider autoSlideInterval={1000} autoSlide={true} />
      <ItemSelling />
      <Category />
      <MaleFemaleCategory />
      <div className="p-2 sm:px-12">
        <p className="font-semibold text-[1.2rem]">New Arrivals</p>
        <Selling />
      </div>
      <BrandsIndex />
      <div className=" sm:px-12">
        <Gadget />
      </div>
      <BestSelling />
      <BigSale />
      <Footer />
    </>
  );
}
