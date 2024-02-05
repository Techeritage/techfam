import React, { useEffect, useRef, useState } from 'react';
import '../Components/CSS/Home.css';
import Map from '../assets/map2.png';
import CurveText from '../assets/Curve-text.png';
import Book from '../assets/book.svg';
import Globe from '../assets/globe.svg';
import Star from '../assets/star.svg';
import Techfam1 from '../assets/techfam1.jpg';
import Techfam2 from '../assets/techfam2.jpg';
import Event1 from '../assets/event1.webp';
import Story1 from '../assets/story1.png';
import CEO from '../assets/ceo1.webp';
import Arrow1 from '../assets/arrow1.svg';
import Chatbox from '../assets/chatbox.svg';
import Techfam3 from '../assets/techfam3.webp';
import Techfam4 from '../assets/techfam4.webp';
import Techfam5 from '../assets/techfam5.webp';
import Ball from '../assets/ball.png';
import Header from './Header';
import Footer from './Footer';



const Home = () => {
  //hero text animation 
  const textToType = 'Raising Tech Giants From Among <span class="text-color">African Women</span>';

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 50;

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


 /* useEffect(()=> {
    console.log('Typing Animation Effect');
    let currentIndex = 0;
    const typingInterval = 100;

    let animatedTyping = setInterval(() => {
      console.log('Updating displayedText:', textToType.slice(0, currentIndex));
      setDisplayedText(textToType.slice(0, currentIndex));
      currentIndex++;

      if(currentIndex > textToType.length) {
        clearInterval(animatedTyping);
      }
    }, typingInterval);
    
    return () => {
      console.log('Cleaning up Typing Animation');  
      clearInterval(animatedTyping);
    }

  }, [textToType]); */

  //scroll to view for arae of focus
  const areaRef = useRef(null);
  //scroll to view function
  const scroll = () => {
    areaRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  //useState for each divs
  const [background1,setBackground1] = useState(false);
  const [background2,setBackground2] = useState(false);
  const [background3,setBackground3] = useState(false);

  useEffect(() => {

    setBackground1(true);

  }, []);

  const areaOfFocus = (setFunction) => {
    setBackground1(false);
    setBackground2(false);
    setBackground3(false);

    setFunction(true);
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
            <img src={Ball} className='ball' />
          </div>
          
          <div className='text-cont'>
            <div className='text-cont-heading'>
              <img src={Map} />
              <h1 dangerouslySetInnerHTML={{ __html: displayedText }} />
            </div>
            <div className='text-cont-text'>
              <p>
                TechFam aims to change the skills landscape in Africa through various initiatives with objective to help African 
                acquire digital skills for today's workspaces and tomorrow's needs. We hope to influence the now and set the tone for the future.
              </p>
            </div>
            <div className='donate'>
              <button>
                Apply Now
              </button> 
            </div>
          </div>
          <div className='image-cont'>
           {/*
              <div className='image-cont-inner'>
              <img src={Map} />
              <img src={Ribbon1} className='ribbon1 ribbon'/>
              <img src={Ribbon2} className='ribbon2 ribbon'/>
              <img src={Ribbon3} className='ribbon3 ribbon'/>
              </div> 
           */}
           <div className='image-cont-inner'>
              <div className='in-border'></div>
              <img src={CEO} />
              <div className='name-title'>
                <h3>Miss Kelechi Udeh</h3>
                <p>CEO, TechFam.</p>
            </div>
           </div>
           
          </div>
        </div>
      </section>
      <section>
        <div className='about1'>
          <div className='about1-img-cont'>
            <div className='about1-inner'>
              <img src={Techfam1} className='imga'/>
              <img src={Techfam2} className='imgb'/>
            </div>
           
          </div>
          <div className='about1-text-cont'>
           <h4>Welcome to Techfam</h4>
           <h2>
            Who are we?
           </h2>
           <p className='str-text'>
            TechFam strives to promote gender inclusivity in the field of technology
           </p>
           <p>
            we foster an entrepreneurial mindset in young African women, and equip them with high-demand digital skills in order to achieve/gain 
            financial independence. Through collaboration with other groups, we hope to provide career opportunities for young African women.
           </p>
          </div>
        </div>
      </section>
      <section>
        <div className='area-of-focus' ref={areaRef}>
          <div className='area-of-focus-heading'>
            <h2>Our Areas of <span className='focus'>Focus</span></h2>
            <p>Empower women in tech for diversity, innovation, and equal representation.</p>
          </div>

          <div className='area-of-focus-grid'>
            <div onClick={() => {areaOfFocus(setBackground1)}} className={`grid-cont ${background1 ? 'white' : 'ash'}`}>
              <div>
                <div className='grid--img'>   
                  <img src={Book} loading='lazy' />
                </div>
                <h3>Education</h3>
                <p>We provide education and training opportunities for African women interested in pursuing careers in tech.</p>
              </div>
              
            </div>
            <div onClick={() => {areaOfFocus(setBackground2)}} className={`grid-cont ${background2 ? 'white' : 'ash'}`}>
              <div>
                <div className='grid--img'>   
                  <img src={Star} loading='lazy' />
                </div>
                <h3>Role Modelling</h3>
                <p>Role models are vital - when you look at someone who looks like you and understands you, they make the potential for success tangible for you.</p>
              </div>
            </div>
            <div onClick={() => {areaOfFocus(setBackground3)}} className={`grid-cont ${background3 ? 'white' : 'ash'}`}>
              <div>
                <div className='grid--img'>
                  <img src={Globe} loading='lazy' />
                </div>
                <h3>Opportunities</h3>
                <p>We connect African women with job opportunities in tech. Also, provide resources to help them succeed.</p>
              </div>
            </div>
          </div>
        
        </div>
      </section>
      <section>
        <div className='about-home'>
          <div className='about-image-count'>
            <img src={Techfam5} className='img1' loading='lazy' />
            <img src={Techfam4} className='img2' loading='lazy' />
          </div>
          <div className='about-text-count'>
            <h2>TechFam was founded out of a strong desire...</h2>
            <p>…to bring as many young African women and girls into the tech space as possible. We equip them with some of the most in-demand 
              skills in today's world, especially now that the world has evolved, where most women are typically independent on men to survive.</p>
            <p>The field of technology is vast, with a diverse set of talents that are both lucrative and primarily remote.</p>
            <div className='donate atcbtn'>
              <button>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
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
      <section>
        <div>
          <Footer />
        </div>
      </section>
      
    </div>
  )
}

export default Home
