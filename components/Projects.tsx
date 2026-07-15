"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Chevrolet & Opel Spare Parts",
    subtitle: "E-commerce Website",
    description:"Chevrolet & Opel Spare Parts is a streamlined e-commerce catalog co-developed for Chevrolet and Opel auto parts. It offers an easy-to-browse product showcase that integrates directly with WhatsApp, providing customers with a fast, personalized, and direct ordering experience.",
    techStack: [ "TypeScript", "Vue.js", "Python", "PostgreSQL" ],
    accent: "#D3D3D3",
    glowAlpha: "15",
    highlight: "Streamlined e-commerce catalog for Chevrolet and Opel auto parts with WhatsApp integration for direct ordering.",
    liveUrl: "https://chevroletopel.com",
  },
  {
    id: 2,
    number: "02",
    title: "Uni Hive",
    subtitle: "A platform for mutual support among university students.",
    description:
      "UniHive is a modern, collaborative ecosystem designed specifically for university students.It enables information sharing and collaboration by integrating it with the internet in an academic environment.",
    techStack: ["TypeScript","Next.js", "React"],
    accent: "#FFCC00",
    glowAlpha: "12",
    highlight: "Modern, collaborative ecosystem for university students.",


  },
  {
    id: 3,
    number: "03",
    title: "Flappy Dragon",
    subtitle: "Interactive Game",
    description:
      "A Game of Thrones-themed, 2D game written by Pygame.",ç
    techStack: ["Python"],
    accent: "#ff453a",
    glowAlpha: "24",
    highlight: "Frame-independent physics with custom pixel art engine.",
  },
  {
    id: 4,
    number: "04",
    title: "Budget Manager",
    subtitle: "Desktop Application",
    description:
      "A highly structured, JSON-backed desktop application engineered using Tkinter, featuring clean data serialization and dynamic asset balance updates.",
    techStack: ["Python","JSON"],
    accent: "#0071e3",
    glowAlpha: "20",
    highlight: "Financial data persistence with real-time balance calculation.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="text-[13px] font-medium text-[#0071e3] uppercase tracking-[0.12em] mb-4"
          >
            Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
            className="text-[clamp(28px,5vw,48px)] font-bold text-[#f5f5f7] tracking-[-0.025em]"
          >
            Featured work.
          </motion.h2>
        </div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#161617] p-7 cursor-default overflow-hidden"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at top left, ${project.accent}${project.glowAlpha || "08"}, transparent 60%)`,
                }}
              />

              {/* Number */}
              <div className="text-[11px] font-semibold text-[#86868b]/40 tracking-[0.1em] mb-5">
                {project.number}
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-[#f5f5f7] tracking-tight leading-tight mb-1">
                {project.title}
              </h3>
              <p
                className="text-[12px] font-medium uppercase tracking-[0.1em] mb-5"
                style={{ color: project.accent }}
              >
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-[14px] text-[#86868b] leading-[1.65] mb-6">
                {project.description}
              </p>

              {/* Highlight */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] mb-6">
                <p className="text-[12px] text-[#a1a1a6] leading-snug">
                  ✦ {project.highlight}
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-[11px] text-[#86868b] border border-white/[0.08] bg-white/[0.03]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View live */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-1.5 mt-6 text-[13px] font-medium text-[#0071e3] transition-colors hover:text-[#3898ff]"
                >
                  View live
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
