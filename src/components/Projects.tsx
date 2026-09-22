import React, { useState } from 'react'
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Smartphone, 
  Bot, 
  Sparkles, 
  FileText, 
  Workflow, 
  Terminal,
  Activity,
  ChevronRight
} from 'lucide-react'
import { projects } from '../data/portfolioData'
import { Project } from '../types'
import { PcpHierarchyModal } from './PcpHierarchyModal'
import { ApiConsoleModal } from './ApiConsoleModal'

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos')
  const [isPcpModalOpen, setIsPcpModalOpen] = useState(false)
  const [isApiModalOpen, setIsApiModalOpen] = useState(false)

  const filterCategories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'internal', label: 'Sistemas Internos' },
    { id: 'automation', label: 'Automação & RPA' },
    { id: 'ai', label: 'IA & Documentos' },
    { id: 'backend', label: 'APIs & Backend' },
    { id: 'saas', label: 'SaaS & Negócios' },
  ]

  const filteredProjects = projects.filter(p => {
    if (selectedFilter === 'todos') return true
    if (selectedFilter === 'internal') return p.category.includes('Internal') || p.category.includes('Manufacturing')
    if (selectedFilter === 'automation') return p.category.includes('RPA') || p.tags.includes('RPA')
    if (selectedFilter === 'ai') return p.category.includes('AI')
    if (selectedFilter === 'backend') return p.category.includes('Backend')
    if (selectedFilter === 'saas') return p.category.includes('SaaS')
    return true
  })

  return (
    <section id="projetos" className="py-24 relative bg-[#080c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
              <FolderGit2 className="w-4 h-4" />
              <span>Projetos & Soluções Reais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Sistemas, Automações & APIs
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
              Projetados para eliminar gargalos de operação, conectar equipes e automatizar fluxos complexos com arquitetura limpa.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 p-2 rounded-2xl">
            <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 text-xs font-mono text-sky-400">
              6 Casos Chave
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 text-xs font-mono text-indigo-400">
              Chão de Fábrica & Campo
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-2 border-b border-slate-800/60">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === cat.id
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/40 hover:bg-slate-850 border border-slate-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Big Projects Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            return (
              <article
                key={project.id}
                className="group p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0b101a] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 shadow-xl shadow-black/40 text-left relative overflow-hidden"
              >
                {/* Subtle project background gradient badge */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-500/5 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Info Column */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Caso 0{index + 1}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mt-1 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                      <p>{project.description}</p>
                      {project.longDescription && (
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {project.longDescription}
                        </p>
                      )}
                    </div>

                    {/* Real Business Impact Callout */}
                    <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4" />
                        Impacto Direto no Negócio:
                      </div>
                      <p className="text-xs text-slate-300">
                        {project.businessImpact}
                      </p>
                    </div>

                    {/* Key Features Pill List */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Principais Funcionalidades Entregues:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map(feat => (
                          <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-sky-400 mt-0.5">•</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Triggers */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      {project.id === 'pcp-aps-system' && (
                        <button
                          onClick={() => setIsPcpModalOpen(true)}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 text-xs font-semibold font-mono shadow-md transition-all hover:scale-[1.02]"
                        >
                          <Workflow className="w-4 h-4 text-sky-400" />
                          <span>Abrir Explorador de Hierarquia PCP</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {project.id === 'apis-backend-showcase' && (
                        <button
                          onClick={() => setIsApiModalOpen(true)}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold font-mono shadow-md transition-all hover:scale-[1.02]"
                        >
                          <Terminal className="w-4 h-4 text-indigo-400" />
                          <span>Abrir Console Interativo de Endpoints</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {project.id === 'dynamic-air-fsm' && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-mono">
                          <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                          <span>PWA Offline-First & Suporte a Campo</span>
                        </div>
                      )}

                      {project.id === 'accounting-rpa' && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-mono">
                          <Bot className="w-3.5 h-3.5 text-indigo-400" />
                          <span>9 Robôs RPA em Produção Contínua</span>
                        </div>
                      )}

                      {project.id === 'gdl-ai-automation' && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-mono">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>OpenAI API + WhatsApp + PyMuPDF</span>
                        </div>
                      )}

                      {project.id === 'oficinazap-saas' && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-mono">
                          <Activity className="w-3.5 h-3.5 text-emerald-400" />
                          <span>SaaS & Atualizações Ativas via WhatsApp</span>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Visual Architecture Flow & Tech Blueprint */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 shadow-inner">
                      
                      {/* Flow Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Workflow className="w-3.5 h-3.5 text-sky-400" />
                          Fluxo da Solução
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                          Arquitetura Ativa
                        </span>
                      </div>

                      {/* Visual Flow Pipeline */}
                      <div className="space-y-2.5">
                        {project.architectureFlow.map((step, sIdx) => {
                          const isLast = sIdx === project.architectureFlow.length - 1
                          return (
                            <div key={step} className="space-y-1">
                              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-sky-500/40 transition-colors">
                                <div className="w-6 h-6 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-[10px] font-mono text-sky-400 font-bold shrink-0">
                                  0{sIdx + 1}
                                </div>
                                <span className="text-xs font-mono text-slate-200 font-medium">
                                  {step}
                                </span>
                              </div>

                              {!isLast && (
                                <div className="flex justify-center py-0.5">
                                  <div className="w-0.5 h-3 bg-gradient-to-b from-sky-500/60 to-indigo-500/40" />
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>

                      {/* Highlights Card */}
                      <div className="pt-4 border-t border-slate-800/80 space-y-2">
                        <div className="text-[11px] font-mono text-slate-400 uppercase">
                          Destaques de Engenharia:
                        </div>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {project.highlights.map(hl => (
                            <li key={hl} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              </article>
            )
          })}
        </div>

      </div>

      {/* Modals for Deep Interactive Explorers */}
      <PcpHierarchyModal
        isOpen={isPcpModalOpen}
        onClose={() => setIsPcpModalOpen(false)}
      />

      <ApiConsoleModal
        isOpen={isApiModalOpen}
        onClose={() => setIsApiModalOpen(false)}
      />

    </section>
  )
}
