import React from 'react'
import { 
  GraduationCap, 
  Rocket, 
  Bot, 
  Server, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Target, 
  Zap, 
  CheckCircle2,
  Sparkles,
  ArrowDown
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative border-t border-slate-800/80 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
            <Target className="w-4 h-4" />
            <span>Trajetória & Filosofia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre Mim
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A ponte entre problemas reais de negócios e soluções de software resilientes, eficientes e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Cards & Education */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Core Narrative Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                Engenharia Focada em Resolver Dores Reais
              </h3>
              
              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <p>
                  Sou <strong>desenvolvedor de software</strong> atuando profissionalmente desde <strong>2022</strong>. Ao longo dessa caminhada, minha especialidade consolidou-se no desenvolvimento de <strong>sistemas internos, APIs robustas, bancos de dados relacionais e automações operacionais</strong>.
                </p>
                <p>
                  Não vejo a programação como um fim em si mesmo, mas como o meio definitivo de <strong>transformar processos manuais caóticos em softwares estáveis e intuitivos</strong>. Tenho vivência direta entendendo gargalos de chão de fábrica (PCP), coordenação de técnicos em campo (FSM) e rotinas fiscais e contábeis de alto volume.
                </p>
              </div>

              {/* Education Banner */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-start gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                    Formação Acadêmica
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.education.degree}
                  </div>
                  <div className="text-xs text-slate-400">
                    {personalInfo.education.institution}
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-sky-500/30 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Backend & APIs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Microsserviços e APIs assíncronas com FastAPI, Django, Flask e Node.js. Autenticação JWT e contratos rigorosos.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/30 transition-all space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Bot className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Automação & RPA</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Criação de esteiras autônomas (Selenium, UiPath, Python) que eliminam centenas de horas de retrabalho humano.
                </p>
              </div>
            </div>

            {/* Interests & Growth Focus */}
            <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Áreas de Estudo & Interesse Contínuo
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/70 border border-slate-700/60 text-slate-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-sky-400" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Narrative Timeline (2022 -> ...) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#0b101a] border border-slate-800 relative">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Evolução Técnica & Trajetória
                  </h3>
                  <p className="text-xs text-slate-400">
                    Como minha atuação se expandiu a cada ciclo
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950/60 text-sky-400 border border-sky-800/40">
                  Timeline
                </span>
              </div>

              {/* Vertical Timeline Nodes */}
              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-purple-500">
                
                {/* 2022 */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-sky-400 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Rocket className="w-3 h-3" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-sky-400">2022</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400 font-medium">Marco Inicial</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Início da Experiência Profissional com Desenvolvimento
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Imersão na resolução de demandas reais de empresas, criação de scripts e automações com foco em produtividade.
                    </p>
                  </div>
                </div>

                {/* Automação e RPA */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-indigo-400 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">Fase 02</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400 font-medium">Escala Operacional</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Automação e RPA em Larga Escala
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Construção de 9 robôs RPA autônomos para departamentos contábeis e fiscais, com Selenium, UiPath, web scraping e bancos MySQL.
                    </p>
                  </div>
                </div>

                {/* Backend / APIs */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-sky-400 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Server className="w-3 h-3" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-sky-400">Fase 03</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400 font-medium">Engenharia de Serviços</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Backend, APIs REST & Bancos Relacionais
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Arquitetura de microsserviços e endpoints com FastAPI, Django, Flask, autenticação OAuth2/JWT e modelagem avançada em PostgreSQL.
                    </p>
                  </div>
                </div>

                {/* Sistemas internos */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-indigo-400 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Layers className="w-3 h-3" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">Fase 04</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400 font-medium">Soluções Corporativas</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Sistemas Internos Críticos (FSM & PCP)
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Desenvolvimento de plataformas corporativas de Field Service e Planejamento e Controle de Produção (PCP) com visualização sob demanda.
                    </p>
                  </div>
                </div>

                {/* Full Stack */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-purple-400 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shadow-sm">
                    <Cpu className="w-3 h-3" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-purple-400">Fase 05</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400 font-medium">Experiência Completa</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Full Stack Moderno (React, Vite, PWA)
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Construção de aplicações com React, TypeScript e Tailwind CSS, entregando interfaces responsivas e offline-first para equipes de campo.
                    </p>
                  </div>
                </div>

                {/* Cloud / DevOps / Security */}
                <div className="relative group">
                  <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-sm">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-400">Atualidade</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400 font-medium">Estabilidade & Escala</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Cloud, DevOps, Linux & Segurança
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Foco contínuo em contêineres Docker, servidores Linux/Ubuntu, serviços AWS (S3/EC2), automação CI/CD e segurança em conformidade com OWASP.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
