import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function BlogTittle({ headingtitle, blogbradcumtitle, backshop }: { headingtitle: string, blogbradcumtitle: string, backshop?: string }) {
    const location = useLocation()
    return (
        <div>
            <section className="blog about-blog">
                <div className="container">
                    <div className="blog-bradcrum">
                        <span><Link to={"/"}>Home</Link></span>
                        <span className="devider">/</span>
                        <span><a href="#"> {headingtitle}</a></span>
                    </div>
                    {
                        location.pathname === "emptycart" ? <div className="blog-item" data-aos="fade-up">
                            <div className="cart-img">
                                <img src="./assets/images/homepage-one/empty-cart.webp" alt='' />
                            </div>
                            <div className="cart-content">
                                <p className="content-title">{blogbradcumtitle} </p>
                                <Link to={"/productsidebar"} className="shop-btn">{backshop}</Link>
                            </div>
                        </div>
                            : location.pathname === "error" ? <div className="blog-item">
                                <div className="error-img">
                                    <img src="./assets/images/homepage-one/404-error.webp" alt="404-error" />
                                </div>
                            </div>
                                : location.pathname === "emptywishlist" ? <div className="blog-item" data-aos="fade-up">
                                    <div className="cart-img">
                                        <img src="./assets/images/homepage-one/empty-wishlist.webp" alt='' />
                                    </div>
                                    <div className="cart-content">
                                        <p className="content-title">{blogbradcumtitle} </p>
                                        <a href="product-sidebar.html" className="shop-btn">{backshop}</a>
                                    </div>
                                </div>
                                    : <div className="blog-heading about-heading">
                                        <h1 className="heading">{blogbradcumtitle}</h1>
                                    </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default BlogTittle