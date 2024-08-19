import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function HeaderCart() {


    return (
        <div className="header-cart">
            <Link to={"/card"} className="cart-item">
                <span>
                    <svg width={35} height={28} viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4444 21.897C14.8444 21.897 13.2441 21.8999 11.6441 21.8963C9.79233 21.892 8.65086 21.0273 8.12595 19.2489C7.04294 15.5794 5.95756 11.9107 4.87166 8.24203C4.6362 7.4468 4.37783 7.25412 3.55241 7.25175C2.7786 7.24964 2.00507 7.25754 1.23127 7.24911C0.512247 7.24148 0.0157813 6.79109 0.000242059 6.15064C-0.0160873 5.48281 0.475637 5.01689 1.23232 5.00873C2.11121 4.99952 2.99089 4.99214 3.86951 5.01268C5.36154 5.04769 6.52014 5.93215 6.96393 7.35415C7.14171 7.92378 7.34055 8.49026 7.46382 9.07201C7.54968 9.47713 7.77881 9.49661 8.10566 9.49582C11.8335 9.48897 15.5611 9.49134 19.2889 9.49134C21.0825 9.49134 22.8761 9.48108 24.6694 9.49503C26.0848 9.50608 27.0907 10.4906 27.0156 11.7778C27.0006 12.0363 26.925 12.2958 26.8473 12.5457C26.1317 14.8411 25.4124 17.1351 24.6879 19.4279C24.1851 21.0186 23.0223 21.8826 21.3504 21.8944C19.7151 21.906 18.0797 21.897 16.4444 21.897Z" fill="#6E6D79" />
                        <path d="M12.4012 27.5161C11.167 27.5227 10.1488 26.524 10.1345 25.2928C10.1201 24.0419 11.1528 22.9982 12.3967 23.0066C13.6209 23.0151 14.6422 24.0404 14.6436 25.2623C14.6451 26.4855 13.6261 27.5095 12.4012 27.5161Z" fill="#6E6D79" />
                        <path d="M22.509 25.2393C22.5193 26.4842 21.5393 27.4971 20.3064 27.5155C19.048 27.5342 18.0272 26.525 18.0277 25.2622C18.0279 24.0208 19.0214 23.0161 20.2572 23.0074C21.4877 22.9984 22.4988 24.0006 22.509 25.2393Z" fill="#6E6D79" />
                        <circle cx="26.9523" cy={8} r={8} fill="#AE1C9A" />
                        <path d="M23.7061 13V11.8864L27.1514 8.31676C27.5193 7.92898 27.8226 7.58925 28.0612 7.29759C28.3032 7.0026 28.4838 6.72254 28.6031 6.45739C28.7225 6.19223 28.7821 5.91051 28.7821 5.61222C28.7821 5.27415 28.7026 4.98248 28.5435 4.73722C28.3844 4.48864 28.1673 4.29806 27.8922 4.16548C27.6171 4.02959 27.3072 3.96165 26.9625 3.96165C26.5979 3.96165 26.2797 4.03622 26.008 4.18537C25.7362 4.33452 25.5274 4.54498 25.3815 4.81676C25.2357 5.08854 25.1628 5.40672 25.1628 5.77131H23.6962C23.6962 5.15151 23.8387 4.60961 24.1237 4.1456C24.4088 3.68158 24.7999 3.32197 25.297 3.06676C25.7942 2.80824 26.3593 2.67898 26.9923 2.67898C27.632 2.67898 28.1955 2.80658 28.6827 3.06179C29.1732 3.31368 29.556 3.65838 29.8311 4.09588C30.1062 4.53007 30.2438 5.0206 30.2438 5.56747C30.2438 5.94531 30.1725 6.31487 30.03 6.67614C29.8908 7.0374 29.6472 7.4401 29.2992 7.88423C28.9511 8.32505 28.4672 8.86032 27.8475 9.49006L25.824 11.608V11.6825H30.4078V13H23.7061Z" fill="#F9FFFB" />
                    </svg>
                </span>
                <span className="cart-text">
                    Cart
                </span>
            </Link>
            <div className="cart-submenu">
                <div className="cart-wrapper-item">
                    <div className="wrapper">
                        <div className="wrapper-item">
                            <div className="wrapper-img">
                                <img src="assets/images/homepage-one/product-img/product-img-1.webp" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h5 className="wrapper-title">Classic Design Skart</h5>
                                <div className="price">
                                    <p className="new-price">$20.00</p>
                                </div>
                            </div>
                        </div>
                        <span className="close-btn">
                            <svg viewBox="0 0 10 10" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-item">
                            <div className="wrapper-img">
                                <img src="assets/images/homepage-one/product-img/product-img-2.webp" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h5 className="wrapper-title">Black Suit</h5>
                                <div className="price">
                                    <p className="new-price">$10.00</p>
                                </div>
                            </div>
                        </div>
                        <span className="close-btn">
                            <svg viewBox="0 0 10 10" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-item">
                            <div className="wrapper-img">
                                <img src="assets/images/homepage-one/product-img/product-img-3.webp" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h5 className="wrapper-title">Blue Party Dress</h5>
                                <div className="price">
                                    <p className="new-price">$15.00</p>
                                </div>
                            </div>
                        </div>
                        <span className="close-btn">
                            <svg viewBox="0 0 10 10" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-item">
                            <div className="wrapper-img">
                                <img src="assets/images/homepage-one/product-img/product-img-4.webp" alt="img" />
                            </div>
                            <div className="wrapper-content">
                                <h5 className="wrapper-title">Classic Red Dress</h5>
                                <div className="price">
                                    <p className="new-price">$18.00</p>
                                </div>
                            </div>
                        </div>
                        <span className="close-btn">
                            <svg viewBox="0 0 10 10" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="cart-wrapper-section">
                    <div className="wrapper-line" />
                    <div className="wrapper-subtotal">
                        <h5 className="wrapper-title">Subtotal</h5>
                        <h5 className="wrapper-title">$60</h5>
                    </div>
                    <div className="cart-btn">
                        <a href="cart.html" className="shop-btn view-btn">View Cart</a>
                        <a href="checkout.html" className="shop-btn checkout-btn">Checkout Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCart