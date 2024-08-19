import React from 'react'
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/Footer'
import SellerSidebarCompo from '../components/SellerSidebarCompo'

function SellerSideBar() {
    return (
        <div>
            <Header></Header>
            <SellerSidebarCompo></SellerSidebarCompo>
            <Footer></Footer>
        </div>
    )
}

export default SellerSideBar