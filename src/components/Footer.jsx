import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/alfa-logo.png" alt="Alfa Specialized Hospital Logo" className="logo-image" />
              <span>Alfa Specialized Hospital</span>
            </div>
            <p>For a Healthy Nation</p>
            <p>Providing world-class healthcare services with compassion, excellence, and innovation.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Alfa Specialized Hospital, MikocheniTanesco, Mwai Kibaki Rd, Dar es Salaam</p>
              <p><i className="fas fa-phone"></i> +255674404013</p>
              <p><i className="fas fa-envelope"></i> info@alfasphospitals.com</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <div className="hours">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Sunday:</strong> 9:00 AM - 4:00 PM</p>
              <p><strong>Emergency:</strong> 24/7</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Alfa Specialized Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
