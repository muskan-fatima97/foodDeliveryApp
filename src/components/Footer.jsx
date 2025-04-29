import React from 'react';
import logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <h3>Foodeez.</h3>
      </div>

      <div className="footer-links">
        <a href="#email">Email</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#number">Number</a>
      </div>

      <div className="footer-right">
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
