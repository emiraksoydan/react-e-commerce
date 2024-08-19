import React from 'react'
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/Footer'
import ProductInfoCompo from '../components/ProductComponent/ProductInfoCompo'
import ProductDetail from '../components/ProductComponent/ProductDetail'
import ProductWeeklSale from '../components/ProductComponent/ProductWeeklSale'

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