import React from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import Search from '../assets/search.svg';
import '../Components/CSS/Header.css';


const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link>
          <img src={Logo} alt="website-logo" />
        </Link>
      </div>
      <div className='header-links'>
        <ul>
          <Link>
            <li>
              About
            </li>  
          </Link> 
          <Link>
            <li>
              Area Of Focus
            </li>  
          </Link> 
          <Link>
            <li>
              Blog
            </li>  
          </Link> 
          <Link>
            <li>
              Contact
            </li>  
          </Link> 
          <Link>
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
