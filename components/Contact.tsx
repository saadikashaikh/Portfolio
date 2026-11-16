import type { CSSProperties } from "react";
import { profile } from "@/data/portfolio";

const btn =
  "rounded-full border-2 border-ink px-7 py-3 text-sm font-bold shadow-hard transition hover:-translate-y-0.5";

export default function Contact() {
  return (
    <>
      <section id="contact" className="px-4 pb-14 pt-10">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border-2 border-ink bg-lime p-8 shadow-hard-lg sm:p-16">
          <p className="font-mono text-xs font-bold uppercase tracking-widest">[ 05 — Contact ]</p>
          <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-8xl">
            Let&apos;s build
            <br />
            something{" "}
            <span className="marker" style={{ "--mk": "white" } as CSSProperties}>
              great
            </span>
            .
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium">
            I&apos;m open to frontend roles. Send me a message and I&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={`${btn} bg-ink text-white`}>
              Email me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`${btn} bg-white`}>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={`${btn} bg-white`}>
              GitHub
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className={`${btn} bg-white`}>
              Resume ↓
            </a>
          </div>
        </div>
      </section>
      <footer className="pb-8 text-center font-mono text-xs text-ink/50">
        © 2026 {profile.name} · Built with Next.js &amp; Tailwind CSS
      </footer>
    </>
  );
}
