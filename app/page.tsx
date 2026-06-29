import Image from "next/image";
import { Check, MapPin, PackageCheck, Repeat, Sprout } from "lucide-react";
import { Button } from "@/components/Button";
import { Disclosure } from "@/components/Disclosure";
import { EmailSignup } from "@/components/EmailSignup";
import { HydrationComingSoon } from "@/components/HydrationComingSoon";
import { ProductBottle } from "@/components/ProductBottle";
import { Section } from "@/components/Section";
import { benefits, faqs, ingredientDetails, ingredients, product } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="px-5 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-gold">
              {product.tagline}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.95] text-air-green sm:text-7xl">
              Breathe better into your everyday routine.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-air-charcoal/72">
              {product.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/product">View Quercetin Plus</Button>
              <Button href="/contact" variant="secondary">
                Retail Inquiries
              </Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-medium text-air-green sm:grid-cols-3">
              {["No disease claims", "30 day supply", "Retail-ready label"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-air-gold" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
          <ProductBottle priority />
        </div>
      </section>

      <Section
        eyebrow="Benefits"
        title="Targeted daily support with compliant claims."
        copy="Quercetin Plus is positioned around normal wellness functions and everyday support, with clear language customers can trust."
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
        title="Quercetin, zinc, and bromelain in a focused daily formula."
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
        eyebrow="Supplement Facts"
        title="A label customers can inspect before they buy."
        copy="The product experience now includes the real facts panel, suggested use, cautions, and label artwork."
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="overflow-hidden rounded-[8px] border border-air-green/10 bg-white shadow-soft">
            <Image
              src="/images/optimized/quercetin-plus-supplement-facts-product.webp"
              alt="AirKind Quercetin Plus supplement facts panel"
              width={520}
              height={650}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="grid gap-4">
            {ingredientDetails.slice(0, 3).map((ingredient) => (
              <article
                key={ingredient.name}
                className="rounded-[8px] border border-air-green/10 bg-white/80 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-gold">
                  {ingredient.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-air-green">
                  {ingredient.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
                  {ingredient.description}
                </p>
              </article>
            ))}
          </div>
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
              copy: "Every featured ingredient has a clear role in supporting immune function, healthy histamine response, or digestive enzyme activity."
            },
            {
              icon: PackageCheck,
              title: "Premium experience",
              copy: "Real product photography, label art, usage guidance, and facts panel access build confidence before checkout."
            },
            {
              icon: Repeat,
              title: "Built for consistency",
              copy: "Two capsules once daily, 60 capsules per bottle, and simple availability messaging support repeat use."
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

      <HydrationComingSoon />

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[8px] bg-air-green p-8 text-white shadow-soft sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-gold">
              Retail Availability
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight">
              Quercetin Plus is being prepared for retail launch.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              Join the list for launch updates, online availability, wholesale
              conversations, and future store locator access.
            </p>
          </div>
          <Button href="/contact" variant="secondary">
            <MapPin className="h-4 w-4" />
            Find Retail Updates
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
