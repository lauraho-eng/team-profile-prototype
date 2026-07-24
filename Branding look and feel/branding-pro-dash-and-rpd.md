# Branding & Design System: ProDash and Real Pro Dash (RPD)

> Source: Realtor.com PRO Brand Guideline (2024) + internal Glean documentation  
> Applies to: ProDash (legacy) and RealPro Dashboard (RPD / UWP)

---

## Platform Context

| | ProDash | Real Pro Dash (RPD / UWP) |
|---|---|---|
| Status | **Legacy** — being deprecated | **Current** — all new work goes here |
| URL | `dashboard.realtor.com` | `pro.realtor.com` (UWP) |
| Design System | Harmony PRO → **migrated to Haven** (July 2025) | **Haven Design System** |
| Component Library | `@prosoft/prosoft-components` (archived) | `@rdc-npm/rdc-ui` / `@moveinc/rdc-ui` |
| Storybook | Archived | https://rdc-ui.x.realtor.com/rdc-ui/master/index.html |
| Figma | Harmony PRO (archived) | Haven Web Components + Web Foundations |

> **Important:** As of July 2025, Harmony PRO was fully unified into Haven. Both platforms now share the same token system (`@rdc-npm/rdc-ui`). `@moveinc/rdc-ui-pro` is deprecated and removed. Do not use `@prosoft/prosoft-components` in any new RPD work.

**Seamless Transition Pattern**: While migration is in progress, users can be redirected from ProDash into RPD for specific actions (e.g., promoting listings, editing profiles). During this state, RPD's left navigation is hidden to prevent confusion about which platform the user is in.

---

## Brand Aesthetic

Both platforms share the same PRO brand aesthetic — there is no separate visual identity between ProDash and RPD. The distinction is the underlying component/token system, not the brand.

| | Consumer (Realtor.com) | PRO (ProDash + RPD) |
|---|---|---|
| Tone | Bright. Friendly. Simple. | Refined. Sophisticated. Simple. |
| Audience | Home buyers & sellers | Agents, brokers, teams, lenders |
| Feel | Approachable, colorful | Elevated, professional, restrained |

**PRO Brand Values:** Choice · Clarity · Professionalism

---

## Typography

### ProDash (Legacy)

ProDash used the **Harmony PRO** type system, which has since been unified into Haven. No new typography work should target ProDash specifically.

| Font | Use in ProDash |
|---|---|
| Galano Grotesque Alt Bold | Product UI headlines |
| Galano Grotesque Alt Medium | Product UI body/supporting text |

> Harmony PRO foundations file: `🎨 Harmony PRO Foundations - Design System` (archived in Figma)

---

### Real Pro Dash / RPD (Current)

RPD uses the **Haven Design System** type tokens. These are the same tokens now used across all RDC products post-unification.

| Font | Use in RPD / Product UI |
|---|---|
| **Galano Grotesque Alt Bold** | In-product headlines, emphasis |
| **Galano Grotesque Alt Medium** | In-product body copy, supporting text |
| **Austin CYR Roman** | Logo wordmark and product name artwork only — not for general use |

> Haven Foundations Figma file: `🏡 Web Foundations - Haven Design System`

---

### Brand / Marketing Typography (shared — not product UI)

Used in all external brand communications, ads, and non-product surfaces for both platforms:

| Font | Use |
|---|---|
| **Galano Grotesque Bold** | Headlines, impact text |
| **Galano Grotesque Medium** | Body copy, supporting text |

### Fallback Fonts (shared)

| Context | Fallback |
|---|---|
| Email | Helvetica Bold (headlines), Helvetica Regular (body) |
| Google Docs / Slides / Sheets | Poppins ExtraBold (headlines), Poppins Normal (body) |

### Typesetting Rules (shared)

- Body copy = 50% of headline size (e.g., 60px headline → 30px body)
- Leading: 140% for body, 120% for headlines
- Kerning: 0 (Optical Spacing)
- **Sentence case** for headlines, subheads, and CTAs — capitalize proper nouns only
- No end punctuation on headlines unless a question or exclamation
- Use the Oxford comma in lists

