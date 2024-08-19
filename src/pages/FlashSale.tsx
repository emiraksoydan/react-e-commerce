import React from 'react'
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/Footer'
import FlashSaleProductCompo from '../components/ProductComponent/FlashSaleProductCompo'

function FlashSale() {
    return (
        <div>
            <Header></Header>
            <FlashSaleProductCompo></FlashSaleProductCompo>
            <Footer></Footer>
        </div>
    )
}

export default FlashSale