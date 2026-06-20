type DisclosureProps = {
  question: string;
  answer: string;
};

export function Disclosure({ question, answer }: DisclosureProps) {
  return (
    <details className="group border-b border-air-green/15 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-air-green">
        {question}
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-air-green/20 text-air-green transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-air-charcoal/72 sm:text-base">
        {answer}
      </p>
    </details>
  );
}
