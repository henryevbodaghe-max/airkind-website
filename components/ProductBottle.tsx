export function ProductBottle() {
  return (
    <div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-end justify-center overflow-hidden rounded-[8px] bg-gradient-to-br from-air-mist via-air-white to-air-cream p-8 shadow-soft">
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-air-gold/30" />
      <div className="absolute bottom-10 right-8 h-32 w-32 rounded-full border border-air-green/15" />
      <div className="relative h-[82%] w-[58%] rounded-t-[32px] rounded-b-[18px] border border-air-green/15 bg-white shadow-[0_24px_60px_rgba(14,61,50,0.18)]">
        <div className="absolute left-1/2 top-[-9%] h-[13%] w-[38%] -translate-x-1/2 rounded-t-[10px] bg-air-gold" />
        <div className="absolute left-1/2 top-[21%] w-[78%] -translate-x-1/2 rounded-[8px] border border-air-green/12 bg-air-white px-4 py-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-gold">
            AirKind
          </p>
          <p className="mt-3 font-serif text-2xl font-semibold leading-none text-air-green">
            Beauty & Longevity
          </p>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-air-charcoal/55">
            Collagen + Mushroom Complex
          </p>
        </div>
      </div>
    </div>
  );
}
