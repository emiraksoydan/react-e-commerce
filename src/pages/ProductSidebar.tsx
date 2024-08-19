import React from 'react'
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/Footer'
import ProductSidebarComponent from '../components/ProductComponent/ProductSidebarComponent'

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