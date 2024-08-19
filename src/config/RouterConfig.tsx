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
import ProductSidebar from '../pages/ProductSidebar.tsx'
import EmptyCart from '../pages/EmptyCart.tsx'
import Checkout from '../pages/Checkout.tsx'
import BecomeVendor from '../pages/BecomeVendor.tsx'
import ContactUs from '../pages/ContactUs.tsx'
import ProductInfo from '../pages/ProductInfo.tsx'
import CreateAccount from '../pages/CreateAccount.tsx'
import LoginPage from '../pages/LoginPage.tsx'
import Error from '../pages/Faq.tsx'

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
                    <Route path='/productsidebar' element={<ProductSidebar />}></Route>
                    <Route path='/emptycart' element={<EmptyCart />}></Route>
                    <Route path='/checkout' element={<Checkout />}></Route>
                    <Route path='/becomevendor' element={<BecomeVendor />}></Route>
                    <Route path='/contactus' element={<ContactUs />}></Route>
                    <Route path='/productinfo' element={<ProductInfo />}></Route>
                    <Route path='/register' element={<CreateAccount />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/error' element={<Error />}></Route>
                </Routes>
            </div>
        </>
    )
}

export default RouterConfig