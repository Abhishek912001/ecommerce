import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Product = ({product: { image, name, slug, price} }) => {
  return (
    <BrowserRouter>

    <div>
      <Link to={`/product/${slug.current}`}>
          <div className="product-card">
            <img src={image && image[0]?.url}
            width={250}
            height={250}
            className="product-image"
            alt='productImage'
            />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
          </div>
      </Link>
    </div>

    </BrowserRouter>
  )
}

export default Product