import React from 'react'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">SMALL TEXT</p>
          <h3>MID TEXT</h3>
          <img src="https://res.cloudinary.com/nolyfe/image/upload/v1679727306/mernEcommerce/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555_svcl92.webp" alt="headphones" className="hero-banner-image" />

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
    
  )
}

export default HeroBanner

// Link element needs to be inside of BrowserRouter element for it to be rendered within the routing.