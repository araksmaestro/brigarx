"use client";

import { useState } from "react";

// OPEN ITEM — these answers were written for the design and are not
// client-confirmed. Several make operational claims; the practice must review
// them before launch.
const ITEMS = [
  {
    question: "Do I need a referral?",
    answer:
      "No. Family members, guardians, case managers and support coordinators can reach out directly.",
  },
  {
    question: "Can a caregiver attend the visit?",
    answer:
      "Yes, and we encourage it. For patients who cannot describe their own symptoms, the people who see them every day are the most important source of history.",
  },
  {
    question: "What if the patient will not sit in front of a camera?",
    answer:
      "That is common and it is workable. Visits can happen with the patient present for part of the time, or with the camera positioned so they are comfortable while caregivers report.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "Visits are paid by credit card at the time of the visit. For people with private insurance, a superbill can be provided for submission to your health insurer.",
  },
  {
    question: "Will you take over an existing medication list?",
    answer:
      "Yes. Bring the current regimen and any recent labs to the intake visit. We review everything before making changes, and changes are made one at a time.",
  },
  {
    question: "Do you provide therapy or behavior plans?",
    answer:
      "We prescribe and manage medication, and we coordinate with the behavior support professionals and counselors already working with the patient.",
  },
];

/** Section 11 — FAQ. Single-open accordion; the first row is open on load. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-base px-[20px] py-[56px] lg:px-[32px] lg:py-[104px]"
    >
      <div className="container-page">
        <div className="mb-[28px] grid grid-cols-1 items-end gap-[28px] lg:mb-[36px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[64px]">
          <h2 className="font-head text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-semibold text-ink text-pretty">
            Questions caregivers ask first
          </h2>
          <p className="max-w-[46ch] text-[17.5px] leading-[1.6] text-body text-pretty">
            If yours is not here, call and ask. Nothing below is a commitment,
            and there is no charge for finding out whether this practice fits.
          </p>
        </div>

        <div>
          {ITEMS.map((item, index) => {
            const isOpen = index === openIndex;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <div
                key={item.question}
                className="border-b border-[rgba(var(--lineRGB),0.14)]"
              >
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-[24px] border-none bg-transparent py-[24px] text-left font-head text-[20px] font-normal text-ink hover:text-accent lg:text-[22px]"
                  >
                    {item.question}
                    <span aria-hidden className="text-[22px] text-label">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="max-w-[66ch] pr-[24px] pb-[28px] text-[17px] leading-[1.65] text-body text-pretty lg:pr-[40px]"
                  >
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
