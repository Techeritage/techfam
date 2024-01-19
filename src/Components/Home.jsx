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
      
    </div>
  )
}

export default Home
