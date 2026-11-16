import { experience } from "@/data/portfolio";
import Heading from "./Heading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-16">
      <Heading index="03" label="Experience" title="Where I've" accent="worked" color="sun" />
      <ol className="relative space-y-8 border-l-4 border-ink pl-8 sm:pl-12">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span
              className={`absolute -left-[44px] top-7 h-5 w-5 rounded-md border-2 border-ink sm:-left-[60px] ${e.color}`}
            />
            <div className="rounded-3xl border-2 border-ink bg-white p-6 shadow-hard transition hover:-translate-y-1 sm:p-8">
              <span className="inline-block -rotate-1 rounded-md border-2 border-ink bg-sun px-2 py-0.5 font-mono text-xs font-bold">
                {e.period}
              </span>
              <h3 className="mt-3 text-2xl font-black tracking-tight">{e.role}</h3>
              <p className="font-mono text-sm text-ink/60">@ {e.company}</p>
              <ul className="mt-4 space-y-2.5 text-sm font-medium sm:text-base">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span>▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
