# Handoff: BrigaRx marketing website

## Overview

A single-page marketing site for BrigaRx, a virtual psychiatry practice serving Oregon. The practice specializes in prescribing care for people with intellectual and developmental delay or dementia who are struggling with challenging behavior. The site's primary audience is family members, guardians and caregivers; its primary conversion action is booking a visit through a third-party scheduling system.

The page replaces an existing two-page site (Home + About). All original copy — tagline, headline, service description, practitioner bio, prices, contact details — is carried over verbatim; the added sections are new.

## About the design files

`BrigaRx Website.dc.html` in this bundle is a **design reference created in HTML**. It is a prototype demonstrating the intended look, copy and behavior. It is not production code to copy directly, and it depends on a runtime (`support.js`) that is specific to the design tool it was authored in.

The task is to **recreate this design in the target codebase's environment** — React, Next.js, Vue, WordPress, Squarespace, or plain static HTML — using that environment's established patterns, component conventions and build setup. If no codebase exists yet, choose the framework that best suits a small marketing site (a static site generator or Next.js is a reasonable default) and implement there.

`theme.css` is the exception: it is plain, portable CSS and can be used as-is (see Design tokens).

## Fidelity

**High fidelity.** Colors, typography, spacing, copy and interaction behavior are final subject to client sign-off. Recreate the UI faithfully. Every value in this document is measured from the prototype.

Two items are explicitly unresolved and marked below: the final palette (five candidates ship behind a demo switcher) and the scheduling URL.

## Palette selection — read first

The prototype contains **five complete palettes** switchable at runtime via a `data-theme` attribute, plus a floating **"Demo palette"** switcher pinned to the bottom center of the viewport.

The switcher is **demo scaffolding for client review. Do not ship it.** Delete the switcher markup and its state; hard-code the chosen `data-theme` value, or drop the unused theme blocks entirely.

