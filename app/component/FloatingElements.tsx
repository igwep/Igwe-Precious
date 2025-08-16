"use client";

import { motion, Variants } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Code,
  Palette,
  Database,
  Cpu,
  Globe,
  Layers,
  Terminal,
  Figma,
} from "lucide-react";

interface FloatingElementsProps {
  className?: string;
}

const floatingVariants: Variants = {
  float1: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  float2: {
    y: [0, -30, 0],
    x: [0, -15, 0],
    rotate: [0, -3, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  float3: {
    y: [0, -25, 0],
    x: [0, 8, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  float4: {
    y: [0, -15, 0],
    x: [0, -12, 0],
    rotate: [0, -4, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function FloatingElements({ className = "" }: FloatingElementsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Computer Monitor */}
      <motion.div
        variants={floatingVariants}
        animate="float1"
        className="absolute top-20 left-10 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl backdrop-blur-sm border border-white/10">
          <Monitor className="w-12 h-12 text-purple-400" />
        </div>
      </motion.div>

      {/* Smartphone */}
      <motion.div
        variants={floatingVariants}
        animate="float2"
        className="absolute top-32 right-16 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="p-3 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Smartphone className="w-8 h-8 text-blue-400" />
        </div>
      </motion.div>

      {/* Code Icon */}
      <motion.div
        variants={floatingVariants}
        animate="float3"
        className="absolute bottom-40 left-20 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="p-3 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Code className="w-10 h-10 text-green-400" />
        </div>
      </motion.div>

      {/* Design Palette */}
      <motion.div
        variants={floatingVariants}
        animate="float4"
        className="absolute top-60 right-10 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="p-3 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Palette className="w-9 h-9 text-pink-400" />
        </div>
      </motion.div>

      {/* Database */}
      <motion.div
        variants={floatingVariants}
        animate="float1"
        className="absolute bottom-32 right-32 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Database className="w-8 h-8 text-orange-400" />
        </div>
      </motion.div>

      {/* CPU */}
      <motion.div
        variants={floatingVariants}
        animate="float2"
        className="absolute top-10 right-1/3 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Cpu className="w-9 h-9 text-cyan-400" />
        </div>
      </motion.div>

      {/* Globe */}
      <motion.div
        variants={floatingVariants}
        animate="float3"
        className="absolute bottom-20 left-1/3 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="p-3 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Globe className="w-8 h-8 text-violet-400" />
        </div>
      </motion.div>

      {/* Layers */}
      <motion.div
        variants={floatingVariants}
        animate="float4"
        className="absolute top-40 left-1/4 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="p-3 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Layers className="w-8 h-8 text-emerald-400" />
        </div>
      </motion.div>

      {/* Terminal */}
      <motion.div
        variants={floatingVariants}
        animate="float1"
        className="absolute bottom-60 right-20 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <div className="p-3 bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Terminal className="w-8 h-8 text-slate-400" />
        </div>
      </motion.div>

      {/* Figma */}
      <motion.div
        variants={floatingVariants}
        animate="float2"
        className="absolute top-52 left-12 opacity-20 dark:opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-blue-600/10 rounded-xl backdrop-blur-sm border border-white/10">
          <Figma className="w-8 h-8 text-indigo-400" />
        </div>
      </motion.div>
    </div>
  );
}
