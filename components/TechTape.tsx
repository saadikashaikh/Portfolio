import { skills } from "@/data/portfolio";

function Track({ className }: { className: string }) {
  const items = [...skills, ...skills];
  return (
    <div className={`flex w-max gap-8 whitespace-nowrap font-mono text-lg font-bold uppercase ${className}`}>
      {items.map((s, i) => (
        <span key={i}>{s} ✦</span>
      ))}
    </div>
  );
}

export default function TechTape() {
  return (
    <section aria-label="Tech stack" className="overflow-hidden py-14">
      <div className="relative h-32">
        <div className="absolute inset-x-[-5%] top-6 rotate-2 border-y-2 border-ink bg-ink py-3 text-lime">
          <Track className="animate-marquee" />
        </div>
        <div className="absolute inset-x-[-5%] top-6 -rotate-2 border-y-2 border-ink bg-lime py-3 text-ink">
          <Track className="animate-marquee-rev" />
        </div>
      </div>
    </section>
  );
}
