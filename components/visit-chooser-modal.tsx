"use client";

import { Dialog } from "radix-ui";
import { SCHEDULING_URL, VISIT_TYPES } from "@/components/booking";

/**
 * Section 15 — the visit-type chooser.
 *
 * The handoff lists Escape-close, overlay-click close, a focus trap,
 * role="dialog"/aria-modal and body scroll lock as production requirements the
 * prototype does not meet. Radix's Dialog — the primitive shadcn/ui is built
 * on, already a dependency here — provides all five, so this composes it
 * directly rather than reimplementing them.
 *
 * No enter/exit animation, per the handoff: the design has no transitions
 * beyond hover colour changes.
 */
export function VisitChooserModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-100 bg-[rgba(var(--inkRGB),0.55)]" />
        <Dialog.Content
          aria-modal
          className="scroll-thin fixed top-1/2 left-1/2 z-100 max-h-[calc(100dvh-64px)] w-[calc(100%-64px)] max-w-[720px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[18px] bg-base p-[28px] shadow-[0_30px_70px_rgba(var(--inkRGB),0.28)] outline-none sm:p-[48px] sm:pb-[44px]">
          <Dialog.Close
            aria-label="Close"
            className="absolute top-[20px] right-[22px] cursor-pointer text-[26px] leading-none text-label hover:text-ink"
          >
            ×
          </Dialog.Close>

          <Dialog.Title className="font-head text-[28px] leading-[1.1] font-semibold text-ink text-pretty sm:text-[36px]">
            Which visit do you need?
          </Dialog.Title>

          <Dialog.Description className="mt-[12px] mb-[32px] max-w-[52ch] text-[17px] leading-[1.6] text-body">
            If this is your first appointment with us, choose the intake visit.
          </Dialog.Description>

          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {VISIT_TYPES.map((visit) => (
              <a
                key={visit.id}
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener"
                className="flex flex-col gap-[6px] rounded-[14px] border-t-2 border-accent bg-surface1 px-[26px] pt-[28px] pb-[26px] no-underline hover:bg-surface2"
              >
                <span className="font-head text-[24px] text-ink">
                  {visit.name}
                </span>
                <span className="font-head text-[32px] font-semibold tracking-[-0.02em] text-deep">
                  {visit.price}
                </span>
                <span className="text-[16px] text-muted">
                  {visit.chooserMeta}
                </span>
                <span className="mt-[14px] text-[16px] font-semibold text-link">
                  {visit.action}
                </span>
              </a>
            ))}
          </div>

          <p className="mt-[26px] text-[15px] leading-[1.55] text-muted">
            Either option opens our scheduling system in a new window.
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
