import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

const HeroBanner = ({ heroBanner: { slug, largeText1, smallText, midText, description, buttonText, image } }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="hero-banner-container">
      {isLoading && <div className="spinner"><PulseLoader color="#f02d34" size={25} /></div>}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={image && image.length > 0 ? image[0].url : ""} alt="hero banner" className="hero-banner-image" onLoad={handleImageLoad} />

        <div>
          <Link to={`/product/${slug}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;

// Link element needs to be inside of BrowserRouter element for it to be rendered within the routing.