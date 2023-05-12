import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';


const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, description, slug, buttonText, image } }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="footer-banner-container">
      {isLoading && <div className="spinner"><PulseLoader color="white" size={25} /></div>}
      <div className="banner-desc" style={{ display: isLoading ? 'none' : '' }}>
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
          src={image && image.length > 0 ? image[1].url : ""} alt="footer banner" className="footer-banner-image" onLoad={handleImageLoad}
        />
      </div>
    </div>
  )
}

export default FooterBanner