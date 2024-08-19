import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer'
import LatestProduct from '../components/LatestProduct'

function Blogs() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Blogs"} blogbradcumtitle={"Our Blogs"}></BlogTittle>
            <LatestProduct></LatestProduct>
            <Footer></Footer>
        </div>
    )
}

export default Blogs