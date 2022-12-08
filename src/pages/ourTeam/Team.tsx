import React from 'react'
import { Blog, Header, MeetTeam, Newsletter, Numbers, Title } from '../../components'
import { FaHome } from 'react-icons/fa';
import './team.css';

const Team = () => {
  return (
    <div className="team">
      <Header 
        title='Our Team'
        text1='Home'
        text2='Our Team'
        image='/assets/ourTeam.png'
        icon={<FaHome />}
      />

      <div className="team__members">
        <Title subHeading='Work with us' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' title='Meet The Best Team'/>
        <MeetTeam />
      </div>

      <Numbers/>
      <Blog />
      <Newsletter />
    </div>
  )
}

export default Team