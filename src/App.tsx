import "./App.css";
import { useContext } from "react";
import AddProduct from "./pages/admin/AddProduct";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
// import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import OrderDetails from "./pages/OrderDetails";
import ProductDetails from "./pages/ProductDetails";
import Seller from "./pages/Seller";
import Shop from "./pages/Shop";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeProvider";
import Search from "./pages/Search";
import LostPage from "./components/ui/LostPage";
import CartTwo from "./pages/CartTwo";
import PrivateRoute from "./auth/routes/PrivateRoutes";

function App() {
  const [theme] = useContext(ThemeContext);
  return (
    <>
      <div
        className={`transition-all ease-in-out duration-200 ${
          theme === "light"
            ? "bg-[white] text-[black]"
            : "bg-secondary text-[white]"
        }`}
      >
        <Router>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            {/* private routes */}
            <Route path="/shop" element={<PrivateRoute />}>
              <Route index element={<Shop />} />
              <Route path="/shop/search" element={<Search />} />
              <Route path="/shop/admin" element={<Dashboard />} />
              <Route path="/shop/admin/orders" element={<Orders />} />
              <Route path="/shop/admin/add-product" element={<AddProduct />} />
              <Route path="/shop/seller/:id" element={<Seller />} />
              <Route path="/shop/product/:id" element={<ProductDetails />} />
              <Route path="/shop/cart" element={<CartTwo />} />
              <Route path="/shop/order-details" element={<OrderDetails />} />
              <Route path="/shop/categories" element={<Categories />} />
              <Route path="/shop/category/:id" element={<Category />} />
            </Route>
            <Route path="/*" element={<LostPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
