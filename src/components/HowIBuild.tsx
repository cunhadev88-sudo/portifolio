import React, { useState } from 'react'
import { 
  GitFork, 
  Search, 
  Workflow, 
  Database, 
  Layers, 
  Server, 
  Cpu, 
  Layout, 
  CheckCircle2, 
  CloudUpload, 
  Activity, 
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { howIBuildSoftwareSteps } from '../data/portfolioData'

export const HowIBuild: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-4 h-4" />
      case 'Workflow': return <Workflow className="w-4 h-4" />
      case 'Database': return <Database className="w-4 h-4" />
      case 'Layers': return <Layers className="w-4 h-4" />
      case 'Server': return <Server className="w-4 h-4" />
      case 'Cpu': return <Cpu className="w-4 h-4" />
      case 'Layout': return <Layout className="w-4 h-4" />
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4" />
      case 'CloudUpload': return <CloudUpload className="w-4 h-4" />
      case 'Activity': return <Activity className="w-4 h-4" />
      default: return <Sparkles className="w-4 h-4" />
    }
  }

  const activeStep = howIBuildSoftwareSteps[activeStepIndex]

  return (
    <section id="metodologia" className="py-24 relative bg-[#080c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
            <Workflow className="w-4 h-4" />
            <span>Processo de Engenharia & Filosofia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How I Build Software
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
            Antes de qualquer linha de código, o foco é compreender o problema em sua raiz. O software é a consequência estruturada de um processo bem resolvido.
          </p>
        </div>

        {/* 10-Step Interactive Lifecycle Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Steps Carousel / List */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 text-left">
              Etapas do Ciclo de Desenvolvimento:
            </div>

            <div className="space-y-1.5">
              {howIBuildSoftwareSteps.map((step, idx) => {
                const isActive = activeStepIndex === idx
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all ${
                      isActive
                        ? 'bg-sky-500/10 border-sky-400/50 shadow-md text-white'
                        : 'bg-slate-900/40 hover:bg-slate-900 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                        isActive ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {step.stepNumber.toString().padStart(2, '0')}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold">
                          {step.title}
                        </div>
                        <div className="text-[11px] text-slate-400 font-normal truncate max-w-xs">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`p-1.5 rounded-lg ${isActive ? 'text-sky-400 bg-sky-950/60' : 'text-slate-500'}`}>
                        {getStepIcon(step.iconName)}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Step Deep Explanation Card */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0c121e] border border-sky-500/30 shadow-2xl text-left space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                    {getStepIcon(activeStep.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                      Etapa 0{activeStep.stepNumber} de 10
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                  Engenharia Prática
                </span>
              </div>

              {/* Subtitle & Body */}
              <div className="space-y-4">
                <div className="text-sm font-semibold text-sky-300 font-mono">
                  "{activeStep.subtitle}"
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Entregável Concreto Desta Etapa:
                </div>
                <div className="text-xs sm:text-sm font-medium text-emerald-400 font-mono">
                  {activeStep.deliverable}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-mono text-slate-200 transition-colors"
                >
                  ← Anterior
                </button>

                <span className="text-xs font-mono text-slate-400">
                  {activeStepIndex + 1} / 10
                </span>

                <button
                  disabled={activeStepIndex === howIBuildSoftwareSteps.length - 1}
                  onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                  className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-30 text-xs font-mono text-white transition-colors"
                >
                  Próxima Etapa →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
