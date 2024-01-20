import React, { useEffect, useState } from 'react';
import '../Components/CSS/Home.css';
import Map from '../assets/map.png';
import Ribbon1 from '../assets/ribbon1.jpg';
import Ribbon2 from '../assets/ribbon2.jpg';
import Ribbon3 from '../assets/ribbon3.jpg';
import CurveText from '../assets/Curve-text.png';
import Book from '../assets/book.svg';
import Globe from '../assets/globe.svg';
import Star from '../assets/star.svg';
import Techfam1 from '../assets/techfam1.jpg';
import Techfam2 from '../assets/techfam2.jpg';
import Event1 from '../assets/event1.webp';
import Story1 from '../assets/story1.png';

const Home = () => {

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

      <section>
        <div className='hero'>
          <img src={CurveText} className='curve'/>
          <div className='text-cont'>
            <div className='text-cont-heading'>
              <h1>
                Raising Tech Giants From Among <span className='text-color'>African Women</span>
              </h1>
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
            <div className='image-cont-inner'>
              <img src={Map} />
              <img src={Ribbon1} className='ribbon1 ribbon'/>
              <img src={Ribbon2} className='ribbon2 ribbon'/>
              <img src={Ribbon3} className='ribbon3 ribbon'/>
            </div>
            
          </div>
        </div>
      </section>
      
      <section>
        <div className='area-of-focus'>
          <div className='area-of-focus-heading'>
            <h2>Our Areas of <span className='focus'>Focus</span></h2>
            <p>Empower women in tech for diversity, innovation, and equal representation.</p>
          </div>

          <div className='area-of-focus-grid'>
            <div onClick={() => {areaOfFocus(setBackground1)}} className={`grid-cont ${background1 ? 'white' : 'ash'}`}>
              <div>
                <div className='grid--img'>   
                  <img src={Book} />
                </div>
                <h3>Education</h3>
                <p>We provide education and training opportunities for African women interested in pursuing careers in tech.</p>
              </div>
              
            </div>
            <div onClick={() => {areaOfFocus(setBackground2)}} className={`grid-cont ${background2 ? 'white' : 'ash'}`}>
              <div>
                <div className='grid--img'>   
                  <img src={Star} />
                </div>
                <h3>Role Modelling</h3>
                <p>Role models are vital - when you look at someone who looks like you and understands you, they make the potential for success tangible for you.</p>
              </div>
            </div>
            <div onClick={() => {areaOfFocus(setBackground3)}} className={`grid-cont ${background3 ? 'white' : 'ash'}`}>
              <div>
                <div className='grid--img'>
                  <img src={Globe} />
                </div>
                <h3>Opportunities</h3>
                <p>We connect African women with job opportunities in tech. Also, provide resources to help them succeed.</p>
              </div>
            </div>
          </div>
        
        </div>
      </section>
      
      <section>
        <div className='about'>
          <div className='about-image-count'>
            <img src={Techfam2} className='img1' />
            <img src={Techfam1} className='img2' />
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
                  <img src={Event1} />
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
                  <img src={Event1} />
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
                  <img src={Event1} />
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
                <div className='story-img'><img src={Story1} /></div>
                <p>A.I.S.E Moments with Kelechi</p>
              </div>

              <div className='story-grid-cont'>
                <div className='story-img'><img src={Story1} /></div>
                <p>A.I.S.E Moments with Kelechi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home
