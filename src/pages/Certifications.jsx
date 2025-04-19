import { motion } from 'framer-motion';
import { FaCertificate, FaEye } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Macroeconomics for Business Management",
      issuer: "FIA Business School",
      date: "March 2023",
      description: "Comprehensive certification covering core concepts of digital marketing including search, social media, and content marketing.",
      image: "/challa-saketh/assets/macro economics for business management.jpg",
    },
    {
      id: 2,
      title: "Business Case Development",
      issuer: "Harvard Manage Mentor",
      date: "Feb 2025",
      description: "In-depth course on developing effective business strategies, market analysis, and competitive positioning.",
      image: "/challa-saketh/assets/business case development certificate.jpg",
    },
    {
      id:3,
      title: "Crash course on Python",
      issuer: "Google",
      date: "Aug 2020",
      description: "This course provided a strong foundation in Python programming, covering essential topics such as variables, loops, conditionals, functions, and error handling. It also included practical exercises to build real-world skills in writing Python scripts and automating tasks.",
      image: "/challa-saketh/assets/pythonCert.png"
    },
    {
      id:4,
      title: "Writing and Editing: Structure and Organization",
      issuer:"University of Michigan",
      date:"April 2020",
      description:"The certificate verifies a strong foundation in professional writing techniques, editorial standards, and content clarity—skills applicable across academic, creative, and workplace communications.",
      image:"/challa-saketh/assets/writing and editing cert.png"
    }
  ];

  return (
    <div className="certifications-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Certifications</h1>
        <p>Professional qualifications and accomplishments</p>
      </motion.div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div 
            key={cert.id}
            className="certification-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="certificate-image">
              <img src={cert.image} alt={cert.title} />
              <button 
                className="preview-button"
                onClick={() => setSelectedCert(cert)}
              >
                <FaEye size={20} />
                Preview
              </button>
            </div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <div className="certificate-meta">
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
              <p className="description">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <motion.div 
          className="preview-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="preview-content">
            <button 
              className="close-button"
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <div className="preview-details">
              <h3>{selectedCert.title}</h3>
              <p className="issuer">{selectedCert.issuer}</p>
              <p className="date">{selectedCert.date}</p>
              <p className="description">{selectedCert.description}</p>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div 
        className="continuous-learning"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Continuous Learning</h2>
        <p>
          I believe in constantly upgrading my skills and staying updated with the latest trends in business and digital marketing. 
          Currently pursuing additional certifications in advanced business strategy and data-driven marketing.
        </p>
      </motion.div>
    </div>
  );
};

export default Certifications;
