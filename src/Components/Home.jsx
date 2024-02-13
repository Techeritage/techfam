import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/CSS/Home.css';
import CurveText from '../assets/Curve-text.png';
import Book from '../assets/book.svg';
import Globe from '../assets/globe.svg';
import Star from '../assets/star.svg';
import Event1 from '../assets/event1.webp';
import Story1 from '../assets/story1.png';
import Dots from '../assets/dots.svg';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    useEffect(() => {
      const checkBoxes = () => {
        const trigger = window.innerHeight / 5 * 4;
        const sections = document.querySelectorAll('.box');
  
        sections.forEach((section) => {
          const boxTop = section.getBoundingClientRect().top;
  
          if (boxTop < trigger) {
            section.classList.add('show');
          } else {
            section.classList.remove('show');
          }
        });
      };
  
      window.addEventListener('scroll', checkBoxes);
  
      // Cleanup function to remove the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', checkBoxes);
      };
    }, []);


  //hero text animation 
  const textToType = 'Raising Tech Giants From Among <span class="text-color">African Women</span>';

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 30;

    const animatedTyping = setInterval(() => {
      const currentSlice = textToType.slice(0, currentIndex);
      setDisplayedText(currentSlice);
      currentIndex++;

      if (currentIndex > textToType.length) {
        clearInterval(animatedTyping);
      } else if (textToType[currentIndex - 1] === '<') {
        // Skip the span tag for typing animation
        currentIndex = textToType.indexOf('>', currentIndex) + 1;
      }
    }, typingInterval);

    return () => clearInterval(animatedTyping);
  }, [textToType]);

  //scroll to view for arae of focus
  const areaRef = useRef(null);
  //scroll to view function
  const scroll = () => {
    areaRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className='home'>
      <nav>
        <div>
            <Header scroll = {scroll} />
        </div>
      </nav>
  
      <section>
        <div className='hero'>
          <div className='side-curve'></div>
          <div className='curve'>
            <img src={CurveText} className='curve-text'/>
          </div>
          <div className='text-cont'>
            <div className='text-cont-heading'>
              <img srcSet='https://ik.imagekit.io/krr3p3joi/tr:w-450,h-500,fo-auto/mapmap-removebg-preview.png?updatedAt=1707429384136 1200w' />
              <h1 dangerouslySetInnerHTML={{ __html: displayedText }} />
            </div>
            <div className='text-cont-text'>
              <p className='desktop-p'>
                TechFam aims to change the skills landscape in Africa through various initiatives with objective to help African 
                acquire digital skills for today's workspaces and tomorrow's needs. We hope to influence the now and set the tone for the future.
              </p>
              <p className='mobile-p'>
                TechFam aims to reshape Africa's skills landscape, empowering Africans with digital skills for current and future workplaces.
              </p>
            </div>
            <div className='donate'>
              <button>
                Apply Now
              </button> 
            </div>
          </div>
          <div className='image-cont'>
            <div className='image-cont-inner'>
              <div className='in-border'></div>
              <img src="https://ik.imagekit.io/krr3p3joi/tr:w-300,h-600,fo-auto/ceo%20(1)%20(1).webp?updatedAt=1707346997256" />
              <div className='name-title'>
                <h3>Miss Kelechi Udeh</h3>
                <p>CEO, TechFam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='box'>
        <div className='about1'>
          <h2>
            Who we are
            <div className='waw'></div>
          </h2>
          <div className='about1-img-cont ab1-desktop'>
            <img src="https://ik.imagekit.io/krr3p3joi/tr:w-280,h-180/IMG_6168%20(1)%20(1).webp?updatedAt=1707475767385" className='imga' loading='lazy' />
            <div className='about1-inner'>
              <img src="https://ik.imagekit.io/krr3p3joi/tr:w-410,h-300/IMG_6345.jpg?updatedAt=1707566632571" className='imgb' loading='lazy' />
            </div>
            <img src={Dots} className='imgc' loading='lazy' />
          </div>
          <div className='about1-img-cont ab1-mobile'>
            <div className='ab1.inner'>
              <Carousel indicators={true}>
                <Carousel.Item>
                  <img 
                  className='d-block'
                  alt='First slide'
                  src="https://ik.imagekit.io/krr3p3joi/tr:w-340,h-200,fo-auto/IMG_6168%20(1)%20(1).webp?updatedAt=1707475767385" loading='lazy' />
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                  className='d-block'
                  alt='Second slide'
                  src="https://ik.imagekit.io/krr3p3joi/tr:w-340,h-200,fo-auto/IMG_6345.jpg?updatedAt=1707566632571" loading='lazy' />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className='about1-text-cont box'>
            
            <p className='str-text'>
              TechFam strives to promote gender inclusivity in the field of technology
            </p>
            <p>
              we foster an entrepreneurial mindset in young African women, and equip them with high-demand digital skills in order to achieve/gain 
              financial independence. Through collaboration with other groups, we hope to provide career opportunities for young African women.
            </p>
            <div className='donate'>
              <button>
                About Us
              </button>
            </div>
          </div>
         
        </div>
      </section>

      <section  className='box'>
        <div className='area-of-focus' ref={areaRef}>
          <div className='area-of-focus-heading'>
            <div>
              <h2>Our Areas of <span className='volvol'>Focus</span></h2>
            </div>
            <p>Empower women in tech for diversity, innovation, and equal representation.</p>
          </div>
          <div className='area-of-focus-grid'>
            <div className='grid-cont ash'>
              <div className='area-kk'>
                <div className='grid--img'>   
                  <img src={Book} loading='lazy' />
                </div>
                <h3>Education</h3>
                <p>We provide education and training opportunities for African women interested in pursuing careers in tech.</p>
              </div> 
            </div>
            <div className='grid-cont white'>
              <div className='area-kk'>
                <div className='grid--img'>
                  <img src={Globe} loading='lazy' />
                </div>
                <h3>Opportunities</h3>
                <p>We connect African women with job opportunities in tech. Also, provide resources to help them succeed.</p>
              </div>
            </div>
            <div className='grid-cont ash'>
              <div className='area-kk'>
                <div className='grid--img'>   
                  <img src={Star} loading='lazy' />
                </div>
                <h3>Role Modelling</h3>
                <p>Role models are vital - when you look at someone who looks like you and understands you, they make the potential for success tangible for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='box'>
        <div className='about-home'>
          <div className='about-image-count'>
            <img src='https://ik.imagekit.io/krr3p3joi/tr:w-300,h-400,fo-auto/IMG_6363%20(1).webp?updatedAt=1707429460862' className='img1' loading='lazy' />
            <img src='https://ik.imagekit.io/krr3p3joi/tr:w-300,h-400,fo-auto/IMG_6202%20(1)%20(1).webp?updatedAt=1707429462023' className='img2' loading='lazy' />
          </div>
          <div className='about-text-count'>
            <h2>At TechFam, our journey began with a profound mission...</h2>
            <p>
              ...to empower African women with tech skills, bridging industry gaps. As norms evolve, our mission gains significance, 
              fostering diversity and leadership.
            </p>
            <p>
              Your donation drives our mission to empower female tech leaders and create an inclusive tech community. 
              Join us in realizing women's full potential in the digital age.
            </p>
            <div className='donate atcbtn'>
              <button>
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='box'>
        <div className='volunteer'>
          <div className='volunteer-text-cont'>
            <h2>
              Empower Change: <span className='volvol'>Volunteer</span> Today
            </h2>
            <p>
            At <span>Techfam</span>, we believe in the power of community and the impact that volunteers can make in changing lives. 
            Join us in our mission to empower African women through technology education and make a difference in the world.
            </p>
            <div className='donate'>
              <button>Get Started</button>
            </div>
            
          </div>
          <div className='volunteer-img-cont'>
            <img src="https://ik.imagekit.io/krr3p3joi/tr:w-100,h-350,fo-auto/8702816_3979852.jpg?updatedAt=1707471459804" loading='lazy'/>
          </div>
        </div>
      </section>

      <section className='box'>
        <div className='stories-event'>
          <div className='event'>
            <div className='event-heading'>
              <h2>Upcoming Events</h2>
              <div className='bottom-border'></div>
            </div>
            <div className='event-grid'>
              <div className='event-grid-cont'>
                <div className='event-img'>
                  <img src={Event1} loading='lazy' />
                </div>
                <div className='event-info'>
                  <h4>Training for women</h4>
                  <p className='date'>Aug 25, 2018 <span> | </span> Surulere, Lagos</p>
                  <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className='event-grid-cont'>
                <div className='event-img'>
                  <img src={Event1} loading='lazy' />
                </div>
                <div className='event-info'>
                  <h4>Training for women</h4>
                  <p className='date'>Aug 25, 2018 <span> | </span> Surulere, Lagos</p>
                  <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className='event-grid-cont'>
                <div className='event-img'>
                  <img src={Event1} loading='lazy' />
                </div>
                <div className='event-info'>
                  <h4>Training for women</h4>
                  <p className='date'>Aug 25, 2018 <span> | </span> Surulere, Lagos</p>
                  <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className='stories'>
            <div className='event-heading'>
              <h2>Featured stories</h2>
              <div className='bottom-border'></div>
            </div>
            <div className='event-grid'>
              <div className='story-grid-cont'>
                <div className='story-img'><img src={Story1} loading='lazy' /></div>
                <p>A.I.S.E Moments with Kelechi</p>
              </div>

              <div className='story-grid-cont'>
                <div className='story-img'><img src={Story1} loading='lazy' /></div>
                <p>A.I.S.E Moments with Kelechi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='box'>
        <div>
          <Footer />
        </div>
      </section> 
    </div>
  )
}

export default Home
