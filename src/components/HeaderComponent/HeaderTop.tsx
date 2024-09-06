import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTop() {

    return (
        <div className="header-top-section">
            <div className="container">
                <div className="header-top">
                    <div className="header-profile">
                        <Link to={"/user-profile"}  ><span>Account</span></Link>
                        <Link to={"/order"}><span>Track Order</span></Link>
                        <Link to={"/faq"}><span>Support</span></Link>
                    </div>
                    <div className="header-contact d-none d-lg-block">
                        <a href="#">
                            <span>Need help? Call us:</span>
                            <span className="contact-number">+ 00645 4568</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop