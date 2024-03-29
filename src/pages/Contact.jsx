import React, { useState } from "react";
import { Link } from "react-router-dom";
import Phone from "../assets/call-outline.svg";
import Email from "../assets/mail-outline.svg";
import Location from "../assets/location-outline.svg";
import Facebook from "../assets/fb-contact.svg";
import Instagram from "../assets/insta-contact.svg";
import Twitter from "../assets/x-contact.svg";
import Youtube from "../assets/whats-contact.svg";

import ScrollHeader from "../Components/ScrollHeader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../Components/CSS/Contact.css";

const Contact = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
  };
  return (
    <div className="Contact">
      {mobileNav && (
        <div className="mobile-nav">
          <div className="close-cont">
            <div onClick={closeMobileNav}>&times;</div>
          </div>
          <div className="mobile-nav-link-cont">
            <ul>
              <Link to="/">
                <li>Home</li>
                <div
                  className={location.pathname === "/" ? "link-border" : ""}
                ></div>
              </Link>
              <Link to="/events">
                <li>Events</li>
                <div
                  className={
                    location.pathname === "/events" ? "link-border" : ""
                  }
                ></div>
              </Link>
              <Link to="/about">
                <li>About</li>
                <div
                  className={
                    location.pathname === "/about" ? "link-border" : ""
                  }
                ></div>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
                <div
                  className={
                    location.pathname === "/contact" ? "link-border" : ""
                  }
                ></div>
              </Link>
            </ul>
          </div>
        </div>
      )}

      <nav>
        <div>
          <Header showMobileNav={showMobileNav} />
        </div>
      </nav>
      <ScrollHeader showMobileNav={showMobileNav} />
      <main className="cc">
        <div className="contact-wrapper">
          <div className="terms-heading">
            <h2>Contact Us</h2>
          </div>

          <div className="cont-grid">
            <div className="contact-cont-w">
              <a
                href="tel:+2347030940388"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Phone} width={35} />
                <p>+234 703 094 0388</p>
              </a>
            </div>
            <div className="contact-cont-w">
              <a
                href="mailto:hello@techfam.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Email} width={35} />
                <p>hello@techfam.online</p>
              </a>
            </div>
            <div className="contact-cont-w">
              <a
                href="https://www.google.com/maps?q=Lekki, Lagos State, Nigeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Location} width={35} />
                <p>Lekki, Lagos State, Nigeria</p>
              </a>
            </div>
          </div>
          <h4>or Chat With Us On:</h4>
          <div className="contact-sm-w">
            <a href="" className="fb" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} />
            </a>
            <a
              className="insta"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} width={25} />
            </a>
            <a
              className="twit"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} width={25} />
            </a>
            <a
              className="what"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube} width={25} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
