import React, { useState, useEffect } from "react";

import { ProductView, ProductDescription } from "./ProductView";
import { Review } from "../product-single/Review";
import { BestSelling } from "../../components/molecules/Selling";
import Footer from "../../components/molecules/Footers";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/Axios";
import Loader from "../../components/molecules/Loader";


export default function ProductIndex() {
  const { singleProduct } = useParams();
  const [product, setProduct] = useState(null); // State to hold the product
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(singleProduct); // Pass singleProduct to getSingleProduct function
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [singleProduct]); // Execute useEffect whenever singleProduct changes

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {product && (
        <>
          <ProductView product={product} />
          <ProductDescription product={product} />
          <Review productId={singleProduct} />
        </>
      )}
      <BestSelling />

    </>
  );
}
