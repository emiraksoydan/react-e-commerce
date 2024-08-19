import React from 'react'
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/Footer'
import Login from '../components/AuthComponent/Login'

function LoginPage() {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
        </div>
    )
}

export default LoginPage