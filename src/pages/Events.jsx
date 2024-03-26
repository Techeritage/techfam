import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../Components/CSS/Event.css";
import ScrollHeader from "../Components/ScrollHeader";
import { events } from "../Components/constants/event";
import Footer from "../Components/Footer";

const Events = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <div className="Events">
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
              <Link to="/blog">
                <li>Blog</li>
                <div
                  className={location.pathname === "/blog" ? "link-border" : ""}
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
      <div className="">
        <h2 className="event-heading eve">Events</h2>
      </div>
      <main>
        {events.map((event, index) => (
          <Link
            className="eventOne-link"
            to={`/eventPage`}
            key={index}
            state={{ eventData: event }}
          >
            <div className="eventOne-grid-cont">
              <div className="eventOne-img">
                <img src={event.image} loading="lazy" />
              </div>
              <div className="eventOne-info">
                <h4>{event.title}</h4>
                <p className="date">
                  {event.date} <span> | </span> {event.address}
                </p>
                <div className="text">{event.highlight}</div>
                <p className="see-more">See more</p>
              </div>
            </div>
          </Link>
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Events;
