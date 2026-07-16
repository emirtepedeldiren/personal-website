"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type Skill = {
  name: string;
  src: string;
  alt: string;
  size?: number;
  style?: CSSProperties;
};

function SkillLogo({ skill }: { skill: Skill }) {
  const size = skill.size ?? 17;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={skill.src}
      alt={skill.alt}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      style={{ display: "inline-block", ...skill.style }}
    />
  );
}

const wrenchIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const skillCategories: { category: string; icon: React.ReactNode; skills: Skill[] }[] = [
  {
    category: "Languages & Frameworks",
    icon: "{ }",
    skills: [
      { name: "Python", src: "/python.svg.png", alt: "Python", size: 28 },
      { name: "HTML5", src: "/html.svg.png", alt: "HTML5", size: 28 },
      { name: "CSS3", src: "/css.svg.png", alt: "CSS3", size: 28 },
      { name: "JavaScript", src: "/js.png", alt: "JavaScript", size: 28 },
      { name: "Node.js", src: "/nodejs-icon.svg", alt: "Node.js", size: 28 },
      { name: "React", src: "/React-icon.svg.png", alt: "React", size: 28 },
      { name: "PostgreSQL", src: "/postgres.svg", alt: "PostgreSQL", size: 28 },
    ],
  },
  {
    category: "Tools",
    icon: wrenchIcon,
    skills: [
      { name: "VS Code", src: "/vscode.svg.png", alt: "VS Code", size: 28 },
      { name: "WebStorm", src: "/web-storm.png", alt: "WebStorm", size: 28, style: { maxWidth: "none" }},
      { name: "Cursor", src: "/cursor.png", alt: "Cursor", size: 28 },
      { name: "Git & GitHub", src: "/git.svg.png", alt: "Git", size: 28 },
      { name: "Terminal", src: "/mac-terminal.png", alt: "Terminal", size: 28 },
      { name: "Warp", src: "/warp.png", alt: "Warp", size: 44, style: { maxWidth: "none" } },
      { name: "Claude Code", src: "/claude-ai.svg", alt: "Claude", size: 28 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="text-[13px] font-medium text-[#0071e3] uppercase tracking-[0.12em] mb-4"
          >
            Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
            className="text-[clamp(28px,5vw,48px)] font-bold text-[#f5f5f7] tracking-[-0.025em]"
          >
            Built to build.
          </motion.h2>
        </div>

        {/* Skill cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-start"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="rounded-2xl border border-white/[0.08] bg-[#161617] p-7 cursor-default"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#0071e3]/10 border border-[#0071e3]/20 flex items-center justify-center text-[#0071e3] text-[14px] font-bold">
                  {cat.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-[#f5f5f7] tracking-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] transition-colors duration-300 ease-out hover:bg-white/[0.09] hover:border-white/[0.12]"
                  >
                    <span className="flex items-center justify-center w-[34px] h-[34px] shrink-0 overflow-hidden rounded-[9px]">
                      <SkillLogo skill={skill} />
                    </span>
                    <span className="text-[14px] text-[#e8e8ed]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
