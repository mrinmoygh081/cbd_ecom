import { useEffect, useState } from "react";
import { FooterFront } from "../components/FooterFront";
import HeaderFront from "../components/HeaderFront";
import { postAPI } from "../utils/fetchAPIs";
import { toast } from "react-toastify";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

// imgs import
import img1 from "../public/images/recent_img_1.webp";
import img2 from "../public/images/recent_img_2.png";
import img3 from "../public/images/recent_img_3.webp";

import img4 from "../public/images/product-1.webp";
import img5 from "../public/images/product-2.png";
import { addCartHandler } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  let backUrl = import.meta.env.VITE_BACKEND_URL;
  // const [products, setProducts] = useState(null);
  const [topProducts, setTopProducts] = useState(null);
  const [specialProducts, setSpecialProducts] = useState(null);

  const getProducts = async () => {
    const d = await postAPI("user/product", null, null);
    if (d?.status) {
      // setProducts(d?.data);
      let top = d?.data.filter((item) => item.type === 1);
      let special = d?.data.filter((item) => item.type === 2);
      setTopProducts(top);
      setSpecialProducts(special);
    } else {
      toast.warning("Please check your internet connection!");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = async (item) => {
    let temp = item;
    temp.qty = 1;
    dispatch(addCartHandler(temp));
  };

  return (
    <>
      <HeaderFront />
      <main>
        <section className="container mt-65">
          <div className="row">
            <div className="col-12 col-md-6 px-2 px-md-0 banner_text banner_radius_right">
              <div className="banner_text_inner">
                <h1>CBD UK: Buyers Guide</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur maxime esse laudantium quo necessitatibus
                  excepturi.
                </p>
                <button className="btn btn_width mt-3">
                  <span>Click me!</span>
                  <span className="ripple"></span>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 px-0">
              <iframe
                className="banner_radius_left"
                width="100%"
                src="https://www.youtube.com/embed/XozF9VBLEfU?si=MQ3K99e5-2GmiltT"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <div className="container">
            <div className="row">
              <div className="col-12 button_group">
                <button className="btn_green">Demo1</button>
                <button className="btn_green">Demo2</button>
                <button className="btn_green">Demo3</button>
                <button className="btn_green">Demo4</button>
                <button className="btn_green">Demo5</button>
                <button className="btn_green">Demo6</button>
              </div>
            </div>
          </div>
        </section>
        <section className="product-cards">
          <div className="container">
            <div className="product-cards__top">
              <h2 className="product-cards__title">Our Top Products</h2>
              {/* <div className="slider-nav product-cards__slider-nav">
                <button className="btn-reset slider-btn slider-nav__btn product-cards__prev">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z"
                      fill="currentcolor"
                    />
                  </svg>
                </button>
                <button className="btn-reset slider-btn slider-nav__btn product-cards__next">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                      fill="currentcolor"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
            <div className="product-cards__slider">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
              >
                {topProducts &&
                  topProducts.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <article className="product-card product-card--large">
                        <div className="product-card__top">
                          <div className="product-card__image product-card__image--large">
                            <img
                              src={`${backUrl + item?.image}`}
                              alt={item?.name}
                              className="product-card_img"
                              width="100%"
                              height="440px"
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
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="centered product-cards__explore">
              <Link to="/products" className="product-cards__link">
                Explore products
              </Link>
            </div>
          </div>
        </section>
        <section className="product-cards">
          <div className="container">
            <div className="product-cards__top">
              <h2 className="product-cards__title">Our Special Products</h2>
            </div>
            <div className="product-cards__slider">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
              >
                {specialProducts &&
                  specialProducts.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <article className="product-card product-card--large">
                        <div className="product-card__top">
                          <div className="product-card__image product-card__image--large">
                            <img
                              src={`${backUrl + item?.image}`}
                              alt={item?.name}
                              className="product-card_img"
                              width="100%"
                              height="440px"
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
                          </div>
                          <div className="product-card__props">
                            <button className="btn-reset product-card__btn">
                              <FaCartShopping />
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="centered product-cards__explore">
              <Link to="/products" className="product-cards__link">
                Explore products
              </Link>
            </div>
          </div>
        </section>
        <section className="about_product">
          <div className="container">
            <div className="row">
              <div className="col-12 text_section">
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <h5>What you need to know about products?</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia ut exercitationem corporis quibusdam amet
                  illo,excepturi iste cupiditate soluta. Beatae, voluptas? Magni
                  nam tempora dolorem laborum nemo totam magnam amet!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia ut exercitationem corporis quibusdam amet
                  illo,excepturi iste cupiditate soluta. Beatae, voluptas? Magni
                  nam tempora dolorem laborum nemo totam magnam amet!
                </p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12 col-md-3">
                <img src={img4} alt="medicine" className="img-fluid" />
              </div>
              <div className="col-12 col-md-3">
                <img src={img5} alt="medicine" className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 points">
                <h2>5 Popular Ways to Consume CBD: Which One Is Best?</h2>
                <div className="inner_point">
                  <h3>Consectetur adipisicing elit.</h3>
                  <div className="inner_paragraph">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos, numquam vitae
                      quasi eius delectus incidunt animi at ut labore itaque
                      eaque neque libero sequi. Quaerat, dolorum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos, numquam vitae
                      quasi eius delectus incidunt animi at ut labore itaque
                      eaque neque libero sequi. Quaerat, dolorum.
                    </p>
                  </div>
                </div>
                <div className="inner_point">
                  <h3>Itaque eaque neque libero sequi. Quaerat, dolorum?</h3>
                  <div className="inner_paragraph">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos, numquam vitae
                      quasi eius delectus incidunt animi at ut labore itaque
                      eaque neque libero sequi. Quaerat, dolorum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos.
                    </p>
                  </div>
                </div>
                <div className="inner_point">
                  <h3>
                    Vitae quasi eius delectus incidunt animi at ut labore
                    itaque.
                  </h3>
                  <div className="inner_paragraph">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos, numquam vitae
                      quasi eius delectus incidunt animi at ut labore itaque
                      eaque neque libero sequi. Quaerat, dolorum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos, numquam vitae
                      quasi eius delectus incidunt.
                    </p>
                  </div>
                </div>
                <div className="inner_point">
                  <h3>Lorem ipsum dolor sit amet, consectetur?</h3>
                  <div className="inner_paragraph">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos, numquam vitae
                      quasi eius delectus incidunt animi at ut labore itaque
                      eaque neque libero sequi. Quaerat, dolorum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="inner_point">
                  <h3>Dignissimos, numquam vitae quasi eius?</h3>
                  <div className="inner_paragraph">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos, numquam vitae
                      quasi eius delectus incidunt animi at ut labore itaque
                      eaque neque libero sequi. Quaerat, dolorum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit sapiente mollitia dicta. Dignissimos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container my-5">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src="images/product_banner_1.webp"
                  alt="product banner"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="images/product_banner_2.webp"
                  alt="product banner"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 mt-5 d-flex justify-content-center">
                <button className="btn_green">Shop Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="recent_news">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="recent_news_heading">Recent News</h2>
                <div className="swiper mySwiper">
                  <Swiper
                    className="swiper-wrapper"
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={20}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}
                  >
                    <SwiperSlide className="swiper-slide">
                      <img src={img1} alt="" className="img-fluid" />
                      <div className="slider_inner_text">
                        <h2>
                          Cupiditate dolores corporis inventore provident.
                        </h2>
                        <span className="slider_inner_date">
                          August 28, 2023
                        </span>
                        <p className="slider_inner_paragraph">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Eos, quam numquam soluta ad quisquam aperiam
                          repudiandae magni error quod aspernatur.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={img2} alt="" className="img-fluid" />
                      <div className="slider_inner_text">
                        <h2>
                          Cupiditate dolores corporis inventore provident.
                        </h2>
                        <span className="slider_inner_date">
                          August 28, 2023
                        </span>
                        <p className="slider_inner_paragraph">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Eos, quam numquam soluta ad quisquam aperiam
                          repudiandae magni error quod aspernatur.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={img3} alt="" className="img-fluid" />
                      <div className="slider_inner_text">
                        <h2>
                          Cupiditate dolores corporis inventore provident.
                        </h2>
                        <span className="slider_inner_date">
                          August 28, 2023
                        </span>
                        <p className="slider_inner_paragraph">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Eos, quam numquam soluta ad quisquam aperiam
                          repudiandae magni error quod aspernatur.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={img1} alt="" className="img-fluid" />
                      <div className="slider_inner_text">
                        <h2>
                          Cupiditate dolores corporis inventore provident.
                        </h2>
                        <span className="slider_inner_date">
                          August 28, 2023
                        </span>
                        <p className="slider_inner_paragraph">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Eos, quam numquam soluta ad quisquam aperiam
                          repudiandae magni error quod aspernatur.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={img2} alt="" className="img-fluid" />
                      <div className="slider_inner_text">
                        <h2>
                          Cupiditate dolores corporis inventore provident.
                        </h2>
                        <span className="slider_inner_date">
                          August 28, 2023
                        </span>
                        <p className="slider_inner_paragraph">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Eos, quam numquam soluta ad quisquam aperiam
                          repudiandae magni error quod aspernatur.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img src={img3} alt="" className="img-fluid" />
                      <div className="slider_inner_text">
                        <h2>
                          Cupiditate dolores corporis inventore provident.
                        </h2>
                        <span className="slider_inner_date">
                          August 28, 2023
                        </span>
                        <p className="slider_inner_paragraph">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Eos, quam numquam soluta ad quisquam aperiam
                          repudiandae magni error quod aspernatur.
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button className="btn mt-5">
                  <span>View More Articles</span>
                  <span className="ripple"></span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="news-letter mb-5" id="News-letter">
          <div className="news">
            <div className="container">
              <h1 className="news-heading">
                Subscribe To Get The Latest <br />
                News About Us
              </h1>
              <p className="des how-de">
                Get the Latest news about digital Marketing to Your Pocket, drop
                your <br />
                email below to get daliy update about us
              </p>

              <form action="">
                <input
                  type="email"
                  maxLength="50"
                  required
                  placeholder="Enter your email address"
                />
                <button className="bt">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <FooterFront />
    </>
  );
};

export default Home;
