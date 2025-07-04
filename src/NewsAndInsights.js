import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
//import './App.css';
import './newsPage.css';
import logoImage from './images/logo2.png';
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImage3 from './images/image3.jpg';
import logoImage4 from './images/image4.jpg';
import { Link } from 'react-router-dom';

export default function NewsAndInsights() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

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

  
    }, []);

    useEffect(() => {
          const handleScroll = () => {
            setScrolled(window.scrollY > 50);
          };
      
         window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);

  // Navigation items
  const navItems = [
    'Products & Services', 
    'Industries', 
    'Digital', 
    'Sustainability', 
    'About', 
    'Careers'
  ];

  // Filter tabs
  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'Why Choose Us', label: 'Why Choose Us' },
    { id: 'What Sets Our Rope Access Apart', label: 'What Sets Our Rope Access Apart' },
    { id: 'What Sets Us Apart', label: 'What Sets Us Apart' },
    // { id: 'case-studies', label: 'Case studies' },
    // { id: 'feature-stories', label: 'Feature stories' },
    { id: 'events', label: 'Events' },
    // { id: 'webcasts', label: 'Webcasts' }
  ];

  // News items data
  const newsItems = [
    {
      type: 'Why Choose Us',
      date: '',
      title: 'Certified Expertise',
      description: 'All inspectors hold ASNT, PCN, or equivalent certifications.',
      imageUrl: logoImage1,
      tag: 'Why Choose Us'
    },
     {
      type: 'Why Choose Us',
      date: '',
      title: 'Uncompromising Quality',
      description: 'We adhere strictly to API, ASME, DS-1, and ISO standards.',
      imageUrl: logoImage2,
      tag: 'Why Choose Us'
    },
     {
      type: 'Why Choose Us',
      date: '',
      title: 'Technology-Driven',
      description: 'We invest in cutting-edge NDT equipment and digital inspection systems.',
      imageUrl: logoImage3,
      tag: 'Why Choose Us'
    },
     {
      type: 'Why Choose Us',
      date: '',
      title: 'Safety and Compliance',
      description: 'Our inspections align with regulatory bodies and OEM requirements.',
      imageUrl: logoImage4,
      tag: 'Why Choose Us'
    },
    {
      type: 'Feature story',
      date: 'May 10, 2025',
      title: 'Driving Sustainable Performance in Unconventional Plays',
      description: 'How BreakPoint technologies are transforming production efficiency while reducing environmental impact.',
      imageUrl: logoImage2,
      tag: 'feature-stories'
    },
    {
      type: 'What Sets Our Rope Access Apart',
      date: '',
      title: 'Zero Compromise on Safety',
      description: 'A flawless track record of incident-free execution in hazardous offshore and onshore environments',
      imageUrl: logoImage1 ,
      tag: 'What Sets Our Rope Access Apart'
    },
    {
      type: 'What Sets Our Rope Access Apart',
      date: '',
      title: 'Rapid Deployment & Execution',
      description: 'We significantly reduce mobilization time and downtime, maximizing operational continuity and minimizing disruption.',
      imageUrl: logoImage3 ,
      tag: 'What Sets Our Rope Access Apart'
    },
    {
      type: 'What Sets Our Rope Access Apart',
      date: '',
      title: 'Multidisciplinary Workforce',
      description: 'Our rope access professionals double as certified NDT technicians, mechanical inspectors, fabricators, electricians, and more—delivering complete solutions from height',
      imageUrl: logoImage4 ,
      tag: 'What Sets Our Rope Access Apart'
    },
    {
      type: 'What Sets Our Rope Access Apart',
      date: '',
      title: 'Cost-Efficiency',
      description: 'Reduced labor, equipment, and setup costs offer significant savings compared to traditional access methods',
      imageUrl: logoImage2 ,
      tag: 'What Sets Our Rope Access Apart'
    },
    {
      type: 'Case study',
      date: 'April 28, 2025',
      title: 'Optimizing Production in Mature Fields',
      description: 'How an operator in the North Sea achieved 30% production increase through integrated technologies.',
      imageUrl: logoImage4,
      tag: 'case-studies'
    },
    {
      type: 'Event',
      date: 'June 15-18, 2025',
      title: 'BreakPoint at Offshore Technology Conference 2025',
      description: 'Join BreakPoint at OTC 2025 to discover the latest innovations in offshore energy technology.',
      imageUrl: logoImage1,
      tag: 'events'
    },
    {
      type: 'What Sets Us Apart',
      date: '',
      title: 'Intelligent Well Planning',
      description: 'We develop robust drilling programs through integrated geological, geophysical, and reservoir modeling to ensure optimal trajectory, cost-effectiveness, and productivity',
      imageUrl: logoImage3,
      tag: 'What Sets Us Apart'
    },
     {
      type: 'What Sets Us Apart',
      date: '',
      title: 'Advanced Technologies',
      description: 'Leveraging state-of-the-art rigs, automated drilling systems, and real-time downhole monitoring, we drive performance and minimize non-productive time (NPT).',
      imageUrl: logoImage4,
      tag: 'What Sets Us Apart'
    },
     {
      type: 'What Sets Us Apart',
      date: '',
      title: 'Safety & Environmental Stewardship',
      description: 'With strict adherence to international HSE standards, we conduct operations with a relentless focus on safety and minimal ecological footprint.',
      imageUrl: logoImage2,
      tag: 'What Sets Us Apart'
    },
     {
      type: 'What Sets Us Apart',
      date: '',
      title: 'Real-Time Optimization: ',
      description: 'Using advanced analytics and live data feeds, our experts make real-time decisions that enhance wellbore stability, improve penetration rates, and mitigate operational risks.',
      imageUrl: logoImage3,
      tag: 'What Sets Us Apart'
    }
  ];

  // Filter news items based on active tab
  const filteredNews = activeTab === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.tag === activeTab);

  // Calculate total pages
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Get current page items
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
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


      <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            News & Insights
          </h1>
          
          <p className="hero-subtitle">
            At Breakpoint Energy Services Limited, we redefine high-access operations through cutting-edge Rope Access Inspection services, engineered to deliver unmatched safety, efficiency, and cost-effectiveness in challenging environments. Our rope access program is built upon the globally recognized IRATA (Industrial Rope Access Trade Association) standards, ensuring the highest level of professionalism and compliance in every project we execute.
          </p>
          
          {/* <button className="hero-cta-button">
            <span>Register to subscribe</span>
            <ArrowRight className="hero-arrow-icon" size={20} />
          </button> */}
        </div>
        
        {/* Right Image */}
        <div className="hero-image-container">
          <img 
            src= {logoImage4} 
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

      {/* Hero section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">BreakPoint</h1>
              <p className="text-lg text-gray-700">
                Backed by highly skilled, IRATA-certified technicians, our Rope Access team is not only proficient in vertical access but also cross-trained across multiple disciplines. This enables us to carry out complex inspection, maintenance, and integrity management tasks safely and swiftly—without the need for disruptive, time-consuming scaffolding or heavy lifting equipment.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={logoImage3} 
                alt="BreakPoint News and Insights" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <div className="flex space-x-2 py-4 min-w-max">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setCurrentPage(1);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentItems().map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
                <div className="relative h-48">
                  <img 
                    src={item.imageUrl}  
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-800">{item.type}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4 flex-grow">{item.description}</p>
                  <a href="#" className="flex items-center text-blue-800 font-medium hover:text-blue-600">
                    {/* Read more <ChevronRight size={16} className="ml-1" /> */}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentPage === index + 1
                        ? 'bg-blue-800 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay up to date</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter for the latest news, insights, and innovations from BreakPoint
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-800 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Media resources</h3>
              <p className="text-gray-700 mb-4">
                Access our media kit, company facts, executive bios, and brand guidelines
              </p>
              <a href="#" className="flex items-center text-blue-800 font-medium hover:text-blue-600">
                {/* Learn more <ArrowRight size={16} className="ml-1" /> */}
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial information</h3>
              <p className="text-gray-700 mb-4">
                View our latest financial results, annual reports, and investor presentations
              </p>
              <a href="#" className="flex items-center text-blue-800 font-medium hover:text-blue-600">
                {/* Learn more <ArrowRight size={16} className="ml-1" /> */}
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact us</h3>
              <p className="text-gray-700 mb-4">
                Get in touch with our media relations team or find your local BreakPoint office
              </p>
              <a href="#" className="flex items-center text-blue-800 font-medium hover:text-blue-600">
                {/* Learn more <ArrowRight size={16} className="ml-1" /> */}
              </a>
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
}