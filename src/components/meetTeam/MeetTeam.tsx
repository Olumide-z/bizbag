import React from 'react'
import './meetTeam.css';
import { data } from './data'
import { FaFacebookSquare, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa'

const MeetTeam = () => {
  return (
    <div className="meetTeam">
      {
        data.map((item) => (
          <div className="meetTeam__wrapper" key={item.id}>
            <div className="meetTeam__wrapper-img">
              <img src={item.image} alt="team_pic" />
            </div>

            <div className="meetTeam__info">
              <h3>{item.name}</h3>
              <p>{item.position}</p>
            </div>
            
            <div className="meetTeam__socials">
              <FaFacebookSquare className='meetTeam__socials-icon'/>
              <FaGithub className='meetTeam__socials-icon'/>
              <FaTwitter className='meetTeam__socials-icon'/>
              <FaGoogle className='meetTeam__socials-icon'/>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MeetTeam