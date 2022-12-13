import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';

interface Props {
    title: string;
    text1: string;
    text2: string;
    image: string;
    icon: JSX.Element;
}

const Header: React.FC<Props> = ({ icon, title, text1, text2, image }) => {
  return (
    <div className="header">
        <div className="header__left">
            <h1>{title}</h1>
            <p><Link to='/' className='header__left-link'>{icon} {text1}</Link> <span>/</span> <span>{text2}</span></p>
        </div>
        <div className="header__right">
            <img src={image} alt="header-image" />
        </div>
    </div>
  )
}

export default Header