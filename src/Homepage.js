import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

import TabSection from './TabSection.js';
import BreakPointSection from './BreakPointSection.js';
import SlbSolutions from './SlbSolutions.js';
import logoImage from './images/logo2.jpg';
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImage3 from './images/image3.jpg';
import logoImage4 from './images/image4.jpg';
import { Link } from 'react-router-dom';


const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRefs = useRef({});
  const [scrollY, setScrollY] = useState(0);

  
  
  
    
    // Extract video ID from YouTube URL
    const getYouTubeVideoId = (url) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    };
  
    const videoUrl = "https://youtu.be/wKCFFwuItmE?si=N3-WNDV1_1K7c9tJ";
    const videoId = getYouTubeVideoId(videoUrl);
  
  
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
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
    
       window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

   // Functions to handle navigation clicks
  

  return (
    <div className="app">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="hero-sectione">
              <div className="hero-video-containere">
                {/* <video
                  ref={el => videoRefs.current['hero'] = el}
                  data-video-id="hero"
                  className="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  
                  <source src="" type="video/mp4" />
                </video> */}
      
                  <iframe
        ref={el => videoRefs.current['innovation'] = el}
        data-video-id="innovation"
        className="showcase-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`}
        title="Innovation Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '100%' }}
      />
                <div className="hero-video-overlay"></div>
              </div>
              
              <div 
                className="hero-conte"
                style={{
                  transform: `translateY(${scrollY * 0.5}px)`,
                }}
              >
                <h1 className="hero-titlee">
                  <span className="text-reveal">Powering</span>
                  <span className="text-reveal" style={{ '--delay': '0.2s' }}>Energy Innovation</span>
                </h1>
                <p className="hero-subtitlee text-reveal" style={{ '--delay': '0.4s' }}>
                  Driving sustainability and performance in the energy industry through technology and digital solutions
                </p>
                <a href="#commitment" className="hero-cta text-reveal" style={{ '--delay': '0.6s' }}>
                  <span>Discover More</span>
                  <ArrowRight className="w-5 h-5 arrow-bounce" />
                </a>
              </div>
              
              <div className="scroll-indicator">
                <ChevronDown className="w-6 h-6 bounce-animation" />
              </div>
            </section>
      {/* <section className="hero">
        <div className="hero-video-container">
          <iframe
  ref={el => videoRefs.current['innovation'] = el}
  data-video-id="innovation"
  className="showcase-video"
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`}
  title="Innovation Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ width: '100%', height: '100%' }}
/>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Powering Energy Innovation</h1>
            <p>Driving sustainability and performance in the energy industry through technology and digital solutions.</p>
            <a href="#" className="btn btn-primary">
              Discover More
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
  
      </section> */}

{/* BreakPointSection */}
      <BreakPointSection />

      {/* Solutions Section */}
      <section className="solutions">
      <div className="container">
        <h2 className="section-title">Our Solutions</h2>
        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#155E75', overflow: 'hidden'}}>
              <img src={logoImage1} alt="Digital Solutions" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3>Digital Solutions</h3>
            <p>Transforming operations through data-driven technology and AI.</p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#0F766E', overflow: 'hidden'}}>
              <img src={logoImage2} alt="Sustainability" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3>Sustainability</h3>
            <p>Advancing sustainable energy production and reducing environmental impact.</p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage3} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3>Production Optimization</h3>
            <p>Maximizing resource recovery with innovative solutions.</p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage4} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3>Production Optimization</h3>
            <p>Maximizing resource recovery with innovative solutions.</p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage1} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3>Production Optimization</h3>
            <p>Maximizing resource recovery with innovative solutions.</p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage2} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h3>Production Optimization</h3>
            <p>Maximizing resource recovery with innovative solutions.</p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>

      {/* Featured Section */}
      <section className="featured">
        <div className="container">
          <div className="featured-content">
            <h2>Leading Through Technology</h2>
            <p>BreakPoint is driving the future of energy with innovative technologies that improve performance and sustainability across the industry.</p>
            <a href="#" className="btn btn-secondary">
              Explore Our Approach
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <TabSection />

      {/* SlbSolutions */}
      <SlbSolutions />

      {/* News Section */}
      <section className="news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest News</h2>
            <a href="#" className="view-all">View All News <ArrowRight size={14} /></a>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-date">May 10, 2025</div>
              <h3>BreakPoint Announces New Carbon Capture Technology</h3>
              <p>Breakthrough solution helps energy producers reduce emissions by up to 40%.</p>
              <a href="#" className="news-link">Read More <ArrowRight size={14} /></a>
            </div>
            <div className="news-card">
              <div className="news-date">May 5, 2025</div>
              <h3>Q1 2025 Financial Results</h3>
              <p>BreakPoint reports strong growth in digital services and sustainable technology sectors.</p>
              <a href="#" className="news-link">Read More <ArrowRight size={14} /></a>
            </div>
            <div className="news-card">
              <div className="news-date">April 28, 2025</div>
              <h3>BreakPoint Partners with Leading Research Institution</h3>
              <p>New alliance aims to develop next-generation geothermal solutions.</p>
              <a href="#" className="news-link">Read More <ArrowRight size={14} /></a>
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

export default Homepage;