"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AVAILABLE_IMAGES,
  type Project,
  type Skill,
  type SiteContent,
} from "@/lib/content";
import {
  AddButton,
  NumberField,
  RemoveButton,
  StringListField,
  TextAreaField,
  TextField,
  Toggle,
} from "@/components/admin/fields";

type Tab = "hero" | "about" | "skills" | "projects" | "contact";

const TABS: { id: Tab; label: string }[] = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function AdminPage() {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent | null>(null);
  const [tab, setTab] = useState<Tab>("hero");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then(setContent)
      .catch(() => setStatus("error"));
  }, []);

  async function handleSave() {
    if (!content) return;
    setStatus("saving");
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      setStatus(res.ok ? "saved" : "error");
      if (res.ok) setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  if (!content) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-[#86868b]">
        Loading…
      </main>
    );
  }

  // Immutable section updater.
  const update = <K extends keyof SiteContent>(
    key: K,
    value: SiteContent[K]
  ) => setContent({ ...content, [key]: value });

  return (
    <main className="min-h-screen bg-black text-[#f5f5f7]">
      {/* Top bar */}
      <header className="sticky top-0 z-20 glass border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-[18px] font-bold tracking-tight">
              Site Manager
            </h1>
            <p className="text-[12px] text-[#86868b]">
              Edit everything on emirtepedeldiren.com
            </p>
          </div>
          <div className="flex items-center gap-3">
            {status === "saved" && (
              <span className="text-[13px] text-[#30d158]">Saved ✓</span>
            )}
            {status === "error" && (
              <span className="text-[13px] text-[#ff453a]">Error</span>
            )}
            <a
              href="/"
              target="_blank"
              className="text-[13px] text-[#86868b] hover:text-[#f5f5f7] transition-colors"
            >
              View site ↗
            </a>
            <button
              onClick={handleSave}
              disabled={status === "saving"}
              className="px-5 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-50 text-white text-[14px] font-medium transition-colors"
            >
              {status === "saving" ? "Saving…" : "Save"}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-[14px] transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto px-6 flex gap-1 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2.5 text-[14px] font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id
                  ? "border-[#0071e3] text-[#f5f5f7]"
                  : "border-transparent text-[#86868b] hover:text-[#f5f5f7]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-5">
        {tab === "hero" && (
          <Section title="Hero">
            <TextField
              label="Badge"
              value={content.hero.badge}
              onChange={(v) => update("hero", { ...content.hero, badge: v })}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <TextField
                label="Name line 1"
                value={content.hero.nameLine1}
                onChange={(v) =>
                  update("hero", { ...content.hero, nameLine1: v })
                }
              />
              <TextField
                label="Name line 2"
                value={content.hero.nameLine2}
                onChange={(v) =>
                  update("hero", { ...content.hero, nameLine2: v })
                }
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <TextField
                label="Title line 1"
                value={content.hero.titleLine1}
                onChange={(v) =>
                  update("hero", { ...content.hero, titleLine1: v })
                }
              />
              <TextField
                label="Title line 2"
                value={content.hero.titleLine2}
                onChange={(v) =>
                  update("hero", { ...content.hero, titleLine2: v })
                }
              />
            </div>
            <TextField
              label="Quote"
              value={content.hero.quote}
              onChange={(v) => update("hero", { ...content.hero, quote: v })}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <TextField
                label="Primary button"
                value={content.hero.ctaPrimary}
                onChange={(v) =>
                  update("hero", { ...content.hero, ctaPrimary: v })
                }
              />
              <TextField
                label="Secondary button"
                value={content.hero.ctaSecondary}
                onChange={(v) =>
                  update("hero", { ...content.hero, ctaSecondary: v })
                }
              />
            </div>
          </Section>
        )}

        {tab === "about" && (
          <Section title="About">
            <TextAreaField
              label="Paragraph 1"
              rows={5}
              value={content.about.paragraph1}
              onChange={(v) =>
                update("about", { ...content.about, paragraph1: v })
              }
            />
            <TextAreaField
              label="Paragraph 2"
              rows={3}
              value={content.about.paragraph2}
              onChange={(v) =>
                update("about", { ...content.about, paragraph2: v })
              }
            />
            <StringListField
              label="Focus areas"
              items={content.about.focusAreas}
              placeholder="e.g. Web Development"
              onChange={(items) =>
                update("about", { ...content.about, focusAreas: items })
              }
            />
          </Section>
        )}

        {tab === "skills" && (
          <SkillsEditor
            skills={content.skills}
            onChange={(skills) => update("skills", skills)}
          />
        )}

        {tab === "projects" && (
          <ProjectsEditor
            projects={content.projects}
            onChange={(projects) => update("projects", projects)}
          />
        )}

        {tab === "contact" && (
          <Section title="Contact">
            <TextField
              label="Email"
              value={content.contact.email}
              onChange={(v) =>
                update("contact", { ...content.contact, email: v })
              }
            />
            <TextField
              label="LinkedIn URL"
              value={content.contact.linkedin}
              onChange={(v) =>
                update("contact", { ...content.contact, linkedin: v })
              }
            />
            <TextField
              label="GitHub URL"
              value={content.contact.github}
              onChange={(v) =>
                update("contact", { ...content.contact, github: v })
              }
            />
          </Section>
        )}
      </div>
    </main>
  );
}

