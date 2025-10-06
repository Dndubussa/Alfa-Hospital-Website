import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <img src="/images/alfa-logo.png" alt="Alfa Specialized Hospital Logo" className="logo-image" />
              <span>Alfa Specialized Hospital</span>
            </Link>
            <ul className="nav-menu">
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/doctors" 
                  className={`nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link 
                  to="/facilities" 
                  className={`nav-link ${location.pathname === '/facilities' ? 'active' : ''}`}
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
