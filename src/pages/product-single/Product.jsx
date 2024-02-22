import { useState, useEffect } from "react";
import Accordion from "../product-listing/Accordion";
import Footer from "../../components/molecules/Footers";
import Header from "../../components/molecules/Header";
import { Selling } from "../../components/molecules/Selling";
export const Product = function () {
  const[products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
     
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
  };
  console.log(products);
  return (
    <>
      <Header />
      <div className="px-2 sm:px-12 flex flex-row gap-x-4 mt-12 scrollbar-hide">
        <Accordion />
        <Selling products={products}/>
      </div>
      <Footer />
    </>
  );
};
