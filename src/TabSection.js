import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './TabSection.css';
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImag3 from './images/image3.jpg';
import logoImag4 from './images/image4.jpg';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  
  // Set loading state when tab changes
  useEffect(() => {
    // Start loading and image transition
    setLoading(true);
    setImageTransition(true);
    
    // End loading after animation time
    const textTimer = setTimeout(() => {
      setLoading(false);
    }, 600);
    
    // End image transition after animation time
    const imageTimer = setTimeout(() => {
      setImageTransition(false);
    }, 800);
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
    };
  }, [activeTab]);
  
  const tabs = [
    {
      id: 0,
      title: "Certified Expertise",
      description: "All inspectors hold ASNT, PCN, or equivalent certifications.",
      image: logoImage1
    },
    {
      id: 1,
      title: "Uncompromising Quality",
      description: "We adhere strictly to API, ASME, DS-1, and ISO standards.",
      image: logoImage2
    },
    {
      id: 2,
      title: "Technology-Driven",
      description: "We invest in cutting-edge NDT equipment and digital inspection systems.",
      image: logoImag3
    },
    {
      id: 3,
      title: "Safety and Compliance",
      description: "Our inspections align with regulatory bodies and OEM requirements.",
      image: logoImag4
    }
  ];

  return (
    <section className="tabs-section">
      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        {tabs.map((tab, index) => (
          <div key={tab.id} className={`tab-content ${activeTab === index ? 'active' : ''}`}>
            <div className="tab-content-left">
              <div>
                <h2 className={`tab-title ${loading ? 'loading' : ''}`}>{tab.title}</h2>
                <div className="tab-description-wrapper">
                  <p className={`tab-description ${loading ? 'loading' : ''}`}>{tab.description}</p>
                </div>
              </div>
              <div className={`tab-explore ${loading ? 'loading' : ''}`}>
                <span>Explore</span>
                <ArrowRight size={18} />
              </div>
            </div>
            <div className="tab-content-right">
              <img 
                src={tab.image} 
                alt={tab.title} 
                className={`tab-image ${imageTransition ? 'transitioning' : ''}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabSection;