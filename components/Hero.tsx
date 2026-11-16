/* eslint-disable @next/next/no-img-element */
import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:pt-14">
      <div className="grid gap-4 lg:grid-cols-6">
        {/* Intro */}
        <div className="rounded-3xl border-2 border-ink bg-white p-7 shadow-hard-lg sm:p-10 lg:col-span-4 lg:row-span-2">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-lime px-3 py-1 font-mono text-xs font-bold uppercase">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ink" />
            Open to work
          </span>
          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
            Hi, I&apos;m {profile.name}. I build interfaces that <span className="marker">ship</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">{profile.about}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full border-2 border-ink bg-ink px-7 py-3 font-bold text-white shadow-[4px_4px_0_0_var(--color-lime)] transition hover:-translate-y-0.5"
            >
              See my work →
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-ink bg-white px-7 py-3 font-bold shadow-hard transition hover:-translate-y-0.5"
            >
              Resume ↓
            </a>
          </div>
        </div>

        {/* Photo / initial */}
        <div className="relative min-h-[240px] overflow-hidden rounded-3xl border-2 border-ink bg-lilac shadow-hard lg:col-span-2">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <span className="absolute -bottom-8 -right-2 select-none text-[14rem] font-black leading-none text-ink/90">
              {profile.name[0]}
            </span>
          )}
          <span className="absolute left-4 top-4 -rotate-3 rounded-full border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-bold">
            {profile.location}
          </span>
        </div>

        {/* Code tile */}
        <div className="rounded-3xl border-2 border-ink bg-ink p-6 font-mono text-sm leading-relaxed text-white shadow-hard lg:col-span-2">
          <p className="text-white/40">// about.ts</p>
          <p>
            <span className="text-lilac">const</span> dev = {"{"}
          </p>
          <p className="pl-4">
            role: <span className="text-lime">&quot;{profile.role}&quot;</span>,
          </p>
          <p className="pl-4">
            stack: <span className="text-lime">[&quot;React&quot;, &quot;Next.js&quot;]</span>,
          </p>
          <p className="pl-4">
            openToWork: <span className="text-sun">true</span>,
          </p>
          <p>{"};"}</p>
        </div>

        {/* Stat tiles */}
        {stats.map((s) => (
          <div
            key={s.label}
            className={`rounded-3xl border-2 border-ink p-6 shadow-hard transition hover:-translate-y-1 lg:col-span-2 ${s.color}`}
          >
            <p className="text-4xl font-black tracking-tight">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-ink/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
