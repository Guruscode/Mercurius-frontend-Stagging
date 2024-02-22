import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Review } from "./pages/product-single/Review";
import CartIndex from "./pages/cart/CartIndex";
import { Product } from "./pages/product-single/Product";

import Index from "./pages/landingpage";
import ProductIndex from "./pages/product-listing/ProductIndex";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import NewIndex from "./pages/newIn/NewIndex";
import ApparelIndex from "./pages/apparel/ApparelIndex";
import AccessoriesIndex from "./pages/accessories/AccessoriesIndex";
import BrandsIndex from "./pages/brands/BrandsIndex";
import GadgetIndex from "./pages/gadgets/GadgetIndex";
import SalesIndex from "./pages/sales/SalesIndex";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/cart" element={<CartIndex />} />
          <Route path="/product" element={<Product />} />
          <Route path="/:id" element={<ProductIndex />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />

          {/* Categories */}
          <Route path="/new" element={<NewIndex />} />
          <Route path="/apparel" element={<ApparelIndex />} />
          <Route path="/accessories" element={<AccessoriesIndex />} />
          <Route path="/brands" element={<BrandsIndex />} />
          <Route path="/gadgets" element={<GadgetIndex />} />
          <Route path="/sales" element={<SalesIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
