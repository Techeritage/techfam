import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo1 from '../assets/logo1.png';
import Menubar from '../assets/menu.svg';
import '../Components/CSS/ScrollHeader.css';

const ScrollHeader = ({showMobileNav}) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowHeader(true); // Display the header when scrolled above 40px
      } else {
        setShowHeader(false); // Hide the header when scrolled below 40px
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();

  return (
    <div className='ScrollHeader'>
      <header style={{ top: showHeader ? '0' : '-50%' }}>
        <div className='logo'>
          <img src={Menubar} className='menu' onClick={() => {showMobileNav()}} />
          <Link to="/">
            <img src={Logo1} alt="website-logo" />
          </Link>
        </div>
        <div className='header-links'>
          <ul>
            <Link to="/">
              <li>
                Home
              </li>
              <div className={location.pathname === '/' ? 'link-border' : ''}></div>
            </Link> 
            <div className='are-link'>
              <li onClick={() => {scroll()}}>
                Area Of Focus
              </li>  
              <div className={location.pathname === '/areaoffocus' ? 'link-border' : ''}></div>
            </div>
            
            <Link to="/events">
              <li>
                Events
              </li>
              <div className={location.pathname === '/events' ? 'link-border' : ''}></div>
            </Link> 
            <Link to="/about">
              <li>
                About
              </li>
              <div className={location.pathname === '/about' ? 'link-border' : ''}></div>
            </Link> 
            <Link to="/contact">
              <li>
                Contact
              </li>  
              <div className={location.pathname === '/contact' ? 'link-border' : ''}></div>
            </Link> 
          </ul>
        </div>
        <div className='header-cont3'>
          <div className='donate-btn'>
            <button>
              <Link to="/donate">
                Donate
              </Link>
            </button>
          </div>
          </div>
          <div className='donate-btn mobil'>
            <button>
              <Link to="/donate">
                Donate
              </Link>
            </button> 
        </div>
      </header>
    </div>
  );
};

export default ScrollHeader;
