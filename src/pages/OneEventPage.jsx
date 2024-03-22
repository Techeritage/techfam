import { Link, useLocation } from "react-router-dom";
import Event1 from '../assets/event1.webp';
import '../Components/CSS/OneEventPage.css';
import Header from "../Components/Header";
import clock from "../assets/clock.png";
import date from "../assets/notepad.png";
import { useState } from "react";
import ScrollHeader from "../Components/ScrollHeader";

const OneEventPage = () => {
  const location = useLocation();
  const eventData = location.state.eventData;

  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  }

  const closeMobileNav = () => {
    setMobileNav(false);
  }

  function renderIcon() {
    switch (eventData.image) {
      case 'Event1':
        return Event1;
      default:
        return null;
    }
  }
  
  return (
    <div className="oneEvent">
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
            <Header scroll = {scroll} showMobileNav = {showMobileNav} />
        </div>
      </nav>
      <ScrollHeader showMobileNav = {showMobileNav} />
      <div className="oneEvent-grid">
        <div className="oeg-1">
          <img src={renderIcon(eventData.image)} alt={eventData.title} />
        </div>
        <div className="oeg-2">
          <h1>{eventData.title}</h1>
          <p className="time"><span><img src={clock} alt="clock icon" width={20} /></span>{eventData.date}</p>
          <p className="time"><span><img src={date} alt="clock icon" width={20} /></span>{eventData.time}</p>
          <p className="desc">{eventData.description}</p>
          <p className="link">To participate in this event, click the link: <span><a href="#">Training for children</a></span> </p>
        </div>
      </div>
    </div>
  )
}

export default OneEventPage;
