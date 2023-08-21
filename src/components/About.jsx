import React from 'react'
import aboutimage from '../images/about.png'

const About = () => {
  return (
    <div id='about'>
        <div className="about-imag">
            <img src={aboutimage} alt="" />
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla atque dignissimos eaque iste animi quisquam saepe odit expedita maxime minima, perspiciatis quis minus placeat id odio veritatis blanditiis consequuntur ad architecto ipsam debitis aliquid quos perferendis?  </p>
             <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About