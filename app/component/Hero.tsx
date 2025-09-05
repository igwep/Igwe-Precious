"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { FloatingElements } from "./FloatingElements";
import Image from "next/image";
import profile from "../../public/profile.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-indigo-900/40" />

      {/* Animated background shapes (desktop only for performance) */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <motion.div
          style={{ willChange: "transform, opacity" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          style={{ willChange: "transform, opacity" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl"
        />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Profile Picture Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end order-2 lg:order-1"
        >
          <div className="relative">
            {/* Animated rings */}
            <motion.div
              style={{ willChange: "transform" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-purple-500/20 scale-110"
            />
            <motion.div
              style={{ willChange: "transform" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-blue-500/20 scale-125"
            />

            {/* Profile picture placeholder */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-blue-500 shadow-2xl"
            >
              {/* Profile Image */}
              <Image
                src={profile.src} //  replace with your image path in public/
                alt="Profile Picture"
                fill //  makes it fill the parent container
                className="object-cover object-top"
                priority //  loads immediately for above-the-fold images
              />
            </motion.div>

            {/* Floating particles (CSS animation for performance) */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-[float_3s_infinite]" />
            <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-[floatAlt_4s_infinite]" />
            <div className="absolute top-1/3 -left-8 w-2 h-2 bg-indigo-400 rounded-full animate-[floatSide_5s_infinite]" />
          </div>
        </motion.div>

        {/* Text Content Section */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#94A3B8]">Hi, I&apos;m</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              IGWE PRECIOUS
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F8FAFC]/90">
              Frontend Developer
            </h2>

            <p className="text-lg text-[#94A3B8] leading-relaxed">
              I craft beautiful, responsive web experiences with modern
              technologies. Passionate about clean code, user experience, and
              bringing ideas to life.
            </p>

            {/* Buttons & Arrow */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 pt-4">
              <div className="relative">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  Get In Touch
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollToContact}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce bg-transparent hover:bg-transparent"
                >
                  <ArrowDown className="h-5 w-5" />
                </Button>
              </div>

              {/* Social buttons */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:alex@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
