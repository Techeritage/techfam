import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/CSS/Home.css";
import CurveText from "../assets/Curve-text.png";
import Book from "../assets/book.svg";
import Globe from "../assets/globe.svg";
import Star from "../assets/star.svg";
import Footer from "../Components/Footer";
import ScrollHeader from "../Components/ScrollHeader";
import { Link } from "react-router-dom";
import { events } from "../Components/constants/event";
import Header from "../Components/Header";

const Home = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
  };

  useEffect(() => {
    const checkBoxes = () => {
      const trigger = (window.innerHeight / 5) * 4.5;
      const sections = document.querySelectorAll(".box");

      sections.forEach((section) => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < trigger) {
          section.classList.add("show");
        } else {
          section.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", checkBoxes);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  //hero text animation
  const textToType =
    'African Women <span class="text-color">Digital <br />  Skills Acquisition <br /> </span>Initiative';

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 30;

    const animatedTyping = setInterval(() => {
      const currentSlice = textToType.slice(0, currentIndex);
      setDisplayedText(currentSlice);
      currentIndex++;

      if (currentIndex > textToType.length) {
        clearInterval(animatedTyping);
      } else if (textToType[currentIndex - 1] === "<") {
        // Skip the span tag for typing animation
        currentIndex = textToType.indexOf(">", currentIndex) + 1;
      }
    }, typingInterval);

    return () => clearInterval(animatedTyping);
  }, [textToType]);

  //scroll to view for arae of focus
  const areaRef = useRef(null);
  //scroll to view function
  const scroll = () => {
    areaRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const threeEvents = events.slice(0, 4);

  return (
    <div className="home">
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
      <section>
        <div className="hero">
          <div className="side-curve"></div>
          <div className="curve">
            <img src={CurveText} className="curve-text" />
          </div>
          <div className="text-cont">
            <div className="text-cont-heading">
              <h1 dangerouslySetInnerHTML={{ __html: displayedText }} />
            </div>
            <div className="text-cont-text">
              <p className="desktop-p">
                TechFam aims to change the skills landscape in Africa through
                various initiatives with objective to help African acquire
                digital skills for today's workspaces and tomorrow's needs. We
                hope to influence the now and set the tone for the future.
              </p>
              <p className="mobile-p">
                TechFam aims to reshape <br></br> Africa's skills landscape,
                <br></br> empowering Africans <br></br> with digital skills for{" "}
                <br></br> current and future <br></br> workplaces.
              </p>
            </div>
            <div className="donate">
              <button>
                <a href="#">Apply Now</a>
              </button>
            </div>
          </div>
          <div className="image-cont">
            <div className="image-cont-inner">
              <div className="in-border">
                <img src="https://ik.imagekit.io/krr3p3joi/IMG_9516-removebg-preview%20(1).png?updatedAt=1710541760641" />
              </div>

              <div className="name-title">
                <div>
                  <h3>Kelechi C Udeh</h3>
                  <p>Founder, TechFam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box">
        <div className="about1">
          <div className="about1-img-cont ab1-desktop">
            <img
              src="https://ik.imagekit.io/krr3p3joi/tr:w-280,h-180/IMG_6168%20(1)%20(1).webp?updatedAt=1707475767385"
              className="imga"
              loading="lazy"
            />
            <div className="about1-inner">
              <img
                src="https://ik.imagekit.io/krr3p3joi/tr:w-410,h-300/IMG_6345.jpg?updatedAt=1707566632571"
                className="imgb"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about1-text-cont">
            <h2 className="about1-h2-desk">Who we are</h2>
            <p className="str-text">
              TechFam strives to promote gender inclusivity in the field of
              technology
            </p>
            <p>
              we foster an entrepreneurial mindset in young African women, and
              equip them with high-demand digital skills in order to
              achieve/gain financial independence. Through collaboration with
              other groups, we hope to provide career opportunities for young
              African women.
            </p>
            <div className="donate">
              <button>
                <Link to="/about">About Us</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="box">
        <div className="area-of-focus" ref={areaRef}>
          <div className="area-of-focus-heading">
            <div>
              <h2>Our Areas of Focus</h2>
            </div>
            <p>
              Empower women in tech for diversity, innovation, and equal
              representation.
            </p>
          </div>
          <div className="area-of-focus-grid">
            <div className="grid-cont ash box">
              <div className="area-kk">
                <div className="grid--img">
                  <img src={Book} loading="lazy" />
                </div>
                <h3>Education</h3>
                <p>
                  We provide education and training opportunities for African
                  women interested in pursuing careers in tech.
                </p>
              </div>
            </div>
            <div className="grid-cont white box">
              <div className="area-kk">
                <div className="grid--img">
                  <img src={Globe} loading="lazy" />
                </div>
                <h3>Opportunities</h3>
                <p>
                  We connect African women with job opportunities in tech. Also,
                  provide resources to help them succeed.
                </p>
              </div>
            </div>
            <div className="grid-cont ash box">
              <div className="area-kk">
                <div className="grid--img">
                  <img src={Star} loading="lazy" />
                </div>
                <h3>Role Modelling</h3>
                <p>
                  Role models are vital - when you look at someone who looks
                  like you and understands you, they make the potential for
                  success tangible for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box">
        <div className="about-home">
          <div className="about-image-count">
            <img
              src="https://ik.imagekit.io/krr3p3joi/tr:w-300,h-400,fo-auto/IMG_6363%20(1).webp?updatedAt=1707429460862"
              className="img1"
              loading="lazy"
            />
            <img
              src="https://ik.imagekit.io/krr3p3joi/tr:w-300,h-400,fo-auto/IMG_6202%20(1)%20(1).webp?updatedAt=1707429462023"
              className="img2"
              loading="lazy"
            />
          </div>
          <div className="about-home-bk">
            <div className="ab-inner mobile">
              <Carousel indicators={true}>
                <Carousel.Item>
                  <img
                    className="d-block"
                    alt="First slide"
                    src="https://ik.imagekit.io/krr3p3joi/tr:w-700,h-800,fo-auto/IMG_6202%20(1)%20(1).webp?updatedAt=1707429462023"
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    alt="Second slide"
                    src="https://ik.imagekit.io/krr3p3joi/tr:w-700,h-800,fo-auto/IMG_6345.jpg?updatedAt=1707566632571"
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    alt="Third slide"
                    src="https://ik.imagekit.io/krr3p3joi/tr:w-700,h-800,fo-auto/IMG_6168%20(1)%20(1).webp?updatedAt=1707475767385"
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    alt="Fourth slide"
                    src="https://ik.imagekit.io/krr3p3joi/tr:w-700,h-800,fo-auto/IMG_6363%20(1).webp?updatedAt=1707429460862"
                    loading="lazy"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="ab-inner desktop">
              <Carousel indicators={true}>
                <Carousel.Item>
                  <img
                    className="d-block"
                    alt="First slide"
                    src="https://ik.imagekit.io/krr3p3joi/tr:w-1000,h-700,fo-auto/IMG_6202%20(1)%20(1).webp?updatedAt=1707429462023"
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    alt="Second slide"
                    src="https://ik.imagekit.io/krr3p3joi/tr:w-1000,h-700,fo-auto/IMG_6345.jpg?updatedAt=1707566632571"
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    alt="Third slide"
                    src="https://ik.imagekit.io/krr3p3joi/tr:w-1000,h-700,fo-auto/IMG_6168%20(1)%20(1).webp?updatedAt=1707475767385"
                    loading="lazy"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    alt="Fourth slide"
                    src="https://ik.imagekit.io/krr3p3joi/tr:w-1000,h-700,fo-auto/IMG_6363%20(1).webp?updatedAt=1707429460862"
                    loading="lazy"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="about-text-count">
              <div className="atc-inner">
                <h2>
                  At TechFam, our journey began with a profound mission...
                </h2>
                <p>
                  ...to empower African women with tech skills, bridging
                  industry gaps. As norms evolve, our mission gains
                  significance, fostering diversity and leadership.
                </p>
                <p>
                  Your donation drives our mission to empower female tech
                  leaders and create an inclusive tech community. Join us in
                  realizing women's full potential in the digital age.
                </p>
                <div className="donate atcbtn">
                  <button>
                    <Link to="/donate">Donate Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box">
        <div className="volunteer">
          <div className="volunteer-text-cont">
            <h2>
              Empower Change: <span className="volvol">Volunteer</span> Today
            </h2>
            <div className="volunteer-img-cont mobile">
              <img
                src="https://ik.imagekit.io/krr3p3joi/tr:w-500,h-250,fo-auto/8702816_3979852.jpg?updatedAt=1707471459804"
                loading="lazy"
              />
            </div>
            <p>
              At <span>Techfam</span>, we believe in the power of community and
              the impact that volunteers can make in changing lives. Join us in
              our mission to empower African women through technology education
              and make a difference in the world.
            </p>
            <div className="donate">
              <button>
                <a href="#">Volunteer</a>
              </button>
            </div>
          </div>
          <div className="volunteer-img-cont desktop">
            <img
              src="https://ik.imagekit.io/krr3p3joi/tr:w-500,h-300,fo-auto/8702816_3979852.jpg?updatedAt=1707471459804"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="stories-event">
          <div className="event box">
            <div className="event-heading">
              <h2>Events</h2>
            </div>
            <div className="event-grid">
              {threeEvents.map((event, index) => (
                <Link
                  className="event-link"
                  to={`/eventPage`}
                  key={index}
                  state={{ eventData: event }}
                >
                  <div className="event-grid-cont">
                    <div className="event-img">
                      <img src={event.image} loading="lazy" />
                    </div>
                    <div className="event-info">
                      <h4>{event.title}</h4>
                      <p className="date">
                        {event.date} <span> | </span> {event.address}
                      </p>
                      <p className="text">{event.highlight}</p>
                      <p className="see-more">
                        <Link to={"/eventPage"}></Link>See more
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="view-more">
              <button>
                <Link to="/events">View More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="box">
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;
