import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__wrapper">
        <div className="footer__logo">
            <img src="/assets/logo.png" alt="logo" />
            <p>nisi elit consequat ipsum,<br/>Lorem Ipsum.lorem quis bibendum auctor.</p>
        </div>

        <div className="footer__menu">
            <h3>Menu</h3>
                <Link className='footer__links' to='/' ><p>Home</p></Link>
                <Link className='footer__links' to='/team'><p>Our Team</p></Link>
                <Link className='footer__links' to='/'><p>FAQ</p></Link>
        </div>

        <div className="footer__category">
            <h3>Categories</h3>
                <Link className='footer__links' to='/'><p>Design</p></Link>
                <Link className='footer__links' to='/'><p>Fashion</p></Link>
                <Link className='footer__links' to='/'><p>Photography</p></Link>
                <Link className='footer__links' to='/'><p>Technology</p></Link>
        </div>

        <div className="footer__archives">
            <h3>Archives</h3>
            <p>May 2019 (8)</p>
        </div>

        <div className="footer__contact">
            <h3>Contact Us</h3>
            <p>+0123456789</p>
            <p>support@bizbag.com</p>
        </div>

        </div>

        <div className="footer__copy">
            <p>Copyright 2022 bizbag All Rights Reserved.</p>
            <div className="footer__copy-icons">
                <BsFacebook className='footer__copy-icon'/>
                <FaInstagram className='footer__copy-icon'/>
                <FaTwitter className='footer__copy-icon'/>
            </div>
        </div>
        
    </div>
  )
}

export default Footer