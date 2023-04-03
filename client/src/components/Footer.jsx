import React from 'react';
import { AiFillGithub, AiFillLike } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 JSM Headphones All rights reserved</p>
      <p className="icons">
        <AiFillGithub />
        <AiFillLike />
      </p>
    </div>
  )
}

export default Footer