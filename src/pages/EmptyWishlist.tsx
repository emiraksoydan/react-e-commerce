import React from 'react'
import Header from '../components/HeaderComponent/Header'
import BlogTittle from '../components/BlogComponent/BlogTittle'
import Footer from '../components/Footer'

function EmptyWishlist() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={'Wishlist'} blogbradcumtitle={'Empty! You don’t Cart any Products '} backshop='Back to Shop'></BlogTittle>
            <Footer></Footer>
        </div>
    )
}

export default EmptyWishlist