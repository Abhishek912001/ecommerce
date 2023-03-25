import React from 'react'
import { Link } from 'react-router-dom';

const FooterBanner = () => {
  return (
   
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
          src="https://res.cloudinary.com/nolyfe/image/upload/v1679727306/mernEcommerce/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555_svcl92.webp"
          className="footer-banner-image"
          alt="footerbanner"
        />
      </div>
    </div>
   
  )
}

export default FooterBanner