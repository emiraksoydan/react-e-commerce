import React from 'react'
import Header from '../components/HeaderComponent/Header'
import BlogTittle from '../components/BlogComponent/BlogTittle'
import Footer from '../components/Footer'

function Error() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={'404 Not Found'} blogbradcumtitle={''}></BlogTittle>
            <Footer></Footer>
        </div>
    )
}

export default Error