---

## Color

### Shared Brand Colors (both platforms)

The PRO color palette is shared across ProDash and RPD. Post-unification, both platforms reference the same Haven token system.

#### Primary Palette

| Token / Name | Hex | Use |
|---|---|---|
| Realtor Red 600 | `#D92228` | Primary brand accent, CTAs, errors, warnings |
| Realtor Red 700 | `#B81D22` | Red hover state |
| Cream 100 | `#F9F5F1` | Marketing surfaces, photography overlays (**not** RPD product UI) |
| Cream 200 | `#F1E8DE` | Warm-tone photography backgrounds (marketing only) |
| Cream 300 | `#DED6CC` | Subtle marketing backgrounds |
| Cream 400 | `#D1C4B6` | Muted warm tones (marketing) |

> The Cream palette is **PRO-only** — it does not exist in the consumer Realtor.com brand.
>
> **RPD product UI does not use Cream as a background.** RPD pages, cards, sidebar, avatars, and chips are white (`#FFFFFF`). Cream is reserved for marketing surfaces, photography overlays, and illustration backgrounds — not the dashboard canvas or its primitives. Use warm grays (Gray 100 / 200 / 300) for hovers, borders, and dividers inside the product.

#### Neutral / Warm Grays

| Token / Name | Hex | Use |
|---|---|---|
| Gray 100 | `#F2F0EF` | Page backgrounds |
| Gray 200 | `#E9E7E4` | Dividers, subtle UI borders |
| Gray 400 | `#BEB8B0` | Secondary text, disabled states |
| Gray 1200 | `#1A1816` | Primary text (near-black) |

#### Data / Functional Colors (charts and dashboards only)

| Name | Hex | Hover |
|---|---|---|
| Teal 900 | `#008583` | `#003D3B` |
| Blue 900 | `#0D74CE` | `#113264` |
| Purple 900 | `#953EA3` | `#53195D` |
| Orange 900 | `#CC4E00` | `#582D1D` |
| Pink 900 | `#C2298A` | `#651249` |

> Data colors are **only** for charts, graphs, and information-dense UIs. Do not use in brand communications.

---

### ProDash — Color Notes

