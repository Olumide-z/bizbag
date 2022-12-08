import React from 'react'
import { Header, Newsletter, Title } from '../../components'
import { FaHome } from 'react-icons/fa';
import './clients.css';
import { data } from './data';

const Clients = () => {
  return (
    <div className="clients">
      <Header 
        title='Clients'
        text1='Home'
        text2='Clients'
        image='/assets/ourClient.png'
        icon={<FaHome />}
      />

      <div className="clients__ourclients">
        <Title 
          subHeading='Our Clients'
          title='All Our Great Clients'
          text='It is a long established fact that a reader will be distracted'
        />

        <div className="clients__ourclients-clients">
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="clients-img" />
            </div>
          ))}    
        </div>
        
      </div>

      <Newsletter />
    </div>
  )
}

export default Clients