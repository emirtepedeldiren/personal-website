"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex justify-center">
        <p className="text-[13px] text-[#86868b]/50">
          © {year} Emir Tepedeldiren. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
