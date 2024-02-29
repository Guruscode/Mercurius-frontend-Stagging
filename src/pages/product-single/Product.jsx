import { useState, useEffect } from "react";
import Accordion from "../product-listing/Accordion";
import Footer from "../../components/molecules/Footers";
import Header from "../../components/molecules/Header";
import { Selling } from "../../components/molecules/Selling";

import Loader from "../../components/molecules/Loader"

import { getProducts } from "../../api/Axios";
export const Product = function () {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
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
