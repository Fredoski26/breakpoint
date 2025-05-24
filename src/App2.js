import React from 'react'; 
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import News from './components/News';
import Footer from './components/Footer';

// Main App Component
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Solutions />
        <Industries />
        <News />
      </main>
      <Footer />
    </div>
  );
}

// Components directory organization
// ./components/Navbar.js
const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-800">SLB</div>
          </div>
          
          <div className="hidden lg:flex space-x-8">
            <NavLink href="#" label="Services" />
            <NavLink href="#" label="Solutions" />
            <NavLink href="#" label="Industries" />
            <NavLink href="#" label="About" />
            <NavLink href="#" label="Investors" />
            <NavLink href="#" label="Careers" />
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-transparent hover:bg-blue-50 text-blue-800 px-4 py-2 rounded-lg">
              Contact Us
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg">
              Client Portal
            </button>
          </div>
          
          <button onClick={toggleMenu} className="lg:hidden text-blue-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="#" label="Services" />
              <MobileNavLink href="#" label="Solutions" />
              <MobileNavLink href="#" label="Industries" />
              <MobileNavLink href="#" label="About" />
              <MobileNavLink href="#" label="Investors" />
              <MobileNavLink href="#" label="Careers" />
              <div className="pt-4">
                <button className="w-full bg-transparent border border-blue-800 text-blue-800 px-4 py-2 rounded-lg mb-2">
                  Contact Us
                </button>
                <button className="w-full bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg">
                  Client Portal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Navigation link components
const NavLink = ({ href, label }) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-blue-800 font-medium"
  >
    {label}
  </a>
);

const MobileNavLink = ({ href, label }) => (
  <a 
    href={href} 
    className="text-gray-700 hover:text-blue-800 font-medium py-2 block"
  >
    {label}
  </a>
);

// ./components/Hero.js
const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-0">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Innovation for Energy Progress</h1>
            <p className="text-xl mb-8">
              SLB is a global technology company driving energy innovation for a balanced planet.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium">
                Explore Solutions
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-blue-800 px-6 py-3 rounded-lg font-medium">
                Learn About SLB
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ./components/Services.js
const Services = () => {
  const services = [
    {
      title: "Digital Solutions",
      description: "Transform operations with our advanced digital technologies.",
      icon: "🖥️"
    },
    {
      title: "Subsurface Solutions",
      description: "Optimize reservoir performance with innovative subsurface technologies.",
      icon: "⛏️"
    },
    {
      title: "Well Construction",
      description: "Build better wells with leading drilling and completion solutions.",
      icon: "🏗️"
    },
    {
      title: "Production Systems",
      description: "Maximize production with efficient and sustainable systems.",
      icon: "⚙️"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Innovative technologies and solutions designed to unlock energy access for the benefit of all.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ./components/Solutions.js
const Solutions = () => {
  const solutions = [
    {
      title: "New Energy",
      description: "Solutions for a low-carbon future.",
      image: "/api/placeholder/500/300"
    },
    {
      title: "Digital & Integration",
      description: "Digital solutions across the energy value chain.",
      image: "/api/placeholder/500/300"
    },
    {
      title: "Reservoir Performance",
      description: "Maximizing reservoir potential sustainably.",
      image: "/api/placeholder/500/300"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Innovative Solutions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Cutting-edge technologies that address energy industry challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={solution.image} alt={solution.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Explore solution
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ./components/Industries.js
const Industries = () => {
  const industries = [
    "Oil & Gas", 
    "Carbon Capture", 
    "Geothermal", 
    "Mining", 
    "Hydrogen", 
    "Energy Storage"
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Industries We Serve</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Delivering performance across the energy spectrum.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="bg-blue-800 hover:bg-blue-700 p-6 rounded-lg text-center transition-colors">
              <p className="font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ./components/News.js
const News = () => {
  const newsItems = [
    {
      title: "SLB Announces New Digital Platform for Energy Industry",
      date: "May 5, 2025",
      category: "Digital",
      excerpt: "New cloud-based solution streamlines operations and improves efficiency."
    },
    {
      title: "Expanding Carbon Capture Technologies",
      date: "April 28, 2025",
      category: "Sustainability",
      excerpt: "SLB introduces innovative carbon capture and storage solutions."
    },
    {
      title: "Partnership Announced for Geothermal Development",
      date: "April 15, 2025",
      category: "New Energy",
      excerpt: "Strategic alliance aims to accelerate geothermal energy production."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
            View all news
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-sm font-medium mb-2">{item.category}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{item.date}</span>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ./components/Footer.js
const Footer = () => {
  const footerLinks = [
    {
      title: "About SLB",
      links: ["Company", "Leadership", "History", "Sustainability", "Careers"]
    },
    {
      title: "Businesses",
      links: ["Digital Solutions", "Reservoir Performance", "Well Construction", "Production Systems"]
    },
    {
      title: "Resources",
      links: ["News", "Events", "Publications", "Case Studies", "Technology Papers"]
    },
    {
      title: "Connect",
      links: ["Contact Us", "Locations", "Support", "Suppliers", "Investors"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">SLB</div>
              <p className="text-gray-400">© 2025 SLB. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-4">
              <SocialIcon name="LinkedIn" />
              <SocialIcon name="Twitter" />
              <SocialIcon name="Facebook" />
              <SocialIcon name="YouTube" />
              <SocialIcon name="Instagram" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Notice</a>
            <a href="#" className="hover:text-white">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ name }) => {
  return (
    <a href="#" className="bg-gray-800 hover:bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full transition-colors">
      {name.substring(0, 1)}
    </a>
  );
};