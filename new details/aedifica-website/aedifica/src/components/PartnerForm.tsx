"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { audienceLabels } from "@/data/audiences";
import type { Audience } from "@/data/site";

const audienceOptions = [
  "Education institution",
  "School district / CTE leader",
  "Workforce / community organization",
  "Employer / contractor",
  "Funding / state partner",
  "Parent / family",
  "Learner",
  "Other",
];

const interestOptions = [
  "Rebuild",
  "Launch",
  "Pathway",
  "Talent Pipeline",
  "Explore",
  "Building Bridges",
  "Institutional briefing",
  "General partnership",
];

const timelineOptions = [
  "Within 3 months",
  "Within 6 months",
  "Next academic year",
  "Funding deadline",
  "Exploratory",
];

const labelCls = "block text-[0.82rem] font-semibold text-ink";
const fieldCls =
  "mt-1.5 w-full rounded-sm border border-rule bg-paper px-3.5 py-2.5 text-[0.95rem] text-ink outline-none focus:border-accent";

export default function PartnerForm() {
  const params = useSearchParams();
  const audienceParam = params.get("audience") as Audience | null;
  const prefill = audienceParam && audienceLabels[audienceParam] ? audienceLabels[audienceParam] : "";

  const [audience, setAudience] = useState(
    prefill === "Education institution" ? "Education institution"
    : prefill === "School district / CTE leader" ? "School district / CTE leader"
    : prefill === "Workforce / community organization" ? "Workforce / community organization"
    : prefill === "Employer / contractor" ? "Employer / contractor"
    : prefill === "Funding / state partner" ? "Funding / state partner"
    : prefill === "Parent / family" ? "Parent / family"
    : prefill === "Learner" ? "Learner"
    : ""
  );
  const [submitted, setSubmitted] = useState(false);

  // Conditional sections keyed off audience
  const isFunding = audience === "Funding / state partner";
  const isEducation = audience === "Education institution" || audience === "School district / CTE leader";
  const isWorkforce = audience === "Workforce / community organization";
  const isEmployer = audience === "Employer / contractor";
  const isParent = audience === "Parent / family";

  if (submitted) {
    return (
      <div className="rounded-md border border-accent/40 bg-accent-soft p-8">
        <h3 className="text-xl font-bold text-ink">Thank you.</h3>
        <p className="mt-3 text-[1rem] leading-relaxed text-slate">
          Thank you for your interest in building a more accountable construction-management pathway. A member of the
          Aedifica team will review your inquiry and respond regarding an appropriate next conversation.
        </p>
      </div>
    );
  }

  return (
    <form
      name="partner-inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={(e) => {
        // In production on Netlify, remove this handler so the POST submits natively.
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      {/* Netlify form detection + honeypot */}
      <input type="hidden" name="form-name" value="partner-inquiry" />
      <p className="hidden">
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">Name</label>
          <input id="name" name="name" required className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="organization">Organization</label>
          <input id="organization" name="organization" className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="role">Role / title</label>
          <input id="role" name="role" className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone <span className="font-normal text-muted">(optional)</span></label>
          <input id="phone" name="phone" className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="audience">I am a…</label>
          <select id="audience" name="audience" value={audience} onChange={(e) => setAudience(e.target.value)} className={fieldCls}>
            <option value="">Select one</option>
            {audienceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="interest">Interest area</label>
          <select id="interest" name="interest" className={fieldCls}>
            <option value="">Select one</option>
            {interestOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" className={fieldCls}>
            <option value="">Select one</option>
            {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {/* Conditional fields */}
      {isFunding && (
        <div className="grid gap-5 rounded-md border border-rule-soft bg-cream p-5 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="fundingName">Funding opportunity name</label>
            <input id="fundingName" name="funding_opportunity" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="fundingDeadline">Funding deadline</label>
            <input id="fundingDeadline" name="funding_deadline" className={fieldCls} />
          </div>
        </div>
      )}
      {isEducation && (
        <div className="grid gap-5 rounded-md border border-rule-soft bg-cream p-5 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="gradeBands">Grade bands</label>
            <input id="gradeBands" name="grade_bands" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="learnerPop">Learner population</label>
            <input id="learnerPop" name="learner_population" className={fieldCls} />
          </div>
        </div>
      )}
      {isWorkforce && (
        <div className="grid gap-5 rounded-md border border-rule-soft bg-cream p-5 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="targetPop">Target population</label>
            <input id="targetPop" name="target_population" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="recruitCap">Recruitment capacity</label>
            <input id="recruitCap" name="recruitment_capacity" className={fieldCls} />
          </div>
        </div>
      )}
      {isEmployer && (
        <div className="grid gap-5 rounded-md border border-rule-soft bg-cream p-5 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="roles">Roles of interest</label>
            <input id="roles" name="roles_of_interest" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="participation">Participation type</label>
            <input id="participation" name="participation_type" className={fieldCls} />
          </div>
        </div>
      )}
      {isParent && (
        <div className="rounded-md border border-rule-soft bg-cream p-5">
          <label className={labelCls} htmlFor="studentGrade">Student grade / interest</label>
          <input id="studentGrade" name="student_grade" className={fieldCls} />
        </div>
      )}

      <div>
        <label className={labelCls} htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} className={fieldCls} />
      </div>

      <label className="flex items-start gap-3 text-[0.85rem] text-slate">
        <input type="checkbox" name="permission" required className="mt-1" />
        <span>I give permission for Aedifica to contact me about this inquiry.</span>
      </label>

      <p className="text-[0.8rem] leading-relaxed text-muted">
        Your information is reviewed for partnership inquiry purposes. Please do not submit confidential learner records
        or personally sensitive participant information through this form.
      </p>

      <button type="submit" className="btn btn-primary">Send inquiry</button>
    </form>
  );
}
