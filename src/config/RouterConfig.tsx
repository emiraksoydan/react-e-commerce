import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home.tsx'
import UserProfile from '../pages/UserProfile.tsx'
import Faq from '../pages/Faq.tsx'
import Order from '../pages/Order.tsx'
import Compaire from '../pages/Compaire.tsx'
import Favorite from '../pages/Favorite.tsx'
import Cart from '../pages/Cart.tsx'
import Blogs from '../pages/Blogs.tsx'
import About from '../pages/About.tsx'
import BlogDetails from '../pages/BlogDetails.tsx'

function RouterConfig() {
    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/user-profile' element={<UserProfile />}></Route>
                    <Route path='/faq' element={<Faq />}></Route>
                    <Route path='/order' element={<Order />}></Route>
                    <Route path='/compaire' element={<Compaire />}></Route>
                    <Route path='/favorite' element={<Favorite />}></Route>
                    <Route path='/card' element={<Cart />}></Route>
                    <Route path='/blogs' element={<Blogs />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/blogdetails' element={<BlogDetails />}></Route>
                </Routes>
            </div>
        </>
    )
}

export default RouterConfig