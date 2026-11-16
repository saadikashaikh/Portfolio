import type { CSSProperties } from "react";

export default function Heading({
  index,
  label,
  title,
  accent,
  color = "lime",
}: {
  index: string;
  label: string;
  title: string;
  accent: string;
  color?: "lime" | "lilac" | "coral" | "sky" | "sun";
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink/60">
        [ {index} — {label} ]
      </p>
      <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
        {title}{" "}
        <span className="marker" style={{ "--mk": `var(--color-${color})` } as CSSProperties}>
          {accent}
        </span>
      </h2>
    </div>
  );
}
