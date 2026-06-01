"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0071e3]/[0.06] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0071e3]/[0.03] blur-[100px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center -mt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
          <span className="text-[13px] text-[#86868b] tracking-wide">
            Junior Developer & Computer Science Student
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="text-[clamp(64px,13vw,128px)] font-bold text-[#f5f5f7] tracking-[-0.03em] leading-[1.05] mb-4"
        >
          <span className="text-gradient-blue">Emir</span>
          <br />
          <span className="text-gradient-blue">Tepedeldiren</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          className="text-[clamp(18px,3vw,28px)] text-[#86868b] font-medium mb-4 tracking-tight"
        >
          Mathematics and Computer Science Student
          <br className="hidden sm:block" />
          <span className="sm:ml-2"> &amp; Software Developer</span>
        </motion.p>

        {/* Philosophy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="text-[clamp(32px,5vw,52px)] italic text-[#86868b]/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          &ldquo;Code, create and repeat.&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={() => handleScrollTo("#projects")}
            className="px-7 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
          </button>
          <button
            onClick={() => handleScrollTo("#contact")}
            className="px-7 py-3 rounded-full border border-white/[0.15] bg-white/[0.04] hover:bg-white/[0.08] text-[#f5f5f7] text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-[#86868b]/50 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#86868b]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
