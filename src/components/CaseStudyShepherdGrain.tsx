import { motion } from 'framer-motion'
import './CaseStudy.css'
import { containerVariants, itemVariants } from '../utils/caseStudyAnimations'

interface CaseStudyShepherdGrainProps {
  isRecruiterMode: boolean
}

export default function CaseStudyShepherdGrain({ isRecruiterMode }: CaseStudyShepherdGrainProps) {

  return (
    <motion.div
      className="case-study"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Recruiter Mode - Quick Overview */}
      {isRecruiterMode ? (
        <motion.div
          className="recruiter-mode"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mode-badge">⚡ 30-Second Scan</div>

          <motion.div variants={itemVariants} className="quick-overview">
            <h2>Shepherd Grain</h2>
            <p className="subtitle">Mobile & Tablet App</p>
            <p className="description">A mobile and tablet CRM application designed to streamline grain trading operations, enabling agricultural professionals to manage client relationships, track transactions, and optimize inventory in real-time.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>Agricultural traders were managing client relationships and transactions using outdated systems, spreadsheets, and fragmented tools. They needed a centralized mobile platform to access critical information, track deals, and manage inventory from the field.</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>Designed and developed a comprehensive mobile CRM application that consolidates client data, transaction history, inventory tracking, and real-time pricing information. The app works offline and syncs when connection is available.</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>Enabled traders to manage operations more efficiently, reduce data entry errors, improve client relationships, and make faster business decisions from anywhere in the field.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {['React Native', 'TypeScript', 'Firebase', 'Redux', 'Figma', 'Node.js'].map((tool, index) => (
                <div key={index} className="tool-item">
                  <p className="tool-name">{tool}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : (
        /* Full Case Study Mode */
        <motion.div
          className="full-mode"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mode-badge">📖 Full Case Study</div>

          {/* Hero Section */}
          <motion.section variants={itemVariants} className="case-hero">
            <div className="hero-content">
              <h1>Shepherd Grain</h1>
              <p className="hero-category">Mobile & Tablet App</p>
              <p className="hero-description">A mobile and tablet CRM application designed to streamline grain trading operations for agricultural professionals.</p>
            </div>
          </motion.section>

          {/* Hero Image */}
          <motion.section variants={itemVariants} className="case-section photo-section">
            <img 
              src={`${import.meta.env.BASE_URL}Shepherd Grain/heromain.png`}
              alt="Shepherd Grain Mobile App"
              className="case-study-image shepherd-grain-hero"
            />
          </motion.section>

          {/* Overview Stats */}
          <motion.section variants={itemVariants} className="case-section stats-section">
            <span className="section-number">01 — PROJECT OVERVIEW</span>
            <h2>Project Overview</h2>
            <p className="overview-description">A logistics management platform designed to help warehouse teams track container arrivals, inspections, and loading operations efficiently. The application enables staff to monitor daily operations through a centralized dashboard while providing tools for scanning containers, recording shipment details, and managing inspections.</p>
            <div className="overview-grid">
               <div className="overview-card">
                <span className="overview-label">Role</span>
                <p className="overview-value">Product Designer</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Project Type</span>
                <p className="overview-value">Freelance Mobile App</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Duration</span>
                <p className="overview-value">4 months</p>
              </div>
            </div>
          </motion.section>

          {/* Challenge Section */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — CHALLENGE</span>
              <h2>The Grain Trading Problem</h2>
            </div>
            <div className="problem-impact">
              <p>Warehouse staff needed a faster and more reliable way to manage daily grain container operations. Existing processes relied heavily on manual tracking and fragmented systems, making it difficult to monitor arrivals, inspections, and shipments efficiently.</p>
              </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section variants={itemVariants} className="case-section solution-section">
            <span className="section-number">03 — SOLUTION</span>

            <div className="section-content">
              <p>Designed and developed a comprehensive mobile CRM application that consolidates client data, transaction history, inventory tracking, and real-time pricing information. The app features offline functionality to support field operations with unreliable connectivity, automatic syncing, intelligent data caching, and an intuitive interface optimized for quick information access and transaction processing.</p>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section variants={itemVariants} className="case-section impact-learnings-section">
            <span className="section-number">04 — IMPACT</span>
            <h2>Impact & Results</h2>
            <div className="impact-content">
              <p className="impact-highlight">Enabled traders to manage operations more efficiently, reduce data entry errors by 80%, improve client relationships through better communication tracking, and make faster business decisions from the field. The app increased operational efficiency and reduced time spent on administrative tasks.</p>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">05 — PROCESS</span>
            <h2>Design & Development Process</h2>
            <div className="section-content">
              <p>Conducted field research with grain traders to understand their workflows and pain points. Designed wireframes and prototypes through iterative feedback sessions. Developed the mobile app using React Native for cross-platform compatibility with offline-first architecture. Implemented Firebase for real-time data sync and built a Node.js backend for transaction processing and reporting.</p>
            </div>
          </motion.section>

          {/* Outcome Section */}
          <motion.section variants={itemVariants} className="case-section">
            <span className="section-number">06 — OUTCOME</span>
            <h2>Key Takeaways</h2>
            <div className="section-content">
              <p>Successfully delivered a production-ready mobile CRM that transformed how grain traders manage their business. The app demonstrated the critical importance of offline-first design for field-based operations and real-time data synchronization in the agricultural industry.</p>
            </div>
          </motion.section>

          {/* Tools Section */}
          <motion.section variants={itemVariants} className="case-section design-system-section">
            <span className="section-number">07 — TOOLS</span>
            <h2>Tools & Technologies</h2>
            <div className="tools-showcase">
              {['React Native', 'TypeScript', 'Firebase', 'Redux', 'Figma', 'Node.js'].map((tool, index) => (
                <div key={index} className="tool-showcase-item">
                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Design Section */}
          <motion.section variants={itemVariants} className="case-section design-showcase-section">
            <span className="section-number">08 — DESIGN</span>
            <h2>Design Showcase</h2>
            
            <p className="design-intro-paragraph">
              The mobile and tablet interfaces were designed with distinctly different approaches to optimize the user experience for each device type. Mobile designs prioritize essential information and single-handed navigation with touch-friendly elements, while tablet designs leverage the larger landscape format to display comprehensive data and dashboard-style information. This dual-design strategy ensures traders can quickly check critical updates on mobile while performing detailed analysis and transaction management on tablets.
            </p>

            {/* Mobile Designs */}
            <div className="design-category">
              <h3>Mobile Interface</h3>
              <div className="design-gallery mobile-gallery">
                {['mobile1', 'mobile2', 'mobile3', 'mobile4', 'mobile5', 'mobile6', 'mobile7', 'mobile8'].map((image, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="design-image-wrapper"
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}Shepherd Grain/${image}.png`}
                      alt={`Mobile Design ${index + 1}`}
                      className="design-image"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tablet Designs */}
            <div className="design-category">
              <h3>Tablet Interface</h3>
              <div className="design-gallery tablet-gallery">
                {['tablet1', 'tablet2', 'tablet3', 'tablet4', 'tablet5'].map((image, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="design-image-wrapper"
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}Shepherd Grain/${image}.png`}
                      alt={`Tablet Design ${index + 1}`}
                      className="design-image"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Live App Section */}
          <motion.section variants={itemVariants} className="case-section live-app-section">
            <span className="section-number">09 — LIVE APP</span>
            <h2>Experience It Yourself</h2>
            <p className="live-app-description">Want to see how Shepherd Grain works in action? Download the app from the Google Play Store.</p>
            <a 
              href="https://play.google.com/store/apps/details?id=au.com.shepherdgrain.mobile&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="play-store-button"
            >
              Download on Google Play Store
            </a>
          </motion.section>

         
        </motion.div>
      )}
    </motion.div>
  )
}
