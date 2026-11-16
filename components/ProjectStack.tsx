"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/portfolio";
import Heading from "./Heading";

const BASE_TOP = 96; // px from top where the first card sticks
const OFFSET = 20; // px each following card sits lower, so edges peek out
const TILT = [-1, 0.8, -0.6]; // degrees, gives the stack a hand-placed feel

export default function ProjectStack() {
  const [active, setActive] = useState(0);
  const wrappers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      let current = 0;
      wrappers.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top <= vh * 0.45) current = i;
        // Shrink a card slightly as the next one slides over it
        const next = wrappers.current[i + 1];
        const inner = el.firstElementChild as HTMLElement | null;
        if (!inner) return;
        let scale = 1;
        if (next) {
          const end = BASE_TOP + (i + 1) * OFFSET;
          const p = Math.min(1, Math.max(0, (vh - next.getBoundingClientRect().top) / (vh - end)));
          scale = 1 - 0.04 * p;
        }
        inner.style.transform = `rotate(${TILT[i % TILT.length]}deg) scale(${scale})`;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="work" className="mx-auto max-w-5xl px-4 pb-12 pt-16">
      <Heading index="02" label="Work" title="Projects that" accent="ship" color="lime" />

      <div className="relative">
        <div className="sticky top-4 z-40 mb-6 flex w-fit items-center gap-3 rounded-full border-2 border-ink bg-lime px-4 py-1.5 font-mono text-xs font-bold uppercase shadow-hard">
          <span>
            Project {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <span className="flex gap-1">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full border border-ink transition-all ${i === active ? "w-5 bg-ink" : "w-2 bg-white"}`}
              />
            ))}
          </span>
        </div>

        {projects.map((p, i) => {
          const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <div
              key={p.title}
              ref={(el) => {
                wrappers.current[i] = el;
              }}
              className="sticky mb-10 h-[560px] sm:h-[420px]"
              style={{ top: BASE_TOP + i * OFFSET, zIndex: i + 1 }}
            >
              <article
                className={`h-full origin-top overflow-hidden rounded-3xl border-2 border-ink shadow-hard-lg ${p.color}`}
              >
                {/* window bar */}
                <div className="flex items-center gap-2 border-b-2 border-ink bg-white px-4 py-3">
                  <span className="h-3 w-3 rounded-full border-2 border-ink bg-coral" />
                  <span className="h-3 w-3 rounded-full border-2 border-ink bg-sun" />
                  <span className="h-3 w-3 rounded-full border-2 border-ink bg-lime" />
                  <span className="ml-3 truncate font-mono text-xs text-ink/60">~/projects/{slug}</span>
                </div>

                <div className="grid gap-4 p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
                  <span className="text-6xl font-black leading-none tracking-tighter sm:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight sm:text-3xl">{p.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border-2 border-ink bg-white px-3 py-0.5 font-mono text-xs font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-5 space-y-2.5 text-sm font-medium sm:text-base">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3">
                          <span>▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-bold">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border-2 border-ink bg-ink px-4 py-1.5 text-white"
                        >
                          Live demo ↗
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border-2 border-ink bg-white px-4 py-1.5"
                        >
                          Code ↗
                        </a>
                      )}
                      {p.note && (
                        <span className="rounded-md bg-white/60 px-2 py-1 font-mono text-xs font-semibold">
                          {p.note}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
