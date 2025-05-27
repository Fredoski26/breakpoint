import React from 'react';
import './BreakPointSection.css';

const BreakPointSection = () => {
  return (
   <section id="breakpoint-section">
      <div className="breakpoint-container">
        <div className="breakpoint-content-left">
          <p className="breakpoint-focus-label">Focus</p>
          <h1 className="breakpoint-main-heading">	At Breakpoint Energy Services Limited, we deliver world-class Inspection and Non-Destructive Testing (NDT) services that are engineered to exceed industry standards and client expectations.           </h1>
          {/* <h1 className="breakpoint-main-heading">
            Accelerating decarbonization and innovating across the entire energy landscape with leading science, engineering and digital expertise
          </h1> */}
          <p className="breakpoint-description">
           Our inspection capabilities are a critical part of our integrated asset integrity solutions, designed to maximize uptime, enhance safety, and ensure full compliance across oilfield operations, both onshore and offshore.          </p>
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