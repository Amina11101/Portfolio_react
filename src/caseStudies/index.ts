import { agentflowData } from './agentflow/data'
import { mediMateData } from './medimate/data'
import type { CaseStudyData } from './types'

export const projectsData: { [key: string]: CaseStudyData } = {
  '1': agentflowData,
  '2': mediMateData,
}

export * from './types'
export { agentflowData, mediMateData }
