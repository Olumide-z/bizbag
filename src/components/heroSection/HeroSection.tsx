import React from 'react';
import './heroSection.css';
import { Button } from '../'

const HeroSection = () => {
  return (
    <div className="hero">

        <div className="hero__leftSide">
            <h1>BIZBAG - CENTERED <br/>DESIGN & TECHNOLOGY</h1>
            <p>It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <Button />  
        </div>

        <div className="hero__rightSide">
            <div className="hero__rightSide-img">
                <img src='/assets/01.svg' alt='hero-image' />
            </div>
            <img src="/assets/03.png" className='dots img1' alt="hero-image2" />
            <img src="/assets/03.png" className='dots img2' alt="hero-image3" />
            <img src="/assets/03.png" className='dots img3' alt="hero-image4" />
        </div>
        
    </div>
  )
}

export default HeroSection