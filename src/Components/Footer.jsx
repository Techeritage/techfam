import React from 'react';
import '../Components/CSS/Footer.css';
import Logo from '../assets/logo2.png';
import Plane from '../assets/paper-plane.svg';
import Phone from '../assets/call.svg';
import Email from '../assets/mail.svg';
import Location from '../assets/location.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/twitter.svg';
import Youtube from '../assets/youtube.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer-cont'>
        <div className='techfam'>
          <Link  to="/">
            <img src={Logo} className='logo'/>
          </Link>
          <p>       
            TechFam aims to change the skills landscape in Africa through various initiatives with objective to help African
            women acquire digital skills for today's workspaces and tomorrow's needs. We hope to influence the now and set the tone for the future.
          </p>
          <div className='techfam-sm'>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} />
            </a>
          </div>
        </div>
        <div className='links'>
          <h4>
            Quick Links
          </h4>
          <ul>
            <Link to="/blog">
              <li>
                Blog
              </li>
            </Link>
            <Link to="/apply">
              <li>
                Apply
              </li>
            </Link>
            <Link to="/termsOfService">
              <li>
                Terms of Service
              </li>
            </Link>
            <Link to="/privacyPolicy">
              <li>
                Privacy Policy
              </li>
            </Link>
            <Link to="/donate">
              <li>
                Donate
              </li>
            </Link>
          </ul>
        </div>
        <div className='contact'>
          <h4>
            Contact
          </h4>
          <div className='contact-cont'>
            <a href="tel:+2347030940388" target="_blank" rel="noopener noreferrer">
              <img src={Phone} />
              <p>+234 703 094 0388</p>
            </a>
          </div>
          <div className='contact-cont'>
            <a href="mailto:hello@techfam.online" target="_blank" rel="noopener noreferrer">
              <img src={Email} />
              <p>
                hello@techfam.online
              </p>
            </a>
          </div>
          <div className='contact-cont'>
            <a href="https://www.google.com/maps?q=Lekki, Lagos State, Nigeria" target="_blank" rel="noopener noreferrer">
              <img src={Location} />
              <p>Lekki, Lagos State, Nigeria</p>
            </a>
          </div>
        </div>
        <div className='newsletter'>
          <h4>Newsletter</h4>
          <p> Stay tuned for upcoming events and opportunities to get involved with our mission</p>
          <form>
            <div className='email-cont'>
              <input type="email" name='email' placeholder='Email Address' />
              <button>
                <img src={Plane}  />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='footer-copywrite'>
        <p>&copy; {date} Techfam | All Rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
