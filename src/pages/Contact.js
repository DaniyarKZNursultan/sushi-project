import React from 'react'
import SushiLeft from '../assets/sushi_left.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${SushiLeft})`}}>

        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter full name...' type='text' required/>
                <label htmlFor='phone-number'>Phone number</label>
                <input name='phone-number' placeholder='Enter phone number...' type='text' required/>
                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='Enter message...' name='message'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact