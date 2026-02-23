import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b-3 border-espresso">
      {/* Left Column - Pull Quote */}
      <div className="p-8 md:p-16 lg:p-24 border-b-3 lg:border-b-0 lg:border-r-3 border-espresso flex flex-col justify-center bg-forest text-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(#f5f0e8 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>
        </div>

        <motion.blockquote
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          className="relative z-10">

          <span className="text-9xl font-mono opacity-20 absolute -top-12 -left-8">
            "
          </span>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-mono">
            I build software that respects the user's intelligence and the
            machine's resources.
          </p>
          <footer className="mt-8 font-mono text-sm border-t border-cream/30 pt-4 inline-block">
            — PHILOSOPHY_V1
          </footer>
        </motion.blockquote>
      </div>

      {/* Right Column - Bio & Skills */}
      <div className="p-8 md:p-16 flex flex-col justify-center bg-cream">
        <div className="max-w-xl">
          <h2 className="text-xl font-mono font-bold mb-6 flex items-center gap-2">
            <span className="w-4 h-4 bg-espresso"></span>
            ABOUT_ME
          </h2>

          <div className="prose prose-lg text-espresso mb-12">
            <p className="mb-6 font-medium">
              Based in Lagos, Nigeria, I'm a frontend-focused full-stack engineer who graduated from Benson Idahosa University. I believe in
              the beauty of raw functionality and creating web experiences that are fast,
              accessible, and unapologetically bold.
            </p>
            <p className="font-medium">
              With a passion for modern web technologies and a keen eye for design, I build
              applications that respect the user's intelligence while delivering exceptional
              performance and user experience.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono font-bold text-sm mb-4 border-b-2 border-espresso pb-2 inline-block">
                CORE_STACK
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>HTML5
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>CSS3
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>React
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>Firebase
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>Sanity CMS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>Git
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>PHP
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>Figma
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>REST API
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>WordPress
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>Laravel
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>Bootstrap
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest"></span>SEO
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono font-bold text-sm mb-4 border-b-2 border-espresso pb-2 inline-block">
                EXPERIENCE
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-espresso/20 pb-2">
                  <span className="font-bold">Software Developer @ Unliag Microfinance Bank</span>
                  <span className="font-mono text-sm">2026</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-espresso/20 pb-2">
                  <span className="font-bold">Software Developer @ MentorShore</span>
                  <span className="font-mono text-sm">2025 — 2026</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-espresso/20 pb-2">
                  <span className="font-bold">Frontend Developer @ Coconut Africa</span>
                  <span className="font-mono text-sm">2025 — 2026</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-espresso/20 pb-2">
                  <span className="font-bold">Frontend Developer (Refinedwin Project)</span>
                  <span className="font-mono text-sm">2025 — 2026</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-espresso/20 pb-2">
                  <span className="font-bold">PHP Developer (Contract) @ Kayd Web Solutions</span>
                  <span className="font-mono text-sm">2025</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-espresso/20 pb-2">
                  <span className="font-bold">Coding Instructor @ Phoenix Coding Institute</span>
                  <span className="font-mono text-sm">2025</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-espresso/20 pb-2">
                  <span className="font-bold">Web Developer (Freelance)</span>
                  <span className="font-mono text-sm">2022 — 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}