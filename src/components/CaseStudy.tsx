import { motion } from 'framer-motion'
import React from 'react'
import './CaseStudy.css'

interface CaseStudyData {
  title: string
  category: string
  description: string
  result: string
  challenge: string
  solution: string
  impact: string
  process: string
  tools: string[]
  timeline: string
  outcome: string
  image: string
  heroImage?: string
  projectImage1?: string
  projectImage2?: string
  projectImage3?: string
  projectImage4?: string
}

interface CaseStudyProps {
  data: CaseStudyData
  isRecruiterMode: boolean
}

export default function CaseStudy({ data, isRecruiterMode }: CaseStudyProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

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
          <div className="mode-badge">30-Second Scan</div>

          <motion.div variants={itemVariants} className="quick-overview">
            <h2>{data.title}</h2>
            <p className="subtitle">{data.category}</p>
            <p className="description">{data.description}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>{data.challenge}</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>{data.solution}</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>{data.result}</p>
            </div>
          </motion.div>

          {data.tools && data.tools.length > 0 && (
            <motion.div variants={itemVariants} className="quick-tools">
              <h3>Tools & Software</h3>
              <div className="tools-grid">
                {data.tools.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <p className="tool-name">{tool}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
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
              <h1>{data.title}</h1>
              <p className="hero-category">{data.category}</p>
              <p className="hero-description">{data.description}</p>
            </div>
          </motion.section>

          {/* Hero Image */}
          <motion.section variants={itemVariants} className="case-section photo-section">
            {data.heroImage ? (
              <img src={`${import.meta.env.BASE_URL}${data.heroImage.replace(/^\//, '')}`} alt="Project Hero" className="case-image" />
            ) : (
              <div className="photo-placeholder">
                <span className="placeholder-text">Project Hero Image</span>
              </div>
            )}
          </motion.section>

          {/* Overview Stats */}
          <motion.section variants={itemVariants} className="case-section stats-section">
            <span className="section-number">01 — PROJECT OVERVIEW</span>
            <h2>Project Overview</h2>
            <p className="overview-description">{data.description}</p>
            <div className="overview-grid">
              <div className="overview-card">
                <span className="overview-label">Timeline</span>
                <p className="overview-value">{data.timeline}</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Category</span>
                <p className="overview-value">{data.category}</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Result</span>
                <p className="overview-value">{data.result.substring(0, 60)}...</p>
              </div>
            </div>
          </motion.section>

          {/* Challenge Section */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — CHALLENGE</span>
              <h2>The Challenge</h2>
            </div>
            <div className="problem-impact">
              <p>{data.challenge}</p>
            </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section variants={itemVariants} className="case-section solution-section">
            <span className="section-number">03 — SOLUTION</span>
            <h2>The Solution</h2>
            <div className="section-content">
              <p>{data.solution}</p>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section variants={itemVariants} className="case-section impact-learnings-section">
            <span className="section-number">04 — IMPACT</span>
            <h2>Impact & Results</h2>
            <div className="impact-content">
              <p className="impact-highlight">{data.impact}</p>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">05 — PROCESS</span>
            <h2>Design & Research Process</h2>
            <div className="section-content">
              <p>{data.process}</p>
            </div>
          </motion.section>

          {/* Outcome Section */}
          <motion.section variants={itemVariants} className="case-section cta-section">
            <span className="section-number">06 — OUTCOME</span>
            <h2>Key Takeaways</h2>
            <div className="section-content">
              <p>{data.outcome}</p>
            </div>
          </motion.section>

          {/* Tools Section */}
          {data.tools && data.tools.length > 0 && (
            <motion.section variants={itemVariants} className="case-section design-system-section">
              <span className="section-number">07 — TOOLS</span>
              <h2>Tools & Technologies</h2>
              <div className="tools-showcase">
                {data.tools.map((tool, index) => (
                  <div key={index} className="tool-showcase-item">
                    <p>{tool}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

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
