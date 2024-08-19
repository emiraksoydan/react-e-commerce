import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer';
import ProductCompaire from '../components/ProductCompaire';


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