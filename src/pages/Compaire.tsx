import React from 'react'
import Header from '../components/HeaderComponent/Header'
import BlogTittle from '../components/BlogComponent/BlogTittle'
import Footer from '../components/Footer';
import ProductCompaire from '../components/ProductComponent/ProductCompaire';


function Compaire() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Compaire"} blogbradcumtitle={"Product Comparison"}></BlogTittle>
            <ProductCompaire></ProductCompaire>
            <Footer></Footer>
        </div>
    )
}

export default Compaire