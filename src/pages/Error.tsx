import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
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