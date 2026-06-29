import Link from "next/link";
import { services } from "@/data/services";
import { externalResources } from "@/data/externalResources";

export function ServiceComparisonGrid() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] border-collapse text-left">
        <thead>
          <tr className="border-b border-ink">
            {["Offering", "Stage", "Audience", "Problem solved", "Format", ""].map((h) => (
              <th key={h} className="py-3 pr-4 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.slug} className="border-b border-rule-soft align-top">
              <td className="py-5 pr-4">
                <Link href={`/services/${s.slug}`} className="font-bold text-ink hover:text-accent">{s.shortName}</Link>
              </td>
              <td className="py-5 pr-4">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-accent">{s.stage}</span>
              </td>
              <td className="py-5 pr-4 text-[0.85rem] text-slate">{s.audience}</td>
              <td className="py-5 pr-4 text-[0.85rem] text-slate">{s.problem}</td>
              <td className="py-5 pr-4 text-[0.85rem] text-slate">{s.format}</td>
              <td className="py-5">
                <Link href={s.cta.href} className="whitespace-nowrap text-[0.82rem] font-semibold text-accent hover:underline">
                  {s.cta.label} →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExternalResourceLinks({ filter }: { filter?: string }) {
  const items = filter
    ? externalResources.filter((r) => r.placement.toLowerCase().includes(filter.toLowerCase()))
    : externalResources;
  if (items.length === 0) return null;
  return (
    <div className="rounded-md border border-rule-soft bg-cream p-6">
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-accent">Public-sector resources</p>
      <p className="mt-2 text-[0.88rem] text-slate">
        Reference links for partners. Each is a placeholder pending official URL verification before launch.
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((r) => (
          <li key={r.label} className="flex flex-col gap-0.5 border-t border-rule-soft pt-3">
            <span className="text-[0.92rem] font-semibold text-ink">{r.label}</span>
            <span className="text-[0.82rem] text-slate">{r.reason}</span>
            <span className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">Needs URL verification before launch</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
