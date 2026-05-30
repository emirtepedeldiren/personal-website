"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    icon: "{ }",
    skills: [
      { name: "Python", level: 80 },
      { name: "HTML5", level: 60 },
      { name: "CSS3", level: 50 },
      { name: "JavaScript", level: 30 },
    ],
  },
  {
    category: "Tech Stack",
    icon: "◈",
    skills: [
      { name: "VS Code", level: 99 },
      { name: "Git & GitHub", level: 95 },
      { name: "Terminal", level: 90 },
      { name: "Claude Code", level: 75 },
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
            Tools of the trade.
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
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[13px] text-[#86868b]">
                        {skill.name}
                      </span>
                      <span className="text-[12px] text-[#86868b]/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: 0.15 + i * 0.08,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[#0071e3] to-[#40a9ff]"
                      />
                    </div>
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
