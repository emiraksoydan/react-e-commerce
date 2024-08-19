import React from 'react'
import Header from '../components/Header'
import BlogTittle from '../components/BlogTittle'
import Footer from '../components/Footer';

function UserProfile() {
  return (
    <div>
      <Header></Header>
      <BlogTittle headingtitle={" Dashboard"} blogbradcumtitle={" User Dashboard"}></BlogTittle>

      <Footer></Footer>

    </div>
  )
}

export default UserProfile