import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/adminStyle.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import { Products } from "./pages/admin/Products";
import { useSelector } from "react-redux";
import NewProducts from "./pages/admin/NewProducts";
import { Category } from "./pages/admin/Category";
import FrontProducts from "./pages/FrontProducts";
import AddToCartPage from "./pages/AddToCartPage";
import ShippingAddress from "./pages/ShippingAddress";

function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<FrontProducts />} />
          <Route exact path="/cart" element={<AddToCartPage />} />
          <Route exact path="/shipping" element={<ShippingAddress />} />
          {!token ? (
            <>
              <Route exact path="/admin" element={<Login />} />
            </>
          ) : (
            <>
              <Route exact path="/admin" element={<Products />} />
              <Route exact path="/admin/products" element={<Products />} />
              <Route
                exact
                path="/admin/products/add"
                element={<NewProducts />}
              />
              <Route exact path="/admin/categories" element={<Category />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
