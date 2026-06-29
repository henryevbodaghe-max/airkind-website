import { Check, Droplets, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";

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

        <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-air-mist via-air-white to-air-cream p-8 sm:p-10">
          <div className="absolute right-8 top-8 rounded-full border border-air-green/15 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-air-green">
            Zero Sugar
          </div>
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-air-blue/30 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-air-moss/25 blur-3xl" />

          <div className="relative mx-auto flex h-full max-w-lg items-center justify-center">
            <div className="grid w-full grid-cols-[1fr_0.54fr] items-end gap-5">
              <div className="rounded-[8px] border border-air-green/12 bg-white/88 p-5 shadow-soft">
                <div className="rounded-[8px] bg-air-green p-4 text-white">
                  <Droplets className="h-8 w-8 text-air-gold" aria-hidden="true" />
                  <p className="mt-16 text-xs font-bold uppercase tracking-[0.22em] text-air-gold">
                    Daily Electrolyte Drink Mix
                  </p>
                  <p className="mt-3 font-serif text-4xl font-semibold leading-none">
                    AirKind
                  </p>
                  <p className="mt-2 text-2xl font-semibold uppercase tracking-[0.12em] text-air-mist">
                    Hydration+
                  </p>
                </div>
                <div className="mt-4 rounded-[8px] bg-air-mist px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-air-green">
                  Clean Hydration. Everyday Wellness.
                </div>
              </div>

              <div className="space-y-3">
                {["Lemon Citrus", "Berry Lime", "Cucumber Mint"].map((flavor, index) => (
                  <div
                    key={flavor}
                    className="min-h-28 rounded-[8px] border border-air-green/10 bg-white/86 px-3 py-4 text-center shadow-sm"
                  >
                    <Droplets
                      className={`mx-auto h-5 w-5 ${
                        index === 1 ? "text-rose-500" : index === 2 ? "text-air-moss" : "text-air-gold"
                      }`}
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-air-green">
                      Hydration+
                    </p>
                    <p className="mt-2 text-xs font-semibold text-air-charcoal/70">
                      {flavor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
