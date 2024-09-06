import React from 'react'
import { Link } from 'react-router-dom'

function ProductCategory() {
    console.log("sadasdas")

    return (
        <div>
            <section className="product-category">
                <div className="container">
                    <div className="section-title">
                        <h5>Our Categories</h5>
                        <Link to={"/productsidebar"} className="view">View All</Link>
                    </div>
                    <div className="category-section">
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={100}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/dresses.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Dresses</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={200}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/bags.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Leather Bags</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={300}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/sweaters.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Sweaters</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={400}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/shoes.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Boots</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={500}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/gift.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Gift for Him</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={600}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/sneakers.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Sneakers</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={100}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/watch.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Watch</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={200}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/ring.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Gold Rings</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={300}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/cap.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Cap</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={400}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/glass.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Sunglass</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={500}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/baby.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Baby Shop</Link>
                            </div>
                        </div>
                        <div className="product-wrapper" data-aos="fade-right" data-aos-duration={200}>
                            <div className="wrapper-img">
                                <img src="./assets/images/homepage-one/category-img/bags.webp" alt="dress" />
                            </div>
                            <div className="wrapper-info">
                                <Link to={"/productsidebar"} className="wrapper-details">Leather Bags</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductCategory