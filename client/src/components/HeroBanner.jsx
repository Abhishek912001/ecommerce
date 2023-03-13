import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <BrowserRouter>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">SMALL TEXT</p>
          <h3>MID TEXT</h3>
          <img src="" alt="headphones" className="hero-banner-image" />

          <div>
              <Link to="#">
                <button type="button">BUTTON TEXT</button>
              </Link>
              <div className="desc">
                <h5>Description</h5>
                <p>DESCRIPTION</p>
              </div>
          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default HeroBanner

// Link element needs to be inside of BrowserRouter element for it to be rendered within the routing.