import React from 'react';
import './BreakPointSection.css';

const BreakPointSection = () => {
  return (
   <section id="breakpoint-section">
      <div className="breakpoint-container">
        <div className="breakpoint-content-left">
          <p className="breakpoint-focus-label">Focus</p>
          <h1 className="breakpoint-main-heading">
            Accelerating decarbonization and innovating across the entire energy landscape with leading science, engineering and digital expertise
          </h1>
          <p className="breakpoint-description">
            We create and deploy the technology and systems needed to simultaneously reduce emissions while meeting the world's growing energy demands, ensuring progress for people and the planet, on the journey to net zero and beyond.
          </p>
        </div>
        <div className="breakpoint-content-right">
          <a href="#" className="breakpoint-explore-button">
            Explore our approach
            <span className="breakpoint-arrow-icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BreakPointSection;