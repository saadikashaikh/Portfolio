import { profile, skillGroups } from "@/data/portfolio";
import Heading from "./Heading";

const facts = [
  { k: "Role", v: profile.role },
  { k: "Based in", v: profile.location },
  { k: "Education", v: profile.education },
  { k: "Focus", v: "JavaScript · React.js · Next.js · TypeScript" },
  { k: "Status", v: "Open to Frontend & Engineering roles" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <Heading index="04" label="About" title="Meet the" accent="developer" color="sky" />
      <div className="grid gap-5 lg:grid-cols-5">
        <div className="rounded-3xl border-2 border-ink bg-sky p-7 shadow-hard-lg lg:col-span-2">
          <dl className="space-y-4">
            {facts.map((f) => (
              <div key={f.k} className="border-b-2 border-dashed border-ink/30 pb-4 last:border-0 last:pb-0">
                <dt className="font-mono text-xs font-bold uppercase tracking-widest text-ink/60">{f.k}</dt>
                <dd className="mt-1 font-bold">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-3xl border-2 border-ink bg-white p-7 shadow-hard-lg lg:col-span-3">
          <p className="text-lg font-medium leading-relaxed">{profile.about}</p>
          <div className="mt-8 space-y-5">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-ink/60">
                  {g.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-sm font-semibold"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
