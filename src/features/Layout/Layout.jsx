import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({ children }) => {
    return (
        <div className="layoutContainer">
            <div className="layoutLeft">
                <Sidebar />
            </div>
            <div className="layoutRight">
                <div className="navbar">
                    <h1>Dashboard</h1>
                </div>
                <div className="contents">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
