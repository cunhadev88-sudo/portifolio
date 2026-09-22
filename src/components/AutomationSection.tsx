import React from 'react'
import { 
  Bot, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  Zap, 
  FileCheck2, 
  Layers, 
  Database,
  Cpu
} from 'lucide-react'
import { automationFlowSteps } from '../data/portfolioData'

export const AutomationSection: React.FC = () => {
  const automationTechs = [
    { name: 'Python', role: 'Orquestração de scripts e pipelines assíncronos', icon: 'Cpu' },
    { name: 'Selenium', role: 'Automação de navegação em portais sem API', icon: 'Bot' },
    { name: 'UiPath', role: 'Robôs empresariais para rotinas contábeis/fiscais', icon: 'Layers' },
    { name: 'Web Scraping', role: 'Extração estruturada resiliente com retries', icon: 'Zap' },
    { name: 'Node.js', role: 'Serviços assíncronos e bots de mensageria', icon: 'Workflow' },
    { name: 'OpenAI API', role: 'Processamento de linguagem natural e editais', icon: 'Sparkles' },
  ]

  return (
    <section id="automacao" className="py-24 relative bg-[#080c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
            <Bot className="w-4 h-4" />
            <span>Engenharia de Automação & RPA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Automação de Processos Críticos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
            Substituindo tarefas manuais repetitivas propensas ao erro humano por esteiras autônomas resilientes que operam de forma ininterrupta.
          </p>
        </div>

        {/* 6-Stage Process Flow Diagram */}
        <div className="mb-16">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 text-left">
            Fluxo Contínuo de Automação:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 text-left">
            {automationFlowSteps.map((step, idx) => {
              const isLast = idx === automationFlowSteps.length - 1
              return (
                <div
                  key={step.step}
                  className="relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      {!isLast && (
                        <ArrowRight className="hidden lg:block w-4 h-4 text-slate-600 group-hover:text-sky-400 transition-colors" />
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technologies & Metrics Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Tech Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Tecnologias Empregadas na Engenharia de Automação:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {automationTechs.map(t => (
                <div
                  key={t.name}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{t.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Impact Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-[#0c121e] to-slate-900 border border-indigo-500/30 shadow-xl space-y-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  Garantias de Engenharia
                </div>
                <h3 className="text-xl font-bold text-white">
                  Automação com Tolerância a Falhas
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Portais governamentais e sistemas legados caem com frequência. Meus robôs incorporam políticas de retry exponencial, checagem de integridade criptográfica e alertas imediatos em caso de contingência.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">9 Robôs Contábeis</span>
                  <span className="text-emerald-400 font-bold">100% Auditados</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Tempo Médio Poupança</span>
                  <span className="text-sky-400 font-bold">+180h mensais</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Taxa de Sucesso em Lote</span>
                  <span className="text-indigo-400 font-bold">&gt; 98.2%</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
