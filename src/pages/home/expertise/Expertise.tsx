import React from 'react'
import './expertise.css'

export interface IProps {
    image: string;
    title: string;
    text: string
}

const Expertise: React.FC<IProps> = ({ image, title, text }) => {
  return (
    <div className="expertise">
        <img src={image} alt="expertise-image" />
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Expertise