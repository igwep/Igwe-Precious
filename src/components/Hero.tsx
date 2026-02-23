import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon, TerminalIcon } from "lucide-react";
export function Hero() {
  const [text, setText] = useState("");
  const fullText = "IGWE_PRECIOUS";
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="min-h-screen flex flex-col border-b-3 border-espresso relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 border-b-3 border-espresso bg-cream z-10">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-6 h-6" />
          <span className="font-mono font-bold">v1.0.0</span>
        </div>
        <div className="font-mono text-sm hidden sm:block">
          AVAILABLE FOR HIRE
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-4 md:px-12 lg:px-24 relative">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-r border-espresso h-full" />
          ))}
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-4 font-mono text-forest font-bold tracking-wider"
          >
            FULL STACK DEVELOPER
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8 break-words">
            {text}
            <span className="inline-block w-4 md:w-8 lg:w-12 h-12 md:h-20 lg:h-24 bg-espresso ml-2 animate-blink align-middle" />
          </h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 0.5,
            }}
            className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed border-l-3 border-forest pl-6 py-2"
          >
            Building digital experiences with raw code and intentional design.
            Focusing on performance, accessibility, and brutalist aesthetics.
          </motion.p>
        </div>

        {/* Rotated Label */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="rotate-90 origin-right translate-x-1/2 text-8xl font-black text-espresso opacity-5 pointer-events-none whitespace-nowrap">
            SYSTEM_READY
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t-3 border-espresso divide-x-3 divide-espresso">
        <a
          href="https://github.com/igwep"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 font-mono text-sm flex items-center justify-center bg-espresso text-cream hover:bg-forest transition-colors cursor-pointer"
        >
          GITHUB
        </a>
        <a
          href="https://x.com/wierdtallguy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 font-mono text-sm flex items-center justify-center hover:bg-espresso hover:text-cream transition-colors cursor-pointer"
        >
          TWITTER
        </a>
        <a
          href="https://www.linkedin.com/in/precious-igwe-454244317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 font-mono text-sm flex items-center justify-center hover:bg-espresso hover:text-cream transition-colors cursor-pointer"
        >
          LINKEDIN
        </a>
        <div className="p-4 font-mono text-sm flex items-center justify-center bg-forest text-cream">
          <ArrowDownIcon className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
