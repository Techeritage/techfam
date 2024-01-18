import React from 'react';
import Logo from '../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import Search from '../assets/search.svg';
import '../Components/CSS/Header.css';



const Header = () => {
  const location = useLocation();
  return (
    <div className='header'>
      <div className='logo'>
        <Link to="/">
          <img src={Logo} alt="website-logo" />
        </Link>
      </div>
      <div className='header-links'>
        <ul>
          <Link to="/about">
            <li>
              About
            </li>
            <div className={location.pathname === '/about' ? 'link-border' : ''}></div>
          </Link> 
          <Link to="/areaoffocus">
            <li>
              Area Of Focus
            </li>  
            <div className={location.pathname === '/areaoffocus' ? 'link-border' : ''}></div>
          </Link> 
          <Link to="/blog">
            <li>
              Blog
            </li>  
          </Link> 
          <Link to="/contact">
            <li>
              Contact
            </li>  
          </Link> 
          <Link to="events">
            <li>
              Events
            </li>  
          </Link> 
        </ul>
      </div>
      <div className='header-cont3'>
        <img src={Search} alt="a search icon" />
        <div className='donate-btn'>
          <button>
            Donate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
