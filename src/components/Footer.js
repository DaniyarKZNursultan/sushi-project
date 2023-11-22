import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon />
                <TwitterIcon />
                <TelegramIcon />
                <LinkedInIcon />
            </div>
            <p>&copy; 2023 wukongpizza.com</p>
        </div>
    </div>
  )
}

export default Footer