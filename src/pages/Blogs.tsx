import React from 'react'
import Header from '../components/HeaderComponent/Header'
import BlogTittle from '../components/BlogComponent/BlogTittle'
import Footer from '../components/Footer'
import LatestProduct from '../components/ProductComponent/LatestProduct'

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