function Section({
  title,
  headerRight,
  children,
}: {
  title: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/[0.08] bg-[#161617] p-6 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[15px] font-semibold tracking-tight">{title}</h2>
        {headerRight}
      </div>
      {children}
    </section>
  );
}

// ---- Skills editor ----------------------------------------------------------

function SkillsEditor({
  skills,
  onChange,
}: {
  skills: SiteContent["skills"];
  onChange: (skills: SiteContent["skills"]) => void;
}) {
  const setCategory = (i: number, next: SiteContent["skills"]["categories"][number]) => {
    const categories = [...skills.categories];
    categories[i] = next;
    onChange({ categories });
  };

  return (
    <>
      <datalist id="skill-images">
        {AVAILABLE_IMAGES.map((src) => (
          <option key={src} value={src} />
        ))}
      </datalist>
      {skills.categories.map((cat, ci) => (
        <Section key={ci} title={`Category: ${cat.title || "Untitled"}`}>
          <div className="grid sm:grid-cols-2 gap-4">
            <TextField
              label="Category title"
              value={cat.title}
              onChange={(v) => setCategory(ci, { ...cat, title: v })}
            />
            <label className="block">
              <span className="block text-[12px] text-[#86868b] uppercase tracking-[0.08em] mb-1.5">
                Icon
              </span>
              <select
                value={cat.icon}
                onChange={(e) =>
                  setCategory(ci, {
                    ...cat,
                    icon: e.target.value as "braces" | "wrench",
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#f5f5f7] text-[14px] outline-none focus:border-[#0071e3]"
              >
                <option value="braces">Braces {"{ }"}</option>
                <option value="wrench">Wrench</option>
              </select>
            </label>
          </div>

          <div className="space-y-3">
            {cat.skills.map((skill, si) => (
              <SkillRow
                key={si}
                skill={skill}
                onChange={(next) => {
                  const s = [...cat.skills];
                  s[si] = next;
                  setCategory(ci, { ...cat, skills: s });
                }}
                onRemove={() =>
                  setCategory(ci, {
                    ...cat,
                    skills: cat.skills.filter((_, j) => j !== si),
                  })
                }
              />
            ))}
          </div>

          <AddButton
            onClick={() =>
              setCategory(ci, {
                ...cat,
                skills: [
                  ...cat.skills,
                  { name: "", src: AVAILABLE_IMAGES[0], size: 28 },
                ],
              })
            }
          >
            + Add skill
          </AddButton>
        </Section>
      ))}
    </>
  );
}

function SkillRow({
  skill,
  onChange,
  onRemove,
}: {
  skill: Skill;
  onChange: (s: Skill) => void;
  onRemove: () => void;
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-11 h-11 shrink-0 overflow-hidden rounded-lg bg-white/[0.04] border border-white/[0.07]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={skill.src}
            alt=""
            width={skill.size}
            height={skill.size}
            style={{ maxWidth: skill.wide ? "none" : "100%" }}
          />
        </span>
        <div className="flex-1 space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <TextField
              label="Name"
              value={skill.name}
              onChange={(v) => onChange({ ...skill, name: v })}
            />
            <label className="block">
              <span className="block text-[12px] text-[#86868b] uppercase tracking-[0.08em] mb-1.5">
                Image
              </span>
              <input
                list="skill-images"
                value={skill.src}
                onChange={(e) => onChange({ ...skill, src: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#f5f5f7] text-[14px] outline-none focus:border-[#0071e3]"
              />
            </label>
          </div>
          <div className="flex items-end gap-6">
            <div className="w-28">
              <NumberField
                label="Size (px)"
                value={skill.size}
                onChange={(v) => onChange({ ...skill, size: v })}
              />
            </div>
            <div className="pb-2.5">
              <Toggle
                label="Wide (overflow)"
                checked={!!skill.wide}
                onChange={(v) => onChange({ ...skill, wide: v })}
              />
            </div>
          </div>
        </div>
        <RemoveButton onClick={onRemove} />
      </div>
    </div>
  );
}

function MoveButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "up" | "down";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "up" ? "Move up" : "Move down"}
      className="w-8 h-8 rounded-lg border border-white/[0.1] bg-white/[0.03] text-[#86868b] hover:text-[#f5f5f7] hover:border-white/[0.2] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center text-[14px] leading-none"
    >
      {dir === "up" ? "↑" : "↓"}
    </button>
  );
}

// ---- Projects editor --------------------------------------------------------

function ProjectsEditor({
  projects,
  onChange,
}: {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}) {
  // Persist the list with numbers auto-synced to position (01, 02, 03…).
  const commit = (next: Project[]) => {
    onChange(
      next.map((p, i) => ({ ...p, number: String(i + 1).padStart(2, "0") }))
    );
  };

  const setProject = (i: number, next: Project) => {
    const p = [...projects];
    p[i] = next;
    commit(p);
  };

  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= projects.length) return;
    const p = [...projects];
    [p[i], p[j]] = [p[j], p[i]];
    commit(p);
  };

  const addProject = () => {
    const nextId = projects.reduce((m, p) => Math.max(m, p.id), 0) + 1;
    commit([
      ...projects,
      {
        id: nextId,
        number: "",
        title: "",
        subtitle: "",
        description: "",
        techStack: [],
        accent: "#0071e3",
        glowAlpha: "15",
        highlight: "",
      },
    ]);
  };

  return (
    <>
      {projects.map((project, i) => (
        <Section
          key={project.id}
          title={`Project ${i + 1}`}
          headerRight={
            <div className="flex items-center gap-1.5">
              <MoveButton
                dir="up"
                disabled={i === 0}
                onClick={() => move(i, -1)}
              />
              <MoveButton
                dir="down"
                disabled={i === projects.length - 1}
                onClick={() => move(i, 1)}
              />
            </div>
          }
        >
          <TextField
            label="Title"
            value={project.title}
            onChange={(v) => setProject(i, { ...project, title: v })}
          />
          <TextField
            label="Subtitle"
            value={project.subtitle}
            onChange={(v) => setProject(i, { ...project, subtitle: v })}
          />
          <TextAreaField
            label="Description"
            rows={4}
            value={project.description}
            onChange={(v) => setProject(i, { ...project, description: v })}
          />
          <TextAreaField
            label="Highlight"
            rows={2}
            value={project.highlight}
            onChange={(v) => setProject(i, { ...project, highlight: v })}
          />
          <StringListField
            label="Tech stack"
            items={project.techStack}
            placeholder="e.g. TypeScript"
            onChange={(items) => setProject(i, { ...project, techStack: items })}
          />
          <TextField
            label="Live URL (optional)"
            value={project.liveUrl ?? ""}
            placeholder="https://…"
            onChange={(v) =>
              setProject(i, { ...project, liveUrl: v || undefined })
            }
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-[12px] text-[#86868b] uppercase tracking-[0.08em] mb-1.5">
                Accent color
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={project.accent}
                  onChange={(e) =>
                    setProject(i, { ...project, accent: e.target.value })
                  }
                  className="w-11 h-11 rounded-lg bg-transparent border border-white/[0.1] cursor-pointer"
                />
                <input
                  type="text"
                  value={project.accent}
                  onChange={(e) =>
                    setProject(i, { ...project, accent: e.target.value })
                  }
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#f5f5f7] text-[14px] outline-none focus:border-[#0071e3]"
                />
              </div>
            </label>
            <TextField
              label="Glow alpha (hex, e.g. 15)"
              value={project.glowAlpha}
              onChange={(v) => setProject(i, { ...project, glowAlpha: v })}
            />
          </div>

          <div className="pt-1">
            <RemoveButton
              onClick={() => commit(projects.filter((_, j) => j !== i))}
            />
          </div>
        </Section>
      ))}
      <AddButton onClick={addProject}>+ Add project</AddButton>
    </>
  );
}