| Theme | `data-theme` | Character |
| --- | --- | --- |
| Plum | `plum` | Mauve/aubergine. Closest to the existing brand. Montserrat headings. |
| Teal | `teal` | Deep green-teal. Clinical, credible. Montserrat headings. |
| Sky | `sky` | Bright light blue (#29B6F6). Montserrat headings. **Accessibility caveat below.** |
| Cyan | `cyan` | Bright cyan surfaces, deeper blue for interactive fills. Montserrat headings. |
| Clay | `clay` | Terracotta and cream. Most domestic. **Outfit** headings. |

The prototype's default is `clay`.

**Accessibility caveat on Sky:** white text on `--accent` (#29B6F6) measures ~2.4:1, well below the WCAG AA minimum of 4.5:1 for normal text. This was a deliberate client decision after being flagged. If Sky is chosen, raise it before launch — darkening `--accent` to roughly `#0A70A6` (as the Cyan theme does) reaches ~5:1 while keeping the hue. Every other palette passes AA on all text.

Note also that the logo and hero photograph are palette-specific assets (see Assets).

## Page structure

Sections in document order. All are on one page; the nav scrolls to anchors.

1. Sticky header — logo, 4 anchor links, filled CTA
2. Hero — `#top`
3. Trust strip — 4 short claims
4. Who we help — `#who`
5. What we do — services
6. How it works — `#how` (dark band)
7. Integrated care — care-circle diagram
8. How we prescribe — prescribing philosophy
9. About — `#about`
10. Transparent Pricing — `#pricing`
11. FAQ — `#faq` (accordion)
12. Contact — `#contact` (dark band)
13. Crisis notice
14. Footer
15. Visit-type chooser — modal overlay, hidden until triggered

---

## Screens / views

### Global layout rules

- Content container: `max-width: 1180px; margin: 0 auto`
- Horizontal page gutter: `32px` on every section
- Vertical section padding: `104px` top and bottom for light sections, `100px` for the dark bands, `44px` for the crisis notice and footer
- Body background: `var(--base)`
- Outer wrapper: `max-width:100%; overflow-x:hidden; background: var(--base)`
- **All two-column grids use `grid-template-columns: minmax(0, Xfr) minmax(0, Yfr)`.** The `minmax(0, …)` is required, not decorative — plain `fr` tracks default to `min-width:auto` and let image columns steal the row. This bug bit twice during design.

### 1. Sticky header

- `position: sticky; top: 0; z-index: 50`
- Background `rgba(var(--baseRGB), .88)` with `backdrop-filter: blur(12px)`
- Bottom border `1px solid rgba(var(--lineRGB), .1)`
- Inner: `display:flex; align-items:center; justify-content:space-between; gap:32px; padding:14px 32px`
- Logo: palette-specific PNG, `height:42px; width:auto`, links to `#top`
- Nav: `display:flex; align-items:center; gap:30px`
- Nav links: 15px, `color: var(--deep)`, no underline. Labels: "Who we help" (`#who`), "How it works" (`#how`), "Pricing" (`#pricing`), "About" (`#about`)
- CTA "Enroll a patient": 15px/700, `color: var(--onAccent)` on `background: var(--accent)`, `padding:11px 20px`, `border-radius:10px`. Hover: `background: var(--deep); color: var(--base)`. **Opens the visit-type chooser modal.**

### 2. Hero — `#top`

- Background `var(--surface1)`, padding `96px 32px 88px`
- Grid `minmax(0,1.05fr) minmax(0,.95fr)`, `gap:72px`, `align-items:center`

Left column, in order:

| Element | Style | Copy |
| --- | --- | --- |
| Eyebrow | 13px, `letter-spacing:.22em`, uppercase, `var(--label)`, margin-bottom 26px | Virtual Psychiatry Practice |
| H1 | `var(--head)` 700, `clamp(40px,4.8vw,64px)`, line-height 1.05, `letter-spacing:-.035em`, `var(--ink)` | Better Days Every Day |
| H2 | `var(--head)` 400, `clamp(20px,2.1vw,27px)`, line-height 1.3, `letter-spacing:-.01em`, `var(--subhead)` | Specialized Psychiatry for Cognitive Challenges |
| Body ×2 | 19px, line-height 1.62, `var(--body)`, `max-width:44ch` | (verbatim client copy — see below) |
| CTA row | `display:flex; flex-wrap:wrap; gap:14px` | — |

Hero body copy, verbatim from the client's existing site:

> We provide expert prescribing care tailored for individuals with intellectual and developmental delay or dementia struggling with challenging behavior.

> Our virtual practice ensures accessible, high-quality psychiatric support from the comfort of our patients' homes, focusing on integrated care and long-term stability.

CTAs:
- **"Book an intake visit"** — filled, 16px/700, `var(--onAccent)` on `var(--accent)`, `padding:16px 30px`, radius 10px. Hover `background: var(--deep); color: var(--base)`. Opens the chooser modal.
- **"See how it works"** — outline, 16px/700, `var(--deep)`, `border:1px solid rgba(var(--lineRGB),.28)`, same padding/radius. Hover: `border-color: var(--accent); background: var(--surface1)`. Anchors to `#how`.

Right column — the photograph:
- Wrapper `position:relative; min-width:0`
- Offset accent block behind the image: `position:absolute; inset:22px -22px -22px 22px; background: var(--surface2)`
- Image container `position:relative; height:520px`
- `<img>` fills it: `width:100%; height:100%; object-fit:cover; display:block`
- Alt text: "An older woman and her adult daughter at home, together on a video visit"

### 3. Trust strip

- `border-top` and `border-bottom` `1px solid rgba(var(--lineRGB),.12)`, background `var(--base)`
- Grid `repeat(4, 1fr)`, `gap:24px`, `padding:22px 32px`
- Items: 14.5px, `var(--muted)`

Copy: "Licensed in Oregon, seen virtually" · "10+ years in cognitive challenges" · "All rates are Oregon Medicaid rates" · "Superbill provided for private insurance"

### 4. Who we help — `#who`

- Background `var(--base)`, padding `88px 32px 104px`
- Eyebrow "Who we help" (13px/.22em/uppercase/`var(--label)`)
- H2 `var(--head)` 600, `clamp(32px,3.8vw,52px)`, line-height 1.1, `max-width:22ch` — "Care built for the people most often turned away"
- Intro 18px, line-height 1.6, `var(--body)`, `max-width:58ch`, margin-bottom 52px:
  > Most psychiatry practices are not set up for patients who cannot easily describe what they are feeling. Ours is. We work with families, guardians, group homes and case managers as part of the care team.
- Two cards, grid `minmax(0,1fr) minmax(0,1fr)`, `gap:26px`

Card style: `background: var(--surface1); padding:40px 36px 42px; border-radius:14px; border-top:2px solid var(--accent)`

Each card: H3 `var(--head)` 600 at 29px/1.15 · description 17px/1.6 `var(--body)` · a 13px `.16em` uppercase `var(--label)` sublabel reading "What families describe" · then a chip row.

Chip style: `display:flex; flex-wrap:wrap; gap:9px`; each chip 15px, `var(--deep)` text, `background: var(--base)`, `border:1px solid rgba(var(--lineRGB),.16)`, `padding:8px 14px`, `border-radius:100px`.

**Card A — "Intellectual & developmental delay."** Description: "Adults and adolescents whose behavior has become difficult to manage at home, at a day program, or in supported living. Often already on several medications." Chips: Aggression toward staff or family · Self-injury · Property destruction · Elopement · Placement at risk · Repeat ER visits · Too many medications

**Card B — "Dementia."** Description: "Behavioral symptoms in older adults, treated with attention to fall risk, drug interactions and total medication burden." Chips: Agitation late in the day · Up all night · Aggression during care tasks · Suspicion or paranoia · Wandering · Caregiver burnout

### 5. What we do

- Background `var(--base)`, padding `0 32px 104px`
- Inner has `border-top: 1px solid rgba(var(--lineRGB),.12); padding-top:56px`
- Header row: grid `minmax(0,1fr) minmax(0,1fr)`, `gap:64px`, `align-items:end`, margin-bottom 44px
  - Left: eyebrow "What we do" + H2 `var(--head)` 600 `clamp(30px,3.4vw,44px)` — "A prescribing practice, not a portal"
  - Right: 17.5px/1.6 `var(--body)` `max-width:46ch` — "Every visit is with the same prescriber, who already knows the history and the people around the patient. Four things make up the work." — then a text link "Ask whether we are a fit →" (16px/600, `var(--ink)`, `border-bottom:1px solid rgba(var(--inkRGB),.3)`, `padding-bottom:4px`; hover `color: var(--link); border-color: var(--link)`)
- Items: grid `minmax(0,1fr) minmax(0,1fr)`, `gap:20px` (2×2)

Item card: `display:grid; grid-template-columns:34px 1fr; gap:20px; background: var(--surface1); border-radius:14px; padding:30px 30px 32px`. Numeral `var(--head)` 20px `var(--label)`. H3 `var(--head)` 600 24px/1.2. Body 16.5px/1.6 `var(--body)`.

1. **01 Psychiatric evaluation** — "A full hour to gather history from the patient and the people who support them daily."
2. **02 Medication management** — "Careful starts, careful changes, and ongoing monitoring of side effects and response."
3. **03 Regimen review and simplification** — "Many patients arrive on several psychotropics at once. We look for what can be reduced safely."
4. **04 Coordination with your team** — "Behavior support professionals, counselors, primary care and family, working from the same plan."

### 6. How it works — `#how` (dark band)

- Background `var(--deep)`, text `var(--surface1)`, padding `100px 32px`
- Eyebrow "How it works" in `var(--onDarkMuted)`
- H2 `var(--head)` 600 `clamp(32px,3.8vw,50px)`, `var(--base)`, `max-width:26ch`, margin-bottom 60px — "Four steps, from first call to steady care"
- Grid `repeat(4,1fr)`, `gap:32px`

Each step: `border-top: 1px solid rgba(var(--baseRGB),.28); padding-top:22px`. Step label `var(--head)` 15px `.16em` uppercase `var(--onDarkMuted)`. H3 `var(--head)` 600 24px `var(--base)`. Body 16px/1.6 `var(--onDark)`.

1. **Step one — Reach out.** "Book online, or call if you would rather talk first. Tell us who the patient is and what you are seeing."
2. **Step two — One-hour intake visit.** "By video, from home or the patient's program. Caregivers and guardians are welcome to join."
3. **Step three — A plan everyone can follow.** "Written in plain language and shared with the behavior and support professionals already involved."
4. **Step four — Steady follow-up.** "Twenty-minute routine appointments to adjust, monitor and hold the gains over time."

### 7. Integrated care

- Background `var(--surface1)`, padding `104px 32px`
- Grid `minmax(0,1.15fr) minmax(0,.85fr)`, `gap:56px`, `align-items:center`
- **Left: the care-circle diagram.** Right: text.

Right column: eyebrow "Integrated care" · H2 `var(--head)` 600 `clamp(32px,3.6vw,48px)` "Medication is one part of the plan" · two paragraphs at 18.5px/1.62 `var(--body)`:
> We collaborate closely with behavior support professionals to provide a holistic, integrated approach for our highest need patients, ensuring comprehensive care that addresses both cognitive and behavioral challenges.

> That means asking what changed in the environment before reaching for a new prescription, and keeping every person on the team informed when something does change.

**Care-circle diagram.** Purely presentational; a CSS composition, no SVG. Wrapper: `position:relative; min-width:0; aspect-ratio:1; max-height:520px; display:flex; align-items:center; justify-content:center`.

- Outer ring: absolute, `width:66%; height:66%`, `border:1px solid rgba(var(--lineRGB),.2)`, `border-radius:50%`
- Inner ring: absolute, `width:44%; height:44%`, `border:1px dashed rgba(var(--lineRGB),.22)`, `border-radius:50%`
- Center bubble: `width:24%; height:24%; min-width:104px; min-height:104px; border-radius:50%; background: var(--deep)`, centered text — `var(--head)` 22px "Patient" over 12.5px `var(--onDark)` "and the people with them daily"
- Five labels, absolutely positioned, each `background: var(--base); border:1px solid rgba(var(--lineRGB),.18); border-radius:12px`, title `var(--head)` 16–18px, sub 12.5px `var(--muted)`:

| Label | Sub | Position | Max width |
| --- | --- | --- | --- |
| BrigaRx prescriber | Diagnosis and medication | `top:0; left:50%; translateX(-50%)`, centered text | 180px |
| Behavior consultant | Behavior plan and data | `top:33%; right:0` | 128px |
| Counselor | Ongoing therapy | `bottom:3%; right:0` | 128px |
| Primary care | Medical causes, labs | `bottom:3%; left:0` | 128px |
| Case manager | Services and coordination | `top:33%; left:0` | 128px |

The percentages and the 128px cap exist so the side labels clear the center bubble and stay inside the page gutter. If you rebuild this responsively, verify no label overlaps the bubble and none extends past the 32px gutter. **On narrow viewports, stack the labels as a plain list instead of positioning them radially.**

### 8. How we prescribe

- Background `var(--base)`, padding `104px 32px`
- Eyebrow "How we prescribe" · H2 `var(--head)` 600 `clamp(32px,3.8vw,50px)` `max-width:26ch` — "The fewest medications that hold the patient steady"
- Intro 18px/1.6 `var(--body)` `max-width:60ch`, margin-bottom 52px:
  > Patients with cognitive challenges are among the most heavily medicated people in the health system, often after years of crisis-driven additions. Our default is subtraction.
- Grid `repeat(3,1fr)`, `gap:26px`. Each: `border-top:2px solid var(--accent); padding-top:24px`, H3 `var(--head)` 600 25px/1.2, body 16.5px/1.6 `var(--body)`

1. **One change at a time** — "When three things change at once, nobody can tell what helped. We change one and watch."
2. **Rule out the reversible first** — "Pain, constipation, infection, sleep, a new staff member. Behavior is communication before it is a diagnosis."
3. **Deprescribe on purpose** — "Every medication carries a reason to keep it and a reason to stop. We revisit both at every visit."

### 9. About — `#about`

- Background `var(--base)`, padding `104px 32px`
- Grid `minmax(0,.85fr) minmax(0,1.15fr)`, `gap:72px`, `align-items:start`
- Left: portrait, `height:460px; min-width:0; margin-bottom:20px`. **Currently an empty placeholder — see Assets.**
- Right column:
  - Eyebrow "About the practice"
  - H2 `var(--head)` 600 `clamp(34px,4vw,54px)`, line-height 1.06 — "Esha Bhardwaj, PMHNP"
  - Subtitle 17px `var(--link)`, margin-bottom 32px — "Practice owner · Over 10 years experience treating those with cognitive challenges"
  - Paragraph 1, 19px/1.62 `var(--body)` — verbatim client copy:
    > Esha is a Yale graduate and has been providing specialized psychiatry services to individuals with cognitive challenges for 10 years. Esha works with behavior support professionals and counselors to provide integrated care to our highest need patients.
  - Paragraph 2 (written for this design, **needs client confirmation**):
    > BrigaRx is a small practice by design. Patients see the same prescriber at every visit, and caregivers reach a person who already knows the case.
  - Stat row: grid `repeat(3,1fr)`, `gap:28px`, `border-top:1px solid rgba(var(--lineRGB),.14)`, `padding-top:28px`. Numeral `var(--head)` 34px/600/`letter-spacing:-.02em`/`var(--deep)`; caption 15px/1.45 `var(--muted)`.
    - **10+** Years in specialized psychiatry
    - **1** Prescriber, every visit
    - **OR** Serving Oregon virtually

### 10. Transparent Pricing — `#pricing`

- Background `var(--surface2)`, padding `100px 32px`
- Eyebrow "Pricing" · H2 `var(--head)` 600 `clamp(32px,3.8vw,50px)` — "Transparent Pricing" (verbatim), margin-bottom 44px
- Two cards, grid `minmax(0,1fr) minmax(0,1fr)`, `gap:26px`

Card: `background: var(--base); border-radius:14px; padding:40px 36px; display:flex; flex-direction:column; gap:8px`. Title `var(--head)` 600 26px. Price `var(--head)` 44px/600/`letter-spacing:-.02em`/`var(--deep)`. Meta 16px `var(--muted)`, margin-bottom 28px. Button `margin-top:auto`, `padding:15px 26px`, radius 10px, 16px/700, `text-align:center`.

- **Initial Intake Visit** — **$198.90** — "1 Hour" — filled button **"Click to Enroll"** (`var(--onAccent)` on `var(--accent)`; hover `background: var(--deep); color: var(--base)`)
- **Routine Appointment** — **$80.46** — "20 Minutes · Established patients" — outline button **"Book Visit"** (`var(--deep)`, `border:1px solid rgba(var(--lineRGB),.3)`; hover `border-color: var(--accent); background: var(--surface1)`)

Footnote below, 16px/1.6 `var(--muted)`, `max-width:74ch`, verbatim:
> Please note. All visits are payable by credit card at the time of the visit. For people with private insurance, a superbill can be provided for submission to your health insurer. All of our rates are Oregon Medicaid rates.

Prices, durations and this note are the client's own numbers. Do not paraphrase.

### 11. FAQ — `#faq`

- Background `var(--base)`, padding `104px 32px`
- Header row: grid `minmax(0,1fr) minmax(0,1fr)`, `gap:64px`, `align-items:end`, margin-bottom 36px
  - H2 `var(--head)` 600 `clamp(30px,3.4vw,44px)` — "Questions caregivers ask first"
  - 17.5px/1.6 `var(--body)` `max-width:46ch` — "If yours is not here, call and ask. Nothing below is a commitment, and there is no charge for finding out whether this practice fits."
- Accordion below, full width

Each row: `border-bottom: 1px solid rgba(var(--lineRGB),.14)`. Trigger is a `<button>`: full width, `display:flex; align-items:center; justify-content:space-between; gap:24px`, transparent, no border, `padding:24px 0`, `cursor:pointer`, `text-align:left`, `var(--head)` 400 22px `var(--ink)`; hover `color: var(--accent)`. A `+` / `−` indicator sits at the right, 22px `var(--label)`. Expanded answer: 17px/1.65 `var(--body)`, `padding: 0 40px 28px 0`, `max-width:66ch`.

**Single-open accordion.** Opening one closes the others; clicking the open row closes it. Item 0 is open on load.

| Question | Answer |
| --- | --- |
| Do I need a referral? | No. Family members, guardians, case managers and support coordinators can reach out directly. |
| Can a caregiver attend the visit? | Yes, and we encourage it. For patients who cannot describe their own symptoms, the people who see them every day are the most important source of history. |
| What if the patient will not sit in front of a camera? | That is common and it is workable. Visits can happen with the patient present for part of the time, or with the camera positioned so they are comfortable while caregivers report. |
| Do you take insurance? | Visits are paid by credit card at the time of the visit. For people with private insurance, a superbill can be provided for submission to your health insurer. |
| Will you take over an existing medication list? | Yes. Bring the current regimen and any recent labs to the intake visit. We review everything before making changes, and changes are made one at a time. |
| Do you provide therapy or behavior plans? | We prescribe and manage medication, and we coordinate with the behavior support professionals and counselors already working with the patient. |

These answers were written for this design and are **not** client-confirmed. Have the practice review them before launch — several make operational claims.

### 12. Contact — `#contact` (dark band)

- Background `var(--deep)`, text `var(--surface1)`, padding `104px 32px`
- Grid `minmax(0,1.05fr) minmax(0,.95fr)`, `gap:80px`, `align-items:start`

There is **no contact form** — by client decision, scheduling happens in a third-party system.

Left column:
- H2 `var(--head)` 600 `clamp(34px,4.2vw,56px)`, line-height 1.05, `var(--base)` — "We're There When You Need Us" (verbatim)
- 18.5px/1.62 `var(--onDark)` `max-width:46ch` — "Scheduling is online. Pick a time that works, and bring whoever knows the patient best to the visit. If you would rather talk it through first, call or email us."
- Button row (`gap:14px`):
  - **"Schedule a visit"** — 16px/700, `var(--deep)` on `var(--base)`, `padding:16px 30px`, radius 10px; hover `background: var(--surface2)`. Opens the chooser modal.
  - **"Call (802) 328-7369"** — outline, 16px/700, `var(--base)`, `border:1px solid rgba(var(--baseRGB),.4)`; hover `border-color: var(--base); background: rgba(var(--baseRGB),.08)`. `href="tel:+18023287369"`.
- Fine print 15px/1.55 `var(--onDarkMuted)` `max-width:52ch` — "Booking opens our scheduling system in a new window. Please do not send clinical details by email."

Right column: `border-left: 1px solid rgba(var(--baseRGB),.22); padding-left:44px; display:grid; gap:30px`. Each block has a 13px `.2em` uppercase `var(--onDarkMuted)` label above its value.

| Label | Value | Notes |
| --- | --- | --- |
| Phone | (802) 328-7369 | `var(--head)` 27px/600, `var(--base)`, `tel:` link, underline on hover |
| Email | info@brigarx.com | 19px, `var(--base)`, `mailto:` link |
| Hours | 9AM – 4PM Mon–Fri<br>Excluding federal holidays | 18px `var(--onDark)`, line-height 1.5 |
| Location | Serving Oregon virtually | 18px `var(--onDark)` |

All four values are the client's own.

### 13. Crisis notice

- Background `var(--surface2)`, `border-bottom: 1px solid rgba(var(--lineRGB),.14)`, padding `44px 32px`
- Grid `auto 1fr`, `gap:36px`, `align-items:center`
- Left: `var(--head)` 26px/400 `var(--deep)`, `white-space:nowrap` — "In a crisis"
- Right: 17px/1.6 `var(--deep)`, `max-width:88ch`, with **911** and **988** in `<strong>`:
  > BrigaRx is not an emergency service and does not monitor phone or email outside of office hours. If someone is in immediate danger, call **911**. For a mental health crisis, call or text **988**, the Suicide and Crisis Lifeline, available 24 hours a day.

This section is a legal and ethical requirement on a psychiatry site. Do not drop it.

### 14. Footer

- Background `var(--base)`, padding `44px 32px`
- `display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap`
- Left: logo at `height:36px`
- Right: `display:flex; align-items:center; gap:28px`, 14.5px `var(--muted)` — a `mailto:` link "info@brigarx.com" and "© 2026 BrigaRx. All rights reserved."

### 15. Visit-type chooser (modal)

Triggered by three CTAs: nav "Enroll a patient", hero "Book an intake visit", contact "Schedule a visit". The two pricing-card buttons bypass it, because the card already names the visit type.

- Overlay: `position:fixed; inset:0; z-index:100; background: rgba(var(--inkRGB),.55); display:flex; align-items:center; justify-content:center; padding:32px`
- Panel: `background: var(--base); border-radius:18px; padding:48px 48px 44px; max-width:720px; width:100%; box-shadow: 0 30px 70px rgba(var(--inkRGB),.28)`
- Close: `×` at `top:20px; right:22px`, 26px `var(--label)`; hover `var(--ink)`
- H2 `var(--head)` 600 36px/1.1 — "Which visit do you need?"
- Sub 17px/1.6 `var(--body)` `max-width:52ch`, margin-bottom 32px — "If this is your first appointment with us, choose the intake visit."
- Two option cards, grid `minmax(0,1fr) minmax(0,1fr)`, `gap:20px`. Each is an `<a>` with `target="_blank" rel="noopener"`: `background: var(--surface1); border-radius:14px; border-top:2px solid var(--accent); padding:28px 26px 26px`; hover `background: var(--surface2)`. Contents stacked with `gap:6px` — name (`var(--head)` 24px), price (`var(--head)` 32px/600/`-.02em`/`var(--deep)`), meta (16px `var(--muted)`), and a 16px/600 `var(--link)` action line with `margin-top:14px`.
  - **Initial Intake Visit** · $198.90 · "1 Hour · New patients" · "Book intake →"
  - **Routine Appointment** · $80.46 · "20 Minutes · Established patients" · "Book follow-up →"
- Footnote 15px/1.55 `var(--muted)`, margin-top 26px — "Either option opens our scheduling system in a new window."

**Not yet implemented:** no Escape-key close, no overlay-click close, no focus trap, no `role="dialog"`/`aria-modal`, no scroll lock on the body. Add all of these in production — this is the site's primary conversion path and its audience includes keyboard and screen-reader users.

---

## Interactions & behavior

| Trigger | Behavior |
| --- | --- |
| Nav links, "See how it works" | Anchor scroll. `html { scroll-behavior: smooth }`. **Note:** the sticky header is ~70px tall and there is no scroll offset compensation — add `scroll-margin-top` to the anchor targets so headings aren't hidden under it. |
| "Enroll a patient", "Book an intake visit", "Schedule a visit" | Open the visit-type modal. Currently `href="#"` with `preventDefault()`; in production these can be plain buttons. |
| "Click to Enroll", "Book Visit", both modal options | Open the third-party scheduler in a new tab. **All are `href="#"` placeholders — wire up the real URL.** |
| "Call (802) 328-7369", phone value | `tel:+18023287369` |
| Email links | `mailto:info@brigarx.com` |
| FAQ row | Toggle single-open accordion |
| Demo palette buttons | Set `data-theme`. **Remove before launch.** |

No animations or transitions beyond CSS hover color/background changes (currently instant — no `transition` declared). No loading or error states. No form validation, since there is no form.

**Responsive behavior is not implemented.** The prototype is desktop-only: fixed multi-column grids, a fixed 520px hero image, and a radially positioned diagram. Mobile is a required piece of work, not a refinement. At minimum: collapse every 2-, 3- and 4-column grid to one column; convert the nav to a menu; stack the care-circle labels; and reduce section padding from 104px to roughly 56px.

## State management

Four pieces of local UI state, all client-side:

| State | Type | Initial | Purpose |
| --- | --- | --- | --- |
| `openFaq` | number | `0` | Index of the expanded FAQ row; `-1` = all closed |
| `modalOpen` | boolean | `false` | Visit-type chooser visibility |
| `theme` | string | `"clay"` | Active palette. **Demo only — becomes a constant.** |
| `showPricing` | boolean | `true` | Authoring toggle to hide the pricing section. Drop it or expose it via CMS. |

No data fetching. No persistence. Nothing server-side. Consider persisting nothing at all — the page is static once the palette is fixed.

## Design tokens

The full set lives in `theme.css` in this bundle, which is portable and can be dropped into any codebase as-is. Set `data-theme` on `<html>` (better than a wrapper div — it then covers `body` and anything portaled outside the tree).

### Token roles

| Token | Role |
| --- | --- |
| `--head` | Heading font family |
| `--accent` | Primary brand color: filled buttons, card top rules, hover accents |
| `--onAccent` | Text on `--accent` |
| `--deep` | Dark band backgrounds, prices, stat numerals, outline-button text |
| `--link` | Text links and accent action lines |
| `--label` | Eyebrow labels, list numerals, accordion indicator |
| `--subhead` | Hero subheading |
| `--ink` | Primary text |
| `--body` | Body copy |
| `--muted` | Secondary/meta text |
| `--surface1` | Section tint and card fill on light backgrounds |
| `--surface2` | Deeper tint: pricing band, crisis notice, hero offset block |
| `--base` | Page background; text on dark bands |
| `--onDark` | Body copy on dark bands |
| `--onDarkMuted` | Labels and fine print on dark bands |
| `--sel` | `::selection` background |
| `--lineRGB` | RGB triplet for hairline borders, used as `rgba(var(--lineRGB), α)` |
| `--inkRGB` | RGB triplet for ink-based translucency (overlays, shadows) |
| `--baseRGB` | RGB triplet for light translucency on dark bands and the header blur |

The three `*RGB` tokens hold bare comma-separated triplets, not colors, so alpha can vary at the point of use. Keep that convention — several borders depend on it.

### Palette values

**Plum** — `--accent:#7C6789` · `--onAccent:#FCFAF7` · `--deep:#50445C` · `--link:#6A5578` · `--label:#6B5B78` · `--subhead:#5F4C6D` · `--ink:#3A3240` · `--body:#554D5E` · `--muted:#675E73` · `--surface1:#F4EFF3` · `--surface2:#F0E6DD` · `--base:#FCFAF7` · `--onDark:#E3DBE7` · `--onDarkMuted:#D7CCDE` · `--sel:#EBE1EF` · `--lineRGB:69,58,82` · `--inkRGB:58,50,64` · `--baseRGB:251,249,247` · `--head: Montserrat`

**Teal** — `--accent:#2F6E6B` · `--onAccent:#FBFAF6` · `--deep:#22484A` · `--link:#2A5F5E` · `--label:#35706E` · `--subhead:#2A5250` · `--ink:#20302F` · `--body:#42524F` · `--muted:#5A6A67` · `--surface1:#EAF2F0` · `--surface2:#DBEAE5` · `--base:#FBFAF6` · `--onDark:#D8E5E2` · `--onDarkMuted:#C4D8D4` · `--sel:#DCEAE7` · `--lineRGB:34,72,74` · `--inkRGB:32,48,47` · `--baseRGB:251,250,246` · `--head: Montserrat`

**Sky** — `--accent:#29B6F6` · `--onAccent:#FFFFFF` · `--deep:#0E3A52` · `--link:#0F6A96` · `--label:#106589` · `--subhead:#0E5E85` · `--ink:#16262E` · `--body:#41525C` · `--muted:#576A74` · `--surface1:#E9F6FE` · `--surface2:#DCEDF8` · `--base:#FBFCFD` · `--onDark:#D6E9F3` · `--onDarkMuted:#BEDCEB` · `--sel:#D8EFFB` · `--lineRGB:35,69,94` · `--inkRGB:34,48,58` · `--baseRGB:251,250,248` · `--head: Montserrat` — **fails AA on filled buttons; see the caveat above**

**Cyan** — `--accent:#0A70A6` · `--onAccent:#FFFFFF` · `--deep:#0C3A52` · `--link:#0B6E9F` · `--label:#0F6B96` · `--subhead:#0B5F8A` · `--ink:#16262E` · `--body:#41525C` · `--muted:#576A74` · `--surface1:#E4F7FC` · `--surface2:#D6EEF7` · `--base:#FBFCFD` · `--onDark:#D2EAF4` · `--onDarkMuted:#B6DDEC` · `--sel:#CFF3FC` · `--lineRGB:12,58,82` · `--inkRGB:22,38,46` · `--baseRGB:251,252,253` · `--head: Montserrat`

**Clay** — `--accent:#A85A42` · `--onAccent:#FCFAF6` · `--deep:#46332C` · `--link:#8E4C37` · `--label:#8A5340` · `--subhead:#7C4531` · `--ink:#332723` · `--body:#5A4A44` · `--muted:#6E5C55` · `--surface1:#F8EDE5` · `--surface2:#F1E3D4` · `--base:#FCFAF6` · `--onDark:#EBDFD7` · `--onDarkMuted:#DCC7BB` · `--sel:#F4E2D7` · `--lineRGB:70,51,44` · `--inkRGB:51,39,35` · `--baseRGB:252,250,246` · `--head: Outfit`

### Typography

Both from Google Fonts:

```
https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..700;1,400&family=Outfit:wght@300..700&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700&display=swap
```

- **Headings:** `var(--head)` — Montserrat for Plum/Teal/Sky/Cyan, Outfit for Clay. Weight 600 for section headings, 700 for the hero H1, 400 for FAQ triggers and the "In a crisis" label.
- **Body:** `'Nunito Sans', system-ui, sans-serif`. Weights 400, 600, 700.
- **Because `--head` is a token, all heading families must be loaded up front** or the first palette switch flashes unstyled text.

| Role | Size | Weight | Line-height | Tracking |
| --- | --- | --- | --- | --- |
| Hero H1 | `clamp(40px,4.8vw,64px)` | 700 | 1.05 | -.035em |
| Hero H2 | `clamp(20px,2.1vw,27px)` | 400 | 1.3 | -.01em |
| Section H2 (large) | `clamp(32px,3.8vw,52px)` | 600 | 1.1 | — |
| Section H2 (small) | `clamp(30px,3.4vw,44px)` | 600 | 1.1 | — |
| Card H3 | 24–29px | 600 | 1.15–1.2 | — |
| Eyebrow label | 13px | 400 | — | .22em, uppercase |
| Hero body | 19px | 400 | 1.62 | — |
| Section intro | 17.5–18.5px | 400 | 1.6–1.62 | — |
| Card body | 16.5px | 400 | 1.6 | — |
| Meta / fine print | 14.5–16px | 400 | 1.45–1.6 | — |
| Price | 44px | 600 | — | -.02em |
| Stat numeral | 34px | 600 | — | -.02em |
| Button | 15–16px | 700 | — | — |

Measure caps: body `44ch`, intros `46–60ch`, FAQ answers `66ch`, footnote `74ch`, crisis text `88ch`. `text-wrap: pretty` is set on most headings and long paragraphs.

### Spacing, radius, shadow

- Page gutter 32px · container 1180px
- Section padding 104px (light), 100px (dark), 88px, 44px
- Grid gaps: 20, 26, 32, 56, 64, 72, 80px · chip gap 9px · button row gap 14px
- Radius: 10px buttons · 12px diagram labels · 14px cards · 18px modal · 100px chips and pills
- Only one shadow in the design: the modal's `0 30px 70px rgba(var(--inkRGB),.28)`
- Hairlines: `1px solid rgba(var(--lineRGB), .1 / .12 / .14 / .16 / .18 / .2 / .22 / .28 / .3)`; card top rules are `2px solid var(--accent)`

## Assets

In `assets/`:

| File | Notes |
| --- | --- |
| `brigarx-logo.png` | Client's logo, background keyed out to transparency. **The plum original.** 380×162. |
| `brigarx-logo-teal.png` | Same mark recolored (#2F6E6B). |
| `brigarx-logo-sky.png` | Same mark recolored (#1D9AD6). |
| `brigarx-logo-cyan.png` | Same mark recolored (#0C7FB8). |
| `brigarx-logo-clay.png` | Same mark recolored (#A85A42). |
| `hero-visit.png` | Plum-toned hero photograph, 1086×1448. AI-generated for this design. |
| `hero-visit-teal.png` | Teal-toned variant, 1086×1448. Used by Teal, Sky and Cyan. |

Notes and open items:

- **The logo variants are programmatic recolors of a keyed-out raster.** Once the palette is chosen, get a proper vector (SVG) logo in that color from the client. Don't ship a hue-shifted PNG.
- **The hero photographs are AI-generated placeholders.** Confirm the client is comfortable using them; a licensed stock photo or real practice photography would be better.
- **The About portrait slot is empty.** The prototype uses a drag-and-drop placeholder component (`image-slot.js`). A usable headshot of Esha Bhardwaj exists but only at 290×363, too small for a 460px-tall slot. Request a high-resolution original.
- No icon set. No SVG illustration. The only graphic construct is the CSS care-circle.

## Files in this bundle

| File | What it is |
| --- | --- |
| `BrigaRx Website.dc.html` | The design prototype. Reference only — see "About the design files". |
| `theme.css` | The five palettes plus base resets. Portable; use as-is. |
| `support.js` | Runtime required by the prototype. Not part of the deliverable. |
| `image-slot.js` | Image placeholder component used by the empty portrait slot. Not part of the deliverable. |
| `assets/` | Logos and photographs. |

## Open items requiring client input

1. **Palette decision** — five candidates; a choice collapses most of the theming work.
2. **Scheduling URL** — every booking CTA is a placeholder.
3. **High-resolution portrait** of Esha Bhardwaj.
4. **FAQ answers** and the second About paragraph — written for this design, not confirmed by the practice.
5. **Insurance wording** — is it Oregon Medicaid-rate self-pay only, or is Oregon Health Plan billed directly? The current copy is ambiguous and it is the most consequential ambiguity on the page.
6. **Controlled substances policy** — a common first question, deliberately left out rather than guessed at.
7. **Telehealth platform name** — naming it ("we use X, HIPAA-compliant") is more reassuring than "secure video."
8. **Response-time commitment** — no promise is currently made.
9. **Privacy policy and terms** — no links exist yet; a healthcare site needs them.
