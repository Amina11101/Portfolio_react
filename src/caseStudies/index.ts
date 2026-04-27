import { agentflowData } from './agentflow/data'
import { mediMateData } from './medimate/data'
import { ecommerceData } from './ecommerce/data'
import { saasDashboardData } from './saas-dashboard/data'
import type { CaseStudyData } from './types'

export const projectsData: { [key: string]: CaseStudyData } = {
  '1': agentflowData,
  '2': mediMateData,
  '3': ecommerceData,
  '4': saasDashboardData,
}

export * from './types'
export { agentflowData, mediMateData, ecommerceData, saasDashboardData }
