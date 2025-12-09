import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Animated background grid */}
      <div className="grid-bg"></div>

      {/* Scanlines overlay */}
      <div className="scanlines"></div>

      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="nav-logo">COSKUN</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="sun">
          <div className="sun-reflection"></div>
        </div>
        <div className="water"></div>
        <div className="mountains">
          <div className="mountain mountain-1"></div>
          <div className="mountain mountain-2"></div>
          <div className="mountain mountain-3"></div>
        </div>
        <div className="haze"></div>
        <div className="retro-car"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">COSKUN</span>
            <span className="title-sub">Digital Dreams</span>
          </h1>
          <p className="hero-tagline">Where Tomorrow Meets Today</p>
          <div className="audio-visualizer">
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <button className="cta-button">
            <span>Enter The Grid</span>
          </button>
        </div>
        <div className="palm-trees">
          <div className="palm palm-left"></div>
          <div className="palm palm-right"></div>
        </div>
        <div className="horizon-grid"></div>
        <div className="floating-elements">
          <div className="flamingo"></div>
          <div className="neon-line neon-line-1"></div>
          <div className="neon-line neon-line-2"></div>
          <div className="geo-shape geo-triangle"></div>
          <div className="geo-shape geo-diamond"></div>
          <div className="geo-shape geo-circle"></div>
          <div className="birds">
            <div className="bird bird-1"></div>
            <div className="bird bird-2"></div>
            <div className="bird bird-3"></div>
          </div>
        </div>
        <div className="lens-flare"></div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="card-icon">
                <div className="neon-diamond"></div>
              </div>
              <h3>Innovation</h3>
              <p>Pushing the boundaries of digital excellence with cutting-edge technology and timeless style.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <div className="neon-triangle"></div>
              </div>
              <h3>Design</h3>
              <p>Crafting visual experiences that captivate and inspire, blending retro aesthetics with modern functionality.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <div className="neon-circle"></div>
              </div>
              <h3>Future</h3>
              <p>Building tomorrow's digital landscape today, one pixel at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-number">01</div>
              <h3>Digital Strategy</h3>
              <p>Transform your vision into digital reality with our expert consultation.</p>
            </div>
            <div className="service-item">
              <div className="service-number">02</div>
              <h3>Web Development</h3>
              <p>Custom websites that make a statement and drive results.</p>
            </div>
            <div className="service-item">
              <div className="service-number">03</div>
              <h3>Brand Identity</h3>
              <p>Create a memorable presence that stands out in the digital age.</p>
            </div>
            <div className="service-item">
              <div className="service-number">04</div>
              <h3>Creative Direction</h3>
              <p>Visionary guidance to elevate your projects to new heights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
              </div>
              <button type="submit" className="submit-button">
                <span>Send Message</span>
              </button>
            </form>
            <div className="contact-info">
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">hello@coskun.digital</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">+1 (555) 80S-NEON</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Digital Boulevard, Neon City</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-skyline"></div>
        <div className="footer-content">
          <div className="footer-logo">COSKUN</div>
          <p className="footer-text">&copy; 2024 Coskun Digital Dreams. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
