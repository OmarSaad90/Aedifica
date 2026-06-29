import { PageIntro } from "@/components/sections";
import { Container, TrustNote } from "@/components/primitives";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Aedifica collects and uses information submitted through partnership inquiry forms. A plain-language, launch-stage policy.",
  path: "/privacy",
});

const sections = [
  { h: "Information we collect", p: "We collect only the information you provide through our partnership inquiry form — such as your name, organization, role, email, optional phone number, audience type, interest area, timeline, and message. We do not collect sensitive learner records through this site." },
  { h: "How we use inquiries", p: "We use the information you submit to review your inquiry and respond about an appropriate next conversation. We do not sell personal information, and we do not use form submissions for advertising." },
  { h: "Data minimization", p: "We ask for the minimum information needed to route and respond to an inquiry. Please do not submit Social Security numbers, immigration data, medical or disability information, justice-involvement details about identifiable individuals, resumes, or confidential funding documents." },
  { h: "Sharing", p: "We do not sell your personal information. We may share your inquiry internally with the Aedifica team member best suited to respond." },
  { h: "Contact", p: "Questions about this policy can be directed to the contact listed on our Partner With Us page. [Contact placeholder — confirm before launch.]" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Privacy" title="Privacy Policy" copy="A plain-language summary of how Aedifica handles information submitted through this website." />
      <section className="py-14 lg:py-16">
        <Container>
          <div className="max-w-text space-y-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-[1.25rem] font-bold text-ink">{s.h}</h2>
                <p className="mt-2 text-[1rem] leading-relaxed text-slate">{s.p}</p>
              </div>
            ))}
            <TrustNote>This is a non-legal draft suitable for a launch-stage website and requires review by counsel before publication. Last updated: [date placeholder].</TrustNote>
          </div>
        </Container>
      </section>
    </>
  );
}
