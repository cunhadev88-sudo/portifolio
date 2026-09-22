import React from 'react'
import { 
  GitBranch, 
  Star, 
  GitCommit, 
  Code2, 
  Flame,
  ArrowUpRight
} from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { githubShowcase, personalInfo } from '../data/portfolioData'

export const GithubSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#080c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
              <GithubIcon className="w-4 h-4" />
              <span>Open Source & Repositórios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              GitHub & Code Activity
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Código limpo, arquitetura versionada e commits consistentes voltados para soluções reais.
            </p>
          </div>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 text-white text-xs font-semibold font-mono transition-all hover:scale-[1.02] shadow-lg self-start md:self-auto"
          >
            <GithubIcon className="w-4 h-4 text-sky-400" />
            <span>Explore my GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Stats & Languages Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 text-left">
          
          {/* Key Metric Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-center">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mb-1">
                <GitCommit className="w-3.5 h-3.5 text-sky-400" /> Commits / Ano
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {githubShowcase.totalCommitsYear}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Consistência e rigor</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-center">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mb-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" /> Clean Code
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {githubShowcase.cleanCodeScore}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Tipagem & Linting</div>
            </div>

            <div className="col-span-2 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400">Perfil Principal</div>
                <div className="text-base font-bold text-white font-mono">@{githubShowcase.username}</div>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/40">
                Active Contributor
              </span>
            </div>
          </div>

          {/* Languages Visual Bar */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 flex flex-col justify-center">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Linguagens Mais Utilizadas</span>
              <span>Distribuição de Código</span>
            </div>

            {/* Progress Multi-color Bar */}
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
              {githubShowcase.favoriteLanguages.map(lang => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  className="h-full first:rounded-l-full last:rounded-r-full"
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {githubShowcase.favoriteLanguages.map(lang => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: lang.color }}
                  />
                  <div>
                    <div className="text-xs font-medium text-slate-200">{lang.name}</div>
                    <div className="text-[10px] font-mono text-slate-400">{lang.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {githubShowcase.featuredRepos.map(repo => (
            <div
              key={repo.name}
              className="p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all space-y-3 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  <Code2 className="w-4 h-4 text-sky-400" />
                  <span>{repo.name}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3 h-3 text-slate-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {repo.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/80 border border-slate-800 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
