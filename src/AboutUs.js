import React, { useState, useEffect, useRef} from 'react';
import { X, Menu } from 'lucide-react';
import logoImage from './images/logo.jpeg';
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImage3 from './images/image3.jpg';
import logoImage4 from './images/image4.jpg';
import loadAboutModule from './AboutUs.js';
import './newsPage.css';
//import './App.css';
import { Search, ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
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

    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
    
       window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  
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

      <div className="min-h-screen flex flex-col">
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
         <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Who We Are
          </h1>
          
          <p className="hero-subtitle">
            Leading Innovation in Nigeria's Energy Landscape
          </p>
          
          {/* <button className="hero-cta-button">
            <span>Register to subscribe</span>
            <ArrowRight className="hero-arrow-icon" size={20} />
          </button> */}
        </div>
        
        {/* Right Image */}
        <div className="hero-image-container">
          <img 
            src= {logoImage3} 
            alt="Modern office with professionals collaborating" 
            className="hero-image"
          />
          
          {/* Image overlay for depth */}
          <div className="hero-image-overlay"></div>
        </div>
        
      </div>
      
      {/* Background decorative elements */}
      <div className="hero-bg-element hero-bg-element-1"></div>
      <div className="hero-bg-element hero-bg-element-2"></div>
    </section>
        
        {/* About Section */}
        <section className="content-section">
          <div className="container">
            <h2 className="section-title">About Us</h2>
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
                  title: "Offshore Operations",
                  description: "Advanced offshore drilling and production solutions.",
                  image: logoImage1
                },
                {
                  title: "Engineering Excellence",
                  description: "Cutting-edge design and technical solutions.",
                  image: logoImage3
                },
                {
                  title: "Project Management",
                  description: "Delivering complex projects on time and within budget.",
                  image: logoImage4
                },
                {
                  title: "Project Management",
                  description: "Delivering complex projects on time and within budget.",
                  image: logoImage1
                },
                {
                  title: "Project Management",
                  description: "Delivering complex projects on time and within budget.",
                  image: logoImage4
                },
                {
                  title: "Project Management",
                  description: "Delivering complex projects on time and within budget.",
                  image: logoImage2
                },
                {
                  title: "Project Management",
                  description: "Delivering complex projects on time and within budget.",
                  image: logoImage3
                },
                {
                  title: "Our Expert Team",
                  description: "Highly skilled professionals driving our success.",
                  image: logoImage2
                }
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
              {[
                {
                  title: "Excellence",
                  description: "We consistently strive for the highest standards in all our endeavors, delivering superior results that exceed expectations. Our commitment to excellence drives us to continuously improve our processes, technologies, and service delivery to ensure optimal outcomes for our clients and stakeholders.",
                  image: {logoImage3},
                  reverse: false
                },
                {
                  title: "Integrity",
                  description: "We conduct our business with honesty, transparency, and ethical practices that build trust with our stakeholders. Integrity is at the heart of everything we do, from our client relationships to our internal operations, ensuring accountability and reliability in all aspects of our business.",
                  image: {logoImage1},
                  reverse: true
                },
                {
                  title: "Innovation",
                  description: "We embrace creative thinking and cutting-edge technology to develop pioneering solutions for complex challenges. Our innovative approach enables us to adapt to evolving industry demands, optimize operational efficiency, and create sustainable value for our clients in a rapidly changing energy landscape.",
                  image: {logoImage2},
                  reverse: false
                },
                {
                  title: "Local Empowerment",
                  description: "We prioritize developing local talent and resources to strengthen Nigeria's energy industry capabilities. Through knowledge transfer, capacity building, and community engagement, we contribute to economic growth and sustainability while fostering a sense of ownership and pride among the communities where we operate.",
                  image: {logoImage4},
                  reverse: true
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className={`value-item ${value.reverse ? 'reverse' : ''}`}
                >
                  <div className="value-image-container">
                    <img 
                      src={logoImage4} 
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
      </div>

      <section className="sustainability-banner">
      <div className="banner-container">
        {/* Left Side - Image */}
        <div className="banner-image-section">
          <div className="image-overlay">
            <img 
              src={logoImage4} 
              alt="Modern glass walkway with people and green landscape" 
              className="banner-image"
            />
          </div>
        </div>
        
        {/* Right Side - Content */}
        <div className="banner-content-section">
          <div className="content-wrapper">
            <h2 className="banner-title">
              Our Approach to
              <br />
              Sustainability
            </h2>
            
            <button className="cta-button">
              <span className="button-text">Find out more</span>
              <ArrowRight className="button-icon" size={20} />
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
    </>
  );
}