import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

//Main Screens
import App from "./App.jsx";
import Index from "./pages/landingpage/index.jsx";
import NewIndex from "./pages/newIn/NewIndex.jsx";
import ApparelIndex from "./pages/apparel/ApparelIndex.jsx";
import AccessoriesIndex from "./pages/accessories/AccessoriesIndex.jsx";
import BrandIndex from "./pages/brands/BrandsIndex.jsx";
import GadgetIndex from "./pages/gadgets/GadgetIndex.jsx";
import SalesIndex from "./pages/sales/SalesIndex.jsx";
import CartIndex from "./pages/cart/CartIndex";
import ProductIndex from "./pages/product-listing/ProductIndex.jsx";
import { Product } from "./pages/product-single/Product.jsx";

//Auth Screens
// import SignIn from "./pages/auth/Signin.jsx";
// import SignUp from "./pages/auth/Signup.jsx";
// import ResetPassword from "./pages/auth/ResetPassword.jsx";
// import CreatePassword from "./pages/auth/CreatePassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Page not found</div>,
    children: [
      { path: "/", element: <Index /> },
      { path: "/new", element: <NewIndex /> },
      { path: "/apparel", element: <ApparelIndex /> },
      { path: "/accessories", element: <AccessoriesIndex /> },
      { path: "/brands", element: <BrandIndex /> },
      { path: "/gadgets", element: <GadgetIndex /> },
      { path: "/sales", element: <SalesIndex /> },
      { path: "/cart", element: <CartIndex /> },
      { path: "/product-view", element: <ProductIndex /> },
      { path: "/product", element: <Product /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
