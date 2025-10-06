import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Alfa Specialized Hospital</h1>
            <p className="hero-subtitle">Alfa Specialized Hospital - For a Healthy Nation</p>
            <p className="hero-description">
              Providing world-class healthcare services with compassion, excellence, and innovation. 
              Your health is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Alfa Specialized Hospital?</h2>
            <p>We are committed to providing exceptional healthcare services with compassion, excellence, and innovation</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Expert Medical Team</h3>
              <p>
                Led by Dr. Neema Daniel Kanyaro, our team of highly qualified specialists provides 
                comprehensive care across multiple medical disciplines including cardiology, 
                ophthalmology, and neurology.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Advanced Medical Technology</h3>
              <p>
                State-of-the-art diagnostic equipment and modern treatment facilities ensure 
                accurate diagnosis and effective treatment for all our patients.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>24/7 Emergency Services</h3>
              <p>
                Round-the-clock emergency care with immediate response for critical medical situations. 
                Our emergency team is always ready to provide life-saving care.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Patient-Centered Care</h3>
              <p>
                Your safety, comfort, and well-being are our top priorities. We maintain the highest 
                standards of hygiene, safety protocols, and compassionate care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="emergency-services">
        <div className="container">
          <div className="section-header">
            <h2>Emergency Services</h2>
            <p>24/7 Emergency Care - When Every Second Counts</p>
          </div>
          <div className="emergency-content">
            <div className="emergency-info">
              <div className="emergency-details">
                <h3>24-Hour Emergency Care</h3>
                <p>
                  Our Accident & Emergency Department provides immediate medical attention for urgent health needs. 
                  Our team of experienced doctors, nurses, and specialists are available around the clock to serve 
                  both pediatric and adult patients.
                </p>
                
                <div className="emergency-contact">
                  <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                      <strong>Emergency Hotline</strong>
                      <p>+255674404013</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <strong>Available</strong>
                      <p>24 Hours, 7 Days a Week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Book your appointment today and take the first step towards better health.</p>
            <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
