import type { CaseStudyData } from '../types'

export const ecommerceData: CaseStudyData = {
  title: 'E-commerce Platform',
  category: 'Web Design',
  image: '/saas-dashboard.png',
  description:
    'Intuitive analytics dashboard for data-driven teams, designed to reduce time-to-insight by 60%.',
  result: 'Time-to-insight reduced 60%, feature adoption increased from 20% to 73%, user satisfaction improved from 6.2 to 8.7/10',
  challenge:
    'The existing dashboard was overwhelming with 80+ data points per view, confusing workflows requiring 12+ clicks to accomplish common tasks, and poor data visualization making patterns hard to spot. Power users loved it, but most users (68%) used less than 20% of features. Adoption was stalling.',
  solution:
    'I redesigned the dashboard with a focus on progressive disclosure and smart defaults. Created customizable dashboards where users could build their own views. Implemented intelligent data visualization with context-appropriate charts. Introduced a guided tour for new users. Added natural language search to find metrics. Created preset templates for common use cases.',
  impact:
    'Time-to-insight reduced from 8 minutes to 3 minutes (60% improvement). Feature adoption increased from 20% to 73%. User satisfaction score improved from 6.2 to 8.7 out of 10. Enterprise customers increased from 8 to 24.',
  process:
    'Conducted workshops with power users and regular users to understand different use cases. Created 5 distinct user personas with different data needs. Designed modular component system for data viz. Built interactive prototypes and validated with target users through Maze testing. Implemented with iterative releases every 2 weeks.',
  tools: ['Figma', 'D3.js', 'React', 'TypeScript', 'PostgreSQL', 'Maze'],
  timeline: '5 months (Research: 3 weeks, Design: 7 weeks, Prototyping: 3 weeks, Dev: 6 weeks)',
  outcome:
    'Dashboard became primary revenue driver with 95% customer retention. Won Best SaaS Product Design award.',
}
