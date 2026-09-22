import React, { useState } from 'react'
import { 
  ArrowDown, 
  Terminal, 
  FileText, 
  Server, 
  Database, 
  Cpu, 
  Activity
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

interface HeroProps {
  onOpenCvModal: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'terminal'>('architecture')

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-600/10 to-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-sky-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Live Indicator Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 tracking-wide">
                Currently building software & learning every day.
              </span>
            </div>

            {/* Main Name & Subtitle */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
                <Terminal className="w-4 h-4" />
                <span>Backend & Full Stack Engineer</span>
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300">
                Software Developer <span className="text-sky-400">|</span> Backend & Full Stack
              </h2>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              "{personalInfo.tagline}"
            </p>

            {/* Key Micro Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-1 text-slate-400 max-w-lg font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="text-sky-400 font-bold text-sm">Desde 2022</div>
                <div className="text-[11px] text-slate-400">Em produção</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="text-indigo-400 font-bold text-sm">9+ Robôs</div>
                <div className="text-[11px] text-slate-400">RPA autônomos</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="text-emerald-400 font-bold text-sm">&lt; 45ms</div>
                <div className="text-[11px] text-slate-400">Latência de API</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('projetos')}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-indigo-700 hover:from-sky-400 hover:to-indigo-600 rounded-xl transition-all shadow-lg shadow-indigo-950/60 hover:shadow-sky-500/20 hover:-translate-y-0.5"
              >
                <span>Ver projetos</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('sobre')}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <span>Sobre mim</span>
              </button>

              <a
                href="/Erick_Costa_CV.pdf"
                download="Erick_Costa_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-sky-400 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/40 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                title="Baixar Currículo em PDF (Erick_Costa_CV.pdf)"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all hover:-translate-y-0.5"
                  title="Abrir perfil no GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all hover:-translate-y-0.5"
                  title="Abrir perfil no LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Representation of System Architecture & Data Flow */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c111c] border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">system-topology.arch</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2 py-0.5 rounded ${
                      activeTab === 'architecture' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'text-slate-400'
                    }`}
                  >
                    Topology
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2 py-0.5 rounded ${
                      activeTab === 'terminal' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'text-slate-400'
                    }`}
                  >
                    API Stream
                  </button>
                </div>
              </div>

              {/* Topology / Architecture Content */}
              {activeTab === 'architecture' ? (
                <div className="p-5 space-y-4">
                  {/* Layer 1: Ingestion & Clients */}
                  <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <Cpu className="w-3.5 h-3.5" /> 01. Client Ingress Layer
                      </span>
                      <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40 text-[10px]">
                        Active
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                        <div className="text-[10px] text-slate-400">Frontend</div>
                        <div className="font-semibold text-slate-200">React PWA</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                        <div className="text-[10px] text-slate-400">Field Tech</div>
                        <div className="font-semibold text-slate-200">Mobile Offline</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                        <div className="text-[10px] text-slate-400">Messaging</div>
                        <div className="font-semibold text-slate-200">WhatsApp API</div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Indicator with animated pulse */}
                  <div className="flex items-center justify-center gap-2 py-0.5">
                    <div className="h-4 w-[1px] bg-gradient-to-b from-sky-500 to-indigo-500" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      REST / OAuth2 / JWT (mTLS)
                    </span>
                    <div className="h-4 w-[1px] bg-gradient-to-b from-sky-500 to-indigo-500" />
                  </div>

                  {/* Layer 2: API Gateway & Business Engine */}
                  <div className="rounded-xl bg-slate-950/60 border border-indigo-500/30 p-3.5 space-y-2 shadow-sm shadow-indigo-950/50">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                        <Server className="w-3.5 h-3.5" /> 02. API Gateway & Business Engine
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">FastAPI & Python</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded bg-slate-900/90 border border-indigo-900/40">
                        <div className="text-[10px] text-indigo-300 font-semibold">FSM & PCP Core</div>
                        <div className="text-[11px] text-slate-400">Regras de Negócio & SLA</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900/90 border border-indigo-900/40">
                        <div className="text-[10px] text-indigo-300 font-semibold">RPA Orchestrator</div>
                        <div className="text-[11px] text-slate-400">9 Robôs Autônomos</div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Indicator */}
                  <div className="flex items-center justify-center gap-2 py-0.5">
                    <div className="h-4 w-[1px] bg-gradient-to-b from-indigo-500 to-sky-400" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      Connection Pooling & CTE Queries
                    </span>
                    <div className="h-4 w-[1px] bg-gradient-to-b from-indigo-500 to-sky-400" />
                  </div>

                  {/* Layer 3: Persistence & Storage */}
                  <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <Database className="w-3.5 h-3.5" /> 03. Persistence & Relational Data
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">ACID Compliant</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                        <div className="font-semibold text-slate-200">PostgreSQL</div>
                        <div className="text-[10px] text-slate-400">Complex CTEs</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                        <div className="font-semibold text-slate-200">MySQL</div>
                        <div className="text-[10px] text-slate-400">RPA Logs</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                        <div className="font-semibold text-slate-200">AWS S3</div>
                        <div className="text-[10px] text-slate-400">Anexos & PDFs</div>
                      </div>
                    </div>
                  </div>

                  {/* Live Telemetry Footer */}
                  <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/60">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Activity className="w-3 h-3 text-emerald-400" /> Status: 200 OK
                    </span>
                    <span>Latência média: <strong className="text-sky-400">18ms</strong></span>
                    <span>Uptime: <strong className="text-emerald-400">99.98%</strong></span>
                  </div>
                </div>
              ) : (
                /* Terminal Stream View */
                <div className="p-4 font-mono text-xs space-y-2 bg-[#090d15] text-slate-300 min-h-[340px]">
                  <div className="text-slate-400">// API Live Event Stream (Simulado)</div>
                  <div className="text-emerald-400">
                    [INFO] [FastAPI] Application startup complete on uvicorn:0.0.0.0:8000
                  </div>
                  <div className="text-sky-400">
                    {`[AUTH] POST /api/v1/auth/token - 200 OK (8ms) -> User: erick.cunha`}
                  </div>
                  <div className="text-slate-300">
                    {`[FSM] GET /api/v1/fsm/tickets/active - 200 OK (22ms) -> 2 tickets synced`}
                  </div>
                  <div className="text-indigo-400">
                    {`[PCP] POST /api/v1/pcp/bom/explode - 200 OK (34ms) -> OP-2025-084 CTE calculated`}
                  </div>
                  <div className="text-emerald-400">
                    {`[RPA] EXEC_TASK [Robo-01-Certidoes] -> 100% SUCCESS (0 errors)`}
                  </div>
                  <div className="text-amber-400">
                    {`[GDL-AI] Parsing tender PDF (312 pages) -> OpenAI summary generated in 1.4s`}
                  </div>
                  <div className="text-slate-400 pt-3 border-t border-slate-800/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Listening on socket... Ready for incoming business demands.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
