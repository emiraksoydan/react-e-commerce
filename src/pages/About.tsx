import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer';
import LatestProduct from '../components/LatestProduct';
import AboutCompo from '../components/AboutCompo';
import AboutService from '../components/AboutService';
import AboutPromotion from '../components/AboutPromotion';
import AboutFeedback from '../components/AboutFeedback';


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