"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { ExternalLink, Github } from "lucide-react";
//import { MiniFloatingElements } from "./MiniFloatingElements";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/placeholder.svg",
    technologies: ["React", "Next.js", "Chart.js", "OpenWeatherMap API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations and dark mode support.",
    image: "/placeholder.svg",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative web solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-[#1E293B]/50 hover:border-[#1E293B] transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div
                      className={`grid lg:grid-cols-2 gap-0 ${
                        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                      }`}
                    >
                      <div
                        className={`relative h-64 lg:h-auto ${
                          index % 2 === 1 ? "lg:col-start-2" : ""
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
                      </div>

                      <div className="p-8 flex flex-col justify-center space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-3 text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-[#94A3B8] leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4">
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-[#1E293B]/50 hover:border-[#1E293B] transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 space-y-4">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={500} // set an appropriate width
                          height={500} // set an appropriate height
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold">
                          {project.title}
                        </h4>
                        <p className="text-[#94A3B8] text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs hover:bg-[#1E293B]/70"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs ">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center space-x-3 pt-2">
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="hover:bg-[#1E293B]/50"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="hover:bg-[#1E293B]/50"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
