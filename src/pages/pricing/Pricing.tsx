import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Accordion, Header, Title } from '../../components'
import './pricing.css';

const Pricing = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 750,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="pricing">
      <Header 
        image='/assets/pricing.png'
        text1='Home'
        text2='Pricing Plan'
        title='Pricing Plan'
        icon={<FaHome />}
      />

      <div className="pricing__price">
        <Title 
          subHeading='Get Idea About'
          text='It is a long established fact that a reader will be distracted'
          title='Our Pricing Plan'
        />
        <div className="pricing__price-cards">

          <div className='pricing__price-cards_card'>
            <h3>Personal</h3>
            <p className='pricing__price-cards_card-price'><span>19$</span>/Per Month</p>
            <div>
              <p><BsFillCheckCircleFill className='price_check'/>Ut eu lectus consequat.</p>
              <p><BsFillCheckCircleFill className='price_check'/>Aenean a neque.</p>
              <p><BsFillCheckCircleFill className='price_check'/>Aenean lacinia porttitor.</p>
              <p><MdCancel className='price_cancel'/> Unknown printer took</p>
              <p><MdCancel className='price_cancel'/>Embarrassing hidden</p>
            </div>
            <button className='btn-dark'>Choose Plan</button>
          </div>

          <div className='pricing__price-cards_card black'>
            <h3>Business</h3>
            <p className='pricing__price-cards_card-price'><span>49$</span>/Per Month</p>
            <div>
              <p><BsFillCheckCircleFill className='price_check white'/>Ut eu lectus consequat.</p>
              <p><BsFillCheckCircleFill className='price_check white'/>Aenean a neque.</p>
              <p><BsFillCheckCircleFill className='price_check white'/>Aenean lacinia porttitor.</p>
              <p><MdCancel className='price_cancel'/> Unknown printer took</p>
              <p><MdCancel className='price_cancel'/>Embarrassing hidden</p>
            </div>
            <button className='btn-yellow'>Choose Plan</button>
          </div>

          <div className='pricing__price-cards_card'>
            <h3>Enterprice</h3>
            <p className='pricing__price-cards_card-price'><span>29$</span>/Per Month</p>
            <div>
              <p><BsFillCheckCircleFill className='price_check'/>Ut eu lectus consequat.</p>
              <p><BsFillCheckCircleFill className='price_check'/>Aenean a neque.</p>
              <p><BsFillCheckCircleFill className='price_check'/>Aenean lacinia porttitor.</p>
              <p><MdCancel className='price_cancel'/> Unknown printer took</p>
              <p><MdCancel className='price_cancel'/>Embarrassing hidden</p>
            </div>
            <button className='btn-dark'>Choose Plan</button>
          </div>
        </div>
      </div>

      <div className="pricing__planning">
          <div className="pricing__planning-img">
            <img src="/assets/planning.png" alt="planning" />
          </div>

          <div className="pricing__planning-right">
            <Title 
              subHeading='Master Stroke'
              title='Project & Strategy Planning'
            />
            <div className="pricing__planning-right_accordion">
              <Accordion />
            </div>
          </div>
      </div>

      <div className="pricing__clients">
        <Title 
            subHeading='They Trust Us'
            title='Our Clients'
            text="Simply dummy has been the industry's standard dummy text."
        />

      <div className="pricing__clients-slider">
        <Slider {...settings}>
            <div><img src="/assets/pc1.png" alt="pc-image" /></div>
            <div><img src="/assets/pc2.png" alt="pc-image" /></div>
            <div><img src="/assets/pc3.png" alt="pc-image" /></div>
            <div><img src="/assets/pc4.png" alt="pc-image" /></div>
            <div><img src="/assets/pc5.png" alt="pc-image" /></div>
            <div><img src="/assets/pc6.png" alt="pc-image" /></div>
        </Slider>
      </div>

      </div>
         
    </div>
  )
}

export default Pricing