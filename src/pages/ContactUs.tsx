import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer'
import ContactCompo from '../components/ContactCompo'

function ContactUs() {
    return (
        <div>
            <Header></Header>
            <BlogTittle headingtitle={'Contact'} blogbradcumtitle={'Contact'}></BlogTittle>
            <ContactCompo></ContactCompo>
            <Footer></Footer>
        </div>
    )
}

export default ContactUs