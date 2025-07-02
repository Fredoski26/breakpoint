import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Globe, Zap, Settings, Layers, ArrowRight, Play, CheckCircle, Menu, X, } from 'lucide-react';
import './productService.css';
import './App.css';
import logoImage from './images/logo2.png';
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImage3 from './images/image3.jpg';
import logoImage4 from './images/image4.jpg';
import { Link } from 'react-router-dom';

const ProductsAndServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeService1, setActiveService1] = useState(0);
  const [activeServiceConst, setActiveServiceConst] = useState(0);
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

     const serviceName =[

       {
      title: "Services",
      description: "1. Inspection and Non-Destructive Testing (NDT) ",
      icon: <Globe className="w-8 h-8" />,
    },

    {
      title: "Fred2 ",
      description: "2.	Rope Access Inspection Services",
      icon: <Globe className="w-8 h-8" />,
    },

    {
      title: "Fred3 ",
      description: "3.	Drilling Services",
      icon: <Globe className="w-8 h-8" />,
    },

     {
      title: "Fred3 ",
      description: "4 Construction Services",
      icon: <Globe className="w-8 h-8" />,
    },

     {
      title: "Fred3 ",
      description: "5.	Strategic Procurement & Supply Chain Excellence",
      icon: <Globe className="w-8 h-8" />,
    },



     ]


      const serviceInspection = [
    {
      title: "Inspection and Non-Destructive Testing (NDT) ",
      description: "",
      icon: <Globe className="w-8 h-8" />,
      features: ["Magnetic Particle Inspection (MPI)", "Dye Penetrant Inspection (DPI)", "Ultrasonic Testing (UT)", "Eddy Current Testing (ECT)", "Radiographic Testing (RT)", "Boroscopic Inspection", "Hardness Testing", "Time of Flight Diffraction (TOFD)","Alternating Current Field Measurement (ACFM)",]
    },
    {
      title: "OCTG and Structural Component Inspections",
      description: "",
      icon: <Zap className="w-8 h-8" />,
      features: ["OCTG & Drill Pipe Inspection – API / DS-1 / NS-2 Standards","Bottom Hole Assembly Inspection – Full BHA analysis and certification","Riser and Conductor Pipe Inspection","Casing and Tubing Integrity Assessments","Crown Block to Bitline Inspections"]
  
    },

  
   
  ];

  const services = [
    {
      title: "Rope Access Service Capabilities include:  ",
      description: "",
      icon: <Globe className="w-8 h-8" />,
      features: ["Structural & Component Inspections", "Non-Destructive Testing (NDT)", "Lifting Gear and Pipework Inspection", "Blasting & Coating Application","Rigging and Installation", "Welding & Hot Works", "Electrical & Instrumentation Works", "Confined Space Entry Support", "Maintenance and Emergency Repairs "]
    },
    {
      title: "Rope Access Tradesmen Include ",
      description: "",
      icon: <Zap className="w-8 h-8" />,
      features: ["IRATA-Certified NDT Technicians", "Welders & Fabricators", "Blasters & Painters", "Pipe Fitters & Riggers", "Mechanical & Electrical Engineers","Insulators & Plumbers","General Maintenance Specialists"]
    },
   
  ];

  const services1 = [
    
    {
      title: "World-Class Procurement Services",
      description: "We leverage deep global partnerships and a vast network of Original Equipment Manufacturers (OEMs), certified vendors, and international suppliers to source and deliver premium materials and equipment. From routine consumables to high-value project-critical assets, our procurement capabilities are tailored to meet project timelines and technical specifications with precision",
      icon: <Globe className="w-8 h-8" />,
      features: ["Oilfield and drilling equipment", "Mechanical, electrical & instrumentation components", "Process automation systems and spares", "Personal Protective Equipment (PPE) and safety gear", "Chemicals, lubricants, and specialized industrial materials" ]
    },

    {
      title: "End-to-End Supply Chain Management",
      description: "We manage the entire procurement lifecycle—from vendor selection and contract negotiation to expediting, shipping, customs clearance, warehousing, and last-mile delivery. Our integrated IT systems and dedicated logistics teams enable real-time tracking, performance monitoring, and risk mitigation at every stage.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Dedicated global sourcing & logistics team", "In-house freight forwarding & clearing agents", "Warehousing, stock holding & inventory control systems", "Just-in-time (JIT) delivery scheduling", "Compliance with local and international procurement regulations" ]
    },
    
  ];

  const services2 = [
  
    {
      title: "Drilling Service Capabilities Include",
      description: "",
      icon: <Globe className="w-8 h-8" />,
      features: ["Well Planning and Engineering", "Onshore and Offshore Drilling Operations", "Directional & Horizontal Drilling", "HPHT & Deep Well Drilling", "Mud Engineering & Solids Control", "Real-Time Drilling Monitoring & Remote Support", "Wellbore Cleanout and Completion Preparation"]
    },
    
  ];

  const services3 = [
   
    {
      title: "Construction Capabilities Include",
      description: "",
      icon: <Layers className="w-8 h-8" />,
      features: ["Oil & Gas Facility Construction (Flow Stations, Manifolds, Compressor Stations)", "Pipeline Construction & Hydrotesting", "Civil Works (Foundations, Roadways, Drainage, Structural Concrete)", "Steel Structure Fabrication & Erection (Skids, Racks, Storage Tanks, Pressure Vessels)","Mechanical, Electrical & Instrumentation Installations","Modular and Pre-Engineered Building Systems","Commissioning and Start-Up Support","Erosion Control & Soil Stabilization Projects"]
    },
    {
      title: "Project Delivery Models",
      description: "",
      icon: <Layers className="w-8 h-8" />,
      features: ["EPC (Engineering, Procurement & Construction)", "Design-Build & Turnkey Solutions", "Public-Private Partnerships","Construction Management-at-Risk (CMAR)"]
    }
    
  ];

  const stats = [
    { number: "101+", label: "Countries Served" },
    { number: "20k+", label: "Projects Delivered" },
    { number: "21+", label: "Years Experience" },
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
      <section className="stats-sections flex flex-col items-center justify-center min-h-screen">
        <div className="floating-orbs">
          <div className="orb orb-blue"></div>
          <div className="orb orb-purple"></div>
          <div className="orb orb-pink"></div>
        </div>
        
        <div className="services-grid">
            {/* Service Cards */}
          
           

 <div id="service-details" className={`service-details ${isVisible['service-details'] ? 'visible' : ''}`}>
              <div className="service-details-second-card">
                <div className="service-details-header">
                  <div className="service-details-icon">
                    {services1[activeService1].icon}
                  </div>
                  <h3 className="service-details-title">Our Services:</h3>
                </div>
                
                <p className="service-details-description">
                  
                </p>
              </div>
            </div>

             <div id="service-cards" className={`service-cards ${isVisible['service-cards'] ? 'visible' : ''}`}>
              {serviceName.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${activeService1 === index ? 'active' : ''}`}
                  // onClick={() => setActiveService(index)}
                >
                  <div className="service-card-header">
                    <div className={`service-icon ${activeService1 === index ? 'active' : ''}`}>
                      {/* {service.icon} */}
                    </div>
                    
                    <h3 className="service-title">{service.description}</h3>
                    {/* <ChevronRight className={`service-arrow ${activeService === index ? 'active' : ''}`} /> */}
                  </div>
                  
                </div>
              ))}
            </div>
            
          </div>
        
        {/* <div id="hero" className={`hero-conten ${isVisible.hero ? 'visibles' : ''}`}>
          <div className="hero-cards">
            <h1 className="hero-titles">
              Future-Ready Solutions
            </h1>
            <p className="hero-descriptions">
     	At Breakpoint Energy Services Limited, we deliver world-class Inspection and Non-Destructive Testing (NDT) services that are engineered to exceed industry standards and client expectations.             </p>
            <div className="hero-buttonss">
              <button className="btn-primarys">
                <Play className="w-5 h-5" />
                
                <ul>
                <li><a href="/">Explore Solutions</a></li>
                </ul>
                <ArrowRight className="btn-arrow w-5 h-5" />
              </button>
              <button className="btn-secondary">
                
                <ul>
                <li><a href="/about">Learn More</a></li>
                </ul>
              </button>
            </div>
          </div>
        </div> */}
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
              Inspection and Non-Destructive Testing (NDT) 
            </h2>
            <p className="section-description">
             Our inspection capabilities are a critical part of our integrated asset integrity solutions, designed to maximize uptime, enhance safety, and ensure full compliance across oilfield operations, both onshore and offshore

            </p>
          </div>

          <div className="services-grid">
            {/* Service Cards */}
            <div id="service-cards" className={`service-cards ${isVisible['service-cards'] ? 'visible' : ''}`}>
              {serviceInspection.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${activeServiceConst === index ? 'active' : ''}`}
                  onClick={() => setActiveServiceConst(index)}
                >
                  <div className="service-card-header">
                    <div className={`service-icon ${activeServiceConst === index ? 'active' : ''}`}>
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <ChevronRight className={`service-arrow ${activeServiceConst === index ? 'active' : ''}`} />
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
                    {serviceInspection[activeServiceConst].icon}
                  </div>
                  <h3 className="service-details-title">{serviceInspection[activeServiceConst].title}</h3>
                </div>
                
                <p className="service-details-description">
                  {serviceInspection[activeServiceConst].description}
                </p>

                <div className="service-features">
                  <h4 className="features-title">Services:</h4>
                  {serviceInspection[activeServiceConst].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div id="services-header" className={`services-header ${isVisible['services-header'] ? 'visible' : ''}`}>
            <h2 className="section-title">
              Rope Access Inspection Services
            </h2>
            <p className="section-description">
             Our rope access program is built upon the globally recognized IRATA (Industrial Rope Access Trade Association) standards, ensuring the highest level of professionalism and compliance in every project we execute.

            </p>
          </div>

          <div className="services-grid">
            {/* Service Cards */}
            <div id="service-cards" className={`service-cards ${isVisible['service-cards'] ? 'visible' : ''}`}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${activeServiceConst === index ? 'active' : ''}`}
                  onClick={() => setActiveServiceConst(index)}
                >
                  <div className="service-card-header">
                    <div className={`service-icon ${activeServiceConst === index ? 'active' : ''}`}>
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <ChevronRight className={`service-arrow ${activeServiceConst === index ? 'active' : ''}`} />
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
                    {services[activeServiceConst].icon}
                  </div>
                  <h3 className="service-details-title">{services[activeServiceConst].title}</h3>
                </div>
                
                <p className="service-details-description">
                  {services[activeServiceConst].description}
                </p>

                <div className="service-features">
                  <h4 className="features-title">Services:</h4>
                  {services[activeServiceConst].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div id="services-header" className={`services-header ${isVisible['services-header'] ? 'visible' : ''}`}>
            <h2 className="section-title">
              Drilling Services
            </h2>
            <p className="section-description">
            Our highly specialized drilling engineering team is adept at designing and executing complex well construction projects, both onshore and offshore. From vertical and directional drilling to extended-reach and high-pressure, high-temperature (HPHT) wells, our capabilities cover the full spectrum of drilling challenges in today’s dynamic energy landscape.

            </p>
          </div>

          <div className="services-grid">
            {/* Service Cards */}
            <div id="service-cards" className={`service-cards ${isVisible['service-cards'] ? 'visible' : ''}`}>
              {services2.map((service, index) => (
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
                    {/* <ChevronRight className={`service-arrow ${activeService === index ? 'active' : ''}`} /> */}
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
                    {services2[activeService].icon}
                  </div>
                  <h3 className="service-details-title">{services2[activeService].title}</h3>
                </div>
                
                <p className="service-details-description">
                  {services2[activeService].description}
                </p>

                <div className="service-features">
                  <h4 className="features-title">Services:</h4>
                  {services2[activeService].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div id="services-header" className={`services-header ${isVisible['services-header'] ? 'visible' : ''}`}>
            <h2 className="section-title">
              Construction Services
            </h2>
            <p className="section-description">
           At Breakpoint Energy Services Limited we deliver world-class construction solutions that drive efficiency, safety, and excellence across every phase of oil and gas infrastructure development. From greenfield projects to brownfield upgrades, we bring your vision to life with unmatched precision and reliability.
With a seasoned multidisciplinary team and deep regional expertise, our construction services extend across upstream, midstream, and downstream operations — covering facility development, pipeline construction, civil works, steel fabrication, and structural upgrades.

            </p>
          </div>

          <div className="services-grid">
            {/* Service Cards */}
            <div id="service-cards" className={`service-cards ${isVisible['service-cards'] ? 'visible' : ''}`}>
              {services3.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${activeServiceConst === index ? 'active' : ''}`}
                  onClick={() => setActiveServiceConst(index)}
                >
                  <div className="service-card-header">
                    <div className={`service-icon ${activeServiceConst === index ? 'active' : ''}`}>
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <ChevronRight className={`service-arrow ${activeServiceConst === index ? 'active' : ''}`} />
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
                    {services3[activeServiceConst].icon}
                  </div>
                  <h3 className="service-details-title">{services3[activeServiceConst].title}</h3>
                </div>
                
                <p className="service-details-description">
                  {services3[activeServiceConst].description}
                </p>

                <div className="service-features">
                  <h4 className="features-title">Services:</h4>
                  {services3[activeServiceConst].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div id="services-header" className={`services-header ${isVisible['services-header'] ? 'visible' : ''}`}>
            <h2 className="section-title">
              World-Class Procurement Services
            </h2>
            <p className="section-description">
               our Procurement and Supply Chain Services are designed to be agile, responsive, and strategically aligned with our clients’ operational needs. We provide intelligent sourcing solutions that deliver value beyond cost savings—ensuring quality, reliability, and performance across the energy and industrial spectrum.
            </p>
          </div>

          <div className="services-grid">
            {/* Service Cards */}
            <div id="service-cards" className={`service-cards ${isVisible['service-cards'] ? 'visible' : ''}`}>
              {services1.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${activeServiceConst === index ? 'active' : ''}`}
                  onClick={() => setActiveServiceConst(index)}
                >
                  <div className="service-card-header">
                    <div className={`service-icon ${activeServiceConst === index ? 'active' : ''}`}>
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <ChevronRight className={`service-arrow ${activeServiceConst === index ? 'active' : ''}`} />
                  </div>
                  {/* <p className="service-description">{service.description}</p> */}
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div id="service-details" className={`service-details ${isVisible['service-details'] ? 'visible' : ''}`}>
              <div className="service-details-card">
                <div className="service-details-header">
                  <div className="service-details-icon">
                    {services1[activeServiceConst].icon}
                  </div>
                  <h3 className="service-details-title">{services1[activeServiceConst].title}</h3>
                </div>
                
                <p className="service-details-description">
                  {services1[activeServiceConst].description}
                </p>

                <div className="service-features">
                  <h4 className="features-title">Services:</h4>
                  {services1[activeServiceConst].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-sections">
  <div id="cta" className={`cta-container ${isVisible.cta ? 'visible' : ''}`}>
    <div className="cta-card">
      <h3 className="cta-title">
        Tailored Solutions. Scalable Support.
      </h3>
      <p className="cta-description">
        Whether it's a one-time supply or full-scale project procurement, we adapt to client needs with scalable solutions. Our strategic procurement programs help clients reduce lead times, minimize downtime, and improve cost-efficiency without compromising quality
      </p>
      <ul className="horizontal-list">
        <li>We also offer:</li>
        <li>Long-term supply agreements</li>
        <li>Project-based procurement outsourcing</li>
        <li>Vendor-managed inventory (VMI)</li>
        <li>Digital procurement platforms with client access</li>
      </ul>
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