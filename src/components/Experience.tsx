import React from 'react'
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Bot, 
  FileSpreadsheet
} from 'lucide-react'
import { experiences } from '../data/portfolioData'

export const Experience: React.FC = () => {
  const getCompanyIcon = (company: string) => {
    if (company.includes('DYNAMIC')) return <Cpu className="w-5 h-5 text-sky-400" />
    if (company.includes('EXPONENCIAL')) return <ShieldCheck className="w-5 h-5 text-indigo-400" />
    if (company.includes('ÁPICE')) return <Bot className="w-5 h-5 text-emerald-400" />
    return <FileSpreadsheet className="w-5 h-5 text-amber-400" />
  }

  return (
    <section id="experiencia" className="py-24 relative bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
            <Briefcase className="w-4 h-4" />
            <span>Carreira & Atuação Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Experiência Profissional
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
            Histórico de atuação em empresas resolvendo problemas reais através de backend, automações e sistemas internos.
          </p>
        </div>

        {/* Timeline Tree */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isFirst = index === 0
            return (
              <div
                key={exp.company}
                className={`group p-6 sm:p-8 rounded-3xl border transition-all text-left relative overflow-hidden ${
                  isFirst
                    ? 'bg-gradient-to-b from-slate-900 via-[#0d1320] to-slate-900 border-sky-500/30 shadow-xl shadow-sky-950/20'
                    : 'bg-slate-900/50 hover:bg-slate-900/80 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                      {getCompanyIcon(exp.company)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.company}
                        </h3>
                        {isFirst && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold uppercase">
                            Posição Atual
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-sky-400 font-mono mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Highlights Bullet List */}
                  <div className="lg:col-span-8 space-y-3">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Principais Responsabilidades & Entregas:
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-300">
                      {exp.highlights.map(item => (
                        <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="text-sky-400 mt-1 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {exp.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/90 border border-slate-800/80 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Summary Box */}
                  <div className="lg:col-span-4">
                    <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2.5 h-full flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4" />
                        Resultado Operacional
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {exp.businessImpact}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
