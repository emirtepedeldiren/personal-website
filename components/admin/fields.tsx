"use client";

// Small reusable form controls for the admin panel, styled to match the
// site's dark Apple aesthetic.

export function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] text-[#86868b] uppercase tracking-[0.08em] mb-1.5">
        {label}
      </span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#f5f5f7] text-[14px] outline-none focus:border-[#0071e3] transition-colors"
      />
    </label>
  );
}

export function TextAreaField({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] text-[#86868b] uppercase tracking-[0.08em] mb-1.5">
        {label}
      </span>
      <textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#f5f5f7] text-[14px] leading-relaxed outline-none focus:border-[#0071e3] transition-colors resize-y"
      />
    </label>
  );
}

export function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] text-[#86868b] uppercase tracking-[0.08em] mb-1.5">
        {label}
      </span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#f5f5f7] text-[14px] outline-none focus:border-[#0071e3] transition-colors"
      />
    </label>
  );
}

export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-2.5 text-[13px] text-[#e8e8ed]"
    >
      <span
        className={`relative w-9 h-5 rounded-full transition-colors ${
          checked ? "bg-[#0071e3]" : "bg-white/[0.15]"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : ""
          }`}
        />
      </span>
      {label}
    </button>
  );
}

export function AddButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-[#f5f5f7] text-[13px] font-medium transition-colors"
    >
      {children}
    </button>
  );
}

export function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Remove"
      className="shrink-0 w-8 h-8 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:border-[#ff453a]/50 hover:text-[#ff453a] text-[#86868b] transition-colors flex items-center justify-center text-[16px] leading-none"
    >
      ×
    </button>
  );
}

/** Editable list of plain strings (e.g. focus areas, tech stack). */
export function StringListField({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <span className="block text-[12px] text-[#86868b] uppercase tracking-[0.08em] mb-2">
        {label}
      </span>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={item}
              placeholder={placeholder}
              onChange={(e) => {
                const next = [...items];
                next[i] = e.target.value;
                onChange(next);
              }}
              className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#f5f5f7] text-[14px] outline-none focus:border-[#0071e3] transition-colors"
            />
            <RemoveButton
              onClick={() => onChange(items.filter((_, j) => j !== i))}
            />
          </div>
        ))}
      </div>
      <div className="mt-2">
        <AddButton onClick={() => onChange([...items, ""])}>+ Add</AddButton>
      </div>
    </div>
  );
}
