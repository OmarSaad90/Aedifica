import { PageIntro } from "@/components/sections";
import { Container, TrustNote } from "@/components/primitives";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Accessibility Statement",
  description: "Aedifica's commitment to an accessible digital experience — semantic structure, keyboard navigation, contrast, and alt text.",
  path: "/accessibility",
});

const points = [
  { h: "Our commitment", p: "Aedifica is committed to providing a digital experience that is accessible to the widest possible audience, regardless of ability or technology." },
  { h: "Semantic structure", p: "The site uses semantic HTML, logical heading order, and descriptive landmarks so assistive technologies can navigate it reliably." },
  { h: "Keyboard navigation", p: "Interactive elements are reachable and operable by keyboard, with visible focus indicators throughout." },
  { h: "Contrast & color", p: "We design for readable color contrast and do not rely on color alone to convey meaning." },
  { h: "Alternative text", p: "Meaningful images include descriptive alternative text; decorative motifs are marked so they are skipped by screen readers." },
  { h: "Ongoing improvement", p: "Accessibility is an ongoing effort. We welcome feedback and will work to address issues that are reported to us." },
  { h: "Contact", p: "To report an accessibility issue, contact us through the Partner With Us page. [Contact placeholder — confirm before launch.]" },
];

export default function AccessibilityPage() {
  return (
    <>
      <PageIntro eyebrow="Accessibility" title="Accessibility Statement" copy="Aedifica is committed to an accessible, inclusive digital experience." />
      <section className="py-14 lg:py-16">
        <Container>
          <div className="max-w-text space-y-8">
            {points.map((s) => (
              <div key={s.h}>
                <h2 className="text-[1.25rem] font-bold text-ink">{s.h}</h2>
                <p className="mt-2 text-[1rem] leading-relaxed text-slate">{s.p}</p>
              </div>
            ))}
            <TrustNote>Contact details on this page are placeholders to be confirmed before launch.</TrustNote>
          </div>
        </Container>
      </section>
    </>
  );
}
