import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Globe, Zap, Settings, Layers, ArrowRight, Play, CheckCircle, Menu, X, } from 'lucide-react';
import './productService.css';
import './App.css';
import logoImage from './images/logo.jpeg';
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImage3 from './images/image3.jpg';
import logoImage4 from './images/image4.jpg';
import { Link } from 'react-router-dom';

const ProductsAndServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState({});
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRefs = useRef({});
    
    
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

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
          const handleScroll = () => {
            setScrolled(window.scrollY > 50);
          };
      
         window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);

  const services = [
    {
      title: "Digital Solutions",
      description: "Transform your operations with cutting-edge digital technologies and AI-powered insights.",
      icon: <Globe className="w-8 h-8" />,
      features: ["AI & Machine Learning", "Cloud Solutions", "Data Analytics", "IoT Integration"]
    },
    {
      title: "Energy Solutions",
      description: "Comprehensive energy solutions for sustainable and efficient operations worldwide.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Renewable Energy", "Energy Efficiency", "Power Systems", "Grid Solutions"]
    },
    {
      title: "Engineering Services",
      description: "Advanced engineering and technical services for complex industrial challenges.",
      icon: <Settings className="w-8 h-8" />,
      features: ["Process Engineering", "System Design", "Technical Consulting", "Project Management"]
    },
    {
      title: "Integrated Solutions",
      description: "End-to-end integrated solutions combining technology, expertise, and innovation.",
      icon: <Layers className="w-8 h-8" />,
      features: ["Full-Stack Solutions", "Custom Integration", "Scalable Architecture", "24/7 Support"]
    }
  ];

  const stats = [
    { number: "150+", label: "Countries Served" },
    { number: "50k+", label: "Projects Delivered" },
    { number: "25+", label: "Years Experience" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);



  return (
    <div className="main-container">
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
          
          
                        <Link to="/0" className="nav-item has-dropdown">
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


      {/* Hero Section */}
      <section className="hero-sections">
        <div className="floating-orbs">
          <div className="orb orb-blue"></div>
          <div className="orb orb-purple"></div>
          <div className="orb orb-pink"></div>
        </div>
        
        <div id="hero" className={`hero-conten ${isVisible.hero ? 'visibles' : ''}`}>
          <div className="hero-cards">
            <h1 className="hero-titles">
              Future-Ready Solutions
            </h1>
            <p className="hero-descriptions">
              Transforming industries through innovative technology, sustainable practices, and comprehensive digital solutions that drive global progress.
            </p>
            <div className="hero-buttonss">
              <button className="btn-primarys">
                <Play className="w-5 h-5" />
                Explore Solutions
                <ArrowRight className="btn-arrow w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-sections">
        <div id="stats" className={`stats-container ${isVisible.stats ? 'visible' : ''}`}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">
                  {stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div id="services-header" className={`services-header ${isVisible['services-header'] ? 'visible' : ''}`}>
            <h2 className="section-title">
              Our Services
            </h2>
            <p className="section-description">
              Comprehensive solutions designed to meet the evolving needs of modern industries
            </p>
          </div>

          <div className="services-grid">
            {/* Service Cards */}
            <div id="service-cards" className={`service-cards ${isVisible['service-cards'] ? 'visible' : ''}`}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${activeService === index ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="service-card-header">
                    <div className={`service-icon ${activeService === index ? 'active' : ''}`}>
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <ChevronRight className={`service-arrow ${activeService === index ? 'active' : ''}`} />
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div id="service-details" className={`service-details ${isVisible['service-details'] ? 'visible' : ''}`}>
              <div className="service-details-card">
                <div className="service-details-header">
                  <div className="service-details-icon">
                    {services[activeService].icon}
                  </div>
                  <h3 className="service-details-title">{services[activeService].title}</h3>
                </div>
                
                <p className="service-details-description">
                  {services[activeService].description}
                </p>

                <div className="service-features">
                  <h4 className="features-title">Key Features:</h4>
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="service-details-btn">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-sections">
        <div id="cta" className={`cta-container ${isVisible.cta ? 'visible' : ''}`}>
          <div className="cta-card">
            <h2 className="cta-title">
              Ready to Transform Your Business?
            </h2>
            <p className="cta-description">
              Join thousands of companies worldwide who trust our solutions to drive their digital transformation journey.
            </p>
            <div className="cta-buttons">
              <button className="btn-primarys">
                Get Started Today
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

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

export default ProductsAndServices;