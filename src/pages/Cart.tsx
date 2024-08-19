import React, { useEffect } from 'react'
import Header from '../components/HeaderComponent/Header'
import { useLocation } from 'react-router-dom';
import BlogTittle from '../components/BlogComponent/BlogTittle';
import ProductCard from '../components/ProductComponent/ProductCard';
import Footer from '../components/Footer';

function Cart() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Cart"} blogbradcumtitle={"Cart"}></BlogTittle>
            <ProductCard></ProductCard>
            <Footer></Footer>
        </div>
    )
}

export default Cart