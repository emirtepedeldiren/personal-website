"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "6+", label: "Months Coding" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[13px] font-medium text-[#0071e3] uppercase tracking-[0.12em] mb-4"
            >
              About
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[clamp(32px,5vw,52px)] italic text-[#f5f5f7] tracking-[-0.025em] leading-[1.1] mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              &ldquo;Nothing is gained without loss.&rdquo;
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[17px] text-[#a1a1a6] leading-[1.7] mb-5"
            >
              I'm Emir. I'm a software developer who loves turning ideas into code. 
              While my academic background gives me a strong foundation in problem-solving, my true drive lies in improve myself. 
              Driven by the mindset of 'code, create, and repeat,' 
              I'm constantly exploring new technologies, refining my skills, and looking for the next chance to build something great.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[17px] text-[#a1a1a6] leading-[1.7]"
            >
              Software should be as rigorous
              as mathematics and as beautiful as design.
            </motion.p>
          </div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-[#0071e3]/[0.06] blur-3xl" />

            <div className="relative rounded-3xl border border-white/[0.08] bg-[#161617] p-8 lg:p-10">
              

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-[32px] font-bold text-[#f5f5f7] tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[12px] text-[#86868b] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Focus areas */}
              <div className="mt-8 pt-8 border-t border-white/[0.06]">
                <p className="text-[12px] text-[#86868b] uppercase tracking-[0.1em] mb-3">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Mobile Apps",
                    "Web Development",
                    "Machine Learning",
                    "Algorithms",
                    
                    "Data Structures",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-full text-[12px] text-[#86868b] border border-white/[0.08] bg-white/[0.03]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
