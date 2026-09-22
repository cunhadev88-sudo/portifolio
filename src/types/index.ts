export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  tags: string[]
  description: string
  longDescription?: string
  businessImpact: string
  architectureFlow: string[]
  features: string[]
  technologies: string[]
  highlights: string[]
  demoType?: 'fsm' | 'pcp' | 'rpa' | 'gdl' | 'oficinazap' | 'api'
  codeSnippet?: {
    language: string
    title: string
    code: string
  }
}

export interface TechItem {
  name: string
  category: 'backend' | 'frontend' | 'database' | 'automation' | 'cloud' | 'tools'
  familiarity: 'Produção Diária' | 'Avançado' | 'Sólido' | 'Arquitetura'
  usageContext: string
  highlight?: boolean
}

export interface TechCategory {
  id: 'backend' | 'frontend' | 'database' | 'automation' | 'cloud' | 'tools'
  label: string
  description: string
  items: TechItem[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  type: string
  highlights: string[]
  technologies: string[]
  businessImpact: string
}

export interface HowIBuildStep {
  stepNumber: number
  title: string
  subtitle: string
  description: string
  deliverable: string
  iconName: string
}

export interface SqlQueryDemo {
  id: string
  title: string
  database: 'PostgreSQL' | 'MySQL'
  concept: string
  description: string
  query: string
  columns: string[]
  rows: Record<string, string | number>[]
}
