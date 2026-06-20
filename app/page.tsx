import { Check, PackageCheck, Repeat, Sprout } from "lucide-react";
import { Button } from "@/components/Button";
import { Disclosure } from "@/components/Disclosure";
import { EmailSignup } from "@/components/EmailSignup";
import { ProductBottle } from "@/components/ProductBottle";
import { Section } from "@/components/Section";
import { benefits, faqs, ingredients } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="px-5 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-gold">
              Premium daily supplement
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.95] text-air-green sm:text-7xl">
              Wellness as essential as the air you breathe.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-air-charcoal/72">
              AirKind pairs collagen peptides, beauty nutrients, and functional
              mushrooms in one elegant daily ritual to support healthy skin,
              focus, immune health, energy, healthy aging, and joint comfort.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/product">Shop Beauty & Longevity</Button>
              <Button href="/science" variant="secondary">
                Explore the Science
              </Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-medium text-air-green sm:grid-cols-3">
              {["Responsible claims", "Premium ingredient stack", "Subscription ready"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-air-gold" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
          <ProductBottle />
        </div>
      </section>

      <Section
        eyebrow="Benefits"
        title="Daily support for the way you want to feel."
        copy="A focused benefit system designed for beauty, longevity, clarity, and whole-body wellness without overstating what supplements can do."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="rounded-[8px] border border-air-green/10 bg-white/76 p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-air-mist text-air-green">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-air-green">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
                  {benefit.copy}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Ingredient Stack"
        title="Collagen, cofactors, and functional mushrooms in one premium complex."
        className="bg-white/48"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient}
              className="rounded-full border border-air-green/12 bg-air-white px-4 py-3 text-sm font-semibold text-air-green"
            >
              {ingredient}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why AirKind"
        title="A modern wellness ritual with a higher standard."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              icon: Sprout,
              title: "Purposeful formulation",
              copy: "Every ingredient has a clear role in supporting beauty, focus, immune health, energy, healthy aging, or joint comfort."
            },
            {
              icon: PackageCheck,
              title: "Premium experience",
              copy: "Clean visual language, simple subscription flow, and trust-building education from first impression to checkout."
            },
            {
              icon: Repeat,
              title: "Built for consistency",
              copy: "A monthly ritual designed to be easy to understand, easy to reorder, and easy to keep using."
            }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-l border-air-gold/40 pl-6">
                <Icon className="h-6 w-6 text-air-gold" />
                <h3 className="mt-4 text-xl font-semibold text-air-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
                  {item.copy}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[8px] bg-air-green p-8 text-white shadow-soft sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-gold">
              Subscribe
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight">
              Keep your AirKind ritual within reach.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              Set up flexible monthly delivery for daily beauty, focus, immune
              health, energy, healthy aging, and joint comfort support.
            </p>
          </div>
          <Button href="/product" variant="secondary">
            Start Subscription
          </Button>
        </div>
      </section>

      <Section
        eyebrow="Stay Close"
        title="Join the AirKind list."
        copy="Get product updates, ingredient notes, and launch access."
        className="bg-air-mist/45"
      >
        <div className="max-w-2xl">
          <EmailSignup />
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Clear answers, clean claims.">
        <div className="max-w-4xl">
          {faqs.slice(0, 4).map((faq) => (
            <Disclosure key={faq.question} {...faq} />
          ))}
        </div>
      </Section>
    </>
  );
}
