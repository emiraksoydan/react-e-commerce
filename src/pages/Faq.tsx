import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer';
import FaqCompo from '../components/FaqCompo';


function Faq() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Faq"} blogbradcumtitle={"Faq"}></BlogTittle>
            <FaqCompo></FaqCompo>
            <Footer></Footer>
        </div>
    )
}

export default Faq