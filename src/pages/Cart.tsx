import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import BlogTittle from '../components/BlogTittle';
import ProductCard from '../components/ProductCard';
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