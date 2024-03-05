import React from "react";

import { ProductView, ProductDescription } from "./ProductView";
import { Review } from "../product-single/Review";
import Header from "../../components/molecules/Header";
import { BestSelling } from "../../components/molecules/Selling";
import Footer from "../../components/molecules/Footers";

export default function ProductIndex() {
  return (
    <>
      <Header />
      <ProductView />
      <ProductDescription />
      <Review />
      <BestSelling />
      <Footer />
    </>
  );
}
