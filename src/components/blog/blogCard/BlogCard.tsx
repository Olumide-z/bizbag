import React from 'react'
import './blogCard.css'
import { Props } from '../Blog'
import Slider from 'react-slick'

interface BlogProps {
    blog: Props['items']
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,

        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 750,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      };

  return (
    <div className="blogCard">
        <Slider {...settings}>
        {blog.map((item) => (
            <div className="blogCard__card" key={item.id}>
                <div className="blogCard__card-img">
                    <img src={item.image} alt="card" />
                    <div className='blogCard__card-title'>{item.title}</div>
                </div>
                <div className="blogCard__card-details">
                    <h3>{item.heading}</h3>
                    <p>{item.desc}</p>
                    <h4>Read More</h4>
                </div>
            </div>
        ))}
        </Slider>
    </div>
  )
}

export default BlogCard