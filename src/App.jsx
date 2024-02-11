import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/adminStyle.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import { Products } from "./pages/admin/Products";
import { useSelector } from "react-redux";
import NewProducts from "./pages/admin/NewProducts";
import { Category } from "./pages/admin/Category";

function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
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
