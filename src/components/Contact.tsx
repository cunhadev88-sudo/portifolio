import React, { useState } from 'react'
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      setErrorMsg('Por favor, preencha todos os campos.')
      return
    }

    setErrorMsg('')
    setIsSubmitting(true)

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ nome: '', email: '', mensagem: '' })
    }, 600)
  }

  return (
    <section id="contato" className="py-24 relative bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase bg-sky-950/40 px-3 py-1 rounded-full border border-sky-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vamos Conversar</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let's build something useful.
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl font-medium">
            Have a problem that can be solved with software?
          </p>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Seja para criar um sistema interno, estruturar APIs resilientes, automatizar processos contábeis ou desenhar a arquitetura de uma solução.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto text-left">
          
          {/* Direct Channels Left Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Fast Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Email Direto</div>
                  <div className="text-sm font-bold text-white font-mono">{personalInfo.socialLinks.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-mono font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Enviar E-mail</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Copiar endereço de e-mail"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between group space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">LinkedIn</div>
                  <div className="text-xs text-slate-400">Conectar perfil</div>
                </div>
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between group space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GitHub</div>
                  <div className="text-xs text-slate-400">Ver projetos</div>
                </div>
              </a>
            </div>

            {/* Availability Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Disponível para novos desafios, projetos de software sob medida e consultoria técnica.</span>
            </div>

          </div>

          {/* Form Right Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0c121e] border border-slate-800 shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Mensagem Enviada!</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Obrigado pelo contato, Erick responderá assim que possível pelo e-mail informado.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Envie uma Mensagem</h3>
                    <p className="text-xs text-slate-400">
                      Preencha o formulário e entrarei em contato diretamente.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Seu Nome</label>
                    <input
                      type="text"
                      placeholder="Ex: Carlos Mendes"
                      value={formData.nome}
                      onChange={e => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:outline-none text-slate-200 text-xs transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Seu E-mail Corporativo ou Pessoal</label>
                    <input
                      type="email"
                      placeholder="exemplo@empresa.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:outline-none text-slate-200 text-xs transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Mensagem / Desafio de Software</label>
                    <textarea
                      rows={4}
                      placeholder="Descreva o processo que gostaria de automatizar, o sistema a ser construído ou a oportunidade profissional..."
                      value={formData.mensagem}
                      onChange={e => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:outline-none text-slate-200 text-xs transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-indigo-700 hover:from-sky-400 hover:to-indigo-600 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-950/60 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando Mensagem...
                      </span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
