import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBusinessTime, FaChartLine, FaLaptop, FaChevronDown } from 'react-icons/fa';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import '../styles/Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [aboutRef, aboutEntry] = useIntersectionObserver({
    threshold: 0.1,
    root: null
  });
  
  const [expertiseRef, expertiseEntry] = useIntersectionObserver({
    threshold: 0.1,
    root: null
  });
  
  const [ctaRef, ctaEntry] = useIntersectionObserver({
    threshold: 0.1,
    root: null
  });

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCTA = () => {
    const ctaSection = document.querySelector('.cta-section');
    ctaSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    // Set visibility after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className={`hero-content ${isVisible ? 'animate-fade-in' : ''}`} style={{ opacity: isVisible ? 1 : 0.9 }}>
          <div className="hero-image-container">
            <img 
              src="/challa-saketh/assets/profile pic.jpg" 
              alt="Challa Saketh - Business Professional" 
              className={`hero-image ${isVisible ? 'animate-fade-in delay-200' : ''}`}
              style={{ opacity: isVisible ? 1 : 0.9 }}
            />
          </div>
          <div className="hero-text-content">
            <h1 className={isVisible ? 'animate-fade-in delay-300' : ''} style={{ opacity: isVisible ? 1 : 0.9 }}>
              Challa Saketh
            </h1>
            
            <p className={`hero-subtitle ${isVisible ? 'animate-fade-in delay-600' : ''}`} style={{ opacity: isVisible ? 1 : 0.9 }}>
              Business Management | Digital Marketing | Strategic Planning
            </p>
            
            <p className={`hero-description ${isVisible ? 'animate-fade-in delay-600' : ''}`} style={{ opacity: isVisible ? 1 : 0.9 }}>
              Transforming business challenges into growth opportunities through innovative strategies and digital solutions.
            </p>
            
            <div className={`hero-cta ${isVisible ? 'animate-fade-in delay-900' : ''}`} style={{ opacity: isVisible ? 1 : 0.9 }}>
              <Link to="/resume" className="btn-primary">
                View Professional Profile <FaArrowRight className="icon-right" />
              </Link>
            </div>
          </div>
        </div>
        <button 
          className={`scroll-down-btn ${isVisible ? 'animate-fade-in delay-1200' : ''}`}
          onClick={scrollToAbout}
          aria-label="Scroll to next section"
        >
          <FaChevronDown className="scroll-down-icon" />
        </button>
      </section>

      <section 
        ref={aboutRef}
        className={`about-section ${aboutEntry?.isIntersecting ? 'animate-fade-in' : ''}`}
        style={{ opacity: aboutEntry?.isIntersecting ? 1 : 0.9 }}
      >
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am an undergraduate student at Mahindra University with a strong passion for business and entrepreneurship. 
                Currently I'm balancing my academic pursuits with hands-on experience in managing family business operations.
              </p>
              <p>
                With a background in digital marketing and a keen interest in business strategy, I aim to combine innovation with traditional 
                business practices to create sustainable growth opportunities.
              </p>
              <p>
                Based in Karimnagar, Telangana, I'm always open to connecting with like-minded individuals and exploring new business opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={expertiseRef}
        className={`expertise-section ${expertiseEntry?.isIntersecting ? 'animate-fade-in' : ''}`}
        style={{ opacity: expertiseEntry?.isIntersecting ? 1 : 0.9 }}
      >
        <div className="container">
          <h2 className="section-title">My Expertise</h2>
          <div className="expertise-cards">
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaBusinessTime size={28} />
              </div>
              <h3>Business Management</h3>
              <p>Specialized in strategic business operations, growth planning, and sustainable business development with hands-on experience in family business management.</p>
              <button onClick={scrollToCTA} className="learn-more">
                Learn More <FaArrowRight size={14} />
              </button>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaChartLine size={28} />
              </div>
              <h3>Digital Marketing</h3>
              <p>Expert in developing and implementing comprehensive digital marketing strategies, focusing on ROI-driven campaigns and brand development.</p>
              <button onClick={scrollToCTA} className="learn-more">
                Learn More <FaArrowRight size={14} />
              </button>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaLaptop size={28} />
              </div>
              <h3>Strategic Planning</h3>
              <p>Proficient in developing long-term business strategies, market analysis, and implementing data-driven solutions for sustainable growth.</p>
              <button onClick={scrollToCTA} className="learn-more">
                Learn More <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        ref={ctaRef}
        className={`cta-section ${ctaEntry?.isIntersecting ? 'animate-fade-in' : ''}`}
        style={{ opacity: ctaEntry?.isIntersecting ? 1 : 0.9 }}
      >
        <div className="container">
          <h2>Interested in working together?</h2>
          <p>Feel free to reach out and let's discuss how we can collaborate!</p>
          <a href="mailto:challasaketh123@gmail.com" className="btn-primary">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
