import React, { Children } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}
const projects: Project[] = [
  {
    title: "Opinion Hub NG",
    description:
      "Empowering Nigerians with accurate, unbiased data to bridge the gap between public opinion and decision-making processes for societal development.",
    image: "opinionhub",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "",
    liveUrl: "https://opinionhub.ng/",
    featured: true,
  },
  {
    title: "Learnora NG",
    description:
      "Nigeria's premier digital learning platform connecting knowledge seekers with expert trainers across academic, professional, and creative fields.",
    image: "learnora",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "",
    liveUrl: "https://www.learnora.ng/",
    featured: true,
  },
  {
    title: "Marriage Hub NG",
    description:
      "A platform providing culturally relevant, faith-sensitive resources to nurture healthy marriages and strengthen families across Nigeria.",
    image: "marriagehub",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "",
    liveUrl: "https://www.marriagehub.ng/",
    featured: true,
  },
  {
    title: "BlogSpot",
    description:
      "A blogging platform that allows users to create, share, and manage their blogs through Sanity UI.",
    image: "blogspot",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    githubUrl: "https://github.com/igwep/blogged",
    liveUrl: "https://blogged-48qg.vercel.app",
    featured: true,
  },
  {
    title: "Shop.co",
    description:
      "Modern e-commerce platform with Google sign-in, product search, and cart management.",
    image: "shopCo",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/igwep/ShopCo",
    liveUrl: "https://shop-co-three-blue.vercel.app/",
    featured: false,
  },
  {
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume analyzer providing insights, keyword analysis, and improvement suggestions for job seekers.",
    image: "aiResume",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://ai-resume-analyzer-seven-phi.vercel.app",
    featured: false,
  },
  {
    title: "EshelfAfrica",
    description:
      "E-commerce platform connecting buyers and sellers of books across Africa.",
    image: "eshelf",
    technologies: ["Tailwind CSS", "HTML"],
    githubUrl: "https://github.com",
    liveUrl: "https://eshelfafrica.onrender.com",
    featured: false,
  },
  {
    title: "Epiphany",
    description:
      "Responsive website for an individual lawyer, built with React and Tailwind CSS.",
    image: "epiphany",
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/igwep/EPIPHANY-LEGAL-PRACTITIONERS",
    liveUrl: "https://epiphany-legal-practitioners4.onrender.com",
    featured: false,
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio showcasing projects, skills, and experience as a frontend developer.",
    image: "portfolio",
    technologies: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/igwep/Igwe-Precious",
    liveUrl: "https://igwe-precious.vercel.app/",
    featured: false,
  },
  {
    title: "MentorShore",
    description:
      "Platform enabling seamless mentorship connections with modern, responsive UI components.",
    image: "mentorshore",
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "https://mentorshore.com",
    featured: false,
  },
  {
    title: "Coconut Logistics",
    description:
      "Logistics platform streamlining operations and improving delivery efficiency with reusable UI components.",
    image: "coconut",
    technologies: ["Next", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "https://withcoconut.com",
    featured: false,
  },
];

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
export function ProjectsGrid() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 5);
  const moreProjects = projects.filter((project) => !project.featured);

  const handleProjectClick = (project: Project) => {
    window.open(project.liveUrl, "_blank");
  };

  return (
    <section className="border-b-3 border-espresso bg-cream">
      <div className="border-b-3 border-espresso p-4 md:p-8 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
          SELECTED_WORKS
        </h2>
        <span className="font-mono text-sm hidden md:block">2023 — 2024</span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(300px,auto)] border-b-3 border-espresso"
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={item}
            onClick={() => handleProjectClick(project)}
            className={`
              group relative border-b-3 md:border-b-0 md:border-r-3 border-espresso p-6 flex flex-col justify-between
              hover:bg-forest hover:text-cream transition-colors duration-300 cursor-pointer
              ${index === featuredProjects.length - 1 ? "md:border-r-0" : ""}
              ${index === featuredProjects.length - 2 ? "md:border-b-0" : ""}
            `}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-sm border border-current px-2 py-1">
                0{index + 1}
              </span>
              <ArrowUpRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-mono leading-none">
                {project.title}
              </h3>
              <p className="text-sm md:text-base font-medium opacity-80 max-w-md">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.technologies.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs font-mono border border-current px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-l-2 border-t-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}

        {/* More Projects Section */}
        {moreProjects.length > 0 && (
          <div className="hidden md:flex items-center justify-center p-8 bg-espresso text-cream">
            <div className="text-center">
              <p className="font-mono text-sm mb-2">MORE PROJECTS</p>
              <p className="text-4xl font-bold">{moreProjects.length}</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Additional Projects Grid */}
      {moreProjects.length > 0 && (
        <section className="border-b-3 border-espresso bg-cream">
          <div className="border-b-3 border-espresso p-4 md:p-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              MORE_PROJECTS
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(300px,auto)]"
          >
            {moreProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={item}
                onClick={() => handleProjectClick(project)}
                className={`
                  group relative border-b-3 md:border-b-0 md:border-r-3 border-espresso p-6 flex flex-col justify-between
                  hover:bg-forest hover:text-cream transition-colors duration-300 cursor-pointer
                  ${index === moreProjects.length - 1 ? "md:border-r-0" : ""}
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm border border-current px-2 py-1">
                    0{index + 6}
                  </span>
                  <ArrowUpRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold font-mono leading-none">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium opacity-80 max-w-md">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs font-mono border border-current px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-4 h-4 border-l-2 border-t-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </section>
  );
}
