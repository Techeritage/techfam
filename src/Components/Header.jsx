import React, { useEffect, useRef, useState } from 'react';
import Logo1 from '../assets/logo1.png';
import { Link, useLocation } from 'react-router-dom';
import Search from '../assets/search.svg';
import Menubar from '../assets/menu.svg';
import '../Components/CSS/Header.css';

const Header = ({scroll}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element is in view');
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    
    <div className={`header ${isVisible ? 'visible' : ''}`} ref={elementRef}>
      <div className='logo'>
        <img src={Menubar} className='menu' />
        <Link to="/">
          <img src={Logo1} alt="website-logo" />
        </Link>
      </div>
      <div className='header-links'>
        <ul>
          <div className='are-link'>
            <li onClick={() => {scroll()}}>
              Area Of Focus
            </li>  
            <div className={location.pathname === '/areaoffocus' ? 'link-border' : ''}></div>
          </div>
          
          <Link to="events">
            <li>
              Events
            </li>
            <div className={location.pathname === '/events' ? 'link-border' : ''}></div>
          </Link> 
          <Link to="/blog">
            <li>
              Blog
            </li>
            <div className={location.pathname === '/blog' ? 'link-border' : ''}></div>
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
        <img src={Search} alt="a search icon" />
        <div className='donate-btn'>
          <button>
            Donate
          </button>
        </div>
      </div>
      <div className='donate-btn mobil'>
          <button>
            Donate
          </button>
        </div>
    </div>
  )
}

export default Header
