import React from "react";
import Footer from "../../components/molecules/Footers";
import Header from "../../components/molecules/Header";
import Cart from "./Cart";
// import Delivery from "./Delivery";
// import PickUp from "./PickUp";
// import Checkout from "./Checkout";

export default function CartIndex() {
  return (
    <>
      <Header />
      {/* <Checkout /> */}
      {/* <Delivery /> */}
      {/* <PickUp /> */}
      <Cart />
      <Footer />
    </>
  );
}
