import React from 'react'
import "../style/Hero.css"
import heroImg from "../img/img1.png"

function Hero() {
  return (
    <div id='hero-section'>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="hero-content">
                        <h1>Networking <br /> solutions for worldwide communication</h1>
                        <p>We're a company that focuses on establishing long-term relationships with customers.</p>
                        <a href="#" className='btn-hero-button'> Explore Now</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hero-image">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