ProDash previously used **Harmony PRO color tokens**, which had some differences from Haven (e.g., `color.status.error.bold`, `color.border.primaryReverse` tokens that don't exist in code were removed during unification). Those tokens are now deprecated.

**Do not reference Harmony PRO-specific tokens** for any new work, even if targeting ProDash contexts. Use Haven tokens exclusively.

---

### Real Pro Dash (RPD) — Color Notes

RPD uses **Haven color tokens** via `@rdc-npm/rdc-ui`. Key token naming conventions post-unification:

- Status tokens: `color.status.error.subtle`, `color.status.warning.subtle`, etc.
- Data tokens: `data.bold`, `data.subtle` (old `data.text` / `data.background` tokens are deprecated)
- Warning background: `color.status.warning-subtle` maps to `yellow/200` (updated from `yellow/100` for improved a11y contrast)

**Color usage rules (both platforms):**

- Color usage is **minimal** — primarily grayscale with red as a focused accent
- **Never use red as a field/fill of color** — red is an accent only
- Do not add colors outside the defined palette
- Do not use pure grays without any brand color present
- **Accessibility:** Enforce WCAG contrast minimums. When agents set custom brokerage accent colors (Advantage Pro), implement guardrails that prevent inaccessible color combinations (e.g., warn on white text over bright green)

---

## Logo

- The Realtor PRO logo = **realtor.com logomark** + **PRO pill**
- Four versions: Main (preferred), Two Color Knockout (dark backgrounds), Single Color Knockout, Mini (small sizes)
- **Minimum size:** 150px / 1.15"
- **Clearspace:** Equal to one home icon from the same logo
- The **PRO Pill** alone can be used as shorthand when the full logo is already established
- Sub-brand logos for specific audiences (agent, lender, teams) — horizontal is primary, stacked is secondary

### Logo Don'ts
- Do not use the wordmark alone
- Do not add drop shadows
- Do not change logo colors
- Do not place over complex backgrounds
- Do not re-stack the logo

---

## Photography

Two approved photography styles (shared across both platforms):

**Sepia Photography** (when people are present)
- B&W → contrast filter → Cream overlay (`#F8F4F0`) at Color Burn blend mode
- Gives professionals a refined, elevated quality

**Warm Color Photography** (no clear people)
- Warm tones aligned to the cream palette
- Pairs well with sepia images

### Photo Selection Checklist (aim for 7/10)
- Candid, nobody looking at camera, observed by third party
- Imperfect, everyday, realistic/lived-in homes
- Natural lighting, diversity of people and homes
- Prioritizes emotional moments

### Source
Getty Images via the Realtor DAM: https://dam.gettyimages.com/realtor/brand-assets

---

## Illustration System (shared)

| Scale | Detail | Use |
|---|---|---|
| **Brand Illustrations** | High detail + texturing | Headers, marketing, marquee moments |
| **Spot Illustrations** | Medium, categorical | Section signifiers, content grouping |
| **Icons** | Simple, outlined or filled | Navigation, buttons, small interactive UI |

- **PRO characters** have elevated dress codes vs. consumer characters — always use PRO characters when depicting professionals
- Represent diverse skin tones, body shapes, ages, and genders

---

## Component Libraries

### ProDash (Legacy — avoid new work)

| | |
|---|---|
| Design System | Harmony PRO (archived July 2025) |
| Web Components | `@prosoft/prosoft-components` (do not use) |
| Figma | `🖥️ Harmony PRO Web Components - Design System` (archived) |
| Status | **Fully deprecated.** Use Haven/rdc-ui for all new work, even if the entry point is ProDash. |

### Real Pro Dash / RPD (Current — use this)

| | |
|---|---|
| Design System | **Haven Design System** |
| Web Components | `@rdc-npm/rdc-ui` / `@moveinc/rdc-ui` |
| React Native | `@📱 Haven React Native Components (Client) — Design System` (Figma) |
| Figma (Web) | `🏡 Web Foundations - Haven Design System` + `🏡 Haven Web Components - Design System` |
| Storybook | https://rdc-ui.x.realtor.com/rdc-ui/master/index.html |

---

## RPD Teams Page — Visual Patterns (V3)

Established through the "Your teams" exploration (May 2026). These patterns reflect the RPD brand pass and should be used as a reference for Teams-related surfaces.

### Surfaces & Color
- **All surfaces are white** (`#FFFFFF`) — pages, cards, sidebar, avatars, chips. No Cream.
- Warm grays carry structure: Gray 200 (`#E9E7E4`) for borders/dividers, Gray 300 (`#D9D5D0`) for avatar borders, Gray 100 (`#F2F0EF`) for hover states.
- **Red 600 (`#D92228`) is accent-only** — used for: left accent stripe on invite cards, team-lead avatar border (1.5px), and the selected-nav left indicator. Never as a fill or button background.
- Gray 1200 (`#1A1816`) is the primary text color and the fill for primary buttons.
- Status "Active" dot uses **Teal 900 (`#008583`)** — the Haven data token. Not an arbitrary green.

### Buttons
- Pill-shaped (`border-radius: 999px`) — matches the "Edit template" pattern in RPD.
- **Primary:** Gray 1200 fill, white text — sophisticated, not red.
- **Secondary:** White fill, Gray 1200 outline.
- **Text link:** Underline only, no border. Hover turns Red 600.

### Role Chip System
- **Team lead:** Solid Gray 1200 fill, white text — elevates ownership visually.
- **Member:** White fill, Gray 300 border — quiet, subordinate.
- Text is uppercase, 11px, 700 weight, with small letter-spacing.

### Avatars
- Team avatars: flat white tile, Gray 300 border, 56×56px, 12px border-radius.
- Team-lead avatar gets a **1.5px Red 600 border** to signal ownership.
- No gradients (blue/teal/gold gradients are off-brand for RPD).
- Initials in Gray 1200, 700 weight.

### Invite / Action Cards
- Left accent stripe: 3px Red 600, absolute-positioned flush to card edge.
- Card border: 1px Gray 200; box-shadow: `0 1px 2px rgba(26,24,22,0.04)`.
- Eyebrow label uses Red 600 + a small Red 600 pulse dot for "Action needed" state.

### Team List Cards
- Grid layout: `auto 1fr auto auto` (avatar · body · primary action · overflow menu).
- Hover: border lifts to Gray 300, shadow deepens to `0 4px 12px rgba(26,24,22,0.06)`.

### Copy & Typography
- Sentence case throughout: "as a member", "Led by you", "Sent May 22, 2026".
- Primary face: Galano Grotesque Alt; Google fallback: Poppins.
- Page title: 28px / 700 weight / −0.4px tracking.
- Section labels: 11.5px / 700 / uppercase / Gray 600.

### Layout
- Content centered, `max-width: 1200px`, `margin: 0 auto`.
- Main padding: `32px 48px 80px`.
- No sidebar in stand-alone explorations; sidebar present in full-shell views.

---

## Navigation & Layout Patterns

### ProDash
- Uses legacy left-nav shell (`rdc-pro-app-shell`, now `@rdc-npm/rdc-pro-app-shell`)
- During Seamless Transition into RPD: left nav is **removed** from the RPD view to avoid confusion

### Real Pro Dash (RPD)
- **Side Navigation (NavSidebar):** Available in rdc-ui. Selected state: prefer a highlighted background state over bold-text-only for clear visual differentiation
- **Edit States:** Use dedicated full pages for edit states (not full-page modals) for both team lead/broker and agent experiences
- **Sticky Action Bar:** Appears at bottom of page during edit mode. Coordinate with DS on correct implementation (currently built as full-page modals under the hood)

---

## UX Patterns

- **Toggles:** ON/OFF toggle placed on the **right-hand side** in settings
- **Color Picker (Advantage Pro Brokerage Branding):** No formal DS component. Follow existing ProDash pattern when migrating; add a11y contrast guardrails
- **Modals:** Use Haven/RPD DS modal components. Always show an unsaved changes confirmation modal when a user clicks Back without saving (during Seamless Transition)
- **Upsell Patterns:** Not yet standardized — check DS for existing benefit + CTA-to-upgrade patterns before creating custom layouts

---

## Useful Links

| Resource | URL |
|---|---|
| PRO Brand Guideline (Google Slides) | https://docs.google.com/presentation/d/1KBqmmoUwzw_kxu7ngpug88B2mkMmx3TkGvtNIWTr3JA |
| Haven Design System Overview (Confluence) | https://moveinc.atlassian.net/wiki/spaces/systems/pages/116913832239 |
| Harmony PRO → Haven Unification (Confluence) | https://moveinc.atlassian.net/wiki/spaces/systems/pages/117769306482 |
| ProDash → RPD Seamless Transition | https://moveinc.atlassian.net/wiki/spaces/PD/pages/118207348794 |
| RDC-UI Storybook | https://rdc-ui.x.realtor.com/rdc-ui/master/index.html |
| Realtor.com Brand Assets (DAM) | https://dam.gettyimages.com/realtor/brand-assets |
| Client x Design Systems (sync doc) | https://docs.google.com/document/d/1VL7ix4XqCelf190cFneGZxHVEYiPlt-n0hvseazj19E |

---

## Contacts

| Area | Owner |
|---|---|
| RPD / UWP Design | Pooja Sheth, Marivi Carlton |
| Profiles & Branding (RPD) | Laura Ho |
| Haven Design System | Bria Crain, Louise Hannah, Jarvis Moore |
| RDC-UI Engineering | Raymond Eng, Joyce Leung |
| Slack: Design Systems | `#design-systems` |
| Slack: RDC-UI | `#rdc-ui` |
| Slack: Agent Profiles & Branding | `#agent-profiles-branding` |
