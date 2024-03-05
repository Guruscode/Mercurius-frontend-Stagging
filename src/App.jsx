import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Review } from "./pages/product-single/Review";
import CartIndex from "./pages/cart/CartIndex";
import { Product } from "./pages/product-single/Product";

import Index from "./pages/landingpage";
import ProductIndex from "./pages/product-listing/ProductIndex";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import ForgetPassword from "./pages/auth/ForgetPassword";
import NewIndex from "./pages/newIn/NewIndex";
import ApparelIndex from "./pages/apparel/ApparelIndex";
import AccessoriesIndex from "./pages/accessories/AccessoriesIndex";
import BrandsIndex from "./pages/brands/BrandsIndex";
import GadgetIndex from "./pages/gadgets/GadgetIndex";
import SalesIndex from "./pages/sales/SalesIndex";
import ProductDescription from "./pages/product-listing/ProductDesc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/cart" element={<CartIndex />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-view" element={<ProductIndex />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/productDesc" element={<ProductDescription />} />

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
