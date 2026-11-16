import { profile } from "@/data/portfolio";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="px-4 pt-5">
      <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border-2 border-ink bg-white px-3 py-2 shadow-hard">
        <a href="#top" className="flex items-center gap-2 pl-1 font-black">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm text-lime">
            {profile.name[0]}
          </span>
          {profile.fullName}
        </a>
        <div className="flex items-center gap-1 text-sm font-semibold">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-full px-3 py-1.5 transition hover:bg-ink/5 sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border-2 border-ink bg-lime px-4 py-1.5 font-bold transition hover:bg-lime/70"
          >
            Let's Connect!
          </a>
        </div>
      </nav>
    </header>
  );
}
