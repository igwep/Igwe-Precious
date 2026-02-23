import React from 'react';
import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { About } from './components/About';
import { Contact } from './components/Contact';
export function App() {
  return (
    <main className="min-h-screen bg-cream text-espresso selection:bg-forest selection:text-cream">
      <Hero />
      <ProjectsGrid />
      <About />
      <Contact />
    </main>);

}