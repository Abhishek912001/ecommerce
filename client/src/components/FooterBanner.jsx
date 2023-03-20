import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';

const FooterBanner = () => {
  return (
    <BrowserRouter>
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>20% OFF</p>
          <h3>LARGE TEXT1</h3>
          <h3>LARGE TEXT2</h3>
          <p>SALE TIME</p>
        </div>
        <div className="right">
          <p>SMALL TEXT</p>
          <h3>MID TEXT</h3>
          <p>DESCRIPTION</p>
          <Link to="#">
            <button type="button">BUTTON TEXT</button>
          </Link>
        </div>

        <img
          src="https://res.cloudinary.com/dhzgt0b7q/image/upload/v1679087947/mernEcommerce/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555_o1sghf.webp"
          className="footer-banner-image"
          alt="footerbanner"
        />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default FooterBanner