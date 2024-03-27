import React, { useState } from 'react';
import '../Components/CSS/TermOfService.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import ScrollHeader from '../Components/ScrollHeader';

const TermsOfService = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  }

  const closeMobileNav = () => {
    setMobileNav(false);
  }
  return (
    <div className='terms-of-service'>
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
      <div className='term-full-cont'>
        <div className='terms-date'>
          <p>Updated on: January 10, 2023</p>
        </div>
        <div className='terms-heading'>
          <h2>Terms of Service</h2>
        </div>
        <div className='terms-whole-cont'>
          <div className='terms-cont'>
            <h3>1. Terms</h3>
            <p>
              By accessing this Website, accessible from https://techfam.online, you are agreeing to be bound by these Website Terms and
              Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any 
              of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright 
              and trade mark law.
            </p>
          </div>
          <div className='terms-cont'>
            <h3>2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials on TechFam's Website for personal, non-commercial transitory 
              viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on TechFam's Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transferring the materials to another person or “mirror” the materials on any other server.</li>
            </ul>
            <p>
              This will let TechFam to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be 
              terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
            </p>
          </div>
          <div className='terms-cont'>
            <h3>3. Disclaimer</h3>
            <p>
              All the materials on TechFam's Website are provided “as is”. TechFam makes no warranties, may it be expressed or implied, therefore 
              negates all other warranties. Furthermore, TechFam does not make any representations concerning the accuracy or reliability of the 
              use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
            </p>
          </div>
          <div className='terms-cont'>
            <h3>4. Limitations</h3>
            <p>
              TechFam or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials 
              on TechFam's Website, even if TechFam or an authorize representative of this Website has been notified, orally or written, of the 
              possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for 
              incidental damages, these limitations may not apply to you.
            </p>
          </div>
          <div className='terms-cont'>
            <h3>5. Revisions and Errata</h3>
            <p>
              The materials appearing on TechFam's Website may include technical, typographical, or photographic errors. TechFam will not promise
              that any of the materials in this Website are accurate, complete, or current. TechFam may change the materials contained on its 
              Website at any time without notice. TechFam does not make any commitment to update the materials.
            </p>
          </div>
          <div className='terms-cont'>
            <h3>6. Links</h3>
            <p>
              TechFam has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The 
              presence of any link does not imply endorsement by TechFam of the site. The use of any linked website is at the user's own risk.
            </p>
          </div>
          <div className='terms-cont'>
            <h3>7. Site Terms of Use Modifications</h3>
            <p>
              TechFam may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be
              bound by the current version of these Terms and Conditions of Use.
            </p>
          </div>
          <div className='terms-cont'>
            <h3>8. Your Privacy</h3>
            <p>
              Please read our <Link to="/privacyPolicy">Privacy Policy.</Link>
            </p>
          </div>
          <div className='terms-cont'>
            <h3>9. Governing Law</h3>
            <p>
              Any claim related to TechFam's Website shall be governed by the laws of Federal Republic of Nigeria without regards to its conflict of
              law provisions.
            </p>
          </div>
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

export default TermsOfService
