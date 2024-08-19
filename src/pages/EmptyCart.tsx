import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogTittle from '../components/BlogTittle'

function EmptyCart() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"404 Not Found"} blogbradcumtitle={"Empty! You don’t Cart any Products"} backshop={"Back to Shop"} ></BlogTittle>
            <Footer></Footer>
        </div>
    )
}

export default EmptyCart