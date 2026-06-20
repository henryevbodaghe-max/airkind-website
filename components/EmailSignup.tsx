import { Mail } from "lucide-react";

export function EmailSignup() {
  return (
    <form className="grid gap-3 rounded-[8px] border border-air-green/10 bg-white/80 p-3 shadow-soft sm:grid-cols-[1fr_auto]">
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <div className="flex min-h-12 items-center gap-3 rounded-full bg-air-white px-4">
        <Mail className="h-4 w-4 text-air-gold" aria-hidden="true" />
        <input
          id="email"
          type="email"
          placeholder="Email address"
          className="w-full bg-transparent text-sm text-air-green outline-none placeholder:text-air-charcoal/45"
        />
      </div>
      <button
        type="submit"
        className="min-h-12 rounded-full bg-air-green px-6 text-sm font-semibold text-white transition hover:bg-air-charcoal"
      >
        Join the Ritual
      </button>
    </form>
  );
}
