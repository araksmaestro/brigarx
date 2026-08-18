// Shared booking constants.
//
// OPEN ITEM — the third-party scheduling URL has not been supplied by the
// client. Every booking CTA on the page resolves to this one constant, so
// wiring the real scheduler is a single-line change.
export const SCHEDULING_URL = "#";

export type VisitType = {
  id: string;
  name: string;
  price: string;
  /** Meta line on the pricing card. */
  meta: string;
  /** Meta line in the visit-type chooser, which names the audience. */
  chooserMeta: string;
  /** Action line in the chooser. */
  action: string;
};

// Prices, durations and labels are the client's own numbers. Do not paraphrase.
export const VISIT_TYPES: VisitType[] = [
  {
    id: "intake",
    name: "Initial Intake Visit",
    price: "$198.90",
    meta: "1 Hour",
    chooserMeta: "1 Hour · New patients",
    action: "Book intake →",
  },
  {
    id: "routine",
    name: "Routine Appointment",
    price: "$80.46",
    meta: "20 Minutes · Established patients",
    chooserMeta: "20 Minutes · Established patients",
    action: "Book follow-up →",
  },
];

export const PHONE_DISPLAY = "(802) 328-7369";
export const PHONE_HREF = "tel:+18023287369";
export const EMAIL = "info@brigarx.com";
