import Link from "next/link";
import { fdaDisclaimer, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-air-green px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-serif text-3xl font-semibold">
            AirKind
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/72">
            Wellness as essential as the air you breathe. Premium collagen and
            mushroom wellness supplements for daily beauty, focus, immune
            health, energy, and healthy aging support.
          </p>
          <p className="mt-5 max-w-xl text-xs leading-6 text-white/58">
            {fdaDisclaimer}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-air-gold">
            Explore
          </h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/72 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-air-gold">
            Legal
          </h3>
          <div className="mt-4 grid gap-3">
            <Link href="/disclaimer" className="text-sm text-white/72 hover:text-white">
              Disclaimer
            </Link>
            <Link href="/privacy" className="text-sm text-white/72 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/72 hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
