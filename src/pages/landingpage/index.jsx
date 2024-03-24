import { React, useState, useEffect } from "react";
import { Slider, ItemSelling } from "./Hero";
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
import Loader from "../../components/molecules/Loader";
import { getProductsLimited } from "../../api/Axios";

export default function Index() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsLimited();
        setNewArrivals(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  console.log("there, newArrivals", newArrivals);
  return (
    <>
      <Slider autoSlideInterval={1000} autoSlide={true} />
      <ItemSelling />
      <Category />
      <MaleFemaleCategory />
      <div className="my-4 mx-6 md:mx-12">
        <p className="font-semibold text-[1.2rem]">New Arrivals</p>
        <Selling products={newArrivals} />
      </div>
      <BrandsIndex />
      <div className="my-4 mx-6 md:mx-12">
        <Gadget />
      </div>
      <BestSelling products={bests} />
      <BigSale />
    </>
  );
}
