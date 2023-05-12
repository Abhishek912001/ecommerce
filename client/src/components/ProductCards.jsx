import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({product: { image, name, slug, price}, onLoad }) => {
  return (
    

    <div>
      <Link to={`/product/${slug}`}>
          <div className="product-card">
            <img src={image && image[0]?.url}
            width={250}
            height={250}
            className="product-image"
            alt='productImage'
            onLoad={onLoad} // call the onLoad prop when the image has loaded
            />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
          </div>
      </Link>
    </div>

    
  )
}

export default ProductCards