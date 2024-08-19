import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer';
import LatestProduct from '../components/LatestProduct';


function About() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"About us"} blogbradcumtitle={"About Us"}></BlogTittle>

            <LatestProduct></LatestProduct>
            <Footer></Footer>
        </div>
    )
}

export default About