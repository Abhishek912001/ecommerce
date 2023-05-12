import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ProductCards } from '../components';
import { useStateContext } from '../context/StateContext';
import { ScaleLoader } from 'react-spinners';

const ProductDetails = ({ products }) => {
  const { slug } = useParams();
  const product = products.find(product => product.slug === slug);

  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  if (!product && products.length === 0) {
    return <div className="spinner"><ScaleLoader color="#f02d34" />Loading...</div>; // or display a different message to indicate that the data is being fetched
  };

  if (!product) {
    return <div>Product not found</div>;
  };

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={product.image && product.image[index]?.url} alt="product" className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {product.image?.map((item, i) => (
              <img 
                key={i}
                src={item.url}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
                alt="small-img"
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
      
      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <ProductCards key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
