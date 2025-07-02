import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

import TabSection from './TabSection.js';
import BreakPointSection from './BreakPointSection.js';
import SlbSolutions from './SlbSolutions.js';
import logoImage from './images/logo2.png';
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImage3 from './images/image3.jpg';
import logoImage4 from './images/image4.jpg';
import { Link } from 'react-router-dom';
import './newsPage.css';

 const values = [
    {
      title: "Intelligent Well Planning",
      description: "We develop robust drilling programs through integrated geological, geophysical, and reservoir modeling to ensure optimal trajectory, cost-effectiveness, and productivity",
      image: logoImage3,
      reverse: false
    },
    {
      title: "Advanced Technologies",
      description: "Leveraging state-of-the-art rigs, automated drilling systems, and real-time downhole monitoring, we drive performance and minimize non-productive time (NPT).",
      image: logoImage1,
      reverse: true
    },
    {
      title: "Safety & Environmental Stewardship",
      description: "With strict adherence to international HSE standards, we conduct operations with a relentless focus on safety and minimal ecological footprint.",
      image: logoImage2,
      reverse: false
    },
    {
      title: "Real-Time Optimization",
      description: "Using advanced analytics and live data feeds, our experts make real-time decisions that enhance wellbore stability, improve penetration rates, and mitigate operational risks.",
      image: logoImage4,
      reverse: true
    }
  ];


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
    <>
      <style jsx>{`
       

        /* Core Values Section Specific Styles */
        .value-item {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .value-item.reverse {
          flex-direction: column;
        }

        .value-image-container {
          flex: 1;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .value-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .value-image:hover {
          transform: scale(1.05);
        }

        .value-content {
          flex: 1;
          padding: 1rem;
        }

        .value-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 1rem;
        }

        .value-description {
          line-height: 1.6;
          color: #374151;
        }

        /* Operations Gallery Styles */
        .operations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .operation-card {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .operation-card:hover {
          transform: translateY(-5px);
        }

        .operation-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .operation-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(30, 64, 175, 0.9);
          color: white;
          padding: 1rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .operation-card:hover .operation-overlay {
          transform: translateY(0);
        }

        .operation-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .operation-description {
          font-size: 0.875rem;
        }

        /* Vision/Mission Cards */
        .vision-mission-containers{
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .vision-mission-cards {
          background:hsl(210, 20.00%, 98.00%);
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          flex: 1;
          text-align: center;
        }

        .vision-mission-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 1rem;
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .value-item {
            flex-direction: row;
          }

          .value-item.reverse {
            flex-direction: row-reverse;
          }

          .operations-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .vision-mission-containers {
            flex-direction: row;
          }
        }

        @media (min-width: 1024px) {
          .operations-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Additional Utility Styles */
        .section-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #1e40af;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .hero-section {
          
          color: white;
          padding: 5rem 0;
          margin-top: 80px;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          text-align: center;
        }

        .content-section {
          padding: 5rem 0;
        }

        .content-section.bg-gray {
          background-color: #f9fafb;
        }

        .p-color{
        color:  #1A0262;
        }

        .about-text {
          margin-bottom: 1rem;
          line-height: 1.6;
          color: #374151;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
        }
      `}</style>

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

               {/* <Link to="/" className="nav-item has-dropdown">
              <li className="nav-link">
                  <span>Solutions</span>
                  
              </li>
              </Link> */}

              

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
                  <span className="text-reveal">Breakpoint </span>
                  <span className="text-reveal" style={{ '--delay': '0.2s' }}>Energy Services </span>
                </h1>
                <p className="hero-subtitlee text-reveal" style={{ '--delay': '0.4s' }}>
                  We are not just builders — we are strategic partners
                </p>
                <a href="#commitment" className="hero-cta text-reveal" style={{ '--delay': '0.6s' }}>
                  <span>
                    <ul>
                <li><a href="/products"> Our Services</a></li>
                </ul> 
                  </span>
                  
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
      {/* <BreakPointSection /> */}

      {/* Solutions Section */}
      {/* <section className="solutions">
      <div className="container">
        <h2 className="section-title">Our Advanced Inspection </h2>
        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#155E75', overflow: 'hidden'}}>
              <img src={logoImage1} alt="Digital Solutions" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4  className="colorh">Magnetic Particle Inspection (MPI)</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#0F766E', overflow: 'hidden'}}>
              <img src={logoImage2} alt="Sustainability" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4 className="colorh">Dye Penetrant Inspection (DPI)</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage3} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4 className="colorh">Ultrasonic Testing (UT)</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage4} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4 className="colorh">Eddy Current Testing (ECT)</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage1} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4 className="colorh">Radiographic Testing (RT)</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
          
          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage2} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4 className="colorh">Boroscopic Inspection</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>

          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage2} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4 className="colorh">Hardness Testing</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>

          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage2} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4 className="colorh">Time of Flight Diffraction (TOFD)</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>

          <div className="solution-card">
            <div className="solution-img" style={{backgroundColor: '#047857', overflow: 'hidden'}}>
              <img src={logoImage2} alt="Production Optimization" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <h4 className="colorh">Alternating Current Field Measurement (ACFM)</h4>
            <p></p>
            <a href="#" className="solution-link">Learn More <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </section> */}

      {/* About Section */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">Who We Are</h2>
            <div className="mb-12">
              <p className="about-text">
                Breakpoint Energy Services Limited is a proudly Nigerian-owned, full-spectrum Engineering, Procurement, Construction (EPC), Operations & Maintenance company delivering high-impact technical solutions across the oil, gas, energy, and chemical industries. Since our establishment, we have earned a reputation for excellence, reliability, and innovation driven by a deep commitment to advancing Nigeria's petroleum industry and the broader West African energy landscape.
              </p>
              <p className="about-text">
                We offer services that span engineering design, project management, offshore and onshore operations, renewable energy integration, and asset maintenance. Our operational footprint extends beyond Nigeria into other regions, positioning us as a globally connected yet locally rooted organization.
              </p>
              <p className="about-text">
                As a fast-growing indigenous company, Breakpoint Energy Services Limited is powered by a multidisciplinary team of highly skilled professionals whose dedication fuels our consistent delivery of world-class services. We combine cutting-edge technology, creativity, and precision to solve complex engineering challenges, optimize performance, and maximize value for our clients.
              </p>
            </div>
            
            {/* Vision & Mission */}
            <div className="vision-mission-containers">
              <div className="vision-mission-cards">
                <h3 className="vision-mission-title">Vision</h3>
                <p className="p-color">
                  To be the leading indigenous oil and gas servicing company in Africa, known for excellence, integrity, and innovation.
                </p>
              </div>
              
              <div className="vision-mission-cards">
                <h3 className="vision-mission-title">Mission</h3>
                <p className="p-color">
                  To provide outstanding engineering and energy solutions with exceptional value by exceeding client expectations that drive sustainable growth and contribute meaningfully to the development of Nigeria and the global energy ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Image Gallery */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">Our Operations</h2>
            <div className="operations-grid">
              {[
                {
                  title: "Intelligent Well Planning ",
                  description: "We develop robust drilling programs through integrated geological, geophysical, and reservoir modeling to ensure optimal trajectory, cost-effectiveness, and productivity.",
                  image: logoImage1
                },
                {
                  title: "Advanced Technologies",
                  description: "Leveraging state-of-the-art rigs, automated drilling systems, and real-time downhole monitoring, we drive performance and minimize non-productive time (NPT).",
                  image: logoImage3
                },
                {
                  title: "Safety & Environmental Stewardship",
                  description: "With strict adherence to international HSE standards, we conduct operations with a relentless focus on safety and minimal ecological footprint.",
                  image: logoImage4
                },
                {
                  title: "Real-Time Optimization",
                  description: "Using advanced analytics and live data feeds, our experts make real-time decisions that enhance wellbore stability, improve penetration rates, and mitigate operational risks.",
                  image: logoImage1
                },
                
              ].map((item, index) => (
                <div key={index} className="operation-card">
    
                  <img 
                    src={item.image}
                    alt={item.title} 
                    className="operation-image"
                  />
                  <div className="operation-overlay">
                    <h3 className="operation-title">{item.title}</h3>
                    <p className="operation-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="content-section bg-gray">
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <div className="space-y-16">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`value-item ${value.reverse ? 'reverse' : ''}`}
                >
                  <div className="value-image-container">
                    <img 
                      src= {value.image}
                      alt={value.title} 
                      className="value-image"
                    />
                  </div>
                  <div className="value-content">
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



      {/* Featured Section */}
      <section className="featured">
        <div className="container">
          <div className="featured-content">
            <h2>At Breakpoint Energy Services </h2>
            <p>our Rope Access Inspection services are more than just a method of working at height—they are a strategic advantage. We empower our clients to maintain operational integrity, enhance safety compliance, and control costs—without compromise.</p>
            {/* <a href="#" className="btn btn-secondary">
              Explore Our Approach
              <ArrowRight size={16} />
            </a> */}
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
            {/* <a href="#" className="view-all">View All News <ArrowRight size={14} /></a> */}
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-date">May 10, 2025</div>
              <h3>BreakPoint Announces New Carbon Capture Technology</h3>
              <p>Breakthrough solution helps energy producers reduce emissions by up to 40%.</p>
              {/* <a href="#" className="news-link">Read More <ArrowRight size={14} /></a> */}
            </div>
            <div className="news-card">
              <div className="news-date">May 5, 2025</div>
              <h3>Q1 2025 Financial Results</h3>
              <p>BreakPoint reports strong growth in digital services and sustainable technology sectors.</p>
              {/* <a href="#" className="news-link">Read More <ArrowRight size={14} /></a> */}
            </div>
            <div className="news-card">
              <div className="news-date">April 28, 2025</div>
              <h3>BreakPoint Partners with Leading Research Institution</h3>
              <p>New alliance aims to develop next-generation geothermal solutions.</p>
              {/* <a href="#" className="news-link">Read More <ArrowRight size={14} /></a> */}
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
    </>
  );
};


export default Homepage;