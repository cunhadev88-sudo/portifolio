import React, { useState } from 'react'
import { 
  Database, 
  Play, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  Layers, 
  Filter, 
  Clock, 
  Table,
  CheckCircle2
} from 'lucide-react'
import { sqlQueryDemos } from '../data/portfolioData'

export const SqlSection: React.FC = () => {
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0)
  const [isExecuting, setIsExecuting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [executionTime, setExecutionTime] = useState('14ms')

  const currentDemo = sqlQueryDemos[selectedDemoIndex]

  const concepts = [
    'CTEs (WITH)',
    'Window Functions',
    'JOINs Múltiplos',
    'Subqueries Correlacionadas',
    'GROUP BY & HAVING',
    'Modelagem 1:N e N:M',
    'Indexação & EXPLAIN',
    'PostgreSQL & MySQL'
  ]

  const handleRunQuery = () => {
    setIsExecuting(true)
    setTimeout(() => {
      setIsExecuting(false)
      setExecutionTime(`${Math.floor(Math.random() * 15 + 10)}ms`)
    }, 220)
  }

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(currentDemo.query)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="sql" className="py-24 relative bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
            <Database className="w-4 h-4" />
            <span>Engenharia de Dados Relacionais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SQL & Relational Databases
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
            SQL não é apenas um complemento — é a espinha dorsal de sistemas corporativos eficientes. Construo desde modelos relacionais estritos até queries analíticas complexas com CTEs.
          </p>
        </div>

        {/* SQL Concepts Ribbon */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {concepts.map(concept => (
            <span
              key={concept}
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              {concept}
            </span>
          ))}
        </div>

        {/* Interactive Query Workbench */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl overflow-hidden text-left">
          
          {/* Query Selection Tabs Header */}
          <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {sqlQueryDemos.map((demo, idx) => {
                const isSelected = selectedDemoIndex === idx
                return (
                  <button
                    key={demo.id}
                    onClick={() => {
                      setSelectedDemoIndex(idx)
                      setExecutionTime('14ms')
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                      isSelected
                        ? 'bg-sky-500/20 text-white border border-sky-500/40 shadow-sm ring-1 ring-sky-500/30'
                        : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      demo.database === 'PostgreSQL' ? 'bg-sky-950 text-sky-400 border border-sky-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}>
                      {demo.database}
                    </span>
                    <span className="truncate max-w-[200px] sm:max-w-xs">{demo.title.split(' (')[0]}</span>
                  </button>
                )
              })}
            </div>

            {/* Run & Copy Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyQuery}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
                title="Copiar SQL"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>

              <button
                onClick={handleRunQuery}
                disabled={isExecuting}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold shadow-md transition-all disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isExecuting ? 'Executando...' : 'Executar Query'}</span>
              </button>
            </div>
          </div>

          {/* Query Details & Context */}
          <div className="p-4 sm:p-6 bg-slate-900/50 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>{currentDemo.title}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800/40">
                  {currentDemo.concept}
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-3xl">
                {currentDemo.description}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 shrink-0">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Tempo de Execução: <strong className="text-emerald-400">{executionTime}</strong>
              </span>
              <span>|</span>
              <span>{currentDemo.rows.length} registros retornados</span>
            </div>
          </div>

          {/* SQL Code View */}
          <div className="relative p-4 bg-[#080c14] border-b border-slate-800 font-mono text-xs overflow-x-auto max-h-72">
            <pre className="text-sky-300 leading-relaxed">
              <code>{currentDemo.query}</code>
            </pre>
          </div>

          {/* Live Result Table View */}
          <div className="p-4 sm:p-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 uppercase tracking-wider">
                <Table className="w-4 h-4 text-sky-400" />
                Resultado da Consulta (Result Set)
              </span>
              <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 text-[11px]">
                Status: Executado com Sucesso
              </span>
            </div>

            <div className="rounded-2xl border border-slate-800 overflow-x-auto bg-slate-950/60">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-300">
                  <tr>
                    {currentDemo.columns.map(col => (
                      <th key={col} className="py-3 px-4 uppercase tracking-wider text-[10px] font-bold text-sky-400">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {currentDemo.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-850/50 transition-colors">
                      {currentDemo.columns.map(col => {
                        const val = row[col]
                        const isCritical = String(val).includes('CRITICO') || String(val).includes('URGENTE')
                        const isSuccess = String(val).includes('DISPONIVEL') || String(val).includes('SUCESSO') || String(val).includes('98')
                        return (
                          <td key={col} className="py-2.5 px-4 text-slate-300">
                            {isCritical ? (
                              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-bold">
                                {val}
                              </span>
                            ) : isSuccess ? (
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                                {val}
                              </span>
                            ) : (
                              val
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
