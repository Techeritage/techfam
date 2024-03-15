import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../Components/CSS/Event.css';
import ScrollHeader from '../Components/ScrollHeader';
import { events } from '../Components/constants/event';

const Events = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  }

  const closeMobileNav = () => {
    setMobileNav(false);
  }

  return (
    <div className='Events'>
      {mobileNav && (
        <div className="mobile-nav">
          <div className='close-cont'>
            <div onClick={closeMobileNav}>&times;</div>
          </div>
          <div className='mobile-nav-link-cont'>
            <ul>
              <Link to="/">
                <li>
                  Home
                </li>
                <div className={location.pathname === '/' ? 'link-border' : ''}></div>
              </Link> 
              <Link to="/events">
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
        </div>
      )}
      <nav>
        <div>
          <Header showMobileNav = {showMobileNav} />
        </div>
      </nav>
      <ScrollHeader showMobileNav = {showMobileNav} />
      <main>
        {events.map(event => (
          <Link to="/eventPage" key={event.id} state={{ eventData:event }}>
            <div className='e-card'>
            <h2>{event.title}</h2>
            </div>
            
          </Link>
        ))}
      </main>
    </div>
  )
}

export default Events
