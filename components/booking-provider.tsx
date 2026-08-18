"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { VisitChooserModal } from "@/components/visit-chooser-modal";

// The visit-type chooser is opened from three places — the header CTA, the
// hero CTA and the contact band — so its open state lives once, at the root,
// rather than being threaded through the sections between them.
const BookingContext = createContext<(() => void) | null>(null);

export function useBooking() {
  const openBooking = useContext(BookingContext);
  if (!openBooking) {
    throw new Error("useBooking must be used inside <BookingProvider>");
  }
  return openBooking;
}

export function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openBooking = useCallback(() => setOpen(true), []);

  return (
    <BookingContext.Provider value={openBooking}>
      {children}
      <VisitChooserModal open={open} onOpenChange={setOpen} />
    </BookingContext.Provider>
  );
}
