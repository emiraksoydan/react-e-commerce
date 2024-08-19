import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductInfoCompo from '../components/ProductInfoCompo'
import ProductDetail from '../components/ProductDetail'
import ProductWeeklSale from '../components/ProductWeeklSale'

function ProductInfo() {
    return (
        <div>
            <Header></Header>
            <ProductInfoCompo></ProductInfoCompo>
            <ProductDetail></ProductDetail>
            <ProductWeeklSale></ProductWeeklSale>
            <Footer></Footer>
        </div>
    )
}

export default ProductInfo