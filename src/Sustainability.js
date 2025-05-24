import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { ChevronDown, Leaf, Zap, Droplets, Wind, Globe, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import './sustainable.css';
import logoImage from './images/logo2.jpg';
import { Link } from 'react-router-dom';

const Sustainability = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [videoStates, setVideoStates] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRefs = useRef({});


  
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoUrl = "https://youtu.be/wKCFFwuItmE?si=N3-WNDV1_1K7c9tJ";
  const videoUrl2 = "https://www.youtube.com/watch?v=nwtsmARvNe8";

  
  const videoId = getYouTubeVideoId(videoUrl);
  const videoId2 = getYouTubeVideoId(videoUrl2);

  useEffect(() => {
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
    
    // Scroll listener for parallax effects
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Mouse move listener for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
     window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  const toggleVideo = (videoId) => {
    const video = videoRefs.current[videoId];
    if (!video) return;
    
    if (video.paused) {
      video.play();
      setVideoStates(prev => ({ ...prev, [videoId]: { ...prev[videoId], playing: true } }));
    } else {
      video.pause();
      setVideoStates(prev => ({ ...prev, [videoId]: { ...prev[videoId], playing: false } }));
    }
  };

  const toggleMute = (videoId) => {
    const video = videoRefs.current[videoId];
    if (!video) return;
    
    video.muted = !video.muted;
    setVideoStates(prev => ({ 
      ...prev, 
      [videoId]: { ...prev[videoId], muted: video.muted } 
    }));
  };

  const restartVideo = (videoId) => {
    const video = videoRefs.current[videoId];
    if (!video) return;
    
    video.currentTime = 0;
    video.play();
    setVideoStates(prev => ({ ...prev, [videoId]: { ...prev[videoId], playing: true } }));
  };

  const sections = [
    { icon: <Globe className="w-6 h-6" />, title: "Our Commitment", color: "from-green-400 to-blue-500" },
    { icon: <Leaf className="w-6 h-6" />, title: "Environmental Impact", color: "from-green-500 to-teal-500" },
    { icon: <Zap className="w-6 h-6" />, title: "Energy Solutions", color: "from-yellow-400 to-orange-500" },
    { icon: <Droplets className="w-6 h-6" />, title: "Water Stewardship", color: "from-blue-400 to-cyan-500" }
  ];

  const cards = [
    {
      title: "Carbon Neutrality by 2030",
      description: "Leading the industry toward a sustainable energy future through innovative technologies and strategic partnerships.",
      icon: <Leaf className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Clean Energy Innovation",
      description: "Developing cutting-edge solutions for renewable energy integration and carbon capture technologies.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Water Conservation",
      description: "Implementing advanced water management systems to protect and preserve our most precious resource.",
      icon: <Droplets className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Circular Economy",
      description: "Creating sustainable value chains through waste reduction, recycling, and resource optimization.",
      icon: <Wind className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="sustainable-container">
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

      {/* Hero Section with Video Background */}
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
            <span className="text-reveal">Sustainable</span>
            <span className="text-reveal" style={{ '--delay': '0.2s' }}>Future</span>
          </h1>
          <p className="hero-subtitlee text-reveal" style={{ '--delay': '0.4s' }}>
            Leading the energy transition through innovation, technology, and sustainable practices
          </p>
          <a href="#commitment" className="hero-cta text-reveal" style={{ '--delay': '0.6s' }}>
            <span>Explore Our Journey</span>
            <ArrowRight className="w-5 h-5 arrow-bounce" />
          </a>
        </div>
        
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6 bounce-animation" />
        </div>
      </section>

      {/* Commitment Section with Enhanced Animations */}
      <section id="commitment" className="section">
        <h2 className={`section-title ${isVisible.commitment ? 'animate-in' : ''}`}>
          <span className="word-animation">Our</span>
          <span className="word-animation" style={{ '--delay': '0.1s' }}>Commitment</span>
          <span className="word-animation" style={{ '--delay': '0.2s' }}>to</span>
          <span className="word-animation" style={{ '--delay': '0.3s' }}>Sustainability</span>
        </h2>
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`card card-hover-effect ${isVisible.commitment ? 'animate-in' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${scrollY * 0.02}px)` 
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = `translateY(-15px) rotateX(5deg) rotateY(5deg)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = `translateY(${scrollY * 0.02}px)`;
              }}
            >
              <div className="card-icon icon-pulse">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <div className="card-progress-bar">
                <div className="progress-fill" style={{ '--progress': `${85 - index * 10}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Video Section */}
      <section className="video-showcase-section">
        <div className="video-grid">
          <div className="video-card">
            <div className="video-container">
                     <iframe
  ref={el => videoRefs.current['innovation'] = el}
  data-video-id="innovation"
  className="showcase-video"
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`}
  title="Innovation Video"
  frameBorder="0"
  Play
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ width: '100%', height: '100%' }}
/>
              <div className="video-controls">
                <button 
                  className="control-btn"
                  onClick={() => toggleVideo('innovation')}
                >
                  {videoStates.innovation?.playing ? <Pause /> : <Play />}
                </button>
                <button 
                  className="control-btn"
                  onClick={() => toggleMute('innovation')}
                >
                  {videoStates.innovation?.muted ? <VolumeX /> : <Volume2 />}
                </button>
                <button 
                  className="control-btn"
                  onClick={() => restartVideo('innovation')}
                >
                  <RotateCcw />
                </button>
              </div>
            </div>
            <div className="video-info">
              <h3 >Clean Energy Innovation</h3>
              <p>Discover our breakthrough technologies in renewable energy and carbon capture.</p>
            </div>
          </div>
          
          <div className="video-card">
            <div className="video-container">
                
              {/* <video
                ref={el => videoRefs.current['ocean'] = el}
                data-video-id="ocean"
                className="showcase-video"
                muted
                loop
                playsInline
              >
                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
              </video> */}

                 
 <iframe
  ref={el => videoRefs.current['innovation'] = el}
  data-video-id="innovation"
  className="showcase-video"
  src={`https://www.youtube.com/embed/${videoId2}?autoplay=1&mute=1&loop=1&playlist=${videoId2}&controls=0&showinfo=0&rel=0`}
  title="Innovation Video"
  frameBorder="0"
  Play
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ width: '100%', height: '100%' }}
/>
                 
              <div className="video-controls">
                <button 
                  className="control-btn"
                  onClick={() => toggleVideo('ocean')}
                >
                  {videoStates.ocean?.playing ? <Pause /> : <Play />}
                </button>
                <button 
                  className="control-btn"
                  onClick={() => toggleMute('ocean')}
                >
                  {videoStates.ocean?.muted ? <VolumeX /> : <Volume2 />}
                </button>
                <button 
                  className="control-btn"
                  onClick={() => restartVideo('ocean')}
                >
                  <RotateCcw />
                </button>
              </div>
            </div>
            <div className="video-info">
              <h3>Ocean Conservation</h3>
              <p>Protecting marine ecosystems through advanced monitoring and restoration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="stats-section">
        <div 
          className="stats-background"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
        <h2 className="section-title" style={{ color: 'white' }}>
          Our Impact in Numbers
        </h2>
        <div className="stats-grid">
          <div className={`stat-item ${isVisible.commitment ? 'counter-animation' : ''}`}>
            <span className="stat-number" data-target="50">90</span>
            <span className="stat-label">% Emission Reduction by 2030</span>
            <div className="stat-visual">
              <div className="progress-ring">
                <circle className="progress-ring-circle" cx="50" cy="50" r="40"></circle>
              </div>
            </div>
          </div>
          <div className={`stat-item ${isVisible.commitment ? 'counter-animation' : ''}`} style={{ '--delay': '0.2s' }}>
            <span className="stat-number" data-target="100">120</span>
            <span className="stat-label">+ Sustainability Projects</span>
            <div className="stat-particles"></div>
          </div>
          <div className={`stat-item ${isVisible.commitment ? 'counter-animation' : ''}`} style={{ '--delay': '0.4s' }}>
            <span className="stat-number" data-target="2">60</span>
            <span className="stat-label">B Investment in Clean Energy</span>
            <div className="stat-glow"></div>
          </div>
          <div className={`stat-item ${isVisible.commitment ? 'counter-animation' : ''}`} style={{ '--delay': '0.6s' }}>
            <span className="stat-number" data-target="25">80</span>
            <span className="stat-label">+ Countries Impacted</span>
            <div className="stat-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section id="timeline" className="timeline-section">
        <h2 className={`section-title ${isVisible.timeline ? 'animate-in' : ''}`}>
          Our Sustainability Journey
        </h2>
        <div className="timeline">
          <div className={`timeline-item ${isVisible.timeline ? 'slide-in-left' : ''}`}>
            <div className="timeline-content">
              <div className="timeline-icon">
                <Leaf className="w-6 h-6" />
              </div>
              <h3>Carbon Neutral Operations</h3>
              <p>Achieving carbon neutrality across all global operations through renewable energy adoption and efficiency improvements.</p>
              <div className="timeline-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ '--progress': '85%' }}></div>
                </div>
                <span className="progress-text">85% Complete</span>
              </div>
            </div>
            <div className="timeline-date glowing-date">2030</div>
          </div>
          <div className={`timeline-item ${isVisible.timeline ? 'slide-in-right' : ''}`} style={{ '--delay': '0.2s' }}>
            <div className="timeline-content">
              <div className="timeline-icon">
                <Wind className="w-6 h-6" />
              </div>
              <h3>Zero Waste Initiative</h3>
              <p>Implementing circular economy principles to eliminate waste and maximize resource efficiency across all facilities.</p>
              <div className="timeline-metrics">
                <div className="metric">
                  <span className="metric-value">95%</span>
                  <span className="metric-label">Waste Diverted</span>
                </div>
                <div className="metric">
                  <span className="metric-value">3x</span>
                  <span className="metric-label">Efficiency Gain</span>
                </div>
              </div>
            </div>
            <div className="timeline-date glowing-date">2028</div>
          </div>
          <div className={`timeline-item ${isVisible.timeline ? 'slide-in-left' : ''}`} style={{ '--delay': '0.4s' }}>
            <div className="timeline-content">
              <div className="timeline-icon">
                <Zap className="w-6 h-6" />
              </div>
              <h3>Clean Tech Innovation Hub</h3>
              <p>Launching dedicated research centers focused on breakthrough clean technologies and sustainable energy solutions.</p>
              <div className="innovation-showcase">
                <div className="tech-badge">AI-Powered</div>
                <div className="tech-badge">Carbon Capture</div>
                <div className="tech-badge">Green Hydrogen</div>
              </div>
            </div>
            <div className="timeline-date glowing-date">2026</div>
          </div>
          <div className={`timeline-item ${isVisible.timeline ? 'slide-in-right' : ''}`} style={{ '--delay': '0.6s' }}>
            <div className="timeline-content">
              <div className="timeline-icon">
                <Globe className="w-6 h-6" />
              </div>
              <h3>Sustainability Commitment</h3>
              <p>Established comprehensive ESG framework and committed to science-based targets for emissions reduction.</p>
              <div className="achievement-badges">
                <div className="badge">ESG Leader</div>
                <div className="badge">Science-Based Targets</div>
                <div className="badge">UN Global Compact</div>
              </div>
            </div>
            <div className="timeline-date glowing-date active">2024</div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section">
        <div className="cta-particles"></div>
        <div className="cta-content">
          <h2 className="cta-title">
            <span className="text-glow">Join Our</span>
            <span className="text-glow" style={{ '--delay': '0.2s' }}>Sustainable</span>
            <span className="text-glow" style={{ '--delay': '0.4s' }}>Mission</span>
          </h2>
          <p className="cta-description typewriter-effect">
            Partner with us to create a more sustainable future through innovative technology and collaborative action.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn-primarye magnetic-button">
              <div className="button-content">
                <Play className="w-5 h-5" />
                <span>Get Involved</span>
              </div>
              <div className="button-bg"></div>
            </a>
            <a href="#" className="btn-secondary magnetic-button">
              <div className="button-content">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="button-bg"></div>
            </a>
          </div>
        </div>
        
        {/* Interactive 3D Elements */}
        <div className="floating-3d-elements">
          <div className="element-3d" style={{ '--x': '10%', '--y': '20%', '--delay': '0s' }}>
            <Leaf className="w-8 h-8" />
          </div>
          <div className="element-3d" style={{ '--x': '80%', '--y': '30%', '--delay': '2s' }}>
            <Droplets className="w-8 h-8" />
          </div>
          <div className="element-3d" style={{ '--x': '20%', '--y': '70%', '--delay': '4s' }}>
            <Wind className="w-8 h-8" />
          </div>
          <div className="element-3d" style={{ '--x': '70%', '--y': '80%', '--delay': '6s' }}>
            <Zap className="w-8 h-8" />
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

export default Sustainability;