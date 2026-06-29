import { Suspense } from "react";
import { PageIntro } from "@/components/sections";
import { Container, SectionEyebrow } from "@/components/primitives";
import PartnerForm from "@/components/PartnerForm";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Partner With Us",
  description:
    "Tell us who you are and what you are trying to build. Aedifica routes inquiries from schools, districts, workforce partners, employers, funders, parents, and learners.",
  path: "/partner",
});

const directContacts = [
  { label: "General inquiries", value: site.contactEmail },
  { label: "Program partnerships", value: "Use the form — routed to partnerships" },
  { label: "Employer partnerships", value: "Use the form — routed to employer team" },
  { label: "Media or funder inquiries", value: "Use the form — routed to leadership" },
];

export default function PartnerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Partner with Aedifica"
        title="Tell us who you are and what you are trying to build."
        copy="Whether you are a learner looking for a next step or an institution ready to build a construction-management pipeline, Aedifica can help define the pathway and deliver it with discipline."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <SectionEyebrow>Inquiry</SectionEyebrow>
              <h2 className="mb-8 text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">
                Start a partnership conversation.
              </h2>
              <Suspense fallback={<p className="text-slate">Loading form…</p>}>
                <PartnerForm />
              </Suspense>
            </div>

            <aside className="space-y-8">
              <div>
                <SectionEyebrow>Direct contacts</SectionEyebrow>
                <ul className="mt-4 divide-y divide-rule-soft border-y border-rule-soft">
                  {directContacts.map((c) => (
                    <li key={c.label} className="py-3.5">
                      <p className="text-[0.82rem] font-semibold text-ink">{c.label}</p>
                      <p className="text-[0.9rem] text-slate">{c.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionEyebrow>Office</SectionEyebrow>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                  {site.legalName}<br />
                  New Jersey<br />
                  Service area: {site.serviceArea}
                </p>
              </div>
              <div className="rounded-md border border-rule-soft bg-cream p-5">
                <p className="text-[0.85rem] leading-relaxed text-slate">
                  Please do not submit confidential learner records, Social Security numbers, immigration data,
                  medical information, or resumes through this form.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
