import React, { useState } from 'react'
import { 
  X, 
  Printer, 
  Download,
  Mail, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Copy, 
  Check
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo, experiences } from '../data/portfolioData'

interface CvModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  const handleCopyText = () => {
    const cvText = `
ERICK CUNHA
Software Developer | Backend & Full Stack
Email: ${personalInfo.socialLinks.email}
GitHub: ${personalInfo.socialLinks.github}
LinkedIn: ${personalInfo.socialLinks.linkedin}

FORMAÇÃO ACADÊMICA:
${personalInfo.education.degree} — ${personalInfo.education.institution}

RESUMO PROFISSIONAL:
Desenvolvedor de software atuando desde 2022 focado em sistemas internos, APIs REST de alto desempenho, automações operacionais (RPA) e bancos de dados relacionais.

EXPERIÊNCIA PROFISSIONAL:
${experiences.map(e => `
* ${e.company} — ${e.role} (${e.period})
  ${e.highlights.join('\n  ')}
`).join('\n')}
    `.trim()

    navigator.clipboard.writeText(cvText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-10 text-left print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Action Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase">
            <Briefcase className="w-4 h-4" />
            <span>Curriculum Vitae Profissional</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>

            <a
              href="/Erick_Costa_CV.pdf"
              download="Erick_Costa_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-mono font-semibold transition-colors shadow-sm cursor-pointer hover:shadow-sky-500/20"
              title="Baixar arquivo Erick_Costa_CV.pdf"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
              title="Imprimir visualização em tela"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="py-6 space-y-8 print:py-0 print:text-black">
          
          {/* Header Info */}
          <div className="space-y-3 border-b border-slate-800 pb-6 print:border-gray-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-lg font-semibold text-sky-400 font-mono print:text-blue-700">
              {personalInfo.role}
            </p>
            <p className="text-sm text-slate-300 max-w-2xl print:text-gray-700">
              "{personalInfo.tagline}"
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400 print:text-gray-600">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.socialLinks.email}
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" /> {personalInfo.socialLinks.github}
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.socialLinks.linkedin}
              </span>
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2 print:text-blue-700">
              <GraduationCap className="w-4 h-4" /> Formação Acadêmica
            </h2>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 print:bg-transparent print:border-gray-300 space-y-0.5">
              <div className="font-bold text-white text-sm print:text-black">
                {personalInfo.education.degree}
              </div>
              <div className="text-xs text-slate-300 print:text-gray-700">
                {personalInfo.education.institution}
              </div>
            </div>
          </div>

          {/* Experiência Profissional */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2 print:text-blue-700">
              <Briefcase className="w-4 h-4" /> Experiência Profissional
            </h2>

            <div className="space-y-6">
              {experiences.map(exp => (
                <div key={exp.company} className="space-y-2 border-l-2 border-slate-700 pl-4 print:border-gray-400">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-white text-base print:text-black">{exp.company}</span>
                      <span className="text-sky-400 text-xs font-mono ml-2 print:text-blue-700">({exp.role})</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-600">{exp.period}</span>
                  </div>

                  <ul className="space-y-1 text-xs text-slate-300 print:text-gray-700">
                    {exp.highlights.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-sky-400 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] text-slate-400 pt-1 font-mono print:text-gray-600">
                    <strong>Stack:</strong> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Principais Competências */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2 print:text-blue-700">
              <Code className="w-4 h-4" /> Principais Competências Técnicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-slate-200 block mb-1 print:text-black">Backend & APIs:</span>
                <span className="text-slate-400 print:text-gray-600">Python, FastAPI, Node.js, Django, Flask, NestJS, REST APIs, OAuth2, JWT</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-slate-200 block mb-1 print:text-black">Frontend:</span>
                <span className="text-slate-400 print:text-gray-600">React, TypeScript, Vite, Tailwind CSS, Vue.js, PWA</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-slate-200 block mb-1 print:text-black">Bancos de Dados & SQL:</span>
                <span className="text-slate-400 print:text-gray-600">PostgreSQL, MySQL, SQL Avançado (CTEs, Window Functions), SQLModel</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-slate-200 block mb-1 print:text-black">Automação, Cloud & DevOps:</span>
                <span className="text-slate-400 print:text-gray-600">Selenium, UiPath, Web Scraping, Docker, Linux/Ubuntu, AWS S3/EC2</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 print:hidden">
          <span>Erick Cunha — Software Developer</span>
          <div className="flex items-center gap-2">
            <a
              href="/Erick_Costa_CV.pdf"
              download="Erick_Costa_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors font-mono font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar CV em PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors font-mono"
            >
              Fechar Janela
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
