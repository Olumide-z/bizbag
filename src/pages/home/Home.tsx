import React from 'react'
import { Blog, Button, HeroSection, Newsletter, Numbers, Portfolio, Progress, ScrollText, Testimonial, Title } from '../../components'
import Expertise from './expertise/Expertise';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import './home.css';

const Home = () => {
  return (
    <div className="home">
        <HeroSection />

      <div className="home__work-wrapper">
      {/* <ScrollText text='UNIQUE APPROACH' /> */}
        <div className="home__work">
          <div className="home__work-imageWrapper">
            <div>
              <img src="/assets/04.png" alt="work-image" />
            </div>
            <img src="/assets/03.png" className='dots img01' alt="work-image2" />
            <img src="/assets/03.png" className='dots img02' alt="work-image3" />
            <img src="/assets/03.png" className='dots img03' alt="work-image4" />
          </div>
          <div className="home__work-rightSide">
            <h3>We're a Creative Agency</h3>
            <h1>How We Work?</h1>
            <p>Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Ornare aenean euismod elementum nisi quis eleifend quam.</p>
            <p>Vitae congue eu consequat ac felis donec et odio. Eget felis eget nunc lobortis. At lectus urna duis convallis convallis tellus id interdum. Tellus in hac habitasse platea dictumst vestibulum rhoncus est.</p>
            <Button />
          </div>
        </div>
      </div>

        <div className="home__expertise">
          <Title 
            subHeading='Our expertise' 
            title='Exclusive Features' 
            text='It is a long established fact that a reader will be distracted'
          />

          <div className="home__expertise-images">
            <div className='home__expertise-image'><Expertise image='/assets/07.png' text="Vitae elementum curabitur vitae velit ut pharetra sit amet aliquam id." title='Web Development'/></div>
            <div><Expertise image='/assets/06.png' text="Vitae elementum curabitur vitae velit ut pharetra sit amet aliquam id." title='Marketing Strategy'/></div>
            <div className='home__expertise-image'><Expertise image='/assets/05.png' text="Vitae elementum curabitur vitae velit ut pharetra sit amet aliquam id." title='Content Writing'/></div>
          </div>
        </div>

        <div className="home__planning">
          <div className="home__planning-leftSide">
            <img src="/assets/08.png" alt="planning-image" />
          </div>
          <div className="home__planning-rightSide">
            <h3>Customize services</h3>
            <h1>Project Planning</h1>
            <p>Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis bibendum auctor.</p>
            <div className="home__planning-rightSide_texts">
              <div>
                <p><BsFillCheckCircleFill/></p>
                <p>Simply dummy text of the Lorem Ipsum is printing and type setting industry.</p>
              </div>
              <div>
                <p><BsFillCheckCircleFill/></p>
                <p>Dummy text of the Lorem Ipsum is printing and type setting industry.</p>
              </div>
              <div>
                <p><BsFillCheckCircleFill/></p>
                <p>Simply dummy text of the Lorem Ipsum is setting industry.</p>
              </div>
              <Button />
            </div>
          </div>
        </div>

        <Progress />
        <Numbers bg={true}/>
        <Portfolio />
        <Testimonial />
        <Newsletter />
        <Blog />
    </div>
  )
}

export default Home