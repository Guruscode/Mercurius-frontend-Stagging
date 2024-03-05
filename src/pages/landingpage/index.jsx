import  { React, useState, useEffect }  from "react";
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
import Loader from "../../components/molecules/Loader"
export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Assume you have some asynchronous operation here (e.g., fetching data)
    // For demo purposes, we'll simulate a delay with setTimeout
    const delay = setTimeout(() => {
      setLoading(false); // Once data is loaded, set loading to false
      clearTimeout(delay);
    }, 2000); // Simulated 2-second delay
  }, []);


  if (loading) {
    return <Loader />;
  }
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
