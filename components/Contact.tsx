"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="relative rounded-3xl border border-white/[0.08] bg-[#161617] overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0071e3]/[0.06] blur-[80px]" />
          </div>

          <div className="relative z-10 px-8 md:px-16 py-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="text-[13px] font-medium text-[#0071e3] uppercase tracking-[0.12em] mb-5"
            >
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="text-[clamp(28px,6vw,60px)] font-bold text-[#f5f5f7] tracking-[-0.03em] mb-12 leading-tight"
            >
              Let&apos;s build
              <br />
              something great.
            </motion.h2>

            

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <a
                href="mailto:emir.tepedeldiren@gmail.com"
                className="px-8 py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 min-w-[130px]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/emir-tepedeldiren-b1311a263/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 min-w-[130px]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/emirtepedeldiren"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 min-w-[130px]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </motion.div>

            {/* Email display */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-[13px] text-[#86868b]/50"
            >
              emir.tepedeldiren@gmail.com
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
