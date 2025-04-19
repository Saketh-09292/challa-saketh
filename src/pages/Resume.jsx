import { useEffect, useState } from 'react';
import { FaDownload, FaGraduationCap, FaBriefcase, FaTools } from 'react-icons/fa';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import '../styles/Resume.css';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [educationRef, educationEntry] = useIntersectionObserver({ threshold: 0.1 });
  const [experienceRef, experienceEntry] = useIntersectionObserver({ threshold: 0.1 });
  const [skillsRef, skillsEntry] = useIntersectionObserver({ threshold: 0.1 });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="resume-page">
      {/* <div className={`resume-header ${isVisible ? 'animate-fade-in' : ''}`}>
        <h1>Resume</h1>
        <p>My academic and professional journey</p>
        <a href="#" className="btn-primary download-btn">
          <FaDownload /> Download Resume
        </a>
      </div> */}

      <div className="resume-content">
        <section 
          ref={educationRef}
          className={`resume-section ${educationEntry?.isIntersecting ? 'animate-fade-in' : ''}`}
        >
          <div className="section-icon">
            <FaGraduationCap size={30} />
          </div>
          <h2 className="section-title">Education</h2>
          
          <div className="timeline">
            <div 
              className={`timeline-item ${educationEntry?.isIntersecting ? 'animate-fade-in delay-200' : ''}`}
            >
              <div className="timeline-content">
                <h3>Bachelor's Degree</h3>
                <p className="institution">Mahindra University – Hyderabad</p>
                <p className="period">2022 - Present</p>
                <p>Currently pursuing undergraduate studies with focus on business and entrepreneurship.</p>
              </div>
            </div>
            
            <div 
              className={`timeline-item ${educationEntry?.isIntersecting ? 'animate-fade-in delay-300' : ''}`}
            >
              <div className="timeline-content">
                <h3>Intermediate Education</h3>
                <p className="institution">Alphores Junior College – Karimnagar</p>
                <p className="period">2021 - 2022</p>
                <p>Successfully completed intermediate education with excellent academic record.</p>
              </div>
            </div>
            
            <div 
              className={`timeline-item ${educationEntry?.isIntersecting ? 'animate-fade-in delay-400' : ''}`}
            >
              <div className="timeline-content">
                <h3>High School Education</h3>
                <p className="institution">Paramita High School – Karimnagar</p>
                <p className="period">Completed: 2019 - 2020</p>
                <p>Completed high school education with strong foundation in core subjects.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section 
          ref={experienceRef}
          className={`resume-section ${experienceEntry?.isIntersecting ? 'animate-fade-in' : ''}`}
        >
          <div className="section-icon">
            <FaBriefcase size={30} />
          </div>
          <h2 className="section-title">Experience</h2>
          
          <div className="timeline">
            <div 
              className={`timeline-item ${experienceEntry?.isIntersecting ? 'animate-fade-in delay-200' : ''}`}
            >
              <div className="timeline-content">
                <h3>Digital Marketing Intern</h3>
                <p className="institution">StafZ IT Services Pvt. Ltd. – Bangalore</p>
                <p className="period">June 10, 2024 – August 12, 2024</p>
                <ul>
                  <li>Worked under the guidance of Ms. Sivasankari N.</li>
                  <li>Gained experience in online marketing techniques and customer engagement strategies.</li>
                  <li>Learned how to promote businesses using digital platforms effectively.</li>
                </ul>
              </div>
            </div>
            
            <div 
              className={`timeline-item ${experienceEntry?.isIntersecting ? 'animate-fade-in delay-300' : ''}`}
            >
              <div className="timeline-content">
                <h3>Family Business Operations</h3>
                <p className="institution">Granite Business</p>
                <p className="period">Ongoing</p>
                <ul>
                  <li>Actively participating in family-owned granite business operations</li>
                  <li>Gaining hands-on experience in business management and strategy</li>
                  <li>Contributing to growth initiatives and operational improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section 
          ref={skillsRef}
          className={`resume-section ${skillsEntry?.isIntersecting ? 'animate-fade-in' : ''}`}
        >
          <div className="section-icon">
            <FaTools size={30} />
          </div>
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-container">
            <div className="skills-category">
              <h3>Digital & Analytics</h3>
              <ul className="skills-list">
                <li>Digital Marketing and Content Creation</li>
                <li>Data Analysis and Research</li>
                <li>Web Analytics</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Business & Strategy</h3>
              <ul className="skills-list">
                <li>Strategic Thinking</li>
                <li>Project Management</li>
                <li>Risk Management</li>
                <li>Customer Experience Optimization</li>
              </ul>
            </div>

            <div className="skills-category">
              <h3>Technical Skills</h3>
              <ul className="skills-list">
                <li>Proficiency in Python</li>
                <li>MS Office Suite (Excel, PowerPoint)</li>
                <li>Customer Journey Optimization</li>
                <li>Data Analysis Tools</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
