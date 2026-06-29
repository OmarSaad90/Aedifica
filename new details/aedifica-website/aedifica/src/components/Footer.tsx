import Link from "next/link";
import { footerGroups } from "@/data/navigation";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule-soft bg-ink text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <p className="font-mono text-base font-semibold uppercase tracking-[0.2em]">Aedifica</p>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-white/70">{site.tagline}</p>
            <p className="mt-1 max-w-xs text-[0.95rem] leading-relaxed text-white/70">{site.mantra}</p>
          </div>
          {footerGroups.map((g) => (
            <div key={g.title}>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-white/50">{g.title}</p>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[0.9rem] text-white/80 hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/12 pt-6 text-[0.8rem] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. {site.serviceArea}.</p>
          <p className="max-w-xl text-white/45">
            Launch-stage institutional website. Programs, credentials, and partnerships are presented as designed or
            planned unless explicitly confirmed. Outcome figures will be published as cohorts are delivered.
          </p>
        </div>
      </div>
    </footer>
  );
}
