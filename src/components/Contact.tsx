import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic
    console.log('Submitted:', formState);
  };
  return (
    <section className="bg-espresso text-cream p-4 md:p-12 lg:p-24 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="border-2 border-cream p-1">

          {/* Terminal Header */}
          <div className="bg-cream text-espresso p-2 flex justify-between items-center mb-1">
            <div className="flex gap-2 pl-2">
              <div className="w-3 h-3 rounded-full bg-espresso border border-espresso"></div>
              <div className="w-3 h-3 rounded-full border border-espresso"></div>
              <div className="w-3 h-3 rounded-full border border-espresso"></div>
            </div>
            <div className="font-mono text-sm font-bold">CONTACT_FORM.EXE</div>
            <div className="w-12"></div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-12 font-mono">
            <div className="mb-8 text-forest">
              <p>{'>'} INITIATING COMMUNICATION PROTOCOL...</p>
              <p>{'>'} PLEASE ENTER YOUR DETAILS BELOW.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm mb-2 opacity-70">
                  {'>'} INPUT_NAME:
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value
                  })
                  }
                  className="w-full bg-transparent border-b-2 border-cream/30 focus:border-forest outline-none py-2 text-xl transition-colors rounded-none placeholder-cream/20"
                  placeholder="_" />

              </div>

              <div className="group">
                <label className="block text-sm mb-2 opacity-70">
                  {'>'} INPUT_EMAIL:
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })
                  }
                  className="w-full bg-transparent border-b-2 border-cream/30 focus:border-forest outline-none py-2 text-xl transition-colors rounded-none placeholder-cream/20"
                  placeholder="_" />

              </div>

              <div className="group">
                <label className="block text-sm mb-2 opacity-70">
                  {'>'} INPUT_MESSAGE:
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value
                  })
                  }
                  className="w-full bg-transparent border-b-2 border-cream/30 focus:border-forest outline-none py-2 text-xl transition-colors rounded-none placeholder-cream/20 resize-none"
                  placeholder="_" />

              </div>

              <button
                type="submit"
                className="mt-8 border-2 border-cream px-8 py-4 hover:bg-cream hover:text-espresso transition-colors flex items-center gap-4 group w-full md:w-auto justify-center">

                <span>EXECUTE_SEND</span>
                <SendIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mt-12 text-center">
          <h3 className="font-mono text-sm mb-6 opacity-70">{'>'} CONNECT_SOCIAL</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/igwep"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 border-2 border-cream/30 hover:border-cream hover:bg-cream hover:text-espresso transition-all duration-300">
              <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs">GitHub</span>
            </a>
            <a
              href="https://x.com/wierdtallguy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 border-2 border-cream/30 hover:border-cream hover:bg-cream hover:text-espresso transition-all duration-300">
              <TwitterIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/precious-igwe-454244317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 border-2 border-cream/30 hover:border-cream hover:bg-cream hover:text-espresso transition-all duration-300">
              <LinkedinIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-12 text-center font-mono text-sm opacity-50">
          <p>© {new Date().getFullYear()} IGWE_PRECIOUS. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH REACT + TAILWIND + FRAMER MOTION</p>
        </div>
      </div>
    </section>);

}