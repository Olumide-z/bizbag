import React from 'react'
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="newsletter__left">
            <h1>Subscribe Now</h1>
        </div>
        <div className="newsletter__right">
            <input type="text" placeholder='Your Email'/>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Newsletter