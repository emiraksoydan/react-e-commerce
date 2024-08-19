import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer'
import CheckOutCompo from '../components/CheckOutCompo'

function Checkout() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Checkout"} blogbradcumtitle={"Checkout"}></BlogTittle>
            <CheckOutCompo></CheckOutCompo>
            <Footer></Footer>
        </div>
    )
}

export default Checkout