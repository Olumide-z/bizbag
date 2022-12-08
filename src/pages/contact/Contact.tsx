import React from 'react'
import './contact.css';
import { Header, Newsletter, Title } from '../../components'
import { FaHome } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsEnvelope, BsFillTelephoneFill } from 'react-icons/bs';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Form from './form/Form';

const Contact = () => {
  return (
    <div className="contact">
      <Header 
        title='Contact Us'
        text1='Home'
        text2='Contact Us'
        image='/assets/contact.png'
        icon={<FaHome />}
      />

      <div className="contact__contactUS">

        <div className='contact__map'>
          <MapContainer center={[6.605874,  3.349149]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[6.605874, 3.349149]}>
              <Popup>
                HELLO
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="contact__rightside">
        <Title 
          subHeading='Get in Touch'
          title='Contact Us'
          text='It is a long established fact that a reader will be distracted'
        />
        <Form />
        </div>

      </div>

      <div className="contact__support">
        <Title 
          subHeading='Get In Touch'
          title='Quick Support'
          text='You can get all the contact information.'
        />

      <div className="contact__support-addresses">
        <div>
          <MdLocationOn className='contact__icon'/>
          <h1>Our Address</h1>
          <p>Ikeja, Lagos State. Nigeria</p>
        </div>
        <div>
          <BsEnvelope className='contact__icon'/>
          <h1>Our Email Address</h1>
          <p>support@bizbag.com</p>
          <p>support@demo.com</p>
        </div>
        <div>
          <BsFillTelephoneFill className='contact__icon'/>
          <h1>Our Phone Number</h1>
          <p>+11 123 456 7890</p>
        </div>
      </div>

      </div>

      <Newsletter />
    </div>
  )
}

export default Contact