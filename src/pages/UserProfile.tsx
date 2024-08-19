import React from 'react'
import Header from '../components/HeaderComponent/Header'
import BlogTittle from '../components/BlogComponent/BlogTittle'
import Footer from '../components/Footer';
import UserProfileCompo from '../components/AuthComponent/UserProfileCompo';

function UserProfile() {
  return (
    <div>
      <Header></Header>
      <BlogTittle headingtitle={" Dashboard"} blogbradcumtitle={" User Dashboard"}></BlogTittle>
      <UserProfileCompo></UserProfileCompo>
      <Footer></Footer>

    </div>
  )
}

export default UserProfile