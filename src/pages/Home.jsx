import { FooterFront } from "../components/FooterFront";
import HeaderFront from "../components/HeaderFront";

const Home = () => {
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
              <div className="slider-nav product-cards__slider-nav">
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
              </div>
            </div>
            <div className="product-cards__slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_1.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card_img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>

                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_2.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_3.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_4.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_5.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_6.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="centered product-cards__explore">
              <a href="#" className="product-cards__link">
                Explore products
              </a>
            </div>
          </div>
        </section>
        <section className="product-cards">
          <div className="container">
            <div className="product-cards__top">
              <h2 className="product-cards__title">Our Special Products</h2>
              <div className="slider-nav product-cards__slider-nav">
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
              </div>
            </div>
            <div className="product-cards__slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_1.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>

                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_2.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_3.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_4.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_5.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="product-card product-card--large">
                    <div className="product-card__top">
                      <div className="product-card__image product-card__image--large">
                        <img
                          src="images/card_6.webp"
                          alt="100% Cannabis CBD Oral Capsules"
                          className="product-card__img"
                          width="390px"
                          height="440px"
                        />
                      </div>
                      <span className="sale-badge">-50%</span>
                      <fieldset className="rating">
                        <div className="rating__group">
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="1"
                            aria-label="one star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="2"
                            aria-label="two star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="3"
                            aria-label="three star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="4"
                            aria-label="four star"
                          />
                          <input
                            type="radio"
                            className="rating__star"
                            name="product-rating"
                            value="5"
                            aria-label="five star"
                          />
                        </div>
                      </fieldset>
                      <div className="wishlist-badge">
                        <button
                          className="btn-reset wishlist-badge__btn"
                          title="Add to wishlist"
                        ></button>
                      </div>
                    </div>
                    <div className="product-card__info">
                      <h3 className="product-card__title">
                        <a href="#">100% Cannabis CBD Oral Capsules</a>
                      </h3>
                      <span className="delivery_date">
                        FREE delivery <b>Monday</b>, Sep 04.
                      </span>
                      <div className="product-card__price price">
                        <span className="price__current price__current--small">
                          $20.40
                        </span>
                        <del className="price__old price__old--small">
                          $40.80
                        </del>
                      </div>
                      <div className="product-card__props">
                        <div className="product-card__selects">
                          <div className="size">
                            <ul className="list-reset size__list">
                              <li className="size__item">
                                <input
                                  id="xs-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label
                                  htmlFor="xs-size"
                                  className="size__field"
                                >
                                  xs
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="s-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="s-size" className="size__field">
                                  s
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="m-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="m-size" className="size__field">
                                  m
                                </label>
                              </li>
                              <li className="size__item">
                                <input
                                  id="l-size"
                                  type="radio"
                                  name="size"
                                  className="input-reset size__input"
                                />
                                <label htmlFor="l-size" className="size__field">
                                  l
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="color">
                            <ul className="list-reset color__list">
                              <li className="color__item">
                                <input
                                  id="red"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="red" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#ea4335",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="green"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="green" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#34a853",
                                    }}
                                  ></span>
                                </label>
                              </li>
                              <li className="color__item">
                                <input
                                  id="blue"
                                  type="radio"
                                  name="color"
                                  className="input-reset color__input"
                                />
                                <label htmlFor="blue" className="color__field">
                                  <span
                                    className="color__circle"
                                    style={{
                                      backgroundColor: "#4285f4",
                                    }}
                                  ></span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn-reset product-card__btn">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.5944 2.0047C2.52929 1.99979 2.43894 1.99935 2.2695 1.99935H1.16667C0.798477 1.99935 0.5 1.70088 0.5 1.33269C0.5 0.964496 0.798477 0.666019 1.16667 0.666019H2.2695C2.27578 0.666019 2.28207 0.666018 2.28835 0.666017C2.43146 0.666 2.57315 0.665982 2.69458 0.675131C2.82971 0.685313 2.9867 0.709227 3.14911 0.781673C3.37767 0.883629 3.57293 1.04786 3.71254 1.25557C3.81174 1.40317 3.8622 1.55374 3.89538 1.68512C3.9252 1.80319 3.94946 1.94279 3.97397 2.08378C3.97504 2.08997 3.97612 2.09617 3.9772 2.10236L4.13605 3.01574L12.812 3.27256C13.152 3.28261 13.4458 3.2913 13.6878 3.31795C13.9436 3.34612 14.1971 3.39908 14.4404 3.52867C14.809 3.72503 15.1068 4.03184 15.2922 4.40607C15.4145 4.65304 15.46 4.90806 15.4805 5.16454C15.5 5.40719 15.5 5.70112 15.5 6.04126V6.09042C15.5 6.41007 15.5 6.68734 15.4821 6.91727C15.4631 7.16111 15.4213 7.4033 15.3095 7.64061C15.1395 8.00182 14.8653 8.30387 14.5221 8.5079C14.2967 8.64195 14.0597 8.70696 13.8188 8.74935C13.5917 8.78932 13.3157 8.81601 12.9975 8.84679L6.50826 9.47478C6.18213 9.50636 5.89956 9.53371 5.66381 9.53786C5.41403 9.54225 5.1636 9.52285 4.91219 9.4305C4.53514 9.29199 4.20854 9.04315 3.97491 8.71639C3.81913 8.49851 3.73395 8.26222 3.67188 8.02024C3.6133 7.79184 3.56467 7.51216 3.50854 7.18935L2.66358 2.33082C2.63455 2.16388 2.61864 2.07494 2.60265 2.01163C2.60208 2.00938 2.60153 2.00725 2.601 2.00522C2.59891 2.00505 2.59672 2.00487 2.5944 2.0047ZM4.36923 4.35656L4.81796 6.93675C4.8795 7.29058 4.9195 7.51777 4.96341 7.68897C5.00529 7.85226 5.03842 7.91138 5.05953 7.9409C5.1374 8.04982 5.24627 8.13277 5.37195 8.17894C5.40602 8.19145 5.47181 8.2077 5.64036 8.20473C5.81708 8.20163 6.04674 8.17989 6.40421 8.14529L12.8451 7.52198C13.1941 7.48821 13.4178 7.46608 13.5877 7.43619C13.7495 7.40772 13.8099 7.38017 13.8407 7.36185C13.9551 7.29384 14.0465 7.19315 14.1032 7.07275C14.1184 7.04033 14.1401 6.97756 14.1528 6.81376C14.1662 6.64181 14.1667 6.41694 14.1667 6.06635C14.1667 5.69402 14.1662 5.45411 14.1515 5.27122C14.1374 5.09622 14.1136 5.03061 14.0974 4.99789C14.0356 4.87315 13.9363 4.77088 13.8135 4.70542C13.7812 4.68825 13.7164 4.66249 13.5418 4.64327C13.3595 4.62318 13.1197 4.61558 12.7475 4.60457L4.36923 4.35656Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.16667 11.666C5.79848 11.666 5.5 11.9645 5.5 12.3327C5.5 12.7009 5.79848 12.9993 6.16667 12.9993C6.53486 12.9993 6.83333 12.7009 6.83333 12.3327C6.83333 11.9645 6.53486 11.666 6.16667 11.666ZM4.16667 12.3327C4.16667 11.2281 5.0621 10.3327 6.16667 10.3327C7.27124 10.3327 8.16667 11.2281 8.16667 12.3327C8.16667 13.4373 7.27124 14.3327 6.16667 14.3327C5.0621 14.3327 4.16667 13.4373 4.16667 12.3327Z"
                              fill="currentcolor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.666C12.1318 11.666 11.8333 11.9645 11.8333 12.3327C11.8333 12.7009 12.1318 12.9993 12.5 12.9993C12.8682 12.9993 13.1667 12.7009 13.1667 12.3327C13.1667 11.9645 12.8682 11.666 12.5 11.666ZM10.5 12.3327C10.5 11.2281 11.3954 10.3327 12.5 10.3327C13.6046 10.3327 14.5 11.2281 14.5 12.3327C14.5 13.4373 13.6046 14.3327 12.5 14.3327C11.3954 14.3327 10.5 13.4373 10.5 12.3327Z"
                              fill="currentcolor"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="centered product-cards__explore">
              <a href="#" className="product-cards__link">
                Explore products
              </a>
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
                <img
                  src="images/product-1.webp"
                  alt="medicine"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-3">
                <img
                  src="images/product-2.png"
                  alt="medicine"
                  className="img-fluid"
                />
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
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src="images/recent_img_1.webp"
                        alt=""
                        className="img-fluid"
                      />
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
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="images/recent_img_2.png"
                        alt=""
                        className="img-fluid"
                      />
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
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="images/recent_img_3.webp"
                        alt=""
                        className="img-fluid"
                      />
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
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="images/recent_img_1.webp"
                        alt=""
                        className="img-fluid"
                      />
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
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="images/recent_img_2.png"
                        alt=""
                        className="img-fluid"
                      />
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
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="images/recent_img_3.webp"
                        alt=""
                        className="img-fluid"
                      />
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
                    </div>
                  </div>
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
