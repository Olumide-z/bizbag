import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Title } from '..';
import { data } from '../testimonial/data'
import './testimonial.css';

const Testimonial = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return (
    <div className="testimonials">
        <Title subHeading='From our clients' title='Client Testimonials'/>
        
        <div className="testimonials__carousel">
        <Slider {...settings}>
            {data.map((item) => (
                <div key={item.id} className='carousel__wrapper'>
                    <div className="testimonals__carousel-img">
                        <img src={item.image} alt="testimonials-images" />
                    </div>
                    <p className='testimonals__carousel-text'>{item.text}</p>
                    <h3>{item.name}</h3>
                    <p>{item.occupation}</p>
                </div>
            ))}
        </Slider>
        </div>

    </div>
  )
}

export default Testimonial