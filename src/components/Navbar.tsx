import React, { useState, useEffect } from 'react'
import { 
  Terminal, 
  Menu, 
  X, 
  FileText, 
  Send, 
  ChevronRight
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalInfo } from '../data/portfolioData'

interface NavbarProps {
  onOpenCvModal: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'SQL & Data', href: '#sql' },
    { label: 'Automação', href: '#automacao' },
    { label: 'Contato', href: '#contato' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a0f]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-transparent border border-indigo-500/30 group-hover:border-sky-400/50 transition-all shadow-sm">
            <Terminal className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-sky-400 transition-colors">
                Erick Cunha
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-800/40">
                dev
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden md:block">
              Backend & Full Stack
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/60 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 rounded-lg transition-all"
            title="Visualizar e Baixar Currículo"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Currículo CV</span>
          </button>

          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-lg transition-all shadow-md shadow-indigo-950/50 hover:shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contato</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCvModal}
            className="sm:hidden p-2 text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 rounded-lg"
            aria-label="Abrir Currículo"
          >
            <FileText className="w-4 h-4 text-sky-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 rounded-lg"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800/80 rounded-lg"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3 h-3 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenCvModal()
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700 rounded-lg"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Visualizar / Download CV</span>
            </button>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg"
            >
              <Send className="w-4 h-4" />
              <span>Falar Comigo</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2 text-slate-400">
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
