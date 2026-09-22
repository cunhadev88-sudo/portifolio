import React, { useState } from 'react'
import { 
  Server, 
  Layout, 
  Database, 
  Bot, 
  Cloud, 
  Wrench, 
  CheckCircle2, 
  Search,
  Sparkles,
  Layers,
  ChevronRight,
  Code
} from 'lucide-react'
import { techCategories } from '../data/portfolioData'
import { TechItem } from '../types'

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('backend')
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend': return <Server className="w-4 h-4" />
      case 'frontend': return <Layout className="w-4 h-4" />
      case 'database': return <Database className="w-4 h-4" />
      case 'automation': return <Bot className="w-4 h-4" />
      case 'cloud': return <Cloud className="w-4 h-4" />
      case 'tools': return <Wrench className="w-4 h-4" />
      default: return <Layers className="w-4 h-4" />
    }
  }

  const currentCategoryData = techCategories.find(c => c.id === selectedCategory) || techCategories[0]

  // Filter items by search query if present, otherwise show current category items
  const displayItems = searchQuery.trim()
    ? techCategories.flatMap(c => c.items).filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.usageContext.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategoryData.items

  const getFamiliarityBadge = (familiarity: string) => {
    switch (familiarity) {
      case 'Produção Diária':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Produção Diária
          </span>
        )
      case 'Avançado':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            Avançado
          </span>
        )
      case 'Arquitetura':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            Arquitetura & Estrutura
          </span>
        )
      case 'Sólido':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-300"></span>
            Sólido
          </span>
        )
    }
  }

  return (
    <section id="stack" className="py-24 relative bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
              <Code className="w-4 h-4" />
              <span>Ferramentas & Tecnologias</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tech Stack Prática
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Organizada por categorias reais com exemplos de aplicação em produção — sem porcentagens inventadas.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar tecnologia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900/80 border border-slate-800 focus:border-sky-500 focus:outline-none text-slate-200 placeholder-slate-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Navigation Pills */}
        {!searchQuery && (
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-2 border-b border-slate-800/60">
            {techCategories.map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id)
                    setSelectedTech(null)
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-400 border border-sky-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-900/40 hover:bg-slate-850 border border-slate-800/80'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-sky-500/30 text-sky-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {cat.items.length}
                  </span>
                </button>
              )
            })}
          </div>
        )}

        {/* Category Description Banner */}
        {!searchQuery && (
          <div className="mb-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                {getCategoryIcon(currentCategoryData.id)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  {currentCategoryData.label}
                </h3>
                <p className="text-xs text-slate-400">
                  {currentCategoryData.description}
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
              Clique em um card para ver detalhes
            </span>
          </div>
        )}

        {/* Tech Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayItems.map((tech) => {
            const isSelected = selectedTech?.name === tech.name
            return (
              <div
                key={tech.name}
                onClick={() => setSelectedTech(isSelected ? null : tech)}
                className={`group cursor-pointer p-4 rounded-xl transition-all duration-200 text-left border relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-sky-500/60 shadow-lg shadow-sky-950/40 ring-1 ring-sky-500/30'
                    : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Highlight Glow indicator */}
                {tech.highlight && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-sky-500/10 via-transparent to-transparent pointer-events-none" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                    {tech.name}
                  </span>
                  {getFamiliarityBadge(tech.familiarity)}
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {tech.usageContext}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-300">
                  <span className="capitalize">{tech.category}</span>
                  <span className="flex items-center gap-1 text-sky-400/80 group-hover:text-sky-400">
                    Detalhes <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Tech Deep Dive Drawer */}
        {selectedTech && (
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0c121e] to-slate-900 border border-sky-500/40 shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold font-mono">
                  &lt;/&gt;
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white">{selectedTech.name}</h4>
                    {getFamiliarityBadge(selectedTech.familiarity)}
                  </div>
                  <span className="text-xs text-slate-400 font-mono capitalize">
                    Categoria: {selectedTech.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedTech(null)}
                className="self-end md:self-auto text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700"
              >
                Fechar detalhes
              </button>
            </div>

            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2 font-semibold">
                  Aplicação Prática em Produção
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedTech.usageContext}
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  Filosofia de Utilização
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Utilizada com foco em padrões de engenharia: contratos de dados estritos, separação de responsabilidades, alta manutenibilidade e integridade em ambientes de missão crítica.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
