import { motion } from 'framer-motion'
import './CaseStudy.css'

interface CaseStudyAgentFlowProps {
  isRecruiterMode: boolean
}

export default function CaseStudyAgentFlow({ isRecruiterMode }: CaseStudyAgentFlowProps) {
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
          <div className="mode-badge">⚡ 30-Second Scan</div>

          <motion.div variants={itemVariants} className="quick-overview">
            <h2>AGENTFLOW</h2>
            <p className="subtitle">Web Application</p>
            <p className="description">AI-powered dashboard for managing and monitoring autonomous agents, providing real-time visualization, debugging, and optimization of multi-agent AI systems in production.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-stats">
            <div className="stat">
              <h3>Challenge</h3>
              <p>Organizations are deploying AI agents at scale but operating in complete darkness. With 88% of organizations embedding AI agents but only 11% in production, teams lack visibility into how multiple agents collaborate. When workflows fail during agent-to-agent handoffs, teams have no way to visualize data flow, understand decision-making, debug failures, or balance automation with human oversight.</p>
            </div>
            <div className="stat">
              <h3>Solution</h3>
              <p>AgentFlow acts as "air traffic control" for AI agents through five core features: Agent Topology Map, Handoff Inspector, Timeline Scrubber, Human Checkpoints, and Trust Calibration - all using minimalist design inspired by developer tools, prioritizing glanceability and progressive disclosure.</p>
            </div>
            <div className="stat">
              <h3>Result</h3>
              <p>Debugging time reduced by 85% (3 minutes vs. 30-60 minutes), agent deployment velocity increased 2.3x, average 22% reduction in AI costs, 63% decrease in agent failures within first month.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="quick-tools">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {['Figma', 'FigJam', 'Principle', 'React', 'Chrome Extension Development'].map((tool, index) => (
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
              <h1>AGENTFLOW</h1>
              <p className="hero-category">Web Application</p>
              <p className="hero-description">AI-powered dashboard for managing and monitoring autonomous agents, providing real-time visualization, debugging, and optimization of multi-agent AI systems in production.</p>
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
            <p className="overview-description">AGENTFLOW is a comprehensive debugging and monitoring platform designed for teams deploying multi-agent AI systems at scale. It provides real-time visualization of agent collaboration, intelligent debugging tools, and human oversight controls—enabling teams to understand agent behavior, identify failures instantly, and maintain trust in autonomous systems.</p>
            <div className="overview-grid">
              <div className="overview-card">
                <span className="overview-label">Timeline</span>
                <p className="overview-value">12 weeks</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Scope</span>
                <p className="overview-value">Concept to high-fidelity prototype</p>
              </div>
              <div className="overview-card">
                <span className="overview-label">Research</span>
                <p className="overview-value">12 in-depth interviews</p>
              </div>
            </div>
          </motion.section>

          {/* Challenge Section */}
          <motion.section variants={itemVariants} className="case-section problem-section">
            <div className="problem-header">
              <span className="problem-number">02 — CHALLENGE</span>
              <h2>The Agent Debugging Crisis</h2>
            </div>
            <div className="problem-impact">
              <p>Organizations are deploying AI agents at scale but operating in complete darkness. With 88% of organizations embedding AI agents but only 11% in production, teams lack visibility into how multiple agents collaborate. When workflows fail during agent-to-agent handoffs, teams have no way to visualize data flow, understand decision-making, debug failures, or balance automation with human oversight. No visual debugging tools exist for multi-agent systems despite them becoming standard enterprise architecture.</p>
            </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section variants={itemVariants} className="case-section solution-section">
            <span className="section-number">03 — SOLUTION</span>
            <h2>The Solution</h2>
            <div className="section-content">
              <p>AgentFlow acts as "air traffic control" for AI agents through five core features: (1) Agent Topology Map - Live directed graph showing all agents and data flows with health status, (2) Handoff Inspector - Modal showing data schema, actual payloads, transformations, and violations during agent handoffs, (3) Timeline Scrubber - Video-player-style temporal navigation to inspect agent states at any point in time, (4) Human Checkpoints - Drag-and-drop approval gates with conditional logic for strategic oversight, (5) Trust Calibration - Per-agent confidence thresholds based on accuracy tracking and team risk tolerance. All features use minimalist design inspired by developer tools, prioritizing glanceability and progressive disclosure.</p>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section variants={itemVariants} className="case-section impact-learnings-section">
            <span className="section-number">04 — IMPACT</span>
            <h2>Impact & Results</h2>
            <div className="impact-content">
              <p className="impact-highlight">Pilot testing with 8 organizations showed 85% faster debugging, 2.3x faster agent rollouts, 22% average AI cost reduction after identifying inefficient handoffs, and 63% fewer agent failures. User satisfaction: 9.2/10 NPS. Key insight: debugging failures that took 30-60 minutes through log analysis now takes 3 minutes with visual navigation and temporal scrubbing.</p>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section variants={itemVariants} className="case-section research-section">
            <span className="section-number">05 — PROCESS</span>
            <h2>Design & Research Process</h2>
            <div className="section-content">
              <p>Conducted 12 in-depth interviews with operations managers and AI product leads, shadowed 4 teams debugging production failures, analyzed competitive developer tools (Langchain, Datadog, New Relic), and researched multi-agent coordination academic literature. Discovered four critical insights: (1) Mental model mismatch between workflow thinking and log-based tools, (2) "Ghost in the machine" - inability to understand agent reasoning chains, (3) Time-based debugging criticality - 80% of failures occur during handoffs, (4) Need for strategic human checkpoints without binary on/off control. Designed with four core principles: Transparency over opacity, glanceability first with progressive disclosure, control without cognitive load, and time as first-class dimension. Built high-fidelity prototypes and iterative user testing addressing design challenges around visual stability, JSON data representation, large dataset performance, and approval friction.</p>
            </div>
          </motion.section>

          {/* Outcome Section */}
          <motion.section variants={itemVariants} className="case-section cta-section">
            <span className="section-number">06 — OUTCOME</span>
            <h2>Key Takeaways</h2>
            <div className="section-content">
              <p>Created foundational design system for debugging complex multi-agent systems. Proved that developers and operations teams strongly prefer spatial mental models with temporal navigation for system understanding. Identified that trust calibration is deeply personal - same team uses different thresholds per workflow rather than universal confidence settings. This work positions AgentFlow as essential infrastructure for 2026-2027 as agentic AI becomes standard, with Gartner predicting 40% of agentic projects will fail by 2027 due to poor process orchestration.</p>
            </div>
          </motion.section>

          {/* Tools Section */}
          <motion.section variants={itemVariants} className="case-section design-system-section">
            <span className="section-number">07 — TOOLS</span>
            <h2>Tools & Technologies</h2>
            <div className="tools-showcase">
              {['Figma', 'FigJam', 'Principle', 'React', 'Chrome Extension Development'].map((tool, index) => (
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
