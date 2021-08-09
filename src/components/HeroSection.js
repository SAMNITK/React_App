import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Button1 } from './Button1';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <Link to='/'>
              <img
                className = "nav_logo"
                src = {require('../Images/Logo.png')}
                alt = ""
                />
      </Link>
      <small className = "salogan">Capturing Moments From Today… Creating Memories For a Lifetime.</small>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT_US
        </Button>
        <Button1
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE_US
        </Button1>
      </div>
      <p><br></br><br></br><br></br></p>
    </div>
  );
}

export default HeroSection;
