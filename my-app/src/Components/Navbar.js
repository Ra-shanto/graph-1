import React from 'react'
import logo from "../img/logo-dark.png" 
import "../style/Navbar.css"

function Navbar() {
  return (
    <div id="navbar">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-2">
                    <div className="site-logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="nav-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Shanto</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Manager</a></li>
                            <li><a href="#">Manage</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="nav-social-icon">
                        <a href="#"><i className='fa fa-facebook'></i></a>
                        <a href="#"><i className='fa fa-twitter'></i></a>
                        <a href="#"><i className='fa fa-instagram'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
