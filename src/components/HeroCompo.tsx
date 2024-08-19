import React from 'react'
import { Link } from 'react-router-dom'

function HeroCompo() {
    return (
        <div>
            <section id="hero" className="hero">
                <div className="swiper hero-swiper">
                    <div className="swiper-wrapper hero-wrapper">
                        <div className="swiper-slide hero-slider-one">
                            <div className="container">
                                <div className="col-lg-6">
                                    <div className="wrapper-section" data-aos="fade-up">
                                        <div className="wrapper-info">
                                            <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF
                                            </h5>
                                            <h1 className="wrapper-details">Fashion Collection
                                                Summer Sale</h1>
                                            <Link to={"/productsidebar"} className="shop-btn">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide hero-slider-two">
                            <div className="container">
                                <div className="col-lg-6">
                                    <div className="wrapper-section">
                                        <div className="wrapper-info">
                                            <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF
                                            </h5>
                                            <h1 className="wrapper-details">Fashion Collection
                                                Summer Sale</h1>
                                            <a href="#" className="shop-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide hero-slider-three">
                            <div className="container">
                                <div className="col-lg-6">
                                    <div className="wrapper-section">
                                        <div className="wrapper-info">
                                            <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF
                                            </h5>
                                            <h1 className="wrapper-details">Fashion Collection
                                                Summer Sale</h1>
                                            <a href="#" className="shop-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </section>

        </div>
    )
}

export default HeroCompo