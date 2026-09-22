import React from 'react'
import { 
  Compass, 
  Sparkles, 
  Layers, 
  Cpu, 
  Terminal, 
  Box, 
  Cloud, 
  ShieldCheck, 
  Network, 
  Globe,
  Flame
} from 'lucide-react'
import { currentlyLearningItems } from '../data/portfolioData'

export const CurrentlyLearning: React.FC = () => {
  const getItemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-4 h-4 text-sky-400" />
      case 'Cpu': return <Cpu className="w-4 h-4 text-indigo-400" />
      case 'Terminal': return <Terminal className="w-4 h-4 text-emerald-400" />
      case 'Box': return <Box className="w-4 h-4 text-sky-400" />
      case 'Cloud': return <Cloud className="w-4 h-4 text-amber-400" />
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />
      case 'Network': return <Network className="w-4 h-4 text-purple-400" />
      case 'Globe': return <Globe className="w-4 h-4 text-sky-400" />
      default: return <Sparkles className="w-4 h-4 text-sky-400" />
    }
  }

  return (
    <section className="py-24 relative bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Live Update Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
              <Compass className="w-4 h-4" />
              <span>Evolução & Aprimoramento Contínuo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Currently Learning
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Tecnologia evolui rápido; quem resolve problemas reais precisa se manter na fronteira da técnica e da arquitetura.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atualizado Constantemente</span>
          </div>
        </div>

        {/* Learning Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {currentlyLearningItems.map(item => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getItemIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700/60">
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
