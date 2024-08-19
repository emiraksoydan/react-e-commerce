import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer'
import SellerApplication from '../components/SellerApplication'

function BecomeVendor
    () {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Seller Application"} blogbradcumtitle={"Become A Seller!"}></BlogTittle>
            <SellerApplication></SellerApplication>
            <Footer></Footer>
        </div>
    )
}

export default BecomeVendor
