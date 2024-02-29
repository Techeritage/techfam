import React, { useState } from 'react';
import '../Components/CSS/About.css';
import Header from './Header';
import Footer from './Footer';
import About1 from '../assets/about1.jpg';
import About2 from '../assets/techfam1.jpg';
import { Link } from 'react-router-dom';
import ScrollHeader from './ScrollHeader';

const About = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  }

  const closeMobileNav = () => {
    setMobileNav(false);
  }
  return (
    <div className='about'>
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
      <div className='about-cont1'>
        <div className='about-cont1-details'>
          <h4>
            ABOUT US
          </h4>
          <h2>
            30% of the Africa's tech professionals are women
          </h2>
          <p>
            According to a report from Vanguard newspaper; In Africa, women are about 30% of the continent's tech professionals. 
            This is an evidence that the field of tech especially In Africa has been dominated by men and women show little or no interest in 
            it at all due to the fear of the unknown.
          </p>
          <p>But that is about to change…</p>
        </div>
        <div className='about-cont1-img'>
          <img src={About1} />
        </div>
      </div>
      <div className='about-cont2'>
        <div className='about-cont2-img'>
          <img src={About2} />
        </div>
        <div className='about-cont2-details'>
          <h4>AIM & OBJECTIVE</h4>
          <h2>
            TechFam strives to promote gender inclusivity in the field of technology
          </h2>
          <p>
            …foster an entrepreneurial mindset in young African women, and equip them with high-demand digital skills in order to achieve/gain
            financial independence. 
            Through collaboration with other groups, we hope to provide career opportunities for young African women.
          </p>
          <div className='donate'>
            <button>
             <a href="#">
              Apply Here
             </a>  
            </button>
          </div>
        </div>
      </div>
      <div className='about-cont3'>
        <h2>
          Because of the enormous impact of technology on society and in our daily lives
        </h2>
        <div className='about-cont3-details'>
          <div className='about-cont3-1'>
            <p>
              …the world we live in today is frequently referred to as a global village.
            </p>
            <p>
              Previously, men dominated the IT area because women preferred to focus on other physical skills such as hair styling, fashion
              design, and so on. But, as we can see, tech skills have created a lot of remote jobs in recent years; people no longer need to 
              leave their homes if they don't have to because tech skills are among the most in-demand abilities in the world today.
            </p>
            <p>
              Tech skills, would offer women the power they require to be self-sufficient. Imagine being able to order solutions to some of the 
              world's most pressing issues from the comfort of your own home or an office setting. Women are naturally problem solvers, so 
              expanding their
            </p>
          </div>
          <div className='about-cont3-2'>
            <p>
              digital skills will provide a fantastic opportunity for them to not only learn new skills but also have a significant and good 
              effect in the world.
            </p>
            <p>
              Technology has presented unimaginable opportunities. According to Sarah Lacy of The Atlantic Technology,
            </p>
            <p className='textit'>
              About half of America Technology Companies have women in Top positions. And in China it's closer to 80 percent.
            </p>
            <p>
              Taking advantage of the various skills in tech would give our African women and girls their place at the world sit with other 
              women from the developed countries which will in turn create a sustainable development in the African continent.
            </p>
          </div>
        </div>
      </div>
      <div className='about-cont4'>
        <div className='about-cont4-details'>
          <h4>
            Education
          </h4>
          <p>
            We provide education and training opportunities for African women interested in pursuing careers in tech.
          </p>
        </div>
        <div className='about-cont4-details'>
          <h4>
            Role Modeling
          </h4>
          <p>
            Role models are vital - when you look at someone who looks like you and understands you, they make the potential for success 
            tangible for you.
          </p>
        </div>
        <div className='about-cont4-details'>
          <h4>
            Opportunities
          </h4>
          <p>
            We connect African women with job opportunities in tech. Also, provide resources to help them succeed.
          </p>
        </div>
      </div>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default About
