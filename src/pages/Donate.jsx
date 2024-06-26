import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/CSS/Donate.css";
import Header from "../Components/Header";
import ScrollHeader from "../Components/ScrollHeader";
import PaystackForm from "../Components/PaystackForm";
import Footer from "../Components/Footer";

const Donate = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <div className="Donate">
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
      <main className="donate-main">
        <div className="dm-cont1">
          <h1>Sponsor a <span className="gc">Girl Child</span> in Tech, Today</h1>
          <p>
            At Techfam, we're on a mission to make a positive change in Africa
            by empowering women and the girl child with essential digital skills
            for today's job market and the opportunities of tomorrow.
          </p>
          <p>
            We believe in the potential of every African girl to become a tech
            giant, and we're taking action to make it happen.
          </p>
          <p>
            We're thrilled to introduce our <i>"Sponsor a Girl Child in Tech"</i>
            initiative, and we'd love for you to join us. Your support can help
            transform not only a single life but also the future of an entire
            continent.
          </p>
          <p>Ready to be a part of this inspiring journey?</p>
        </div>
        <div className="dm-cont2">
          <PaystackForm />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Donate;
