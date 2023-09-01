import React from 'react';

// Material Kit 2 React components
import logoImage from '../assets/images/logo.png';

import { Link } from 'react-router-dom'; // Importez le composant Link


const Header = () => {
  return (
   
    <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <a href="index.html" className="logo">
              <img src={logoImage} alt="" className="ss"/>
            </a>
            <ul className="nav">
              <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
              <li className="has-sub">
                <a href="#services">Services</a>
                <ul className="sub-menu">
                  <li><Link to="/generator">Generator</Link></li>
                  <li><Link to="/paraphrase">Paraphrase</Link></li>
                  <li><Link to="/recommend">Recommendor</Link></li>
                </ul>
              </li>
              
              <li className="scroll-to-section"><a href="faqs.html">FAQs</a></li>
              
              <li className="scroll-to-section"><a href="#contact">Contact</a></li>
            </ul>
            <a className='menu-trigger'>
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
