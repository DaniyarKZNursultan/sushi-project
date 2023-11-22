import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/sushi-background.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Wukong Sushi</h1>
            <p>The best sushi from master Shishka</p>
            <Link to='/menu'>
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home