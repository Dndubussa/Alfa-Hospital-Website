import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'
import DebugImages from './pages/DebugImages'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/debug-images" element={<DebugImages />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
