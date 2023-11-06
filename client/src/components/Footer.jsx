import React from "react";
import { AiFillGithub, AiFillLike } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Fully dynamic ecommerce website project built using mern stack.
      </p>
      <div className="icons">
        <a
          href="https://github.com/abhi-nolyfe/ecommerce-site"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <AiFillLike />
      </div>
    </div>
  );
};

export default Footer;
