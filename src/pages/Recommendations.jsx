import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Recommendations.css';
import recommendationImg from '/assets/recommendation.jpg';

const Recommendations = () => {
  return (
    <div className="recommendations-container">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="recommendations-title">Recommendations</h1>
        <p>Professional endorsements from colleagues and mentors</p>
      </motion.div>

      <div className="recommendations-content">
        <motion.div 
          className="recommendation-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="recommendation-header">
            <div className="recommender-info">
              <h3 className="recommender-name">Dr. Mukesh Narmetta, Ph.D.</h3>
              <p className="recommender-title">Assistant Professor | (Management)Information Systems</p>
              <p className="recommender-institution">School of Management, Mahindra University | IIM, Kozhikode</p>
            </div>
          </div>
          <motion.div 
            className="recommendation-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              className="recommendation-image" 
              src={recommendationImg} 
              alt="LinkedIn recommendation from Dr. Mukesh Narmetta"
            />
            <div className="recommendation-text">
              <p>"Saketh is a sincere and dedicated student who showed steady growth in both Programming with Python and Connected Technologies. He consistently demonstrated a willingness to learn and improve. With the right guidance and continued effort, Saketh has strong potential to evolve into a capable and dependable professional in any organization."</p>
              <p className="recommendation-date">May 31, 2025</p>
            </div>
          </motion.div>
        </motion.div>
        {/* Additional recommendation cards can be added here in the future */}
      </div>
      
      <motion.div 
        className="future-recommendations"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Growing Professional Network</h2>
        <p>
          I am continuously expanding my professional connections and collaborations.
          More recommendations will be added as I progress in my career journey.
        </p>
      </motion.div>
    </div>
  );
};

export default Recommendations;
