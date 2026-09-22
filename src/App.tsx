import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { HowIBuild } from './components/HowIBuild'
import { SqlSection } from './components/SqlSection'
import { AutomationSection } from './components/AutomationSection'
import { CurrentlyLearning } from './components/CurrentlyLearning'
import { GithubSection } from './components/GithubSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CvModal } from './components/CvModal'
import { Analytics } from "@vercel/analytics/react";


export function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      <Analytics />
      {/* Top Fixed Navbar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. Sobre Mim Section */}
        <About />

        {/* 3. Tech Stack Section */}
        <TechStack />

        {/* 4. Projetos Principais Section */}
        <Projects />

        {/* 5. Experiência Profissional Section */}
        <Experience />

        {/* 6. How I Build Software Section */}
        <HowIBuild />

        {/* 7. SQL & Relational Databases Section */}
        <SqlSection />

        {/* 8. Automação & RPA Section */}
        <AutomationSection />

        {/* 9. Currently Learning Section */}
        <CurrentlyLearning />

        {/* 10. GitHub & Code Section */}
        <GithubSection />

        {/* 11. Contato Section */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  )
}

export default App
