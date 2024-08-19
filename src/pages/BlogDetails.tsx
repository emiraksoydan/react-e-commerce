import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer'
import BlogDetailsCompo from '../components/BlogDetailsCompo'

function BlogDetails() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={"Blog Details"} blogbradcumtitle={"Blog Details"}></BlogTittle>
            <BlogDetailsCompo></BlogDetailsCompo>
            <Footer></Footer>
        </div>
    )
}

export default BlogDetails