import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { fdaDisclaimer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "AirKind supplement disclaimer and responsible-use information."
};

export default function DisclaimerPage() {
  return (
    <Section
      eyebrow="Disclaimer"
      title="Important supplement information."
      copy="AirKind is presented as a premium wellness supplement brand concept. All language should be reviewed by qualified regulatory, legal, and scientific advisors before commercial use."
    >
      <div className="max-w-3xl space-y-5 rounded-[8px] border border-air-green/10 bg-white/80 p-6 text-sm leading-7 text-air-charcoal/72">
        <p>{fdaDisclaimer}</p>
        <p>
          AirKind products are intended to support normal structure and function
          of the body as part of a healthy lifestyle. They are not a substitute
          for a varied diet, medical care, or professional guidance.
        </p>
        <p>
          Consult a qualified healthcare professional before using supplements
          if you are pregnant, nursing, taking medication, managing a health
          condition, or planning use for a child.
        </p>
      </div>
    </Section>
  );
}
