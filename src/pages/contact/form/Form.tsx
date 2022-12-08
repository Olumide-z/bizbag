import React from 'react'
import './form.css';

const Form = () => {
  return (
    <div className="form">
        <div className="form__details">
        <div>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Name'/>
        </div>
        <div>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Email'/>
        </div>
        </div>

        <div>
            <label htmlFor="">Subject</label>
            <input type="text" placeholder='Subject'/>
        </div>
        <div>
            <label htmlFor="">Your Message</label>
            <textarea placeholder='Message'/>
        </div>
        <button>Send Message</button>
    </div>
  )
}

export default Form