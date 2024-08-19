import React from 'react'
import { Link } from 'react-router-dom'

function ProductFashion() {
    return (
        <div>
            <section className="product fashion-style">
                <div className="container">
                    <div className="style-section">
                        <div className="row gy-4 gx-5 gy-lg-0">
                            <div className="col-lg-6">
                                <div className="product-wrapper wrapper-one" data-aos="fade-right">
                                    <div className="wrapper-info">
                                        <span className="wrapper-subtitle">NEW STYLE</span>
                                        <h4 className="wrapper-details">Get 65% Offer
                                            <span className="wrapper-inner-title">&amp; Make New</span> Fusion.
                                        </h4>
                                        <Link to={"/productsidebar"} className="shop-btn">Shop Now
                                            <span>
                                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.45312" y="0.914062" width="9.25346" height="2.05632" transform="rotate(45 1.45312 0.914062)" />
                                                    <rect x={8} y="7.45703" width="9.25346" height="2.05632" transform="rotate(135 8 7.45703)" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-wrapper wrapper-two" data-aos="fade-up">
                                    <div className="wrapper-info">
                                        <span className="wrapper-subtitle">Mega OFFER</span>
                                        <h4 className="wrapper-details">
                                            Make your New
                                            <span className="wrapper-inner-title">Styles with Our</span>
                                            Products
                                        </h4>
                                        <Link to={"/productsidebar"} className="shop-btn">Shop Now
                                            <span>
                                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.45312" y="0.914062" width="9.25346" height="2.05632" transform="rotate(45 1.45312 0.914062)" />
                                                    <rect x={8} y="7.45703" width="9.25346" height="2.05632" transform="rotate(135 8 7.45703)" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductFashion