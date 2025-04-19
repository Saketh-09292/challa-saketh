import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Comparative Analysis of Fiscal, Monetary, and Trade Policies in the Horticulture Sector: A Study of Brazil and China",
      description: "This report aims to analyze the influence of fiscal, monetary, and trade policies on the horticulture sector in Brazil and China. Specifically, it will examine Fiscal Policy, Monetary Policy, Trade Policy.",
      skills: ["Economic Analysis", "Policy Research", "International Trade"],
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      file: "././assets/Comparative Analysis of Fiscal, Monetary, and Trade Policies in the Horticulture Sector.pdf"
    },
    {
      id: 2,
      title: "Amazon Sales Report - Predicting Cancellations",
      description: "Predicting cancellations in advance so that high risk of cancellation can be incorporated in pricing of the product.",
      skills: ["Data Analysis", "Predictive Modeling", "E-commerce Strategy"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      file: "././assets/mareketing_anayatis_final project_ 000.pdf"
    },
    {
      id: 3,
      title: "IOT-BASED SEIZURE DETECTION AND RESPONSE WEARABLE",
      description: "This project focuses on meeting the essential needs of people living with epilepsy, Tracking seizures over time is vital for adjusting treatments and improving care. The device monitors patterns and progress, helping doctors fine-tune treatments for better outcomes.",
      skills: ["IoT Development", "Health Monitoring", "Embedded Systems"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      file: "././assets/Team connectivity_final presentation.pptx"
    },
    {
      id: 4,
      title: "CAPSTONE CHALLENGE",
      description: "TURNING HOMEBASED BUSINESS INTO ECOMMERCE, Flavours is a home-based bakery that currently operates primarily through Instagram and WhatsApp. While the products are appreciated for their quality and presentation, the ordering process is manual and time consuming, making it difficult to handle growing customer interest",
      skills: ["E-commerce Development", "UX Design", "Digital Marketing"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      file: "././assets/Project Background.pdf"
    }
  ];

  return (
    <div className="projects-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Projects & Ventures</h1>
        <p>A showcase of my business projects and entrepreneurial ventures</p>
      </motion.div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div 
              className="project-image" 
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                {project.file && (
                  <motion.button 
                    className="view-project-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.file, '_blank')}
                  >
                    View Details <FaExternalLinkAlt />
                  </motion.button>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="projects-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Have a project in mind?</h2>
        <p>I'm always open to discussing new projects and business ventures.</p>
        <a href="mailto:challasaketh123@gmail.com" className="btn-primary">Let's Collaborate</a>
      </motion.div>
    </div>
  );
};

export default Projects;
