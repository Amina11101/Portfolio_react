import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ToggleView from '../components/ToggleView'
import CaseStudyMediMate from '../components/CaseStudyMediMate'
import CaseStudyAgentFlow from '../components/CaseStudyAgentFlow'
import CaseStudyShepherdGrain from '../components/CaseStudyShepherdGrain'
import Footer from '../components/Footer'
import '../components/ProjectPage.css'

const caseStudyComponents = {
  '1': CaseStudyAgentFlow,
  '2': CaseStudyMediMate,
  '3': CaseStudyShepherdGrain,
}

export default function ProjectPage() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [isRecruiterMode, setIsRecruiterMode] = useState(true)

  const projectId_ = projectId || '1'
  const CaseStudyComponent = caseStudyComponents[projectId_ as keyof typeof caseStudyComponents]

  if (!CaseStudyComponent) {
    return (
      <div className="project-page">
        <Navbar />
        <div className="container">
          <p>Project not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />

      <div className="project-page-header">
        <motion.button
          className="back-button"
          onClick={() => navigate('/#projects')}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Projects
        </motion.button>
      </div>

      <div className="project-page-container">
        <div className="container">
          <ToggleView
            isRecruiterMode={isRecruiterMode}
            onToggle={setIsRecruiterMode}
          />

          <CaseStudyComponent isRecruiterMode={isRecruiterMode} />

          <motion.div
            className="project-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ready to work together?</h3>
            <p>I'm always interested in hearing about new projects.</p>
            <a href="mailto:aminaaansarr@gmail.com" className="cta-button">
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.div>
  )
}
