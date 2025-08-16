"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
//import { MiniFloatingElements } from "./MiniFloatingElements";

const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "API",
  "Firebase",
  "Node.js",
  "Sanity CMS",
  "GitHub",
  "Git",
];

const experiences = [
  {
    title: "Frontend Developer",
    company: "Coconut Africa",
    period: "2025 - Present",
    description:
      "Collaborated with the Coconut development team to build and enhance the Coconut logistics platform, streamlining operations and improving delivery efficiency. Worked closely with designers and backend developers to implement UI components, optimize performance, integrate APIs, and improve overall user experience.",
  },
  {
    title: "Coding Instructor",
    company: "Phoenix Coding Institute",
    period: "2025 - Present",
    description:
      "Mentor secondary school students across Lagos State in the fundamentals of front-end development, fostering problem-solving skills and introducing them to modern web technologies.",
  },
  {
    title: "Frontend Developer",
    company: "MentorShore",
    period: "2024 - 2025",
    description:
      "Developed responsive and user-friendly web interfaces using React.js, JavaScript, HTML, and Tailwind CSS. Collaborated with designers and backend developers to implement UI components, optimize performance, integrate APIs, and improve overall user experience.",
  },
  {
    title: "IT Technician",
    company: "Pear SDC",
    period: "2022",
    description:
      "Troubleshot hardware, software, and network issues while supporting internal web application development. Assisted with database management, documented processes, and collaborated with cross-functional teams to integrate new tools and technologies.",
  },
  {
    title: "Web Developer",
    company: "Freelance",
    period: "2021 - 2023",
    description:
      "Developed websites for small retail shops and individual clients, implementing modern web technologies and best practices to deliver user-friendly, responsive designs.",
  }
];


export function About() {
  const ref = useRef(null);
  const experienceRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
     
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            I&apos;m a passionate frontend developer with over 4 years of experience
            creating beautiful, functional web applications. I love turning
            complex problems into simple, elegant solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p>
                My journey in web development started with a curiosity about how
                websites work. That curiosity has grown into a passion for
                creating digital experiences that not only look great but also
                provide exceptional user experiences.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open source projects, or enjoying a good cup of
                coffee while reading about the latest industry trends.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            ref={experienceRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 relative"
          >
            <h3 className="text-xl font-semibold mb-6">Experience</h3>

            {/* Progress Timeline */}
            <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border/30">
              <motion.div
                className="w-full bg-gradient-to-b from-purple-600 to-blue-600 origin-top"
                style={{ height: progressHeight }}
              />
            </div>

            <div className="space-y-8 relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-background shadow-lg"
                  />

                  <Card className="border-[#1E293B]/50 hover:border-[#1E293B] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <span className="text-sm text-[#94A3B8]">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-[#94A3B8] leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
