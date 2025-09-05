"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ui/ThemeToggle";
import { Home, User, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed z-50 transition-all duration-300 hidden md:block ${
          isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "max-w-4xl mx-auto bg-background/95 backdrop-blur-md shadow-lg rounded-2xl px-6 py-3"
              : "max-w-6xl mx-auto bg-transparent px-4 sm:px-6 lg:px-8 py-4"
          }`}
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              IGWE PRECIOUS
            </motion.div>

            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
              {/*  <ThemeToggle /> */}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
      >
        <div className="bg-background/95 backdrop-blur-md border border-[#1E293B]/30 rounded-2xl shadow-lg px-4 py-3">
          <div className="flex items-center justify-around">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.name}</span>
              </motion.button>
            ))}

            {/* Theme Toggle for Mobile */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-2 py-2"
            >
              <ThemeToggle />
            </motion.div> */}
          </div>
        </div>
      </motion.nav>

      {/* Spacer for mobile so bottom nav doesn’t cover content */}
      {/*  <div className="h-16 md:hidden" /> */}
    </>
  );
}
