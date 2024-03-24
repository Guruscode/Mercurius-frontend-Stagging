import { useState, useEffect } from "react";
import Accordion from "../product-listing/Accordion";
import { Selling } from "../../components/molecules/Selling";
import Loader from "../../components/molecules/Loader";
import { getProducts } from "../../api/Axios";
import { useParams } from "react-router-dom";

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
      <div className="mx-6 md:mx-12 flex flex-row md:gap-x-4 my-8 scrollbar-hide">
        <div className="md:w-1/4">
          <Accordion />
        </div>
        <div className="w-full md:w-3/4">
          <h1>Product</h1>
          <Selling products={products} />
        </div>
      </div>
    </>
  );
};
