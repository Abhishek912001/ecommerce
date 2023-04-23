import React from 'react'
import { Link } from 'react-router-dom';


const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, description, slug, buttonText, image } }) => {

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{description}</p>
          <Link to={`/product/${slug}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={image && image.length > 0 ? image[1].url : ""} alt="footer banner" className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner