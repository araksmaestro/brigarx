/**
 * Section 13 — crisis notice.
 *
 * A legal and ethical requirement on a psychiatry site. Do not drop it.
 */
export function CrisisNotice() {
  return (
    <section className="border-b border-[rgba(var(--lineRGB),0.14)] bg-surface2 px-[20px] py-[36px] lg:px-[32px] lg:py-[44px]">
      <div className="container-page grid grid-cols-1 items-center gap-[16px] lg:grid-cols-[auto_1fr] lg:gap-[36px]">
        <p className="font-head text-[26px] font-normal whitespace-nowrap text-deep">
          In a crisis
        </p>
        <p className="max-w-[88ch] text-[17px] leading-[1.6] text-deep text-pretty">
          BrigaRx is not an emergency service and does not monitor phone or
          email outside of office hours. If someone is in immediate danger, call{" "}
          <strong>911</strong>. For a mental health crisis, call or text{" "}
          <strong>988</strong>, the Suicide and Crisis Lifeline, available 24
          hours a day.
        </p>
      </div>
    </section>
  );
}
