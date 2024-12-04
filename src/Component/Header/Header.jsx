import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../Image/logo.jpg";



export default function Header() {
  return (
    <div className="header">
      <div className="logo">
      <Link to="/" className="home-1"><img src={logo} alt=""></img></Link>
        
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/about">ABOUT AS</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
