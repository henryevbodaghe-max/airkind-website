import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { HydrationPreview } from "@/components/HydrationPreview";

const highlights = [
  "Zero sugar",
  "Electrolyte support",
  "Clean, refreshing flavors",
  "Designed for daily hydration",
  "Premium stick-pack format"
];

export function HydrationComingSoon() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[8px] border border-air-green/10 bg-white shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-air-green p-8 text-white sm:p-10 lg:p-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-air-gold/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-air-gold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Future Concept
          </p>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Coming Soon: AirKind Hydration+
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/78">
            Clean hydration for everyday wellness. A future AirKind daily
            electrolyte drink mix designed with zero sugar, refreshing flavors,
            and essential minerals to support your daily ritual.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-white/86">
                <Check className="h-4 w-4 text-air-gold" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Join the Launch List
            </Button>
          </div>
        </div>

        <HydrationPreview />
      </div>
    </section>
  );
}
