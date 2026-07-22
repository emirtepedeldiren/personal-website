"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/admin");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-black">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0071e3]/[0.06] blur-[120px] pointer-events-none" />
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm rounded-3xl border border-white/[0.08] bg-[#161617] p-8"
      >
        <h1 className="text-[24px] font-bold text-[#f5f5f7] tracking-tight mb-1">
          Admin
        </h1>
        <p className="text-[14px] text-[#86868b] mb-7">
          Enter your password to manage the site.
        </p>

        <label className="block text-[12px] text-[#86868b] uppercase tracking-[0.1em] mb-2">
          Password
        </label>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#f5f5f7] text-[15px] outline-none focus:border-[#0071e3] transition-colors"
          placeholder="••••••••"
        />

        {error && (
          <p className="mt-3 text-[13px] text-[#ff453a]">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="mt-6 w-full px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-40 disabled:cursor-not-allowed text-white text-[15px] font-medium transition-all duration-200"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
