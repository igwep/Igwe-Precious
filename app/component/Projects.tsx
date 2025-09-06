"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { ExternalLink, Github } from "lucide-react";
import {
  blogspot,
  shopCo,
  epiphany,
  aiResume,
  portfolio,
  coconut,
  mentorshore,
  eshelf,
} from "../../assets";
//import { fa } from "zod/locales";
//import { MiniFloatingElements } from "./MiniFloatingElements";

const projects = [
  {
    title: "BlogSpot",
    description:
      "A blogging platform that allows users to create, share, and manage their blogs through Sanity UI.",
    image: blogspot,
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    githubUrl: "https://github.com", // Replace with actual GitHub repo
    liveUrl: "https://blogged-48qg.vercel.app",
    featured: true,
  },
  {
    title: "Shop.co",
    description:
      "Shop.co is a modern e-commerce platform built with Next.js, styled with Tailwind CSS, and powered by Firebase for auth and data. It features Google sign-in, product search, and cart management.",
    image: shopCo,
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://shop-co-three-blue.vercel.app/",
    featured: false,
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analyzer that helps job seekers optimize their resumes by providing insights, keyword analysis, and improvement suggestions.",
    image: aiResume,
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://ai-resume-analyzer-seven-phi.vercel.app",
    featured: false,
  },
  {
    title: "EshelfAfrica",
    description:
      "EshelfAfrica is an e-commerce platform that connects buyers and sellers of books.",
    image: eshelf,
    technologies: ["Tailwind CSS", "HTML"],
    githubUrl: "https://github.com",
    liveUrl: "https://eshelfafrica.onrender.com",
    featured: false,
  },
  {
    title: "Epiphany",
    description:
      "A responsive website for an individual lawyer, built with React and styled with Tailwind CSS.",
    image: epiphany,
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://epiphany-legal-practitioners4.onrender.com",
    featured: false,
  },

  //  New Featured Projects
  {
    title: "Portfolio",
    description:
      "My personal portfolio showcasing projects, skills, and experience as a frontend developer.",
    image: portfolio, // add an imported image or screenshot
    technologies: ["Next.js", "Tailwind CSS"],
    githubUrl: "", // no repo link
    liveUrl: "https://your-portfolio-link.com", // replace with actual
    featured: true,
  },
  {
    title: "MentorShore",
    description:
      "Helped build the MentorShore platform, enabling seamless mentorship connections with modern, responsive UI components.",
    image: mentorshore, // add an imported image or screenshot
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "", // no repo link
    liveUrl: "https://mentorshore.com", // replace with actual link
    featured: true,
  },
  {
    title: "Coconut Logistics",
    description:
      "Collaborated with the Coconut development team to build and enhance the Coconut logistics platform, streamlining operations and improving delivery efficiency. Built and deployed reusable, responsive UI components with React, reducing code duplication by 30%.",
    image: coconut, // add an imported image or screenshot
    technologies: ["Next", "Tailwind CSS"],
    githubUrl: "", // no repo link
    liveUrl: "https://withcoconut.com", // replace with actual link
    featured: true,
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

                        {project.technologies?.length > 0 && (
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
                        )}

                        <div className="flex items-center space-x-4">
                          {project.githubUrl ? (
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
                          ) : (
                            ""
                          )}
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
