import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer';

function Favorite() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Wishlist"} blogbradcumtitle={"Wishlist"}></BlogTittle>

            <Footer></Footer>
        </div>
    )
}

export default Favorite