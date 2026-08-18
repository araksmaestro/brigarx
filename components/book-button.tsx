"use client";

import { useBooking } from "@/components/booking-provider";

/**
 * A CTA that opens the visit-type chooser. The handoff has these as
 * `href="#"` with preventDefault; they are real buttons here, because they
 * open a dialog rather than navigate.
 */
export function BookButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const openBooking = useBooking();

  return (
    <button type="button" onClick={openBooking} className={className}>
      {children}
    </button>
  );
}
