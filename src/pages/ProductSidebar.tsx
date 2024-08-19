import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductSidebarComponent from '../components/ProductSidebarComponent'

function ProductSidebar() {
    return (
        <div>
            <Header></Header>
            <ProductSidebarComponent></ProductSidebarComponent>
            <Footer></Footer>
        </div>
    )
}

export default ProductSidebar