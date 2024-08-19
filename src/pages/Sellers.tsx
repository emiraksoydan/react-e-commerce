import React from 'react'
import Header from '../components/HeaderComponent/Header'
import BlogTittle from '../components/BlogComponent/BlogTittle'
import Footer from '../components/Footer'
import ProductSellers from '../components/ProductComponent/ProductSellers'

function Sellers() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={'Sellers'} blogbradcumtitle={'All Seller'}></BlogTittle>
            <ProductSellers></ProductSellers>
            <Footer></Footer>
        </div>
    )
}

export default Sellers