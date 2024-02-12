import { useEffect, useState } from "react";
import { FooterFront } from "../components/FooterFront";
import HeaderFront from "../components/HeaderFront";

import LoadingView from "../components/LoadingView";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../redux/slices/cartSlice";

const AddToCartPage = () => {
  const dispatch = useDispatch();
  let backUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoading, setIsLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {}, []);

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
                <h2 className="product-cards__title">Cart</h2>
              </div>
              <div className="row">
                <div className="col-md-8 col-12">
                  <div className="cart_card">
                    {cartItems &&
                      cartItems.length > 0 &&
                      cartItems.map((item, i) => (
                        <div className="cart_item" key={i}>
                          {console.log(item)}
                          <img
                            src={`${backUrl + item?.image}`}
                            alt=""
                            width={"100px"}
                          />
                          <h4 className="cart_item_name">{item?.name}</h4>
                          <div className="quantity">
                            <button
                              className="qty_minus"
                              onClick={() => dispatch(updateQuantity(item, -1))}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={item?.qty}
                              className="form-control"
                              disabled
                            />
                            <button
                              className="qty_plus"
                              onClick={() => dispatch(updateQuantity(item, 1))}
                            >
                              +
                            </button>
                          </div>
                          <div className="cart_price"> ${item.price}</div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <FooterFront />
    </>
  );
};

export default AddToCartPage;
