import React, { useState } from 'react'
import { 
  X, 
  Terminal, 
  Send, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Check
} from 'lucide-react'
import { simulatedEndpoints } from '../data/portfolioData'

interface ApiConsoleModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ApiConsoleModal: React.FC<ApiConsoleModalProps> = ({ isOpen, onClose }) => {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasExecuted, setHasExecuted] = useState(true)
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const currentEndpoint = simulatedEndpoints[selectedEndpointIndex]

  const handleExecute = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setHasExecuted(true)
    }, 280)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentEndpoint.sampleResponse, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-left">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase font-semibold">
              <Terminal className="w-4 h-4" />
              <span>Backend Architecture & Interactive API Console</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              APIs & Backend Showcase
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Demonstração prática de rotas RESTful, autenticação OAuth2/JWT, validação de esquemas e persistência.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Architecture Flow Banner */}
        <div className="my-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
            Arquitetura em Camadas (Layered Design):
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">01. Camada</div>
              <div className="font-semibold text-white">Client</div>
              <div className="text-[10px] text-slate-400">Web / PWA / Bot</div>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">02. Gateway</div>
              <div className="font-semibold text-sky-400">FastAPI Router</div>
              <div className="text-[10px] text-slate-400">CORS & Rate Limit</div>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">03. Segurança</div>
              <div className="font-semibold text-indigo-400">OAuth2 & JWT</div>
              <div className="text-[10px] text-slate-400">RBAC Token Guard</div>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">04. Domínio</div>
              <div className="font-semibold text-purple-400">Business Logic</div>
              <div className="text-[10px] text-slate-400">Pydantic & Services</div>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">05. Dados</div>
              <div className="font-semibold text-emerald-400">PostgreSQL</div>
              <div className="text-[10px] text-slate-400">SQLModel / Pools</div>
            </div>
          </div>
        </div>

        {/* Endpoint Selector Tabs */}
        <div className="space-y-2 mb-4">
          <label className="text-xs font-mono text-slate-400 uppercase">Selecione o Endpoint:</label>
          <div className="flex flex-wrap gap-2">
            {simulatedEndpoints.map((ep, idx) => {
              const isSelected = selectedEndpointIndex === idx
              return (
                <button
                  key={ep.endpoint}
                  onClick={() => {
                    setSelectedEndpointIndex(idx)
                    setHasExecuted(true)
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                    isSelected
                      ? 'bg-sky-500/20 text-white border border-sky-400 shadow-md ring-1 ring-sky-400/40'
                      : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    ep.method === 'GET' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {ep.method}
                  </span>
                  <span>{ep.endpoint}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Request / Response Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Request Config Left Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Parâmetros da Requisição</span>
                <span className="text-sky-400">HTTP/1.1</span>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] text-slate-400 font-mono">Resumo do Endpoint:</div>
                <div className="text-xs text-slate-200">{currentEndpoint.summary}</div>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1 text-[11px] font-mono text-slate-400">
                <div><span className="text-slate-400">Authorization:</span> Bearer eyJhbGciOiJI...</div>
                <div><span className="text-slate-400">Accept:</span> application/json</div>
                <div><span className="text-slate-400">Content-Type:</span> application/json</div>
              </div>

              {currentEndpoint.samplePayload && (
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 mb-1">Payload JSON:</div>
                  <pre className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto">
                    {JSON.stringify(currentEndpoint.samplePayload, null, 2)}
                  </pre>
                </div>
              )}

              <button
                onClick={handleExecute}
                disabled={isLoading}
                className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-950/60 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processando...
                  </span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Disparar Requisição (Send)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Response Inspector Right Panel */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-slate-400 uppercase tracking-wider">Resposta da API</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold text-[11px]">
                  200 OK
                </span>
                <span className="flex items-center gap-1 text-slate-400 text-[11px]">
                  <Clock className="w-3 h-3 text-sky-400" />
                  18ms
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 text-[11px]"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copiado' : 'Copiar JSON'}</span>
              </button>
            </div>

            <div className="relative rounded-xl border border-slate-800 bg-[#090d16] p-4 font-mono text-xs overflow-x-auto max-h-[340px]">
              <pre className="text-emerald-400 leading-relaxed">
                {JSON.stringify(currentEndpoint.sampleResponse, null, 2)}
              </pre>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-400">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-center">
                <div className="text-slate-400">Engine</div>
                <div className="text-slate-200 font-semibold">Uvicorn / FastAPI</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-center">
                <div className="text-slate-400">Database Engine</div>
                <div className="text-slate-200 font-semibold">PostgreSQL 16</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-center">
                <div className="text-slate-400">Contratos</div>
                <div className="text-slate-200 font-semibold">OpenAPI / JSON</div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Testes padronizados e validados com Postman e pytest.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
          >
            Fechar Console
          </button>
        </div>

      </div>
    </div>
  )
}
