import { useEffect, useState } from "react";
import { FooterFront } from "../components/FooterFront";
import HeaderFront from "../components/HeaderFront";

import { Link, useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { getCategoriesName, getProducts } from "../utils/queries";
import LoadingView from "../components/LoadingView";
import { useDispatch } from "react-redux";
import { addCartHandler } from "../redux/slices/cartSlice";

const FrontProducts = () => {
  let backUrl = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const [catName, setCatName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let paramValue = null;
      let params = new URLSearchParams(location.search);
      paramValue = params.get("catId");

      await getProducts(paramValue, setProducts);
      await getCategoriesName(paramValue, setCatName);
      setIsLoading(false);
    })();
  }, [location.search]);

  const addToCart = async (item) => {
    let temp = item;
    temp.qty = 1;
    dispatch(addCartHandler(temp));
  };

  return (
    <>
      <HeaderFront />
      <main>
        <section className="product-cards mb-5">
          {isLoading ? (
            <LoadingView />
          ) : (
            <div className="container">
              <div className="product-cards__top">
                <h2 className="product-cards__title">Our {catName} Products</h2>
              </div>
              <div className="row">
                {products &&
                  products.length > 0 &&
                  products.map((item, i) => (
                    <div className="col-md-3" key={i}>
                      <article className="product-card product-card--large">
                        <div className="product-card__top">
                          <div className="product-card__image product-card__image--large">
                            <img
                              src={`${backUrl + item?.image}`}
                              alt={item?.name}
                              className="product-card_img"
                              width="100%"
                              height="auto"
                            />
                          </div>
                        </div>
                        <div className="product-card__info">
                          <h3 className="product-card__title">
                            <Link to="/">{item?.name}</Link>
                          </h3>
                          <div className="product-card__price price">
                            <span className="price__current price__current--small">
                              ${item?.price}
                            </span>
                            {/* <del className="price__old price__old--small">
                              $40.80
                            </del> */}
                          </div>
                          <div className="product-card__props">
                            <button
                              className="btn-reset product-card__btn"
                              onClick={() => addToCart(item)}
                            >
                              <FaCartShopping />
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
              </div>
              <div className="centered product-cards__explore mt-3">
                <Link to="/products" className="product-cards__link">
                  Explore products
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <FooterFront />
    </>
  );
};

export default FrontProducts;
