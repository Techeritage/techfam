import { Link, useLocation } from "react-router-dom";
import Event1 from "../assets/event1.webp";
import "../Components/CSS/OneEventPage.css";
import Header from "../Components/Header";
import clock from "../assets/clock.png";
import date from "../assets/notepad.png";
import venue from "../assets/venue.png";
import { useState } from "react";
import ScrollHeader from "../Components/ScrollHeader";
import Footer from "../Components/Footer";

const OneEventPage = () => {
  const location = useLocation();
  const eventData = location.state.eventData;

  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <div className="oneEvent">
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
          <Header scroll={scroll} showMobileNav={showMobileNav} />
        </div>
      </nav>
      <ScrollHeader showMobileNav={showMobileNav} />
      <main className="oneEvent-grid">
        <div className="oeg-1">
          <h4 className="eee">EVENTS</h4>
          <h1>{eventData.title}</h1>
        </div>
        <div className="oeg-2">
          <img className="img" src={eventData.image} alt={eventData.title} />
          <div className="det-e">
            <p className="time">
              <span>
                <img src={clock} alt="clock icon" width={20} />
              </span>
              {eventData.date}, {eventData.time}
            </p>
            <p className="time">
              <span>
                <img src={venue} alt="clock icon" width={20} />
              </span>
              {eventData.address}
            </p>
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: eventData.description }}
            ></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OneEventPage;
