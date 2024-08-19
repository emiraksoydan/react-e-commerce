import React from 'react'
import HeaderSearch from '../HeaderSearch'
import HeaderCompaire from '../HeaderCompaire'
import HeaderFavorite from '../HeaderFavorite'
import HeaderCart from './HeaderCart'
import HeaderUser from '../HeaderUser'
import { Link } from 'react-router-dom'

function HeaderCenter() {
    return (
        <div className="header-center-section d-none d-lg-block">
            <div className="container">
                <div className="header-center">
                    <div className="logo">
                        <Link to={"/"}>
                            <img src="../assets/images/logos/logo.webp" alt="logo" />
                        </Link>
                    </div>
                    <div className="header-cart-items">
                        <HeaderSearch></HeaderSearch>
                        <HeaderCompaire></HeaderCompaire>
                        <HeaderFavorite></HeaderFavorite>
                        <HeaderCart></HeaderCart>
                        <HeaderUser></HeaderUser>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCenter