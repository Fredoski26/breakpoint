import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Building2, Menu, X, } from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css';
import logoImage from './images/logo2.jpg';



const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    region: 'north-america'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState({});
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRefs = useRef({});
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
            
            // Auto-play videos when they come into view
            if (entry.isIntersecting && entry.target.tagName === 'VIDEO') {
              const videoId = entry.target.getAttribute('data-video-id');
              if (videoId && videoRefs.current[videoId]) {
                videoRefs.current[videoId].play().catch(() => {});
              }
            }
          });
        },
        { threshold: 0.3 }
      );
      document.querySelectorAll('[id], video').forEach((el) => observer.observe(el));
       // Mouse move listener for interactive effects
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove',  handleMouseMove);
      
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
      };
  
    //  window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
  
     
    }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const regions = [
    { value: 'north-america', label: 'North America' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia-pacific', label: 'Asia Pacific' },
    { value: 'middle-east', label: 'Middle East' },
    { value: 'africa', label: 'Africa' },
    { value: 'latin-america', label: 'Latin America' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+234 809 730 4756',
      description: 'Available 24/7 for urgent inquiries'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'contact@company.com',
      description: 'Response within 24 hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 8AM - 6PM EST',
      description: 'Extended hours available'
    },
    {
      icon: MapPin,
      title: 'Location',
      //title: 'Global Presence',
      details: '10 Ekpeli Drive, Off Peter Odili Road, PH',
      description: 'Local support worldwide'
    }
  ];

  return (
    <div className="contact-container">
      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1A0262 0%, #1A0262 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        .hero-sectiondd {
          padding: 120px 20px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-sectiondd::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="0.3" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="80" r="0.4" fill="rgba(255,255,255,0.06)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(50px);
          animation: slideInUp 1s ease-out 0.2s forwards;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #ffffff;
          max-width: 600px;
          margin: 0 auto 2rem;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 1s ease-out 0.4s forwards;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .main-content {
          background: white;
          border-radius: 40px 40px 0 0;
          position: relative;
          z-index: 2;
          box-shadow: 0 -10px 50px rgba(0,0,0,0.1);
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .contact-info-card {
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(148, 163, 184, 0.1);
          opacity: 0;
          transform: translateY(40px);
        }

        .contact-info-card.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-info-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          background: linear-gradient(145deg, #ffffff, #f1f5f9);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover .contact-icon {
          transform: rotate(10deg) scale(1.1);
        }

        .form-section {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 3rem;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          border: 1px solid rgba(148, 163, 184, 0.1);
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
        }

        .form-section.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .form-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
          text-align: center;
        }

        .form-subtitle {
          color: #64748b;
          text-align: center;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          position: relative;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          background: white;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
          padding-top: 1rem;
        }

        .form-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          transition: color 0.3s ease;
        }

        .form-group:focus-within .form-icon {
          color: #667eea;
        }

        .submit-button {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 2rem auto 0;
          position: relative;
          overflow: hidden;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .success-message {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          margin: 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          transform: translateY(-20px);
          animation: successSlide 0.5s ease-out forwards;
        }

        @keyframes successSlide {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (max-width: 768px) {
          .hero-sectiondd {
            padding: 80px 20px 60px;
          }
          
          .content-wrapper {
            padding: 60px 20px;
          }
          
          .form-section {
            padding: 2rem 1.5rem;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>



<header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <a href="/" className="logo-link">
              <img 
                src={logoImage} 
                alt="BreakPoint Energy Services Limited" 
                className="header-logo" 
              />
            </a>
            {/* <a href="/" className="logo-link">BreakPoint</a> */}
          </div>

          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">

              <Link to="/about" className="nav-item has-dropdown">
              <li className="nav-link">
                  <span>About</span>
                  {/* <ChevronDown size={16} /> */}
              </li>
              </Link>

              <Link to="/products" className="nav-item has-dropdown">
              <li className="nav-link">
                  <span>Products & Services</span>
                  {/* <ChevronDown size={16} /> */}
              </li>
              </Link>

              <Link to="/sustainability" className="nav-item has-dropdown">
              <li className="nav-link">
                  <span>Sustainability</span>
                  {/* <ChevronDown size={16} /> */}
              </li>
              </Link>

               <Link to="/" className="nav-item has-dropdown">
              <li className="nav-link">
                  <span>Solutions</span>
                  {/* <ChevronDown size={16} /> */}
              </li>
              </Link>

              

              <Link to="/insights" className="nav-item has-dropdown">
              <li className="nav-link">
                  <span>News and Insights</span>
                  {/* <ChevronDown size={16} /> */}
              </li>
              </Link>


              <Link to="/contact us" className="nav-item has-dropdown">
              <li className="nav-link">
                  <span>Contact Us</span>
                  {/* <ChevronDown size={16} /> */}
              </li>
              </Link>

  
            </ul>
          </nav>

          <div className="header-actions">
            {/* <button className="search-btn">
              <Search size={20} />
            </button> */}
            <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Animated cursor follower */}
      <div 
        className="cursor-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      {/* Floating elements */}
      <div className="floating-elements">
        <div className="floating-element" style={{ '--delay': '0s' }}></div>
        <div className="floating-element" style={{ '--delay': '2s' }}></div>
        <div className="floating-element" style={{ '--delay': '4s' }}></div>
        <div className="floating-element" style={{ '--delay': '6s' }}></div>
      </div>



      <div className="hero-sectiondd">
        <h1 className="hero-title">Get in Touch</h1>
        <p className="hero-subtitle">
          Connect with our global team of experts. We're here to help you succeed.
        </p>
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                id={`contact-info-${index}`}
                data-animate
                className={`contact-info-card ${isVisible[`contact-info-${index}`] ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-icon">
                  <info.icon size={24} color="white" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                  {info.title}
                </h3>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#667eea', marginBottom: '0.5rem' }}>
                  {info.details}
                </p>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          <div
            id="form-section"
            data-animate
            className={`form-section ${isVisible['form-section'] ? 'animate' : ''}`}
          >
            <h2 className="form-title">Send us a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            {isSubmitted && (
              <div className="success-message">
                <CheckCircle size={20} />
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <div onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <User className="form-icon" size={20} />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <User className="form-icon" size={20} />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <Mail className="form-icon" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <Building2 className="form-icon" size={20} />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <Phone className="form-icon" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <MapPin className="form-icon" size={20} />
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {regions.map((region) => (
                      <option key={region.value} value={region.value}>
                        {region.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group full-width">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitted ? 'pulse' : ''}`}
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      

       {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">BreakPoint</div>
            <div className="footer-social">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">YouTube</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#">Digital & Integration</a></li>
                <li><a href="#">Reservoir Performance</a></li>
                <li><a href="#">Well Construction</a></li>
                <li><a href="#">Production Systems</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li><a href="#">Who We Are</a></li>
                <li><a href="#">Innovation</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Investors</h4>
              <ul>
                <li><a href="#">Financial Information</a></li>
                <li><a href="#">Annual Reports</a></li>
                <li><a href="#">Events & Presentations</a></li>
                <li><a href="#">Stock Information</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Global Offices</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Media Relations</a></li>
                <li><a href="#">Supplier Information</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">© 2025 BreakPoint. All rights reserved.</div>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Site Map</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;