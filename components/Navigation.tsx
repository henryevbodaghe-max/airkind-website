"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-air-green/10 bg-air-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="AirKind home">
          <Image
            src="/images/airkind-logo-lockup.png"
            alt="AirKind"
            width={178}
            height={76}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-air-charcoal/75 transition hover:text-air-green"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/product"
          className="hidden min-h-11 items-center justify-center rounded-full bg-air-green px-5 text-sm font-semibold text-white transition hover:bg-air-charcoal lg:inline-flex"
        >
          Join Launch List
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-air-green/15 text-air-green lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-air-green/10 bg-air-white px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-3 text-sm font-semibold text-air-green hover:bg-air-cream/60"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
