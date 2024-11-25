import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Chart from './Chart'


const Root = () => {
    return (
        <>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    )
}
export default Root
