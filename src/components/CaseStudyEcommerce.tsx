import { motion } from 'framer-motion'
import './CaseStudy.css'
import { containerVariants, itemVariants } from '../utils/caseStudyAnimations'

interface CaseStudyEcommerceProps {
  isRecruiterMode: boolean
}

export default function CaseStudyEcommerce({ isRecruiterMode }: CaseStudyEcommerceProps) {

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
            <h2>E-commerce Platform</h2>
            <p className="subtitle">Web Design</p>
            <p className="description">Intuitive analytics dashboard for data-driven teams, designed to reduce time-to-insight by 60%.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>The existing dashboard was overwhelming with 80+ data points per view, confusing workflows requiring 12+ clicks to accomplish common tasks, and poor data visualization making patterns hard to spot. Power users loved it, but most users (68%) used less than 20% of features. Adoption was stalling.</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>Redesigned the dashboard with progressive disclosure and smart defaults. Created customizable dashboards where users could build their own views, implemented intelligent data visualization, introduced guided tours for new users, added natural language search, and created preset templates for common use cases.</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>Time-to-insight reduced 60%, feature adoption increased from 20% to 73%, user satisfaction improved from 6.2 to 8.7/10.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {['Figma', 'D3.js', 'React', 'TypeScript', 'PostgreSQL', 'Maze'].map((tool, index) => (
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
              <h1>E-commerce Platform</h1>
              <p className="hero-category">Web Design</p>
              <p className="hero-description">Intuitive analytics dashboard for data-driven teams, designed to reduce time-to-insight by 60%.</p>
            </div>
          </motion.section>

          {/* Hero Image */}
          <motion.section variants={itemVariants} className="case-section photo-section">
            <div className="photo-placeholder">
              <span className="placeholder-text">Project Hero Image</span>
            </div>
          </motion.section>

          {/* Overview Stats */}
          <motion.section variants={itemVariants} className="case-section stats-section">
            <span className="section-number">01 — PROJECT OVERVIEW</span>
            <h2>Project Overview</h2>
            <p className="overview-description">A comprehensive redesign of an analytics dashboard that transformed overwhelming complexity into intuitive clarity. The project focused on helping data-driven teams quickly find the metrics they need, understand their data through intelligent visualization, and make decisions faster.</p>
            <div className="overview-grid">
              <div className="overview-card">
                <span className="overview-label">Timeline</span>
                <p className="overview-value">5 months</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Research</span>
                <p className="overview-value">Workshops & User Testing</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Users Tested</span>
                <p className="overview-value">20+ participants</p>
              </div>
            </div>
          </motion.section>

          {/* Challenge Section */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — CHALLENGE</span>
              <h2>The Dashboard Overwhelm Problem</h2>
            </div>
            <div className="problem-impact">
              <p>The existing dashboard was overwhelming with 80+ data points per view, confusing workflows requiring 12+ clicks to accomplish common tasks, and poor data visualization making patterns hard to spot. Power users loved it, but most users (68%) used less than 20% of features. Adoption was stalling.</p>
            </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section variants={itemVariants} className="case-section solution-section">
            <span className="section-number">03 — SOLUTION</span>
            <h2>The Solution</h2>
            <div className="section-content">
              <p>I redesigned the dashboard with a focus on progressive disclosure and smart defaults. Created customizable dashboards where users could build their own views. Implemented intelligent data visualization with context-appropriate charts. Introduced a guided tour for new users. Added natural language search to find metrics. Created preset templates for common use cases.</p>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section variants={itemVariants} className="case-section impact-learnings-section">
            <span className="section-number">04 — IMPACT</span>
            <h2>Impact & Results</h2>
            <div className="impact-content">
              <p className="impact-highlight">Time-to-insight reduced from 8 minutes to 3 minutes (60% improvement). Feature adoption increased from 20% to 73%. User satisfaction score improved from 6.2 to 8.7 out of 10. Enterprise customers increased from 8 to 24. Dashboard became primary revenue driver with 95% customer retention.</p>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">05 — PROCESS</span>
            <h2>Design & Research Process</h2>
            <div className="section-content">
              <p>Conducted workshops with power users and regular users to understand different use cases. Created 5 distinct user personas with different data needs. Designed modular component system for data visualization. Built interactive prototypes and validated with target users through Maze testing. Implemented with iterative releases every 2 weeks.</p>
            </div>
          </motion.section>

          {/* Outcome Section */}
          <motion.section variants={itemVariants} className="case-section cta-section">
            <span className="section-number">06 — OUTCOME</span>
            <h2>Key Takeaways</h2>
            <div className="section-content">
              <p>Dashboard became primary revenue driver with 95% customer retention. Won Best SaaS Product Design award. Proved that simplification and progressive disclosure drive both user satisfaction and business metrics. The modular design system became the foundation for future product iterations and related tools.</p>
            </div>
          </motion.section>

          {/* Tools Section */}
          <motion.section variants={itemVariants} className="case-section design-system-section">
            <span className="section-number">07 — TOOLS</span>
            <h2>Tools & Technologies</h2>
            <div className="tools-showcase">
              {['Figma', 'D3.js', 'React', 'TypeScript', 'PostgreSQL', 'Maze'].map((tool, index) => (
                <div key={index} className="tool-showcase-item">
                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={itemVariants} className="final-cta-section">
            <h2>Want to see more?</h2>
            <p>Interested in discussing this project or collaborating on similar challenges?</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get in Touch</button>
              <button className="btn-secondary">View More Projects</button>
            </div>
          </motion.section>
        </motion.div>
      )}
    </motion.div>
  )
}
