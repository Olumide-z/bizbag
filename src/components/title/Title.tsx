import React from 'react'
import './title.css'

export interface TitleProps{
    subHeading: string;
    title: string;
    text?: string;
}

const title: React.FC<TitleProps> = ({ subHeading, title, text }) => {
  return (
    <div className="title">
        <h3>{subHeading}</h3>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default title