import React from 'react'
import Header from '../components/HeaderComponent/Header'
import BlogTittle from '../components/BlogComponent/BlogTittle'
import Footer from '../components/Footer';
import ProductOrder from '../components/ProductComponent/ProductOrder';


function Order() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Order"} blogbradcumtitle={"Order"}></BlogTittle>
            <ProductOrder></ProductOrder>
            <Footer></Footer>

        </div>
    )
}

export default Order