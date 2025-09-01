import React from 'react'
import {Link} from 'react-router-dom'
import backgroundVideo from '../../../assets/Video/Hotel_video.mp4'
import './HearoSection.css'

function HearoSection() {
  return (
    <section id="hero" className="hero-section">
      <video className="hero-background-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="hero-content">
        <h1 className="hero-heading">
          Your Comfort Starts at LodgeLink Bahir Dar
        </h1>
        <p className="hero-subheading">
          Affordable, Clean, and Peaceful Stay Near Lake Tana.
        </p>

        <Link
          to="rooms" // Scrolls to the section with id="rooms"
          smooth={true}
          duration={500}
          className="hero-cta-button"
        >
          Check Availability
        </Link>
        
      </div>
    </section>
  );
}

export default HearoSection
