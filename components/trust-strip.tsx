const CLAIMS = [
  "Licensed in Oregon, seen virtually",
  "10+ years in cognitive challenges",
  "All rates are Oregon Medicaid rates",
  "Superbill provided for private insurance",
];

/** Section 3 — trust strip. */
export function TrustStrip() {
  return (
    <section className="border-y border-[rgba(var(--lineRGB),0.12)] bg-base px-[20px] py-[22px] lg:px-[32px]">
      <div className="container-page grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
        {CLAIMS.map((claim) => (
          <p key={claim} className="text-[14.5px] text-muted">
            {claim}
          </p>
        ))}
      </div>
    </section>
  );
}
