import React from 'react'
import { Link } from 'react-router-dom'

function ProductBrand() {
    return (
        <div>
            <section className="product brand" data-aos="fade-up">
                <div className="container">
                    <div className="section-title">
                        <h5>Brand of Prodcuts</h5>
                        <Link to={"/productsidebar"} className="view">View All</Link>
                    </div>
                    <div className="brand-section">
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-1.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-2.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-3.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-4.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-5.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-6.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-7.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-8.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-9.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-10.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-11.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="wrapper-img">
                                <Link to={"/productsidebar"} >
                                    <img src="./assets/images/homepage-one/brand-img-12.webp" alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductBrand