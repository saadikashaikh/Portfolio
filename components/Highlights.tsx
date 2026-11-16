import { highlights, skills } from "@/data/portfolio";
import Heading from "./Heading";
import Rich from "./Rich";

const squares = ["bg-lime", "bg-lilac", "bg-coral", "bg-sky", "bg-sun"];
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Heading index="01" label="Strengths" title="What I" accent="bring" color="lilac" />
      <div className="grid gap-5 lg:grid-cols-5">
        <div className="space-y-5 rounded-3xl border-2 border-ink bg-white p-7 shadow-hard-lg lg:col-span-3">
          {highlights.map((h, i) => (
            <div key={h} className="flex items-center gap-4">
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-ink font-mono text-sm font-bold ${squares[i % squares.length]}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base font-medium">
                <Rich text={h} />
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border-2 border-ink bg-lilac p-7 shadow-hard-lg lg:col-span-2">
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-widest">Toolbox</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={s}
                className={`rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold shadow-[2px_2px_0_0_#111] ${tilts[i % tilts.length]}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
