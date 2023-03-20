import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <BrowserRouter>
    <div className="navbar-container">
      <p className="logo">
        <Link to="/">JSM Headphones</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
    </BrowserRouter>
  )
}

export default Navbar