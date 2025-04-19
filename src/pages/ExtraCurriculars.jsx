import { motion } from 'framer-motion';
import { FaRunning, FaBasketballBall, FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
// Alternative sports icon since FaCricketBall is not available
import { IoFootball } from 'react-icons/io5';
import '../styles/ExtraCurriculars.css';

const ExtraCurriculars = () => {
  const activities = [
    {
      id: 1,
      title: "Sports",
      description: "Active participant in cricket and badminton tournaments at university and local level.",
      icon: <FaBasketballBall size={32} />, // Using FaBasketballBall instead of FaCricketBall
      details: [
        "Captain of university badminton team for intramural competitions",
        "Regular participant in local cricket tournaments",
        "Fitness enthusiast with daily workout routine"
      ]
    },
    {
      id: 2,
      title: "Entrepreneurship Club",
      description: "Member of university entrepreneurship club, participating in various business ideation and development activities.",
      icon: <FaLightbulb size={32} />,
      details: [
        "Participated in business plan competitions",
        "Organized startup networking events",
        "Attended workshops on business model development"
      ]
    },
    {
      id: 3,
      title: "Community Outreach",
      description: "Volunteer for local community initiatives, focusing on education and business mentorship.",
      icon: <FaHandsHelping size={32} />,
      details: [
        "Mentored aspiring young entrepreneurs from underprivileged backgrounds",
        "Participated in educational workshops for school students",
        "Organized fundraising events for local causes"
      ]
    },
    {
      id: 4,
      title: "Business Networking",
      description: "Active participant in business networking events and industry conferences.",
      icon: <FaUsers size={32} />,
      details: [
        "Member of local business association",
        "Regular attendee at industry-specific conferences",
        "Built network of business contacts across various industries"
      ]
    }
  ];

  return (
    <div className="extracurriculars-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Extra Curricular Activities</h1>
        <p>Beyond academics and business - my passions and interests</p>
      </motion.div>

      <div className="activities-container">
        {activities.map((activity, index) => (
          <motion.div 
            key={activity.id}
            className="activity-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="activity-icon">
              {activity.icon}
            </div>
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
              <ul className="activity-details">
                {activity.details.map((detail, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section 
        className="interests-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Personal Interests</h2>
        <div className="interests-container">
          <motion.div 
            className="interest-item"
            whileHover={{ scale: 1.05 }}
          >
            <div className="interest-icon">
              <FaLightbulb />
            </div>
            <h3>Entrepreneurship</h3>
            <p>Passion for business innovation and startups</p>
          </motion.div>
          
          <motion.div 
            className="interest-item"
            whileHover={{ scale: 1.05 }}
          >
            <div className="interest-icon">
              <FaRunning />
            </div>
            <h3>Fitness</h3>
            <p>Regular workout routines and physical activities</p>
          </motion.div>
          
          <motion.div 
            className="interest-item"
            whileHover={{ scale: 1.05 }}
          >
            <div className="interest-icon">
              <IoFootball /> {/* Using IoFootball instead of FaCricketBall */}
            </div>
            <h3>Sports</h3>
            <p>Cricket and badminton enthusiast</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.div 
        className="quote-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <blockquote>
          "I believe that a balanced life, combining professional growth with personal passions, is the key to lasting success and fulfillment."
        </blockquote>
        <cite>- Challa Saketh</cite>
      </motion.div>
    </div>
  );
};

export default ExtraCurriculars;
