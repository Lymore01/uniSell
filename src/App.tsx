import "./App.css";
import AddProduct from "./pages/admin/AddProduct";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import OrderDetails from "./pages/OrderDetails";
import ProductDetails from "./pages/ProductDetails";
import Seller from "./pages/Seller";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/admin" element={<Dashboard />} />
          <Route path="/shop/admin/orders" element={<Orders />} />
          <Route path="/shop/admin/add-product" element={<AddProduct />} />
          <Route path="/shop/seller/:id" element={<Seller />} />
          <Route path="/shop/product/:id" element={<ProductDetails />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/shop/order-details" element={<OrderDetails />} />
          <Route path="/shop/categories" element={<Categories />} />
          <Route path="/shop/category/:id" element={<Category />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
