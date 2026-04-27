import { motion } from 'framer-motion'
import './CaseStudy.css'
import { containerVariants, itemVariants } from '../utils/caseStudyAnimations'

interface CaseStudySaasDashboardProps {
  isRecruiterMode: boolean
}

export default function CaseStudySaasDashboard({ isRecruiterMode }: CaseStudySaasDashboardProps) {

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
            <h2>SaaS Dashboard</h2>
            <p className="subtitle">Web Application</p>
            <p className="description">Intuitive analytics dashboard for data-driven teams, emphasizing clarity and actionable insights.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>Teams needed a centralized platform to monitor key metrics, track performance across multiple dimensions, and make data-driven decisions quickly without getting lost in complexity.</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>Built a comprehensive analytics platform with customizable dashboards, real-time data updates, intelligent visualizations, and smart filtering capabilities designed specifically for SaaS businesses.</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>A platform that empowers teams to understand their data faster and make better business decisions in real-time.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {['Figma', 'React', 'TypeScript', 'GraphQL', 'PostgreSQL'].map((tool, index) => (
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
              <h1>SaaS Dashboard</h1>
              <p className="hero-category">Web Application</p>
              <p className="hero-description">Intuitive analytics dashboard for data-driven teams, emphasizing clarity and actionable insights.</p>
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
            <p className="overview-description">A modern analytics dashboard platform built for SaaS companies and data-driven teams. The platform provides real-time insights, customizable views, and actionable metrics to help teams track performance and make informed decisions.</p>
            <div className="overview-grid">
              <div className="overview-card">
                <span className="overview-label">Type</span>
                <p className="overview-value">SaaS Product</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Focus</span>
                <p className="overview-value">Analytics & Insights</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Users</span>
                <p className="overview-value">Data-driven Teams</p>
              </div>
            </div>
          </motion.section>

          {/* Challenge Section */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — CHALLENGE</span>
              <h2>The Analytics Problem</h2>
            </div>
            <div className="problem-impact">
              <p>Teams needed a centralized platform to monitor key metrics, track performance across multiple dimensions, and make data-driven decisions quickly without getting lost in complexity. Existing solutions were either too simple or too overwhelming.</p>
            </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section variants={itemVariants} className="case-section solution-section">
            <span className="section-number">03 — SOLUTION</span>
            <h2>The Solution</h2>
            <div className="section-content">
              <p>Built a comprehensive analytics platform with customizable dashboards, real-time data updates, intelligent visualizations, and smart filtering capabilities. The design emphasizes clarity through smart defaults while allowing power users to customize their view. Multiple visualization types support different analysis styles, and drill-down capabilities enable deeper investigation without navigation friction.</p>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section variants={itemVariants} className="case-section impact-learnings-section">
            <span className="section-number">04 — IMPACT</span>
            <h2>Impact & Results</h2>
            <div className="impact-content">
              <p className="impact-highlight">The platform empowers teams to understand their data faster and make better business decisions in real-time. Users can now create insights that previously required hours of manual analysis in seconds, significantly improving decision-making velocity and business outcomes.</p>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">05 — PROCESS</span>
            <h2>Design & Research Process</h2>
            <div className="section-content">
              <p>Conducted user research with SaaS companies and data teams to understand their analytics workflows and pain points. Designed with a focus on clarity, performance, and extensibility. Built interactive prototypes and iterated based on user feedback, ensuring the platform scales with user needs.</p>
            </div>
          </motion.section>

          {/* Outcome Section */}
          <motion.section variants={itemVariants} className="case-section cta-section">
            <span className="section-number">06 — OUTCOME</span>
            <h2>Key Takeaways</h2>
            <div className="section-content">
              <p>Successfully created a platform that balances simplicity with power, allowing both casual users and analysts to achieve their goals. The focus on real-time data and intuitive interactions set a new standard for SaaS analytics dashboards.</p>
            </div>
          </motion.section>

          {/* Tools Section */}
          <motion.section variants={itemVariants} className="case-section design-system-section">
            <span className="section-number">07 — TOOLS</span>
            <h2>Tools & Technologies</h2>
            <div className="tools-showcase">
              {['Figma', 'React', 'TypeScript', 'GraphQL', 'PostgreSQL'].map((tool, index) => (
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
