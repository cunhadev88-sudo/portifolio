import React from 'react'
import { Terminal, ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-[#05070b] border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-sky-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">
                Erick Cunha — Software Developer
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Backend & Full Stack Engineer
              </div>
            </div>
          </div>

          {/* Core Quote */}
          <div className="font-mono text-slate-400 text-center">
            "Built with curiosity, code and caffeine."
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono transition-colors border border-slate-800"
              title="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Erick Cunha. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>FastAPI</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>PostgreSQL</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
