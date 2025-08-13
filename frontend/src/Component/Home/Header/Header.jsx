import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">LodgeLink</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/room">Room</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="headerbutton">
        <button className='whatsapp'>WhatsApp</button>
        <button className='book'>Book Now</button>
      </div>
    </div>
  );
}

export default Header
