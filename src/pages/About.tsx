import React from 'react'
import Header from '../components/HeaderComponent/Header'
import BlogTittle from '../components/BlogComponent/BlogTittle'
import Footer from '../components/Footer';
import LatestProduct from '../components/ProductComponent/LatestProduct';
import AboutCompo from '../components/AboutComponent/AboutCompo';
import AboutService from '../components/AboutComponent/AboutService';
import AboutPromotion from '../components/AboutComponent/AboutPromotion';
import AboutFeedback from '../components/AboutComponent/AboutFeedback';


function About() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"About us"} blogbradcumtitle={"About Us"}></BlogTittle>
            <AboutCompo></AboutCompo>
            <AboutService></AboutService>
            <AboutPromotion></AboutPromotion>
            <AboutFeedback></AboutFeedback>
            <LatestProduct></LatestProduct>
            <Footer></Footer>
        </div>
    )
}

export default About