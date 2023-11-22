import React from 'react'
import SushiExample from '../assets/sushi-example.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${SushiExample})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <hr></hr>
            <p>
                Welcome to Wukong Sushi, where Japanese culinary artistry thrives. Our acclaimed chef, Master Shishka, a maestro in traditional Japanese techniques, leads our kitchen with decades of expertise. His passion for precision and commitment to quality define the soul of our menu.
            </p>
            <p>
                At Wukong Sushi, we curate an authentic experience, sourcing only the freshest ingredients to craft sushi rolls and sashimi that showcase the richness of Japanese culinary traditions. Step into our modern yet serene ambiance, designed to complement the exquisite flavors that grace our plates.
            </p>
            <p>
                Whether you're a seasoned sushi enthusiast or a newcomer to Japanese cuisine, our attentive staff and Master Shishka's culinary magic promise an extraordinary dining journey. Join us at Wukong Sushi in Kazakhstan, where every bite tells a story of craftsmanship and passion, bringing the true essence of Japan to your table.
            </p>
        </div>
    </div>
  )
}

export default About