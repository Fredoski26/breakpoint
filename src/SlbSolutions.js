import React, { useRef, useState, useEffect } from 'react';
import './SlbSolutions.css';
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImage3 from './images/image3.jpg';
import logoImage4 from './images/image4.jpg';

const SlbSolutions = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  
  const cardWidth = 400; // Width based on the original CSS
  
  
  // Solutions data with titles and descriptions
  const solutionsData = [
    {
      title: "Intelligent Well Planning ",
      description: "We develop robust drilling programs through integrated geological, geophysical, and reservoir modeling to ensure optimal trajectory, cost-effectiveness, and productivity",
      image: logoImage1
    },
    {
      title: "Advanced Technologies",
      description: "Leveraging state-of-the-art rigs, automated drilling systems, and real-time downhole monitoring, we drive performance and minimize non-productive time (NPT).",
      image: logoImage2
    },
    {
      title: "Safety & Environmental Stewardship",
      description: "With strict adherence to international HSE standards, we conduct operations with a relentless focus on safety and minimal ecological footprint.",
      image: logoImage3
    },
    {
      title: "Real-Time Optimization",
      description: "Using advanced analytics and live data feeds, our experts make real-time decisions that enhance wellbore stability, improve penetration rates, and mitigate operational risks.",
      image: logoImage4
    },
    {
      title: "Methane Flaring Elimination",
      description: "Reduce environmental impact and improve efficiency with our innovative solutions designed to capture and utilize methane that would otherwise be flared.",
      image: logoImage2
    },
    {
      title: "Digital Transformation",
      description: "Revolutionize your operations with integrated digital solutions that enhance efficiency, reduce costs, and drive sustainable growth.",
      image: logoImage4
    },
    {
      title: "Carbon Capture Solutions",
      description: "Implement effective carbon reduction strategies with our advanced technologies designed to capture, store, and repurpose carbon emissions.",
      image: logoImage2
    },
    
  ];

  const styles = {
    section: {
      padding: '80px 20px',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '60px',
      gap: '40px'
    },
    headerLeft: {
      flex: '1',
      maxWidth: '800px'
    },
    label: {
      color: '#0047CC',
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    mainHeading: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '24px',
      lineHeight: '1.2'
    },
    description: {
      fontSize: '18px',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '0'
    },
    headerRight: {
      flexShrink: 0
    },
    exploreButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 32px',
      backgroundColor: '#0047CC',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },
    cardsContainer: {
      display: 'flex',
      gap: '24px',
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      paddingBottom: '20px',
      marginBottom: '40px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },
    card: {
      minWidth: '380px',
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e1e5e9',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      display: 'block'
    },
    cardContent: {
      padding: '24px'
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '16px',
      lineHeight: '1.3'
    },
    cardDescription: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.5',
      marginBottom: '24px'
    },
    cardLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#0047CC',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s ease'
    },
    navigation: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      color: '#0047CC'
    },
    navButton: {
      width: '50px',
      height: '50px',
      backgroundColor: '#fff',
      border: '2px solid #e1e5e9',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    },
    pagination: {
      margin: '0 auto',
      display: 'flex',
      gap: '12px'
    },
    dot: {
      cursor: 'pointer',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#e1e5e9',
      transition: 'all 0.3s ease'
    },
    dotActive: {
      backgroundColor: '#0047CC'
    }
  };
  
  useEffect(() => {
    const updateMaxScroll = () => {
      if (scrollContainerRef.current) {
        setMaxScroll(
          scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
        );
      }
    };
    
    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    return () => window.removeEventListener('resize', updateMaxScroll);
  }, []);


  
  
  // Update active dot based on scroll position
  useEffect(() => {
    if (maxScroll > 0) {
      const dotPosition = Math.round((scrollPosition / maxScroll) * 1);
      setActiveDot(dotPosition);
    }
  }, [scrollPosition, maxScroll]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.max(scrollPosition - cardWidth * 3, 0);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.min(scrollPosition + cardWidth * 3, maxScroll);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const goToPage = (pageIndex) => {
    if (scrollContainerRef.current && maxScroll > 0) {
      const newPosition = (maxScroll * pageIndex);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="SLB-Solutions-section">
      <div className="SLB-Solutions-container">
        <div className="SLB-Solutions-container2">
          <div className="SLB-Solutions-header">
            <div className="SLB-Solutions-header-left">
              <p className="SLB-Solutions-label">BreakPoint Solutions</p>
              <h1 className="SLB-Solutions-main-heading">
                Solving industry's most pressing challenges
              </h1>
              <p className="SLB-Solutions-description">
               Our team comprises internationally certified inspectors and multi-discipline NDT professionals with vast field experience, trained to deploy state-of-the-art diagnostic tools and technologies across all inspection regimes. We provide precise, reliable evaluations of equipment integrity and structural soundness by ensuring early detection of potential failures, prolonging asset life, and reducing operational risks              </p>
            </div>
            <div className="SLB-Solutions-header-right">
              {/* <a href="#" className="SLB-Solutions-explore-button">
                Explore our solutions
                <span className="SLB-Solutions-arrow-icon">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="SLB-Solutions-container"></div>

        <div 
          style={{
            ...styles.cardsContainer,
            '::-webkit-scrollbar': { display: 'none' }
          }}
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {solutionsData.map((solution, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img 
                src={solution.image} 
                alt={solution.title}
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h2 style={styles.cardTitle}>{solution.title}</h2>
                <div style={styles.cardDescription}>
                  <p>{solution.description}</p>
                </div>
                {/* <a 
                  href="#" 
                  style={styles.cardLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#003399';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#0047CC';
                  }}
                >
                  Explore
                  <span>→</span>
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <div className="SLB-Solutions-navigation" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#0047CC' }}>
          <button 
            className={`SLB-Solutions-nav-button SLB-Solutions-prev`}
            onClick={scrollPrev}
            disabled={scrollPosition <= 0}
            style={{ 
              opacity: scrollPosition <= 0 ? 0.5 : 1,
              width: '50px',
              height: '50px',
              backgroundColor: '#fff',
            }}
          >
            <span className="SLB-Solutions-nav-arrow-left" style={{ fontSize: '24px', color: '#0047CC' }}>←</span>
          </button>
          
          <div className="SLB-Solutions-pagination" style={{ margin: '0 auto', display: 'flex', gap: '12px' }}>
            {[0, 1].map((dot) => (
              <span
                key={dot}
                className={`SLB-Solutions-dot ${activeDot === dot ? 'SLB-Solutions-dot-active' : ''}`}
                onClick={() => goToPage(dot)}
                style={{ 
                  cursor: 'pointer',
                  width: '12px',
                  height: '12px'
                }}
              ></span>
            ))}
          </div>
          
          <button 
            className={`SLB-Solutions-nav-button SLB-Solutions-next`}
            onClick={scrollNext}
            disabled={scrollPosition >= maxScroll}
            style={{ 
              opacity: scrollPosition >= maxScroll ? 0.5 : 1,
              width: '50px',
              height: '50px',
              backgroundColor: '#fff',
            }}
          >
            <span className="SLB-Solutions-nav-arrow-right" style={{ fontSize: '24px', color: '#0047CC' }}>→</span>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default SlbSolutions;