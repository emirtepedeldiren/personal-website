"use client";

import { motion } from "framer-motion";
import { SiPython, SiHtml5, SiCss, SiJavascript, SiGit } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaTerminal } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import type { CSSProperties } from "react";

type SkillIcon = React.ComponentType<{ className?: string; style?: CSSProperties }>;

function CSharpIcon({ style }: { className?: string; style?: CSSProperties }) {
  const size = (style?.fontSize as number) ?? 17;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/csharp-logo.svg"
      alt="C#"
      width={size}
      height={size}
      style={{ display: "inline-block" }}
    />
  );
}

type Skill = {
  name: string;
  icon: SkillIcon;
  color: string;
  size?: number;
};

const skillCategories: { category: string; icon: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    icon: "{ }",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C#", icon: CSharpIcon, color: "#9B4F96", size: 28 },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Tools",
    icon: "◈",
    skills: [
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Git & GitHub", icon: SiGit, color: "#F05032" },
      { name: "Terminal", icon: FaTerminal, color: "#86868b" },
      { name: "Claude Code", icon: BsRobot, color: "#cc785c" },
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
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
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
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07]"
                  >
                    <span className="flex items-center justify-center w-[28px] shrink-0">
                      <skill.icon
                        style={{ color: skill.color, fontSize: skill.size ?? 17 }}
                        className="shrink-0"
                      />
                    </span>
                    <span className="text-[13px] text-[#86868b]">
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
